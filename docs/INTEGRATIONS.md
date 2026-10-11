# Verified integrations

Verified October 12, 2026. Runtime smoke checks are tracked in `docs/ACCEPTANCE.md`.

## Nebius Token Factory

[Official quickstart](https://docs.tokenfactory.nebius.com/quickstart) specifies the OpenAI-compatible base URL `https://api.tokenfactory.nebius.com/v1/` and `Authorization: Bearer <NEBIUS_API_KEY>`. Do not use the Cloud IAM token. The OpenAI SDK supplies the header.

The authenticated `/v1/models` response returned HTTP 200 with these exact case-sensitive IDs in this project session:

| Role     | ID                                      | Use                                          |
| -------- | --------------------------------------- | -------------------------------------------- |
| Fast     | `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B` | 40 independent recommendations per check     |
| Reasoner | `nvidia/nemotron-3-super-120b-a12b`     | Resolve identity, questions, cited diagnosis |
| Writer   | `nvidia/Nemotron-3-Ultra-550b-a55b`     | Fix drafting and independent fact verification |

The same catalog also offers `nvidia/Nemotron-3_5-Lightning`. Models are environment variables so availability can change without editing the application. An authenticated catalog listing establishes availability, not inference success. Run `npm run smoke:integrations` to verify actual inference for all roles.

[Structured JSON documentation](https://docs.tokenfactory.nebius.com/ai-models-inference/json) supports `response_format`. Outputs use JSON-object mode, an explicit schema in the prompt and Zod validation; invalid outputs retry once. Network calls have a 60-second timeout and one transport retry. Fast calls have a 6,000-token completion budget; Reasoner and Writer calls have 10,000 to accommodate reasoning before structured output. Logs include role, exact model ID, token usage and finish reason, never keys or prompts.

## Tavily

Official [Search](https://docs.tavily.com/documentation/api-reference/endpoint/search) and [Extract](https://docs.tavily.com/documentation/api-reference/endpoint/extract) documentation specifies the `@tavily/core` SDK and Bearer-key API. `search()` runs advanced search then extracts the top three URLs on each question’s first run. Fetched excerpts and timestamps are saved; subsequent five runs use that evidence. Search and extraction happen in the main live path.

Actual Search and Extract calls passed, including the main-flow real business acceptance checks. Live results must not be replaced with saved samples on failure.

## Supabase

The migration `supabase/migrations/001_cited.sql` is applied to Cited's dedicated project. Use `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` for Auth (legacy anon key supported), and the server-only service-role key for storage. The service-role key is never exposed to client code. All ten tables have RLS; route handlers enforce owner session identity. Live database checks rejected empty citations and citations without stored sources, and denied anonymous table/RPC access.

Magic-link login uses [Supabase SSR](https://supabase.com/docs/guides/auth/server-side/nextjs) and [passwordless email](https://supabase.com/docs/guides/auth/auth-email-passwordless), with PKCE callback at `/auth/callback`. The production Site URL and localhost/production callback allowlist are configured. Email delivery remains unverified pending custom SMTP: Authentication, Emails, SMTP Settings. Supabase's [default SMTP restrictions](https://supabase.com/docs/guides/auth/auth-smtp) prevent arbitrary judge emails until a custom sender is configured. This does not block anonymous checks or fictional examples.

## ThreeUI source provenance

Source: [complete registry bundle](https://threeui.com/source-code/predictive-arc.json), revision `fa86582fc870`. All 16 registered files are preserved byte-for-byte in `vendor/threeui`. `npm run verify:threeui` compares every SHA-256 against the registry manifest.

`scripts/build-threeui.mjs` compiles the exact registered `PredictiveArcCanvas.tsx`, its renderer, and variant dependencies. It uses the official pinned `@designcodeio/threeui@1.2.0` package for supplemental raw imports omitted by the registry. The selected Predictive renderer is Canvas 2D; the other bundled variants include WebGL and Three.js. No preview reconstruction or documentation embed is used.

The unselected collection module references two raw sources absent even in package 1.2.0 (`recursive-erosion` and `synthesis-orb`). It is archived unchanged but not used as the runtime entry. The requested predictive variant is complete and compiled directly from its registered source. All selected renderer options are exactly `mode="dark"`, `speed={1}`, `hue={0}`, `saturation={1}`, `brightness={1}`. The source defaults to `predictive`.

Shared CSS is preserved, including its font asset path. Fragment Mono is downloaded from the [official source repository](https://github.com/MengTo/threeui/blob/main/src/shaders/fonts/fragment-mono.woff2). The source component manages resize, intersection and document visibility. The app omits the decorative canvas under reduced-motion preferences, preserving configured values whenever it runs.
