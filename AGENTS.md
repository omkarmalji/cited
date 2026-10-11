## Context handling

- Keep working context in `CONTEXT.md`. Treat it as the project handoff, not a transcript.
- Update it after meaningful checkpoints and before handing off or ending a work session. Record decisions, completed work, evidence, blockers, pending questions, and the next concrete action.
- At session start or after compaction, read its short `Current focus` section. Search headings and read only the sections needed for the current task; do not repeatedly load the whole file or large conversation summaries.
- Keep chat updates concise. Do not duplicate the full handoff in chat or repeatedly restate plans and completed work.
- Verify changeable facts against the workspace or service before acting. Clearly distinguish verified results from pending checks.
- Never write credentials, tokens, private report contents, or raw environment values into the context file.
- Keep `CONTEXT.md` out of Git and deployment uploads. Preserve these rules when Next.js updates its generated block below.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
