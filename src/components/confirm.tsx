"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, PencilSimple } from "@phosphor-icons/react";
import { Citation } from "./ui";
import type { Facts, Source } from "@/lib/types";
const labels: Record<keyof Facts, string> = {
  name: "Business name",
  city: "City",
  country: "Country",
  category: "Category",
  address: "Address",
  hours: "Hours",
  knownFor: "Known for",
  website: "Website",
  reviewUrl: "Review link",
};
export function Confirm({ id }: { id: string }) {
  const [facts, setFacts] = useState<Facts | null>(null),
    [sources, setSources] = useState<Source[]>([]),
    [edit, setEdit] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const router = useRouter();
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
      <h1>Is this you?</h1>
      <p>
        Confirm every detail. These become the only facts your fix pack can use.
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
                body: JSON.stringify({ candidateId: id, facts }),
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
          <div className="fact-grid">
            {Object.entries(facts).map(([key, value]) => (
              <div key={key} className={key === "knownFor" ? "full" : ""}>
                {edit ? (
                  <>
                    <label htmlFor={key}>{labels[key as keyof Facts]}</label>
                    <input
                      id={key}
                      value={value}
                      type={
                        ["website", "reviewUrl"].includes(key) ? "url" : "text"
                      }
                      required={["name", "city", "category"].includes(key)}
                      onChange={(e) =>
                        setFacts({ ...facts, [key]: e.target.value })
                      }
                    />
                  </>
                ) : (
                  <>
                    <div className="fact-name">
                      {labels[key as keyof Facts]}
                    </div>
                    <div className="fact-value">
                      {value || "Not found. Add only if you can confirm it."}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="citation-list">
            {sources.map((s) => (
              <Citation key={s.id} source={s} />
            ))}
          </div>
          <p className="notice">
            Unknown details stay blank. Add a verified review link now to create
            your printable QR card.
          </p>
          <div className="action-row">
            <button type="submit" className="button strong" disabled={busy}>
              {busy ? "Starting check" : "Yes, this is me"}{" "}
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="button"
              onClick={() => setEdit(!edit)}
            >
              <PencilSimple size={16} />
              {edit ? "Done editing" : "Fix a detail"}
            </button>
          </div>
        </form>
      ) : (
        !error && <p role="status">Finding your details...</p>
      )}
    </main>
  );
}
