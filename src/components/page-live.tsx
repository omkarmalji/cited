"use client";
import { useState } from "react";
import { ArrowUpRight, Copy, Robot } from "@phosphor-icons/react";
import {
  IsAgenticLink,
  ReadinessList,
  useAgentReadiness,
} from "./agent-readiness";

// Shown once the business page is approved: what it is, where to put the link
// and proof that AI agents can read it.
export function PageLive({
  checkId,
  slug,
  sample,
}: {
  checkId: string;
  slug: string;
  sample: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window === "undefined"
      ? `/p/${slug}`
      : new URL(`/p/${slug}`, window.location.origin).toString();
  const result = useAgentReadiness(checkId, "page", !sample);
  return (
    <section className="panel page-live" aria-labelledby="page-live-title">
      <p className="fact-name found-eyebrow">Your page is live</p>
      <h2 id="page-live-title">Now put this link where people and AI look.</h2>
      <div className="page-live-url">
        <a href={`/p/${slug}`} target="_blank" rel="noopener noreferrer">
          {url} <ArrowUpRight size={12} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
            } catch {
              setCopied(false);
            }
          }}
        >
          <Copy size={16} /> {copied ? "Copied" : "Copy link"}
        </button>
      </div>
      <ol className="page-live-steps">
        <li>
          <strong>Google Business Profile.</strong> Paste it into the
          &ldquo;Website&rdquo; field if you don&apos;t have a website, or add
          it as a link in a post.
        </li>
        <li>
          <strong>Instagram, WhatsApp Business, Facebook.</strong> Add it to
          your bio or business info.
        </li>
        <li>
          <strong>Your own website.</strong> Ask whoever runs it to link to this
          page from the footer.
        </li>
      </ol>
      <p className="section-note">
        Why it helps: AI assistants recommend businesses they can read and
        trust. This page states your confirmed facts in plain words, in the
        structured format AI understands, and in a short summary file written
        for AI tools.
      </p>
      <div className="page-live-check">
        <p className="fact-name">
          <Robot size={14} aria-hidden="true" /> Can AI agents read this page?
        </p>
        {sample ? (
          <p className="section-note">
            Sample pages are hidden from search engines, so we skip the check
            here. Published real pages are checked automatically.
          </p>
        ) : result.state === "loading" ? (
          <div className="editor-loading" role="status">
            <span className="skeleton skeleton-line" />
            <span className="visually-hidden">Checking your page…</span>
          </div>
        ) : result.state === "done" ? (
          <>
            <p className="readiness-inline">
              <strong>
                {result.readiness.passed} of {result.readiness.total}
              </strong>{" "}
              essentials ready.
            </p>
            <ReadinessList readiness={result.readiness} />
            <IsAgenticLink readiness={result.readiness} />
          </>
        ) : result.state === "error" ? (
          <p className="section-note">
            We couldn&apos;t check the page right now ({result.message}).
          </p>
        ) : null}
      </div>
    </section>
  );
}
