"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const PredictiveArcCanvas = dynamic(
  () => import("../generated/threeui").then((m) => m.PredictiveArcCanvas),
  { ssr: false },
);
// Data Pixel Arc is emerald by default; the component's own hue prop rotates it
// to Cited's copper accent without touching the registered source.
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
    <div className="shader-frame" aria-hidden="true">
      {motion && (
        <PredictiveArcCanvas
          variant="data-pixel"
          mode="dark"
          speed={1.0}
          hue={-100}
          saturation={1.25}
          brightness={1.0}
        />
      )}
    </div>
  );
}
