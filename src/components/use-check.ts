"use client";
import { useEffect, useState } from "react";
import type { Check } from "@/lib/types";

// Read progress independently of the long-running worker request. A slow model
// must not prevent completed answers from reaching the screen.
export function useCheck(id: string | null) {
  const [check, setCheck] = useState<Check | null>(null);
  const [error, setError] = useState("");
  const [version, setVersion] = useState(0);
  useEffect(() => {
    if (!id) return;
    let stopped = false,
      working = false,
      failures = 0;
    let timer: ReturnType<typeof setTimeout>;
    const controller = new AbortController();
    setCheck(null);
    setError("");
    async function poll() {
      try {
        const response = await fetch(`/api/checks/${id}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        if (stopped) return;
        setCheck(data);
        setError("");
        failures = 0;
        if (!["complete", "error"].includes(data.status)) {
          if (!working && !data.workerActive) {
            working = true;
            // Deliberately not cancelled when the modal closes. The durable job
            // keeps its results; another view can reconnect without restarting it.
            fetch(`/api/checks/${id}/work`, { method: "POST" })
              .then(async (worker) => {
                if (!worker.ok) {
                  const payload = await worker.json();
                  throw new Error(payload.error);
                }
              })
              .catch((error) => {
                if (!stopped) setError(error.message);
              })
              .finally(() => {
                working = false;
              });
          }
          timer = setTimeout(poll, 1000);
        }
      } catch (error) {
        if (!stopped && (error as Error).name !== "AbortError") {
          setError((error as Error).message);
          if (++failures < 3) timer = setTimeout(poll, 2500);
        }
      }
    }
    poll();
    return () => {
      stopped = true;
      controller.abort();
      clearTimeout(timer);
    };
  }, [id, version]);
  return { check, error, refresh: () => setVersion((v) => v + 1) };
}
