"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, CircleNotch } from "@phosphor-icons/react";
export function CheckForm() {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const router = useRouter();
  return (
    <form
      id="check"
      className="check-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        const fields = new FormData(e.currentTarget);
        try {
          const response = await fetch("/api/resolve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: fields.get("name"),
              city: fields.get("city"),
            }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error);
          router.push(`/confirm/${data.id}`);
        } catch (e) {
          setError((e as Error).message);
          setBusy(false);
        }
      }}
    >
      <div className="form-fields">
        <div>
          <label htmlFor="business-name">Business name</label>
          <input
            id="business-name"
            name="name"
            placeholder="e.g. Brew Lane Cafe"
            required
            minLength={2}
            maxLength={160}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="business-city">City</label>
          <input
            id="business-city"
            name="city"
            placeholder="e.g. Portland, USA"
            required
            minLength={2}
            maxLength={120}
            autoComplete="address-level2"
          />
        </div>
        <button className="button strong" type="submit" disabled={busy}>
          {busy ? (
            <>
              <CircleNotch className="spinner" size={18} />
              Finding your business
            </>
          ) : (
            <>
              Run free check <ArrowUpRight size={18} />
            </>
          )}
        </button>
      </div>
      {error && (
        <p role="alert" className="error-message">
          {error}
        </p>
      )}
      <p className="form-note">
        No signup. No SEO knowledge needed. Just your business.
      </p>
    </form>
  );
}
