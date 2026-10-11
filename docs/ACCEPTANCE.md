# Acceptance evidence

Evidence collected on 2026-10-12, Node.js 22.16 and installed Chrome. Production origin: https://cited-lemon.vercel.app. Pending items below remain explicit.

| Check | Evidence |
| --- | --- |
| Exact ThreeUI source | All 16 registered SHA-256 hashes match revision `fa86582fc870`; canvas rendered in Chrome |
| Production build | Next.js 16.4.0 compilation and TypeScript passed |
| Scoring, fact locks and PostgreSQL invariants | 13 unit/database tests passed, including exclusive leases, stale-token rejection, owner transfer, quotas, completed counts, citations and weekly idempotency |
| Desktop and mobile flows | All 8 test cases passed against the public production origin: 6 initial cases plus 2 cross-session cases after correcting their hardcoded localhost URL |
| Accessibility | Production landing and sample report Lighthouse accessibility 100; production axe found no violations in landing and zero-result report. Lighthouse also identified a non-scoring citation name mismatch, corrected to include visible text in the accessible name |
| Provider inference | Nano, Super, Ultra all returned validated JSON through Token Factory |
| Web retrieval | Tavily Search and Extract returned 5 fetched sources |
| Saved examples | 4 fictional businesses across US, UK, Australia, Canada; provider-free sample flow verified |
| Deployment | Vercel production deployment READY; anonymous landing, design page and sample-report route returned HTTP 200 |
| Supabase | Dedicated Cited schema applied; all 10 tables RLS enabled; 4 examples seeded. Live constraints rejected empty/missing citations; anonymous records and privileged quota RPC denied |

Three real provider checks completed in the local persistence mode after retrying unfinished workers. London coffee: 10 of 40 mentions, 59 fetched sources; Rotterdam barbershop: 0 of 40, 72 sources; New York bicycle shop: 10 of 40, 77 sources. Each stored eight questions, five answers per question, cited findings and four unapproved fixes. These establish provider pipeline success; they do not establish deployed HTTP success. A separate production HTTP acceptance run is in progress.

Browser coverage includes source-backed reports, 40 saved answers, unconfirmed hours rejected at approval, restored draft approved, published sample page, zero mentions, manual trend, reduced motion, keyboard skip link, and cross-session access denial.

The refreshed narrated demo is exported as H264/AAC, 1440 by 900, 177.44 seconds. Its fictional example flow includes source evidence, rejected unsupported hours, explicit approval and the public sample page. Public YouTube publication is pending.

Remaining: production real-provider acceptance, activated/verified GitHub scheduler, custom SMTP and magic-link delivery, public YouTube upload, hackathon feedback submission. The real acceptance script never approves or publishes businesses' fixes. This file records observed results, not inferred completion.
