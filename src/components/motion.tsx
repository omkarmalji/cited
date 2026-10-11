"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Motion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const match = gsap.matchMedia();
    match.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.from("[data-enter]", {
          y: 22,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]")
          .forEach((el) =>
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
      return () => context.revert();
    });
    return () => match.revert();
  }, []);
  return <div ref={ref}>{children}</div>;
}
