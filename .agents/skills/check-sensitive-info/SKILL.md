---
name: check-sensitive-info
description: Inspect committed code changes before PR review, PR merge, publishing, or handoff to check whether committed files include the user's personal information, personally identifying information, secrets, company-internal information, client information, or business-sensitive operational details. Use when the user asks for a privacy/sensitive-info check, pre-merge check, pre-PR check, leak check, or review of committed files for personal, company, or work-related content. Also use after code fixes when verifying that no private details were accidentally committed.
---

# Check Sensitive Info

## Overview

Check committed changes for accidental disclosure before PR merge or publication. Treat industry-specific public research as acceptable; focus on private or identifying details, company-internal material, client/work contents, credentials, and sensitive business context.

## Workflow

0. If creating or updating this skill itself, treat the skill files as public repository content and self-check them before committing. Do not include user names, local usernames, absolute home paths, real emails, real company/client names, or real operational details in this skill. Prefer generic placeholders and masked examples.
1. Confirm the git scope.
   - Prefer committed branch changes against the merge base of the default branch.
   - If the user gives a range, use that exact range.
   - If the repo has no clear upstream default branch, inspect `git branch -vv`, `git status --short --branch`, and recent commits before choosing a range.
2. Run the bundled scanner:
   ```bash
   python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py --base origin/main
   ```
   Use `--base origin/develop` or `--range <rev-range>` when that matches the repository.
3. Manually review the scanner output and the relevant diff hunks. Do not rely on the script alone.
4. Classify findings:
   - `BLOCKER`: secrets, credentials, IDs that can identify a person, patient/customer data, private addresses/phone numbers, non-public company or client details.
   - `REVIEW`: possible personal/work context that may be public or harmless, but needs user confirmation.
   - `INFO`: low-risk signals, examples, placeholders, public industry context, or already-redacted content.
5. Report concise findings in Japanese. Include file paths and line numbers when available, but mask the sensitive value. Do not paste full secrets, addresses, phone numbers, or personal identifiers.
6. If there are blockers, recommend removing the content and rewriting history before merge/publish if it has already been committed. Do not run destructive git commands unless the user explicitly asks.

## Scanner Usage

The scanner uses only Python standard libraries and local `git`.

Examples:

```bash
# Default branch comparison
python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py

# Explicit base branch
python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py --base origin/develop

# Explicit committed range
python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py --range main..HEAD

# JSON output for automation
python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py --json

# Self-check this skill before committing it to a public repository
python /path/to/check-sensitive-info/scripts/scan_sensitive_info.py --paths .agents/skills/check-sensitive-info --fail-on never
```

Exit codes:

- `0`: no blocker found.
- `1`: blocker found.
- `2`: review-level findings found and `--fail-on review` was requested.

## Manual Checks

Always add a human pass for:

- This skill's own files before committing them to a public repository.
- New report data, fixture data, docs, markdown, CSV/JSON, config, screenshots, or generated output.
- Names, email addresses, phone numbers, addresses, birthdays, employee/customer/patient identifiers.
- Company names, internal project names, client names, meeting notes, financials, pricing, contracts, hiring, personnel, Slack/email excerpts, issue contents, and operational details.
- Secrets and access material such as API keys, tokens, private keys, cookies, `.env` values, service account JSON, SSH keys, and GitHub/OpenAI/Slack tokens.

See `references/signals.md` for detection categories and reporting rules.
