import { siteOrigin } from "@/lib/site";

// A short summary of Cited for AI tools (https://llmstxt.org).
export function GET() {
  const origin = siteOrigin();
  return new Response(
    `# Cited

> Cited checks whether AI assistants recommend a local business, explains why with cited sources, and drafts fact-checked fixes the owner approves.

- Each published business page lives at ${origin}/p/<business> and has its own AI summary at ${origin}/p/<business>/llms.txt.
- Facts on business pages are confirmed by the owner before publishing. Nothing is published automatically.
- Scores come from NVIDIA Nemotron with live web search. They are not live ChatGPT results.

## Pages

- [Home](${origin}/): what Cited does and how to run a free check
- [Privacy](${origin}/privacy)
`,
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
}
