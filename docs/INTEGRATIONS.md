# Verified integrations

Verified October 12, 2026. Runtime smoke checks are tracked in `docs/ACCEPTANCE.md`.

## Nebius Token Factory

[Official quickstart](https://docs.tokenfactory.nebius.com/quickstart) specifies the OpenAI-compatible base URL `https://api.tokenfactory.nebius.com/v1/` and `Authorization: Bearer <NEBIUS_API_KEY>`. Do not use the Cloud IAM token. The OpenAI SDK supplies the header.

The authenticated `/v1/models` response returned HTTP 200 with these exact case-sensitive IDs in this project session:

| Role     | ID                                      | Use                                          |
| -------- | --------------------------------------- | -------------------------------------------- |
| Fast     | `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B` | 40 independent recommendations per check     |
| Reasoner | `nvidia/nemotron-3-super-120b-a12b`     | Resolve identity, questions, cited diagnosis |
| Writer   | `nvidia/Nemotron-3-Ultra-550b-a55b`     | Fix priorities and fact verification         |

The same catalog also offers `nvidia/Nemotron-3_5-Lightning`. Models are environment variables so availability can change without editing the application. An authenticated catalog listing establishes availability, not inference success. Run `npm run smoke:integrations` to verify actual inference for all roles.

[Structured JSON documentation](https://docs.tokenfactory.nebius.com/ai-models-inference/json) supports `response_format`. All outputs are parsed with Zod and retried once if invalid. Network calls have a 60-second timeout and two transport retries. Logs include role, exact model ID, and token usage, never keys or prompts.

## Tavily

Official [Search](https://docs.tavily.com/documentation/api-reference/endpoint/search) and [Extract](https://docs.tavily.com/documentation/api-reference/endpoint/extract) documentation specifies the `@tavily/core` SDK and Bearer-key API. `search()` runs advanced search then extracts the top three URLs on each question’s first run. Fetched excerpts and timestamps are saved; subsequent five runs use that evidence. Search and extraction happen in the main live path.

No Tavily key was present at initial setup. Live results must not be replaced with saved samples on failure.

## Supabase

Apply `supabase/migrations/001_cited.sql` to a new Cited project. Use `NEXT_PUBLIC_SUPABASE_URL`, public anon key for Auth, and server-only service-role key for storage. The service-role key is never exposed to client code. RLS denies direct browser access to report tables; route handlers enforce owner session identity.

Magic-link login uses [Supabase SSR](https://supabase.com/docs/guides/auth/server-side/nextjs) and [passwordless email](https://supabase.com/docs/guides/auth/auth-email-passwordless), with PKCE callback at `/auth/callback`. Add localhost and deployed callback origins to allowed redirect URLs. Configure email delivery for judge access. This remains externally unverified until a Supabase project is configured.

## ThreeUI source provenance

Source: [complete registry bundle](https://threeui.com/source-code/predictive-arc.json), revision `fa86582fc870`. All 16 registered files are preserved byte-for-byte in `vendor/threeui`. `npm run verify:threeui` compares every SHA-256 against the registry manifest.

`scripts/build-threeui.mjs` compiles the exact registered `PredictiveArcCanvas.tsx`, its renderer, and variant dependencies. It uses the official pinned `@designcodeio/threeui@1.2.0` package for supplemental raw imports omitted by the registry. The selected Predictive renderer is Canvas 2D; the other bundled variants include WebGL and Three.js. No preview reconstruction or documentation embed is used.

The unselected collection module references two raw sources absent even in package 1.2.0 (`recursive-erosion` and `synthesis-orb`). It is archived unchanged but not used as the runtime entry. The requested predictive variant is complete and compiled directly from its registered source. All selected renderer options are exactly `mode="dark"`, `speed={1}`, `hue={0}`, `saturation={1}`, `brightness={1}`. The source defaults to `predictive`.

Shared CSS is preserved, including its font asset path. Fragment Mono is downloaded from the [official source repository](https://github.com/MengTo/threeui/blob/main/src/shaders/fonts/fragment-mono.woff2). The source component manages resize, intersection and document visibility. The app omits the decorative canvas under reduced-motion preferences, preserving configured values whenever it runs.
