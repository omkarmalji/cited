"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Circle,
  CircleNotch,
  ArrowClockwise,
} from "@phosphor-icons/react";
import { Badge, Citation, Dots } from "./ui";
import { type Check } from "@/lib/types";
export function Report({ id }: { id: string }) {
  const [check, setCheck] = useState<Check | null>(null),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [retryVersion, setRetryVersion] = useState(0);
  const router = useRouter();
  useEffect(() => {
    let stopped = false;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const r = await fetch(`/api/checks/${id}`, {
          signal: controller.signal,
        });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error);
        if (stopped) return;
        setCheck(data);
        if (!["complete", "error"].includes(data.status)) {
          const worker = await fetch(`/api/checks/${id}/work`, {
            method: "POST",
            signal: controller.signal,
          });
          if (!worker.ok) {
            const d = await worker.json();
            throw new Error(d.error);
          }
          timer = setTimeout(poll, 700);
        }
      } catch (e) {
        if (!stopped && (e as Error).name !== "AbortError")
          setError((e as Error).message);
      }
    };
    poll();
    return () => {
      stopped = true;
      controller.abort();
      clearTimeout(timer);
    };
  }, [id, retryVersion]);
  const recheck = async () => {
    setBusy(true);
    setError("");
    try {
      const r = await fetch(`/api/checks/${id}/recheck`, { method: "POST" }),
        d = await r.json();
      if (!r.ok) throw new Error(d.error);
      router.push(`/check/${d.id}`);
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };
  if (!check)
    return (
      <main id="main" className="app-container">
        <h1>Your visibility check.</h1>
        <p role="status">{error || "Opening your report..."}</p>
        <a className="button" href="/#examples">
          Try an example
        </a>
      </main>
    );
  const count = check.questions
    .flatMap((q) => q.runs)
    .filter((r) => r.mentioned).length;
  const complete = check.status === "complete";
  const progress = ["questions", "runs"].includes(check.status)
    ? 1
    : ["diagnosis", "verifyDiagnosis"].includes(check.status)
      ? 2
      : ["fixes", "verifyFixes"].includes(check.status)
        ? 3
        : 0;
  return (
    <main id="main" className="app-container">
      <div className="app-topline">
        <Link href="/" className="back-link">
          Back to Cited
        </Link>
        {check.sample && <Badge label="Sample data" />}
      </div>
      <h1>{check.facts.name}</h1>
      <p>
        {check.facts.city}, {check.facts.country} ·{" "}
        {complete
          ? `${check.sample ? "Saved example" : "Checked " + new Date(check.createdAt).toLocaleDateString("en", { month: "short", day: "numeric" })}, 8 questions, 5 runs each`
          : "Your check is in progress"}
      </p>
      {check.sample && (
        <p className="notice sample">
          Fictional business. Saved results. Approved pages stay labeled.
        </p>
      )}
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
      {check.status === "error" ? (
        <div className="panel">
          <h2>We couldn’t finish this check.</h2>
          <p role="alert">{check.error}</p>
          <p className="notice">
            Partial answers are not a complete score. No unsupported findings or
            fixes have been published.
          </p>
          {check.retryStage && (check.retryCount || 0) < 3 && (
            <button
              className="button strong"
              style={{ marginRight: 12 }}
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                setError("");
                try {
                  const response = await fetch(`/api/checks/${id}/retry`, {
                      method: "POST",
                    }),
                    data = await response.json();
                  if (!response.ok) throw new Error(data.error);
                  setRetryVersion((v) => v + 1);
                } catch (e) {
                  setError((e as Error).message);
                }
                setBusy(false);
              }}
            >
              {busy ? "Retrying..." : "Retry unfinished step"}
            </button>
          )}
          <a className="button" href="/#check">
            Start another check
          </a>
        </div>
      ) : !complete ? (
        <div className="panel">
          <h2>A few questions. A clearer picture.</h2>
          <ol className="progress-list">
            {[
              "Finding your business",
              "Asking the questions",
              "Reading sources",
              "Writing fixes",
            ].map((label, i) => (
              <li
                key={label}
                className={
                  i < progress ? "done" : i === progress ? "active" : ""
                }
              >
                {i < progress ? (
                  <CheckCircle size={20} />
                ) : i === progress ? (
                  <CircleNotch size={20} className="spinner" />
                ) : (
                  <Circle size={20} />
                )}
                <span>{label}</span>
                <span
                  className="mono"
                  style={{ marginLeft: "auto", fontSize: 11 }}
                >
                  {i < progress
                    ? "Complete"
                    : i === progress
                      ? "In progress"
                      : "Waiting"}
                </span>
              </li>
            ))}
          </ol>
          <p className="progress-note" role="status" aria-live="polite">
            {check.progress}
          </p>
          <p className="notice">
            Forty independent answers take a few minutes. This page keeps your
            check moving. You can return in this browser.
          </p>
        </div>
      ) : (
        <>
          <section className="panel summary-panel">
            <div>
              <div className="fact-name">AI VISIBILITY</div>
              <div className="summary-count">
                {count} <span>of 40 runs</span>
              </div>
              <p>
                Your business was named in {count} answers across eight
                questions.
              </p>
              {check.previousTotal !== undefined && (
                <p className="mono">
                  {count - check.previousTotal >= 0 ? "Up" : "Down"}{" "}
                  {Math.abs(count - check.previousTotal)} since the previous
                  check ({check.previousTotal} of 40).
                </p>
              )}
            </div>
            <button className="button" onClick={recheck} disabled={busy}>
              <ArrowClockwise size={16} />
              {busy ? "Starting..." : "Recheck now"}
            </button>
          </section>
          <section className="report-section">
            <h2>What your customers might ask.</h2>
            <p style={{ marginBottom: 24, fontSize: 13 }}>
              Outlook labels are heuristics, not guarantees. A niche question
              can be worth improving even with zero mentions.
            </p>
            <div className="question-list">
              {check.questions.map((q) => (
                <article key={q.id} className="question-row">
                  <h3>{q.text}</h3>
                  <div className="question-data">
                    <Dots count={q.runs.filter((r) => r.mentioned).length} />
                    <Badge label={q.status} />
                  </div>
                  <details>
                    <summary>View 5 answers</summary>
                    {q.runs.map((r) => (
                      <div className="run-answer" key={r.index}>
                        <span className="mono">
                          Run {r.index + 1} ·{" "}
                          {r.mentioned ? "Named" : "Not named"}
                        </span>
                        <p>{r.answer}</p>
                        <div className="citation-list">
                          {(r.citationIds || [])
                            .map((id) => check.sources.find((s) => s.id === id))
                            .filter(Boolean)
                            .map((s) => (
                              <Citation key={s!.id} source={s!} />
                            ))}
                        </div>
                      </div>
                    ))}
                  </details>
                </article>
              ))}
            </div>
          </section>
          <section className="report-section panel">
            <h2>
              {check.findings[0]
                ? `Why ${check.findings[0].rival} wins.`
                : "What the sources tell us."}
            </h2>
            {check.findings.length ? (
              check.findings.map((f, i) => (
                <article className="finding" key={i}>
                  <p>{f.body}</p>
                  <div className="citation-list">
                    {f.citationIds
                      .map((id) => check.sources.find((s) => s.id === id))
                      .filter(Boolean)
                      .map((s) => (
                        <Citation key={s!.id} source={s!} />
                      ))}
                  </div>
                </article>
              ))
            ) : (
              <p>
                We could not support a rival explanation with sources. No
                finding is shown.
              </p>
            )}
            <details className="sources">
              <summary>All {check.sources.length} sources</summary>
              {check.sources.map((s) => (
                <div key={s.id} style={{ marginTop: 16 }}>
                  <Citation source={s} />
                  <p>
                    {s.title} · Fetched{" "}
                    {new Date(s.fetchedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </details>
          </section>
          <section className="report-section">
            <h2>Your fix pack.</h2>
            <p style={{ marginBottom: 24, fontSize: 14 }}>
              Review your drafts. Approve each one before copying or publishing.
            </p>
            <div className="fix-list">
              {check.fixes.map((f) => (
                <article className="panel fix-item" key={f.id}>
                  <div className="fix-copy">
                    <div className="fix-title">
                      <h3>{f.title}</h3>
                      <Badge
                        label={
                          f.status === "approved"
                            ? "Approved"
                            : f.status === "edited"
                              ? "Edited"
                              : "Draft"
                        }
                      />
                    </div>
                    <p>
                      {f.type === "page"
                        ? "A hosted page built from your confirmed facts."
                        : f.type === "profile"
                          ? "A description, three posts, five Q&A pairs."
                          : f.type === "reviews"
                            ? "SMS, WhatsApp, email and your printable QR card."
                            : "Structured business data for your website."}
                    </p>
                    {f.flags.length > 0 && (
                      <p className="error-message">
                        Needs a fact check before approval.
                      </p>
                    )}
                  </div>
                  <div className="action-row">
                    <Link className="button" href={`/fix/${f.id}?check=${id}`}>
                      {f.status === "approved"
                        ? "View approved fix"
                        : "Edit and approve"}{" "}
                      <ArrowRight size={16} />
                    </Link>
                    {f.slug && (
                      <Link href={`/p/${f.slug}`} className="text-link">
                        View page <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <WeeklyRechecks check={check} />
          <SaveReport checkId={id} />
        </>
      )}
    </main>
  );
}
function SaveReport({ checkId }: { checkId: string }) {
  const [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  return (
    <section className="report-section">
      <details className="panel report-option">
        <summary>
          <h2>Keep your report.</h2>
          <span>Optional</span>
        </summary>
        <p style={{ fontSize: 14, marginBottom: 20 }}>
          Optional magic-link login. Your first check never needs an account.
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            setMessage("");
            try {
              const r = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, checkId }),
              });
              const d = await r.json();
              setMessage(d.message || d.error);
            } catch {
              setMessage("Could not send login link. Please try again.");
            }
            setBusy(false);
          }}
        >
          <label htmlFor="save-email">Email address</label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              style={{ flex: "1 1 240px" }}
              id="save-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button className="button" disabled={busy}>
              {busy ? "Sending..." : "Send login link"}
            </button>
          </div>
          {message && (
            <p className="notice" role="status">
              {message}
            </p>
          )}
        </form>
      </details>
    </section>
  );
}
function WeeklyRechecks({ check }: { check: Check }) {
  const [enabled, setEnabled] = useState(!!check.weeklyEnabled),
    [date, setDate] = useState(check.nextRecheckAt),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  if (check.sample) return null;
  return (
    <section className="report-section panel">
      <h2>See what changes.</h2>
      <p>
        Weekly rechecks ask the same eight questions again. Each report keeps
        its sources and five-run counts.
      </p>
      {check.latestRecheckId ? (
        <Link className="button" href={`/check/${check.latestRecheckId}`}>
          View latest weekly report <ArrowRight size={16} />
        </Link>
      ) : (
        <>
          <button
            className="button"
            aria-pressed={enabled}
            disabled={busy}
            style={{ marginTop: 20 }}
            onClick={async () => {
              setBusy(true);
              setError("");
              try {
                const response = await fetch(`/api/checks/${check.id}/weekly`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ enabled: !enabled }),
                  }),
                  data = await response.json();
                if (!response.ok) throw new Error(data.error);
                setEnabled(data.enabled);
                setDate(data.nextRecheckAt);
              } catch (e) {
                setError((e as Error).message);
              }
              setBusy(false);
            }}
          >
            {busy
              ? "Saving..."
              : enabled
                ? "Stop weekly rechecks"
                : "Enable weekly rechecks"}
          </button>
          {enabled && date && (
            <p role="status" className="notice">
              Next recheck on or after {new Date(date).toLocaleDateString()}.
              Results appear here and in your saved reports.
            </p>
          )}
        </>
      )}
      {error && (
        <p role="alert" className="error-message">
          {error}
        </p>
      )}
    </section>
  );
}
