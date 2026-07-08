---
name: report-review-self-check
description: Use after implementing or updating a report in this repository, before final verification, commit, push, or PR updates. Checks report data, dates, sources, dashboard counts, wording, and UI/test expectations against prior review findings so Codex can catch recurring report-quality issues proactively. Update this skill whenever a new valid review comment reveals a reusable self-check.
---

# Report Review Self Check

Use this skill after changing report content or report rendering in `my-report-public`, before final tests and before publishing the branch. The goal is to catch review issues that have already happened once.

## Workflow

1. Identify changed report files and related tests with `git diff --name-only`.
2. Read the changed report object files under `src/app/reportData/`.
3. Compare report metadata, `sources`, `dashboardMetrics`, `topicCards`, `actionCards`, and `sections` against the checks below.
4. Add or update tests in `test/` for every corrected expectation that can regress.
5. Run at least `npm test` and `npm run build` after fixes.

## Always Check

- `publishedAt` must be the actual public date for the article in the branch being published. Do not set a future date just because the report period ends then.
- `checkedAt` must be the actual date the sources were checked. Do not set a future confirmation date.
- Every source must have `checkedAt`. Use `publishedAt` only for actual publication dates, not page update dates.
- If a topic uses an update date, put it on the topic card with `dateLabel: "更新日"` or equivalent. Do not make the source card display it as `公開日`.
- Dashboard metrics must match the data readers can see. Count `sources` by displayed `type`, and do not include `対象期間外の参考情報` in a metric labeled only `一次情報`.
- Empty categories must explicitly say `今週確認できた重要な新規情報なし` and must not be filled by speculation.
- If the report says a detail is unverified or analysis is未実施, avoid wording elsewhere that implies the analysis is complete.
- When a source is a feed, news article, or secondary report, keep the source type aligned with how the text describes it.
- `dist/` must not be edited directly or included in the PR.

## Review-Derived Checks

Apply these checks to new or updated reports. Add future valid review findings here as short, testable bullets.

- Future date check: If the branch may merge before a report period end date, either use the actual publish/check date or keep the report hidden until that date. Avoid publishing a report with future `publishedAt` or `checkedAt`.
- Source count check: If `dashboardMetrics` says `一次情報` is `N本`, verify `report.sources.filter((source) => source.type === "一次情報").length === N`.
- Update date check: For pages such as PMH where an existing page or attached list was updated, do not set `source.publishedAt` to the update date unless the UI can truthfully label it as an update. Prefer topic-level `dateLabel: "更新日"` and source-level `checkedAt`.
- Unanalyzed-diff check: If PMH, RSS, Excel, or PDF diff analysis is未実施, use wording such as `リスト更新を確認` or `差分分析は未実施`. Do not claim `増加`, `拡大`, `減少`, or `新規追加` unless the diff was actually performed.

## Suggested Search Patterns

Run targeted searches after edits:

```bash
rg -n "publishedAt:|checkedAt:|一次情報|対象期間外の参考情報|更新日|増加|拡大|未実施|今週確認できた重要な新規情報なし" src/app/reportData test
```

For a single report file, narrow the search to that file and its tests.

## Test Expectations

When fixing a review-derived issue, encode the regression in tests where practical:

- Assert the report-level `publishedAt` and `checkedAt`.
- Assert `sources.every((source) => source.checkedAt === "...")` when all sources were checked together.
- Assert source counts for dashboard metrics that display counts.
- Assert an update-date topic has `dateLabel: "更新日"` and the source lacks misleading `publishedAt`.
- Assert forbidden wording is absent when analysis was未実施.
