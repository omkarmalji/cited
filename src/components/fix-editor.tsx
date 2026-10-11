"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Copy, ArrowRight, Printer } from "@phosphor-icons/react";
import { Badge } from "./ui";
import { FACT_LABELS, type Facts, type Fix } from "@/lib/types";
export function FixEditor({ id, checkId }: { id: string; checkId: string }) {
  const [fix, setFix] = useState<Fix | null>(null),
    [facts, setFacts] = useState<Facts | null>(null),
    [body, setBody] = useState(""),
    [sample, setSample] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [message, setMessage] = useState("");
  const endpoint = `/api/fixes/${id}?check=${checkId}`;
  useEffect(() => {
    const controller = new AbortController();
    fetch(endpoint, { signal: controller.signal })
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        setFix(d.fix);
        setBody(d.fix.body);
        setFacts(d.facts);
        setSample(d.sample);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => controller.abort();
  }, [endpoint]);
  const save = async () => {
    const r = await fetch(endpoint, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      }),
      d = await r.json();
    if (!r.ok) throw new Error(d.error);
    setFix(d.fix);
    return d.fix as Fix;
  };
  const approve = async () => {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      if (body !== fix?.body) await save();
      const r = await fetch(`/api/fixes/${id}/approve?check=${checkId}`, {
          method: "POST",
        }),
        d = await r.json();
      if (!r.ok) throw new Error([d.error, ...(d.flags || [])].join(" "));
      setFix(d.fix);
      setMessage(
        d.fix.type === "page"
          ? "Approved. Your business page is now published."
          : "Approved. You can now copy this fix.",
      );
    } catch (e) {
      setError((e as Error).message);
    }
    setBusy(false);
  };
  return (
    <main id="main" className="app-container">
      <div className="app-topline">
        <Link className="back-link" href={`/check/${checkId}`}>
          Back to report
        </Link>
        {sample && <Badge label="Sample data" />}
      </div>
      <h1>{fix?.title || "Your fix editor."}</h1>
      <p>
        Your confirmed facts are the boundary. Approval unlocks copying
        {fix?.type === "page" ? " and publishes your page" : ""}.
      </p>
      {error && (
        <p role="alert" className="error-message">
          {error}
        </p>
      )}
      {fix && facts && (
        <>
          <div className="editor-layout">
            <section className="panel">
              <Badge
                label={
                  fix.status === "approved"
                    ? "Approved"
                    : fix.status === "edited"
                      ? "Edited"
                      : "Draft"
                }
              />
              <label style={{ marginTop: 24 }} htmlFor="fix-body">
                {fix.status === "approved"
                  ? "Approved content"
                  : "Draft content"}
              </label>
              <textarea
                id="fix-body"
                className="editor-copy"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                readOnly={fix.status === "approved"}
              />
              {fix.flags.map((flag, i) => (
                <p role="alert" className="error-message" key={i}>
                  {flag}
                </p>
              ))}
              <div className="action-row">
                {fix.status !== "approved" ? (
                  <>
                    <button
                      className="button"
                      disabled={busy}
                      onClick={async () => {
                        setBusy(true);
                        setError("");
                        try {
                          await save();
                          setMessage("Draft saved.");
                        } catch (e) {
                          setError((e as Error).message);
                        }
                        setBusy(false);
                      }}
                    >
                      Save edit
                    </button>
                    <button
                      className="button strong"
                      disabled={busy}
                      onClick={approve}
                    >
                      <Check size={16} />
                      {busy
                        ? "Checking facts..."
                        : fix.type === "page"
                          ? "Approve and publish"
                          : "Approve"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button strong"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(fix.body);
                          setMessage("Copied approved content.");
                        } catch {
                          setError(
                            "Clipboard unavailable. Select the approved text to copy.",
                          );
                        }
                      }}
                    >
                      <Copy size={16} />
                      Copy approved content
                    </button>
                    {fix.slug && (
                      <Link className="button" href={`/p/${fix.slug}`}>
                        View published page <ArrowRight size={16} />
                      </Link>
                    )}
                  </>
                )}
              </div>
              {message && (
                <p className="success-message" role="status">
                  {message}
                </p>
              )}
              {sample && (
                <p className="notice sample">
                  Fictional sample content. Published example pages keep their
                  Sample data label.
                </p>
              )}
            </section>
            <aside
              className="panel fact-lock"
              aria-labelledby="fact-lock-title"
            >
              <h2 id="fact-lock-title">Fact lock</h2>
              <p>
                This draft may only state these confirmed facts. Anything else
                blocks approval.
              </p>
              <dl>
                {fix.factKeys
                  .filter((k) => facts[k])
                  .map((k) => (
                    <div key={k}>
                      <dt>{FACT_LABELS[k]}</dt>
                      <dd>{facts[k]}</dd>
                    </div>
                  ))}
              </dl>
            </aside>
          </div>
          {fix.type === "schema" && (
            <section className="panel">
              <h2>Add this to your website.</h2>
              <ol className="install-steps">
                <li>Approve the markup above.</li>
                <li>
                  Copy it into a script tag with type="application/ld+json".
                </li>
                <li>
                  Add that tag to your homepage, or send it to whoever manages
                  your site.
                </li>
                <li>Validate it with Google’s Rich Results Test.</li>
              </ol>
              <p className="notice">
                Schema helps describe your business. It does not guarantee AI
                recommendations or search placement.
              </p>
            </section>
          )}
          {fix.type === "reviews" && (
            <section className="panel">
              <h2>Your review QR card.</h2>
              {fix.status === "approved" && facts.reviewUrl ? (
                <>
                  <div className="qr-card">
                    <strong>{facts.name}</strong>
                    <img
                      src={`/api/fixes/${fix.id}/qr?check=${checkId}`}
                      width={220}
                      height={220}
                      alt={`QR code for ${facts.name}'s confirmed review page`}
                    />
                    <p>
                      Tell us about your visit.
                      <br />
                      Please leave an honest review.
                    </p>
                  </div>
                  <button
                    className="button"
                    style={{ marginTop: 24 }}
                    onClick={() => window.print()}
                  >
                    <Printer size={16} />
                    Print QR card
                  </button>
                </>
              ) : (
                <p>
                  {facts.reviewUrl
                    ? "Approve these review requests to unlock your QR card."
                    : "No review link was confirmed. Add one in a new check to generate a QR card."}
                </p>
              )}
            </section>
          )}
        </>
      )}
    </main>
  );
}
