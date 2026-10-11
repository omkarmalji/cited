1. What Cited is

Cited tells a local small business whether AI assistants recommend them, shows why a rival wins with sources, and generates fixes the owner approves. Think "Profound for small businesses": flat price, self-serve, honest scores, plain language.

Target user: a shop owner (cafe, salon, clinic, repair shop) who has never heard of SEO. Secondary user: a small marketing agency running this for many clients (agency mode, post-hackathon).

One-line pitch: Customers ask AI who to visit. Does it say you?

Honesty rules (non negotiable, enforce in code and copy)
No source, no claim. Every finding shown to the user must carry at least one numbered citation chip linking to a real fetched URL. If the pipeline cannot cite it, it is not shown.
Repeat, then report. Every question is run 5 times. Scores are "2 of 5 runs", shown as five dots. Never a single confident number.
Fact lock. Generated content may only use facts the owner confirmed on the "Is this you?" screen. Never invent hours, prices, awards or reviews.
Owner approves everything. Nothing is published, copied out as final, or sent anywhere without an explicit Approve tap.
Say what is unlikely. Each question is labeled Winnable now, In about 3 months, Unlikely, or Needs your check.
Label the method. Footer and report must say: "Scores from Nemotron plus web search. Not live ChatGPT results."
Sample or demo data is always badged "Sample data". Use fictional businesses only (for example "Brew Lane Cafe, Riverside").
2. Hackathon requirements (the build must satisfy all of these)
Runtime AI calls go through Nebius Token Factory (OpenAI-compatible API, [CHECK DOCS] for base URL, auth header and exact model IDs). At least one NVIDIA open model (Nemotron) must be called at runtime. Optionally run scheduled jobs on Nebius AI Cloud (Serverless Jobs) [CHECK DOCS].
Tavily is called at runtime for web search and page extraction (targets the "Best Use of Tavily" prize). Needs a real call in the main flow, not mocked.
Deadline: Oct 30, 2026, 10:00am PDT.
Submission needs: public GitHub repo with a visible open-source license (use MIT), a README that highlights Nemotron and Token Factory usage, a live demo URL that stays free for judges through Dec 15, a public YouTube video under 3 minutes, and the feedback form.
Judging (equal weight): Technological Implementation, Design, Potential Impact, Quality of Idea. Likely track: Best Apps and Agents.
Judges are not in India and will not have a real business to test. So: ship 3 to 5 example businesses in different countries with saved results ("Try an example") plus a live "Run free check" path that works for any business name and city worldwide.
3. Model roles (via Token Factory, IDs in env vars)
Role	Model tier	Used for
Fast	Nemotron Nano	The many cheap prompt runs (5 per question), classification, mention detection
Reasoner	Nemotron Super	Diagnosis: why rivals win, extraction of facts from sources
Writer	Nemotron Ultra	Fix plan, content writing, verification pass against the fact lock

Env vars: NEBIUS_API_KEY, NEBIUS_BASE_URL [CHECK DOCS], MODEL_FAST, MODEL_REASON, MODEL_WRITE [CHECK DOCS for exact IDs], TAVILY_API_KEY. Wrap model calls in one small client module with retries, timeouts, JSON-mode parsing and a usage log. Make it trivial to swap model IDs.

4. Product flow and features
4.1 Landing page (/)

Black page, headline "Customers ask AI who to visit. Does it say you?", inputs Business name and City, primary button "Run free check", sample report card (badged Sample data), "How it works" (3 steps), "The fix pack" (4 cards), "Honest by design" (3 principles), Pricing (Free check, Owner [YOUR PRICE], Agency [YOUR PRICE]), footer disclaimer. Also an "Try an example" row with the saved example businesses. A Google Maps link field is optional and secondary because links are fragile; name plus city is the main input.

4.2 Check flow
Resolve business. Tavily search for the business in the city, extract name, address, hours, category, website, "known for". Show on "Is this you?": facts with Yes this is me / Fix a detail. Confirmed facts become the fact lock stored with the report.
Generate questions. Writer or Reasoner model produces 8 customer questions for the category and city, mixing broad ("best cafe in X") and niche ("quiet cafe open late near X"). Niche questions are where small shops can win.
Run visibility. For each question: Tavily search (sources AI would read) then Fast model answers the question 5 times using those sources, as an assistant recommending businesses. Detect whether the business is named in each run. Store counts and per-run text.
Diagnose. Reasoner model compares the winners' pages and the owner's footprint; output reasons with citation ids tied to fetched URLs. Reject any reason without a citation.
Classify each question: Winnable now, In about 3 months, Unlikely, Needs your check (heuristics plus model judgement, documented in code).
Fix pack. Writer model drafts, constrained by the fact lock, then a verification pass flags any sentence containing a fact not in the lock:
AI-readable hosted page (public URL /p/[slug], includes JSON-LD LocalBusiness and FAQ schema)
Google Business Profile description, 3 posts, 5 Q&A pairs
Review request messages (SMS, WhatsApp style, email) plus a printable QR card to the review link
Schema markup snippet for the owner's own site with plain-language install steps Each item has Edit and Approve. Approved items become copyable/publishable; the hosted page goes live only after approval.
Weekly recheck. Scheduled job reruns the questions and stores a trend ("Named in 9 of 40 runs, up 3"). Hackathon version can run via Nebius Serverless Jobs or a cron route [CHECK DOCS]; keep a manual "Recheck now" button either way.
4.3 Post-hackathon backlog (do not build now, keep the code ready for it)

Blog posts for niche questions; GitHub integration that opens a pull request (never direct edits) on a site repo; agency white-label portal and client switcher; lead tracking.

5. Screens to build
Landing (above).
Check in progress: live steps list (Finding your business, Asking the questions, Reading sources, Writing fixes), each with a status. Stream progress with server-sent events or polling.
Is this you?: card with Address, Hours, Known for, buttons Yes this is me / Fix a detail (inline edit).
Report: header with business name, "Checked today, 8 questions, 5 runs each", a summary tile "Named in X of 40 runs" and trend; list of question rows (question text, five dots, "2 of 5", status badge); "Why [rival] wins" panel with prose, numbered citation chips and a source list; Your fix pack list with Edit and Approve per item; footer honesty note.
Fix editor: edit text, see which confirmed facts it uses, Approve.
Public hosted page /p/[slug]: clean, fast, server-rendered, JSON-LD.
Examples gallery and Pricing can live on the landing page.

Layout: single column up to 1040px content width for app screens, 1200px for landing. Fully responsive; the 16px gutter minimum on mobile; no horizontal scroll.

6. Design system (implement exactly; v2, based on the owner's design.md reference)

Feel: black velvet with one violet. Pure black canvas, 1px graphite hairline borders, white-on-black type, monospace receipts. Anti-decorative: no gradients, glows or colour washes on page or section backgrounds. Do not use any third-party brand name or logo; only the visual language is borrowed.

Rules (Do)
Page canvas is pure 
#000000. Never off-black.
Separate every layer with a 1px 
#292d30 border. No drop shadows for elevation.
Buttons are ghost: transparent fill, 1px border, white text, 6px radius. The "strong" variant (Approve, primary CTA) has a white border. Hover raises border to white. Never filled colourful buttons.
Two radii only per component family: 6px for buttons, inputs, badges, citation chips; 16px for cards and code windows; 24px for large panels; 9999px only for the announcement pill.
Violet 
#9281f7 is the single brand accent and behaves like syntax highlighting: citation chips, source ids, code strings. Never a large decorative heading colour.
Status colours (green, amber, red, blue) mark data and status only, always paired with text.
Use the mono font for citations, run counts, source URLs, receipts and code. Inter for prose and UI chrome.
Tokens
css
:root{
  --color-void-black:#000000;        /* page and card surface */
  --color-graphite-hairline:#292d30; /* 1px borders, dividers */
  --color-surface-lift:#0b0e14;      /* overlays, elevated panels */
  --color-white:#ffffff;             /* headings, button labels */
  --color-bone-white:#f0f0f0;        /* body text */
  --color-ash-gray:#a1a4a5;          /* muted text, metadata */
  --color-smoke-gray:#abafb4;        /* links, captions */
  --color-iron:#6e727a;              /* empty run dots, disabled */
  --color-charcoal:#464a4d;          /* traffic-light dots only, never meaningful text */
  --color-iris-violet:#9281f7;       /* citations, ids, code strings */
  --color-iris-violet-glow:#baa7ff;
  --gradient-iris-violet:linear-gradient(to right bottom in oklab, rgb(146,129,247) 0%, rgb(154,84,220) 100%); /* logo container only */
  --color-signal-blue:#3b9eff;       /* focus ring */
  --color-sky-blue:#70b8ff;          /* needs your check */
  --color-pulse-green:#3ad389;       /* filled run dots, winnable, approved */
  --color-alarm-red:#ff9592;         /* unlikely, errors */
  --color-crimson:#ff6465;
  --color-amber:#ffca16;             /* in about 3 months, sample data */

  --font-inter:'Inter',ui-sans-serif,system-ui,sans-serif;
  --font-display:'Playfair Display','Domaine',Georgia,serif;  /* stand-in for Domaine */
  --font-mono:'JetBrains Mono','Commit Mono',ui-monospace,monospace; /* stand-in for Commit Mono */

  --text-caption:12px;   --leading-caption:1.33;
  --text-body-sm:14px;   --leading-body-sm:1.43;
  --text-body:16px;      --leading-body:1.5;
  --text-subheading:20px;--leading-subheading:1.3;
  --text-heading-sm:24px;--leading-heading-sm:1.5;
  --text-heading:56px;   --leading-heading:1.2;  --tracking-heading:-0.05em; /* Inter 400 */
  --text-heading-lg:77px;--leading-heading-lg:1; --tracking-heading-lg:-0.01em; /* display serif */
  --text-display:96px;   --leading-display:1;    --tracking-display:-0.01em;   /* display serif, hero only */

  --spacing-unit:4px; /* scale: 4 8 12 16 20 24 28 32 40 48 64 80 96 104 144 */
  --page-max-width:1200px; --section-gap:96px; --card-padding:32px; --element-gap:16px;
  --radius-buttons:6px; --radius-inputs:6px; --radius-badges:6px;
  --radius-cards:16px; --radius-large-panels:24px;
}

Fonts: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400&display=swap (use next/font in the Next.js build). The originals (Domaine, aBC Favorit, Commit Mono) are commercial; swap in only if licensed.

Signature components
Ghost button: transparent, 1px graphite border, white text 16px/500, 6px radius, min height 48px (44px in dense cards). Strong variant: white border. Disabled: iron text. Hover transition 150ms ease-out.
Announcement pill: transparent, 1px graphite border, bone text 14px, 9999px radius, 6px 12px padding, trailing chevron.
Input: black fill, 1px graphite border, 6px radius, 48px height, bone text, ash placeholder, white border on focus. Always a real <label>.
Card: black, 1px graphite border, 16px radius, 32px padding (24px dense), no shadow.
Report receipt window: black, 1px graphite border, 16px radius, header row with three 8px charcoal traffic dots and a mono filename, body in mono 14px/1.7. Labels ash, values bone, successes green, errors red, identifiers violet.
Run dots: five circles. Filled 
#3ad389 when the business was named, hollow with 2px 
#6e727a stroke when not. Paired with mono "2 of 5" and aria-label="Recommended in 2 of 5 runs".
Status badge: inline, 1px graphite border, 6px radius, mono 12px bone text, 6px coloured dot. Winnable now (green), In about 3 months (amber), Unlikely (red), Needs your check (blue), Approved (green), Sample data (amber).
Citation chip: mono 12px violet text, 1px graphite border, 6px radius, shows number then optional domain; opens the source in a new tab.
Question row: card with question text left; run dots, count and status badge right; wraps on mobile.
Fix pack item: card with title, ash description, ghost Edit and strong Approve; approved state shows an Approved badge.
Wordmark: 32px rounded-square container (10px radius) filled with the violet to magenta gradient, five white dots inside (four filled, one hollow), then "Cited" in Inter 600. This is the only chromatic surface in the product.
Footer: single hairline top border, mono honesty line left, Privacy and Terms right.
Focus ring on every interactive element: 2px 
#3b9eff, 2px offset.

Hero: Display serif 77 to 96px, tracking -0.01em, line-height 1, white, on flat black. Section headlines: Inter 56px weight 400, tracking -0.05em. No dark mode toggle (the product is dark only). Build a /design route that renders colours, type, spacing, radii and every component above.

Reference assets in this project

The Claude Design canvas holds four boards: Design system, Landing page, Landing image (1600x900 hero for download), Report screen. Match them. If the exported landing image PNG is placed at public/og/landing.png, use it as the Open Graph image.

7. Suggested stack
Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel
Supabase (Postgres + Auth) for storage; magic-link login only after the first report (the free check must work without signup)
OpenAI-compatible SDK pointed at Token Factory; Tavily JS SDK
Background work: start with Next.js route handlers plus a queue table and a worker route; move rescans to Nebius Serverless Jobs if time allows [CHECK DOCS]
Zod for every model output schema; retry once on invalid JSON
Playwright smoke test for the example flow; Vitest for scoring and fact lock logic
Rate limit the free check (per IP and per day) so judges cannot burn the token budget; cache by business+city for 24h
Data model (Postgres)

businesses(id, name, city, country, category, website, facts jsonb, confirmed_at) checks(id, business_id, created_at, status, summary jsonb) questions(id, check_id, text, kind, status_label) runs(id, question_id, run_index, mentioned bool, answer text, model) sources(id, check_id, url, title, domain, fetched_at, excerpt) findings(id, check_id, kind, body, citation_ids int[]) (constraint: citation_ids not empty) fixes(id, check_id, type, title, body, status, approved_at, slug) (status: draft, edited, approved) examples(id, business_id, check_id, label) for saved demo results

API routes

POST /api/resolve (name, city) -> candidate facts POST /api/checks (business id, confirmed facts) -> check id, starts pipeline GET /api/checks/[id] and /events (progress stream) POST /api/fixes/[id]/approve, PATCH /api/fixes/[id] POST /api/checks/[id]/recheck GET /p/[slug] public hosted page

8. Quality bar and acceptance checks
The full flow works end to end on at least three different real city and business-type combinations outside India, and on saved examples without any API keys (examples load from the database).
A report with zero mentions still renders a useful result (honest "Unlikely" labels plus the winnable niche questions).
Fact lock test: a fix containing an unconfirmed fact is rejected or flagged in verification.
Every finding row has at least one citation, enforced by a DB constraint and a test.
Lighthouse accessibility 95+, keyboard-only usable, no colour-only status.
No em dashes anywhere in UI copy or README.
9. Repo deliverables
LICENSE (MIT), README.md with: what Cited is, a section "How we use Nemotron and Nebius Token Factory" (model roles table above), a section "How we use Tavily", architecture diagram, run instructions, env var list, live demo link, video link, honesty rules.
.env.example, docs/ARCHITECTURE.md, docs/DEMO_SCRIPT.md (3 minute video script: problem 20s, live check of an example 60s, report and why-rival 40s, fix approve and hosted page 40s, tech and impact 20s).
10. Phased plan (about 19 days to Oct 30)
Days 1 to 2: repo, Next.js, tokens, /design route, landing page, deploy to Vercel, Token Factory and Tavily smoke tests (log exact model IDs found in docs).
Days 3 to 6: resolve + "Is this you?" + fact lock; question generation; runs pipeline (5 per question) with Zod schemas; progress UI.
Days 7 to 9: diagnosis with citations; classification; report screen with run dots, badges, citation chips.
Days 10 to 13: fix pack generators + verification pass; editor; approve flow; hosted page with JSON-LD; QR card.
Days 14 to 15: saved examples (3 to 5 countries), weekly recheck + trend, rate limiting and caching.
Days 16 to 17: polish, accessibility, mobile pass, error and empty states, README, architecture doc.
Day 18: record the video, test the live demo from a clean browser, fill the feedback form.
Day 19: buffer and submission (aim to submit a day early).
11. First actions for you (the coding agent)
Scaffold the repo and commit the tokens and /design route.
Read the Nebius Token Factory and Tavily docs, then write docs/INTEGRATIONS.md with the verified base URL, auth, and Nemotron model IDs. Do not guess them.
Build the landing page to match section 4.1 and 6, deploy, then continue with the phases above.
After each phase, summarize what works, what is stubbed, and what you need from me.