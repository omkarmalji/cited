# Product audit: first-time owner and hackathon judge

Date: 2026-10-16. Based on the current code, desktop/mobile browser walkthroughs, fictional publish-flow tests, and a real Manohar Dairy, Bhopal check. Retention effects below are design hypotheses, not measured conversion improvements.

## What a first-time owner encounters

The product has a useful destination: a sourced answer followed by a concrete draft the owner can approve. The old route made users pay the full research cost before seeing that value. It also asked for trust during a silent lookup, a separate confirmation page, and a long all-or-nothing report.

| Friction                                                          | Why it matters                                                                     | Implemented response                                                                                                    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| A click leaves a button spinning during lookup                    | The user cannot tell whether anything useful is happening                          | Immediate on-page dialog, named business, real elapsed time, lookup explanation and recovery                            |
| The actual entry form was below several sections                  | Interested visitors must keep searching for the promised action                    | Form moved into the hero; later CTAs return to that same entry                                                          |
| All new users enter a forty-answer investigation                  | Effort arrives before value                                                        | Default free quick check: five broad searches, one answer each                                                          |
| Questions contain streets, building names and stacked specialties | Results feel engineered to find the target rather than representative of discovery | Category-and-city templates for quick checks; five broad and three short specialty questions for optional deep research |
| One slow worker request hides progress                            | Finishing work is invisible, encouraging abandonment                               | Independent progress polling plus durable checkpoints; answers and citations appear as they finish                      |
| Retry risks repeating finished work                               | Users fear wasting time or losing results                                          | Persist successful answers and retry only missing runs                                                                  |
| A completed score does not make the next action obvious           | Curiosity ends without product value                                               | Completion highlights a fix-pack review; report preserves its clear next-move link                                      |
| A single answer looks as authoritative as repeated analysis       | Speed could come at the expense of trust                                           | Explicit snapshot label; dynamic 5-answer denominator; no repeat-based outlook for quick results                        |

## The new value ladder

1. Enter a business and city without an account.
2. See an immediate lookup panel, then confirm or correct the business facts.
3. Watch five everyday searches turn into sourced answers in the same panel.
4. Review fact-only drafts. Nothing is approved or published automatically.
5. Choose deep research when repeated answers, natural specialty searches, full-page reading and independently checked rival explanations are useful.

Quick questions for the Bhopal test were “Best sweet shops in Bhopal”, “Top rated sweet shops in Bhopal”, “Sweet shops to try in Bhopal”, “Popular sweet shops in Bhopal”, and “Which sweet shops would you recommend in Bhopal?”. These are broad phrasing probes, not search-volume estimates or five statistically independent measurements.

## What a judge would likely value

The strongest demonstration is the full useful loop: confirm facts, see cited recommendations, inspect evidence, edit a fact-locked draft, then approve it. The distinction between a fast snapshot and optional deeper investigation makes the project easier to understand and demonstrate. Nemotron and Tavily are identified in the experience, rather than suggesting that this is a live ChatGPT test.

Deep research retains the three Nemotron roles and independent verification stages. Quick mode deliberately uses the fast model with source excerpts and fact-only templates. It does not claim to have performed the deep rival diagnosis or model draft review. Existing saved deep examples remain labeled fictional.

Potential judge objections remain clear: this is a Nemotron-and-web-search simulation, not direct measurement of every assistant; repeated phrasings do not establish demand; a verified draft does not guarantee future rankings. The interface must keep these limits near the results while showing the practical benefit. Saved examples reuse their existing fictional source snapshots, so opening one does not perform unnecessary network research.

## Measured quick-check timing

One local live-provider test, using the configured Cited Supabase database:

- Business lookup: **3,913 ms**.
- First saved answers visible after starting research: **4,282 ms**.
- Five-question research completed: **5,696 ms**.
- Five broad questions, nineteen fetched source records, four unapproved fact-only drafts.

Evidence: ignored local `artifacts/quick-real-benchmark.json`. Timings exclude the user's time reviewing facts and are not a production percentile or a guaranteed upper bound. Quick provider requests use bounded timeouts; slow or failed questions show a recoverable partial state rather than a fabricated complete score.

## Deep verification

A live deep run also completed with forty answers, forty-eight source records, five independently checked findings and four drafts. Its resumed processing took 156,735 ms, excluding an earlier development-server interruption and question setup. This is not a clean end-to-end latency benchmark. After inspecting its generated wording, question setup was replaced with deterministic broad queries and short category-specific purchase intents. Unit tests cover the final five-broad/three-niche split. No second forty-answer provider run was needed for that wording-only change.

Verification includes exact database completion constraints for both tiers, preservation of answers on partial failure, missing-index deep retries, background scheduling/cache completion, session isolation and desktop/mobile browser flows. Timings and screenshots are local evidence, not proof of a deployed release.

## Follow-up measurement

Measure the funnel before claiming improved conversion: entry submitted, business confirmed, first answer visible, report ready, fix opened and fix approved. Separate quick/deep timing and measure p50/p95, lookup failures, partial retries and abandonments. No new analytics service or tracking cookies were added in this change.

Keep the quick check and fix-pack review ahead of optional account saving and future pricing. SMTP delivery, paid plans and public hackathon submission were outside this audit's write actions. No real business draft was approved or published.
