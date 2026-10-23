"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, PencilSimple } from "@phosphor-icons/react";
import { BusinessMatch } from "./business-match";
import { CheckProgress } from "./check-progress";
import { FACT_LABELS, type Facts, type Source } from "@/lib/types";
const labels = FACT_LABELS;
export function Confirm({ id }: { id: string }) {
  const [facts, setFacts] = useState<Facts | null>(null),
    [sources, setSources] = useState<Source[]>([]),
    [edit, setEdit] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const router = useRouter();
  const [started] = useState(() => Date.now());
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/candidates/${id}`, { signal: controller.signal })
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        setFacts(d.facts);
        setSources(d.sources);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => controller.abort();
  }, [id]);
  return (
    <main id="main" className="app-container">
      <a href="/#check" className="back-link">
        Back to check
      </a>
      <h1>Is this your business?</h1>
      <p>
        Check the details we found. We only use what you confirm here when we
        write anything for you.
      </p>
      {error && (
        <p role="alert" className="error-message">
          {error}
        </p>
      )}
      {facts ? (
        <form
          className="panel"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            setError("");
            try {
              const response = await fetch("/api/checks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ candidateId: id, facts, mode: "deep" }),
              });
              const data = await response.json();
              if (!response.ok) throw new Error(data.error);
              router.push(`/check/${data.id}`);
            } catch (e) {
              setError((e as Error).message);
              setBusy(false);
            }
          }}
        >
          {edit ? (
            <div className="fact-grid">
              {Object.entries(facts).map(([key, value]) => (
                <div key={key} className={key === "knownFor" ? "full" : ""}>
                  <label htmlFor={key}>{labels[key as keyof Facts]}</label>
                  <input
                    id={key}
                    value={value}
                    placeholder="Leave blank if unsure"
                    type={
                      ["website", "reviewUrl"].includes(key) ? "url" : "text"
                    }
                    required={["name", "city", "category"].includes(key)}
                    onChange={(e) =>
                      setFacts({ ...facts, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            <BusinessMatch facts={facts} sources={sources} />
          )}
          <p className="notice">
            Missing details stay blank. Adding your review link lets us make a
            printable QR card for your counter.
          </p>
          <div className="action-row">
            <button type="submit" className="button strong" disabled={busy}>
              {busy ? "Starting" : "Yes, that's my business"}{" "}
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => setEdit(!edit)}
            >
              <PencilSimple size={16} />
              {edit ? "Done editing" : "Something's wrong, let me fix it"}
            </button>
          </div>
        </form>
      ) : (
        !error && (
          <CheckProgress
            name="Your business"
            city="getting your details"
            since={started}
            phase="lookup"
          />
        )
      )}
    </main>
  );
}
