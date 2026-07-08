# Sensitive Information Signals

## Treat As Blockers

- Live credentials or credential-shaped values: API keys, OAuth tokens, GitHub tokens, Slack tokens, OpenAI keys, AWS keys, private keys, cookies, session IDs, service account JSON.
- Personal identifying information: real names combined with contact details, private email addresses, phone numbers, home addresses, birthdays, patient IDs, customer IDs, employee IDs, account numbers, medical record numbers, My Number-style identifiers.
- Company-internal material: `社外秘`, `部外秘`, `confidential`, `internal only`, unreleased plans, client names, meeting notes, sales pipeline, pricing, costs, budgets, revenue, contracts, invoices, personnel details, performance reviews, hiring candidate information.
- Work content copied from private systems: Slack, email, CRM, tickets, calendars, meeting transcripts, private docs, internal dashboards.

## Usually Review, Not Immediate Blocker

- Public organization names, public URLs, public press releases, public policy documents, public reports, public company facts.
- Industry-specific content such as medical, care, AI, SaaS, finance, or government topics when it is clearly from public sources.
- Example values that use reserved domains (`example.com`, `example.jp`, `localhost`) or obvious placeholders (`山田太郎`, `Taro Yamada`, `dummy`, `sample`, `redacted`), unless they sit next to real internal context.
- Aggregated business metrics with no company/client/person linkage.

## Reporting Rules

- Mask sensitive values in the answer. Show enough shape to support remediation, for example `masked-email`, `masked-phone`, `masked-token`.
- Prefer file path, line number, category, and why it matters.
- Distinguish "found in added diff line" from "found somewhere in a changed file".
- Say "業界の偏り自体は問題ではない" when the only signal is a public industry topic.
- Do not claim absence with absolute certainty. Say the committed diff and changed files were checked with the stated method.
