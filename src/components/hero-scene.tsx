"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const FlowField = dynamic(
  () => import("../generated/threeui").then((m) => m.FlowField),
  { ssr: false },
);
// ThreeUI Flow Field from its registered source: fine copper threads drifting
// behind the whole landing page. Props only; the source is untouched.
export function HeroScene() {
  const [motion, setMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotion(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <div className="shader-frame page-backdrop" aria-hidden="true" inert>
      {motion && <FlowField mode="dark" speed={0.6} density={0.7} />}
    </div>
  );
}
