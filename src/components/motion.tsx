"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hides the load-in elements from the very first paint. It ships inline with
// the HTML (not in the stylesheet) so nothing flashes even when CSS arrives
// late, as it does in development. If the script never runs, the fallback
// animations reveal everything after three seconds.
const GUARD = `
@media (prefers-reduced-motion: no-preference) {
  .intro-pending [data-enter],
  html:has(.intro-pending) .nav-bar {
    opacity: 0;
    animation: intro-show 0.6s ease 3s forwards;
  }
  .intro-pending .shader-frame {
    opacity: 0;
    animation: intro-backdrop 0.6s ease 3s forwards;
  }
  .intro-pending .landing-page {
    --rail-scale: 0;
    animation: intro-rails 0.01s 3s forwards;
  }
  .intro-pending .grid-rule {
    transform: scaleX(0);
    animation: intro-rule 0.6s ease 3s forwards;
  }
}
@keyframes intro-show { to { opacity: 1; } }
@keyframes intro-backdrop { to { opacity: 0.55; } }
@keyframes intro-rails { to { --rail-scale: 1; } }
@keyframes intro-rule { to { transform: none; } }
`;

// Load-in order: the grid draws itself, the nav drops in, the background
// fades up, then the hero copy rises in.
export function Motion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const nav = document.querySelector<HTMLElement>(".nav-bar");
    const page = root.querySelector<HTMLElement>(".landing-page");
    const match = gsap.matchMedia();
    match.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => root.setAttribute("data-intro", "done"),
        });
        if (page)
          intro.fromTo(
            page,
            { "--rail-scale": 0 },
            {
              "--rail-scale": 1,
              duration: 1.1,
              ease: "power2.inOut",
              clearProps: "--rail-scale",
            },
            0,
          );
        intro
          .fromTo(
            ".grid-rule",
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1,
              stagger: 0.08,
              ease: "power2.inOut",
              clearProps: "transform",
            },
            0.1,
          )
          .fromTo(
            ".grid-rule i",
            { opacity: 0, scale: 0.4 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.04,
              clearProps: "opacity,transform",
            },
            0.7,
          );
        if (nav)
          intro.fromTo(
            nav,
            { opacity: 0, y: -14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              clearProps: "opacity,transform",
            },
            0.3,
          );
        intro
          .fromTo(
            ".shader-frame",
            { opacity: 0, scale: 1.08 },
            {
              opacity: 0.55,
              scale: 1,
              duration: 1.6,
              ease: "power2.out",
              clearProps: "opacity,transform",
            },
            0.5,
          )
          .fromTo(
            "[data-enter]",
            { opacity: 0, y: 28, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.12,
              clearProps: "all",
            },
            1.2,
          );
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }),
        );
      }, ref);
      // GSAP has set its own starting values inline, so the guard can go.
      root.classList.remove("intro-pending");
      return () => {
        context.revert();
        if (nav) gsap.set(nav, { clearProps: "opacity,transform" });
      };
    });
    root.classList.remove("intro-pending");
    return () => match.revert();
  }, []);
  return (
    <div ref={ref} className="intro-pending">
      <style>{GUARD}</style>
      {children}
    </div>
  );
}
