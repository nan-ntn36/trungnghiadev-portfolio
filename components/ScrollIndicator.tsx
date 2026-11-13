"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
export default function ScrollIndicator() {
  const { t } = useLanguage();
  const arrow = useRef<SVGGElement>(null);
  useEffect(() => {
    let cancelled = false;
    let media: ReturnType<typeof import("gsap")["gsap"]["matchMedia"]> | undefined;
    async function setup() {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ repeat: -1, repeatDelay: .35 })
          .fromTo(arrow.current, { y: -4, opacity: 0 }, { y: 0, opacity: 1, duration: .35, ease: "power1.out" })
          .to(arrow.current, { y: 12, opacity: 0, duration: .9, ease: "power1.in" });
      });
    }
    setup().catch(() => {});
    return () => { cancelled = true; media?.revert(); };
  }, []);
  return <a className="scene-scroll" href="#expertise" aria-label={t.scroll}><span>{t.scroll}</span><svg className="scroll-mouse" width="60" height="72" viewBox="0 0 60 72" fill="none" aria-hidden="true"><rect x="12" y="3" width="36" height="64" rx="18" stroke="currentColor" strokeWidth="1.2" /><g ref={arrow} stroke="#B36CFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M30 22v20m-6-6 6 6 6-6" /></g></svg></a>;
}
