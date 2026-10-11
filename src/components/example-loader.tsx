"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
export function ExampleLoader({ id }: { id: string }) {
  const started = useRef(false),
    [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    fetch("/api/examples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exampleId: id }),
    })
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        router.replace(`/check/${d.id}`);
      })
      .catch((e) => setError(e.message));
  }, [id, router]);
  return (
    <main id="main" className="app-container">
      <h1>A clearer picture.</h1>
      <p role="status">{error || "Opening your saved example..."}</p>
      {error && (
        <a href="/#examples" className="button">
          Back to examples
        </a>
      )}
    </main>
  );
}
