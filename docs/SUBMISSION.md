# Cited submission draft

Status: reviewable draft. No Devpost entry or feedback has been submitted. The owner explicitly requested no YouTube publishing for now; the completed video stays local. Custom SMTP delivery remains unverified.

## Links and track

- App: https://cited-lemon.vercel.app
- Public MIT repository: https://github.com/omkarmalji/cited
- Video: local narrated export, 177.44 seconds; public YouTube URL pending.
- Proposed track: Best Apps and Agents. Tavily Search and Extract are functional runtime integrations.

The [official submission rules](https://nebiusglobalaihackathon.devpost.com/rules) require a public video, an open-source repository, a working judge-accessible project and tool feedback. The [organizer's feedback guidance](https://nebiusglobalaihackathon.devpost.com/updates/46205-how-to-build-a-winning-project) requests concrete usage, onboarding observations, strengths and improvements. The public pages inspected did not expose a separate feedback-form URL; it may be a field in the signed-in Devpost submission flow.

## Elevator pitch

Customers ask AI who to visit. Does it say you? Cited helps local businesses understand whether source-backed AI recommendations name them, see cited evidence about competitors, and turn confirmed business details into fixes they approve.

## What it does

An owner enters a business name and city, checks the details found through web research, then receives eight customer discovery questions with five independent recommendations each. Results show observed counts and uncertainty, including useful niche opportunities when the business receives zero mentions. Fetched sources support every displayed finding.

The fix pack includes an AI-readable hosted page, a business-profile description/posts/Q&A pack, honest review-request messages and a printable QR card, plus schema markup and installation guidance. Unsupported edits are flagged. Approval unlocks final copying and public pages; Cited does not submit changes to other platforms automatically.

Four visibly fictional examples across four countries let judges explore the complete report, evidence and approval experience without signup or API keys. Live checks use the same product flow with real web retrieval. Scores describe Nemotron with web search, rather than live ChatGPT results.

## Technical implementation

All runtime inference goes through Nebius Token Factory's OpenAI-compatible API. NVIDIA Nemotron Nano generates the forty recommendation runs; Super resolves business facts, generates discovery questions, diagnoses rivals and independently checks the cited findings; Ultra drafts fixes and verifies them against the confirmed fact lock. JSON schemas, validation, bounded retries and token-usage logs make failures explicit.

Tavily Search and Extract provide the evidence in the live path. Supabase persists reports, fetched sources, per-run answers, approved outputs and trends. Database constraints enforce citations and completed counts. Row-level security, hashed anonymous identities, owner checks, atomic leases and optimistic updates protect reports. Weekly rechecks are opt-in, with a manual recheck and a protected GitHub-scheduled worker.

The responsive Next.js interface uses GSAP with reduced-motion support and the exact registered ThreeUI Predictive Arc hero source. Source hashes are verified. The Inter typography, violet surfaces and compact report rows reflect owner feedback.

## Impact and limitations

Local shop owners can act on evidence without learning SEO terminology or paying for an enterprise visibility platform. The workflow makes uncertainty visible and keeps publishing under owner control. It does not promise rankings, represent tests as live ChatGPT results, or infer unconfirmed business facts. Paid owner/agency tiers remain proposed pricing; no payments are collected.

Judge access is free. Maintaining it through December 15 depends on retaining hosting, database availability and provider credits. No automatic teardown is configured.

## Tool feedback draft

**Nebius Token Factory and NVIDIA models.** We used Nano, Super and Ultra for different stages of a source-backed business-discovery workflow. The authenticated model catalog exposed the exact IDs, and the OpenAI-compatible endpoint let one client serve all three roles. All three returned validated runtime JSON. Three real business checks in local persistence completed forty answers each, with fetched citations and unapproved fixes.

All three separate production HTTP acceptance checks also completed with no retries, storing forty answers and four verified drafts per business in Supabase. Their different mention counts demonstrate why Cited reports repeated observations rather than a fixed promise.

Structured output needed more than enabling JSON-object mode: we supplied the schema in the prompt, validated it with Zod, and retried invalid output once. Reasoning could exhaust a small completion budget before the final JSON, so we increased Nano's budget to 6,000 and Super/Ultra to 10,000 tokens while keeping user-visible answers short. We would value model-specific guidance on reasoning-token budgets and structured-output failure diagnostics. Independent entailment and fact checks remain necessary; model output alone is not our evidence gate.

Onboarding in this build involved adding server-only credentials and verifying the model catalog before making inference calls. We did not measure account signup or credit provisioning, so we cannot give firsthand feedback on those steps. We would use Token Factory again for this multi-model workflow, with validation and bounded retries retained.

**Nebius AI Cloud.** Not used. Hosting runs on Vercel, persistence on Supabase and scheduling through GitHub Actions; inference uses Token Factory. We cannot evaluate AI Cloud onboarding or performance from this project.

**Tavily.** Search plus extraction supplied fetched page excerpts, source URLs and timestamps for the main flow. Reusing each question's evidence across five runs avoided treating changing search results as model variability. Source quality still varies; every displayed diagnosis receives a separate entailment check, and retrieval failure stops the check instead of substituting demo data.

## Judge walkthrough

1. Open the app and choose Brew Lane Cafe from Try an example.
2. Expand a question to inspect five answers, then open a numbered source link.
3. Open the hosted-page draft; append an unconfirmed statement such as "Open 24 hours." Approval rejects it.
4. Restore the original draft, approve and open the public demonstration page.
5. Try Spoke Studio for a useful zero-mention report and manual trend.
6. For live inference, enter a real business and city, review the resolved details, confirm them and allow the forty-run check to finish. Keep generated fixes unapproved unless you own or represent that business.
