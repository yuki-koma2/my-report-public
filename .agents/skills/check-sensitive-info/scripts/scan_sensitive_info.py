#!/usr/bin/env python3
"""Scan committed git changes for sensitive personal, company, and secret signals."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable


TEXT_EXTENSIONS = {
    ".c",
    ".cc",
    ".conf",
    ".config",
    ".csv",
    ".css",
    ".env",
    ".go",
    ".html",
    ".ini",
    ".java",
    ".js",
    ".json",
    ".jsx",
    ".md",
    ".mdx",
    ".php",
    ".properties",
    ".py",
    ".rb",
    ".rs",
    ".scss",
    ".sh",
    ".sql",
    ".svg",
    ".toml",
    ".ts",
    ".tsx",
    ".txt",
    ".vue",
    ".xml",
    ".yaml",
    ".yml",
}

PLACEHOLDER_TERMS = re.compile(
    r"example\.(?:com|org|net|jp)|localhost|127\.0\.0\.1|dummy|sample|placeholder|redacted|"
    r"山田太郎|田中太郎|Taro Yamada|John Doe|Jane Doe",
    re.IGNORECASE,
)


@dataclass
class PatternRule:
    category: str
    severity: str
    regex: re.Pattern[str]
    reason: str


@dataclass
class Finding:
    severity: str
    category: str
    path: str
    line: int | None
    source: str
    reason: str
    match: str
    excerpt: str


RULES = [
    PatternRule("secret", "BLOCKER", re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----"), "private key material"),
    PatternRule("secret", "BLOCKER", re.compile(r"\b(?:sk|sk-proj)-[A-Za-z0-9_-]{20,}\b"), "OpenAI-style API key"),
    PatternRule("secret", "BLOCKER", re.compile(r"\bgh[pousr]_[A-Za-z0-9_]{20,}\b"), "GitHub token"),
    PatternRule("secret", "BLOCKER", re.compile(r"\bxox[baprs]-[A-Za-z0-9-]{20,}\b"), "Slack token"),
    PatternRule("secret", "BLOCKER", re.compile(r"\bAKIA[0-9A-Z]{16}\b"), "AWS access key id"),
    PatternRule("secret", "BLOCKER", re.compile(r"(?i)['\"]?\b(?:api[_-]?key|access[_-]?token|secret|password|passwd|cookie|session[_-]?id)\b['\"]?\s*[:=]\s*['\"][^'\"\s]{8,}['\"]"), "credential-like assignment"),
    PatternRule("personal", "REVIEW", re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", re.IGNORECASE), "email address"),
    PatternRule("personal", "REVIEW", re.compile(r"(?:\+81[- ]?)?0\d{1,4}[- ]?\d{1,4}[- ]?\d{3,4}\b"), "phone number"),
    PatternRule("personal", "REVIEW", re.compile(r"〒?\d{3}-\d{4}"), "Japanese postal code"),
    PatternRule("personal", "REVIEW", re.compile(r"\b\d{4}[- ]?\d{4}[- ]?\d{4}\b"), "12-digit personal identifier shape"),
    PatternRule("personal", "REVIEW", re.compile(r"(?:氏名|本名|住所|生年月日|患者ID|カルテ番号|社員番号|顧客ID|customer_id|patient_id|employee_id)\s*[:：=]", re.IGNORECASE), "personal identifier label"),
    PatternRule("company", "REVIEW", re.compile(r"(?:社外秘|部外秘|機密|\bconfidential\b|\binternal only\b|\bNDA\b)", re.IGNORECASE), "confidentiality marker"),
    PatternRule("company", "REVIEW", re.compile(r"(?:顧客名|取引先|商談|見積|請求|契約書|稟議|売上|粗利|単価|予算|人事評価|給与|採用候補者|候補者情報|CRM|Slack|議事録)"), "company or work-sensitive term"),
]


def run_git(args: list[str], cwd: Path) -> str:
    completed = subprocess.run(
        ["git", *args],
        cwd=cwd,
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    return completed.stdout


def repo_root() -> Path:
    try:
        return Path(run_git(["rev-parse", "--show-toplevel"], Path.cwd()).strip())
    except subprocess.CalledProcessError as exc:
        print(f"error: not a git repository: {exc.stderr.strip()}", file=sys.stderr)
        sys.exit(3)


def discover_base(cwd: Path) -> str | None:
    candidates: list[str] = []
    try:
        head = run_git(["symbolic-ref", "--quiet", "--short", "refs/remotes/origin/HEAD"], cwd).strip()
        if head:
            candidates.append(head)
            local_head = head.replace("origin/", "", 1)
            if local_head != head:
                candidates.append(local_head)
    except subprocess.CalledProcessError:
        pass
    candidates.extend(["origin/main", "origin/develop", "origin/master", "main", "develop", "master"])
    for candidate in candidates:
        try:
            run_git(["rev-parse", "--verify", candidate], cwd)
            return candidate
        except subprocess.CalledProcessError:
            continue
    return None


def build_range(cwd: Path, explicit_range: str | None, base: str | None) -> tuple[str, str]:
    if explicit_range:
        return explicit_range, f"range {explicit_range}"
    selected_base = base or discover_base(cwd)
    if selected_base:
        try:
            merge_base = run_git(["merge-base", "HEAD", selected_base], cwd).strip()
            return f"{merge_base}...HEAD", f"merge-base({selected_base}, HEAD)...HEAD"
        except subprocess.CalledProcessError:
            return f"{selected_base}...HEAD", f"{selected_base}...HEAD"
    return "HEAD~1..HEAD", "HEAD~1..HEAD fallback"


def changed_files(cwd: Path, rev_range: str) -> list[str]:
    try:
        raw = run_git(["diff", "--name-status", "--diff-filter=ACMR", rev_range], cwd)
    except subprocess.CalledProcessError as exc:
        print(f"error: failed to list changed files: {exc.stderr.strip()}", file=sys.stderr)
        sys.exit(3)
    paths: list[str] = []
    for line in raw.splitlines():
        parts = line.split("\t")
        if not parts:
            continue
        path = parts[-1]
        if path and path not in paths:
            paths.append(path)
    return paths


def is_text_path(path: Path) -> bool:
    if path.suffix.lower() in TEXT_EXTENSIONS:
        return True
    if path.name.startswith(".env"):
        return True
    return path.name in {".gitignore", "Dockerfile", "Makefile"}


def read_text(path: Path, max_bytes: int) -> str | None:
    try:
        with path.open("rb") as file:
            data = file.read(max_bytes)
    except OSError:
        return None
    if b"\x00" in data:
        return None
    try:
        return data.decode("utf-8")
    except UnicodeDecodeError:
        try:
            return data.decode("shift_jis")
        except UnicodeDecodeError:
            return None


def added_lines(cwd: Path, rev_range: str, path: str) -> Iterable[tuple[int | None, str]]:
    try:
        raw = run_git(["diff", "--unified=0", "--no-ext-diff", rev_range, "--", path], cwd)
    except subprocess.CalledProcessError:
        return
    new_line: int | None = None
    for line in raw.splitlines():
        if line.startswith("@@"):
            match = re.search(r"\+(\d+)(?:,(\d+))?", line)
            new_line = int(match.group(1)) if match else None
            continue
        if new_line is None:
            continue
        if line.startswith("+"):
            yield new_line, line[1:]
            new_line += 1
        elif line.startswith("-"):
            continue
        else:
            new_line += 1


def mask_value(value: str) -> str:
    if len(value) <= 4:
        return "*" * len(value)
    if "@" in value:
        left, _, right = value.partition("@")
        return f"{left[:2]}***@{right[:2]}***"
    if len(value) <= 12:
        return f"{value[:2]}***{value[-2:]}"
    return f"{value[:4]}...{value[-4:]}"


def compact_excerpt(line: str, match_text: str) -> str:
    stripped = " ".join(line.strip().split())
    masked = stripped.replace(match_text, mask_value(match_text))
    return masked[:180]


def should_downgrade(line: str, category: str) -> bool:
    return category in {"personal", "company"} and bool(PLACEHOLDER_TERMS.search(line))


def scan_line(path: str, line_no: int | None, source: str, line: str) -> list[Finding]:
    findings: list[Finding] = []
    for rule in RULES:
        for match in rule.regex.finditer(line):
            severity = "INFO" if should_downgrade(line, rule.category) else rule.severity
            findings.append(
                Finding(
                    severity=severity,
                    category=rule.category,
                    path=path,
                    line=line_no,
                    source=source,
                    reason=rule.reason,
                    match=mask_value(match.group(0)),
                    excerpt=compact_excerpt(line, match.group(0)),
                )
            )
    return findings


def scan_file_content(root: Path, rel_path: str, max_bytes: int) -> list[Finding]:
    abs_path = root / rel_path
    if not abs_path.exists() or not abs_path.is_file() or not is_text_path(abs_path):
        return []
    text = read_text(abs_path, max_bytes)
    if text is None:
        return []
    findings: list[Finding] = []
    for index, line in enumerate(text.splitlines(), start=1):
        findings.extend(scan_line(rel_path, index, "file", line))
    return findings


def expand_paths(root: Path, paths: list[str]) -> list[str]:
    result: list[str] = []
    for raw_path in paths:
        candidate = (root / raw_path).resolve()
        try:
            candidate.relative_to(root)
        except ValueError:
            continue
        if candidate.is_dir():
            for child in sorted(candidate.rglob("*")):
                if child.is_file():
                    rel = str(child.relative_to(root))
                    parts = Path(rel).parts
                    if ".git" in parts or "node_modules" in parts or "venv" in parts or ".venv" in parts or "__pycache__" in parts:
                        continue
                    if rel not in result:
                        result.append(rel)
        elif candidate.is_file():
            rel = str(candidate.relative_to(root))
            if rel not in result:
                result.append(rel)
    return result


def dedupe_findings(findings: Iterable[Finding]) -> list[Finding]:
    seen: set[tuple[str, int | None, str, str, str]] = set()
    result: list[Finding] = []
    for finding in findings:
        key = (finding.path, finding.line, finding.source, finding.category, finding.excerpt)
        if key in seen:
            continue
        seen.add(key)
        result.append(finding)
    return result


def print_text_report(scope: str, files: list[str], findings: list[Finding]) -> None:
    print("Sensitive information scan")
    print(f"Scope: {scope}")
    print(f"Changed files scanned: {len(files)}")
    if not findings:
        print("Result: no sensitive-info signals found by the scanner.")
        return
    order = {"BLOCKER": 0, "REVIEW": 1, "INFO": 2}
    for finding in sorted(findings, key=lambda f: (order.get(f.severity, 9), f.path, f.line or 0)):
        location = f"{finding.path}:{finding.line}" if finding.line else finding.path
        print(f"- [{finding.severity}] {location} ({finding.source}, {finding.category}) {finding.reason}: {finding.excerpt}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", help="Base branch/ref to compare against, e.g. origin/main")
    parser.add_argument("--range", dest="rev_range", help="Explicit git revision range, e.g. main..HEAD")
    parser.add_argument("--paths", nargs="+", help="Scan specific files or directories directly, including untracked files")
    parser.add_argument("--json", action="store_true", help="Emit JSON")
    parser.add_argument("--max-bytes", type=int, default=1_000_000, help="Maximum bytes to scan per changed file")
    parser.add_argument("--fail-on", choices=["blocker", "review", "never"], default="blocker")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = repo_root()
    os.chdir(root)
    if args.paths:
        rev_range = None
        scope = "paths " + ", ".join(args.paths)
        files = expand_paths(root, args.paths)
    else:
        rev_range, scope = build_range(root, args.rev_range, args.base)
        files = changed_files(root, rev_range)
    findings: list[Finding] = []
    for rel_path in files:
        if rev_range:
            for line_no, line in added_lines(root, rev_range, rel_path):
                findings.extend(scan_line(rel_path, line_no, "diff", line))
        findings.extend(scan_file_content(root, rel_path, args.max_bytes))
    findings = dedupe_findings(findings)
    if args.json:
        print(json.dumps({"scope": scope, "files": files, "findings": [asdict(f) for f in findings]}, ensure_ascii=False, indent=2))
    else:
        print_text_report(scope, files, findings)
    has_blocker = any(f.severity == "BLOCKER" for f in findings)
    has_review = any(f.severity == "REVIEW" for f in findings)
    if args.fail_on == "never":
        return 0
    if has_blocker:
        return 1
    if args.fail_on == "review" and has_review:
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
