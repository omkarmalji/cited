"use client";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check as CheckIcon,
  Robot,
  X,
} from "@phosphor-icons/react";
import type { AgentReadiness } from "@/lib/agent-readiness";

type Result =
  | { state: "loading" }
  | { state: "done"; readiness: AgentReadiness }
  | { state: "none"; reason: "no-website" | "unpublished" }
  | { state: "error"; message: string };

export function useAgentReadiness(
  checkId: string,
  target?: "page",
  ready = true,
) {
  const [result, setResult] = useState<Result>({ state: "loading" });
  useEffect(() => {
    if (!ready) return;
    const controller = new AbortController();
    setResult({ state: "loading" });
    fetch(`/api/checks/${checkId}/agents${target ? `?target=${target}` : ""}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        setResult(
          d.readiness
            ? { state: "done", readiness: d.readiness }
            : { state: "none", reason: d.reason },
        );
      })
      .catch((e) => {
        if (e.name !== "AbortError")
          setResult({ state: "error", message: e.message });
      });
    return () => controller.abort();
  }, [checkId, target, ready]);
  return result;
}

export function ReadinessList({ readiness }: { readiness: AgentReadiness }) {
  return (
    <ul className="readiness-list">
      {readiness.items.map((item) => (
        <li key={item.id} className={item.pass ? "pass" : "fail"}>
          <span className="readiness-icon" aria-hidden="true">
            {item.pass ? (
              <CheckIcon size={13} weight="bold" />
            ) : (
              <X size={13} weight="bold" />
            )}
          </span>
          <div>
            <strong>
              {item.label}
              <span className="visually-hidden">
                {item.pass ? " (passed)" : " (needs work)"}
              </span>
            </strong>
            <p>{item.detail}</p>
            {!item.pass && <p className="readiness-fix">Fix: {item.fix}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function IsAgenticLink({ readiness }: { readiness: AgentReadiness }) {
  const ia = readiness.isAgentic;
  return ia.status === "report" ? (
    <a
      className="is-agentic"
      href={ia.reportUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Vercel Is Agentic score: <strong>{ia.score}/100</strong>
      {ia.label ? ` · ${ia.label}` : ""}{" "}
      <ArrowUpRight size={12} aria-hidden="true" />
    </a>
  ) : (
    <a
      className="is-agentic"
      href={ia.scanUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Run the full 118-check audit on Vercel&apos;s Is Agentic{" "}
      <ArrowUpRight size={12} aria-hidden="true" />
    </a>
  );
}

export function AgentReadinessPanel({
  checkId,
  sample,
}: {
  checkId: string;
  sample: boolean;
}) {
  const result = useAgentReadiness(checkId);
  return (
    <section id="agents" className="report-section panel agent-panel">
      <p className="fact-name">
        <Robot size={14} aria-hidden="true" /> AI agent check
      </p>
      <h2>Can AI agents use your website?</h2>
      <p className="section-note">
        Being mentioned is half of it. AI assistants also need to open, read and
        trust your website. We checked it the way an AI agent would.
      </p>
      {result.state === "loading" && (
        <div className="editor-loading" role="status">
          <span className="skeleton skeleton-line" />
          <span className="skeleton skeleton-line" />
          <span className="visually-hidden">Checking your website…</span>
        </div>
      )}
      {result.state === "none" && (
        <div className="readiness-empty">
          <strong>
            {sample
              ? "This fictional business has no website to check."
              : "We couldn't find a website for your business."}
          </strong>
          <p>
            AI agents need a page they can read. Step 1 below publishes one for
            you, already set up with the facts and files AI tools look for.
          </p>
          <a className="text-link" href="#fixes">
            Go to step 1
          </a>
          <WebsiteChecker
            label={
              sample
                ? "Try it on any real website"
                : "Have a website we missed? Check it here"
            }
          />
        </div>
      )}
      {result.state === "error" && (
        <p className="error-message" role="alert">
          We couldn&apos;t check your website: {result.message}
        </p>
      )}
      {result.state === "done" && (
        <>
          <div className="readiness-score">
            <strong>
              {result.readiness.passed}
              <span> of {result.readiness.total}</span>
            </strong>
            <div>
              <p>
                essentials ready on <b>{result.readiness.host}</b>
              </p>
              <span className="readiness-bar" aria-hidden="true">
                <i style={{ width: `${result.readiness.score}%` }} />
              </span>
            </div>
          </div>
          <ReadinessList readiness={result.readiness} />
          <IsAgenticLink readiness={result.readiness} />
        </>
      )}
    </section>
  );
}

// Check any public website, for owners without one on record (and for
// saved examples, whose businesses are fictional).
export function WebsiteChecker({ label }: { label: string }) {
  const [url, setUrl] = useState(""),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [readiness, setReadiness] = useState<AgentReadiness | null>(null);
  return (
    <div className="website-checker">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError("");
          try {
            const r = await fetch(
              `/api/agents?url=${encodeURIComponent(url)}`,
              {
                cache: "no-store",
              },
            );
            const d = await r.json();
            if (!r.ok) throw new Error(d.error);
            setReadiness(d.readiness);
          } catch (err) {
            setError((err as Error).message);
            setReadiness(null);
          }
          setBusy(false);
        }}
      >
        <label htmlFor="website-check">{label}</label>
        <div className="website-checker-row">
          <input
            id="website-check"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourbusiness.com"
            required
            inputMode="url"
            autoComplete="url"
          />
          <button className="button strong" disabled={busy}>
            {busy ? "Checking…" : "Check website"}
          </button>
        </div>
      </form>
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
      {readiness && (
        <div className="website-checker-result" role="status">
          <p className="readiness-inline">
            <strong>
              {readiness.passed} of {readiness.total}
            </strong>{" "}
            essentials ready on <b>{readiness.host}</b>.
          </p>
          <ReadinessList readiness={readiness} />
          <IsAgenticLink readiness={readiness} />
        </div>
      )}
    </div>
  );
}
