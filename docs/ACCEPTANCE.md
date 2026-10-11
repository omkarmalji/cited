# Acceptance evidence

Verified locally on 2026-10-12, Node.js 22.16 and installed Chrome.

| Check | Evidence |
| --- | --- |
| Exact ThreeUI source | All 16 registered SHA-256 hashes match revision `fa86582fc870`; canvas rendered in Chrome |
| Production build | Next.js 16.4.0 compilation and TypeScript passed |
| Scoring and fact locks | 6 unit tests passed |
| Desktop and mobile flows | 8 Playwright tests passed against the production build |
| Accessibility | Lighthouse landing accessibility 100; axe found no violations in landing and zero-result report |
| Provider inference | Nano, Super, Ultra all returned validated JSON through Token Factory |
| Web retrieval | Tavily Search and Extract returned 5 fetched sources |
| Saved examples | 4 fictional businesses across US, UK, Australia, Canada; provider-free sample flow verified |

Browser coverage includes source-backed reports, 40 saved answers, unconfirmed hours rejected at approval, restored draft approved, published sample page, zero mentions, manual trend, reduced motion, keyboard skip link, and cross-session access denial.

Live acceptance uses London coffee, Rotterdam barbershop, New York bicycle shop. Results are pending; the script never approves or publishes their fixes. Supabase constraints, scheduler, magic-link email delivery and deployment verification remain pending. Public YouTube upload and feedback submission remain pending. This file is updated with observed results, not inferred completion.
