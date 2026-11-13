"use client";
import { useEffect, useRef } from "react";
export default function CustomCursor() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    let media: ReturnType<typeof import("gsap")["gsap"]["matchMedia"]> | undefined;
    async function setup() {
      const { gsap } = await import("gsap");
      if (cancelled || !root.current) return;
      const cursor = root.current;
      media = gsap.matchMedia();
      media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const ring = cursor.querySelector(".cursor-ring");
        const x = gsap.quickTo(cursor, "x", { duration: .12, ease: "power3.out" });
        const y = gsap.quickTo(cursor, "y", { duration: .12, ease: "power3.out" });
        const scaleX = gsap.quickTo(ring, "scaleX", { duration: .22, ease: "power2.out" });
        const scaleY = gsap.quickTo(ring, "scaleY", { duration: .22, ease: "power2.out" });
        let shown = false;
        const hide = () => { cursor.style.visibility = "hidden"; document.documentElement.classList.remove("custom-cursor-active"); shown = false; };
        const move = (event: PointerEvent) => {
          if (event.pointerType === "touch") { hide(); return; }
          const target = event.target instanceof Element ? event.target : null;
          if (target?.closest("input,textarea,select,[contenteditable=true],.editor-code")) { hide(); return; }
          if (!shown) { gsap.set(cursor, { x: event.clientX, y: event.clientY }); x.tween.invalidate(); y.tween.invalidate(); cursor.style.visibility = "visible"; document.documentElement.classList.add("custom-cursor-active"); shown = true; }
          x(event.clientX); y(event.clientY);
          const interactive = Boolean(target?.closest("a,button,.editorial-project,.editor-scroll-layer"));
          scaleX(interactive ? 1.5 : 1); scaleY(interactive ? 1.5 : 1);
          cursor.dataset.interactive = String(interactive);
        };
        window.addEventListener("pointermove", move, { passive: true });
        document.addEventListener("pointerleave", hide);
        window.addEventListener("blur", hide);
        return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", hide); window.removeEventListener("blur", hide); x.tween.kill(); y.tween.kill(); scaleX.tween.kill(); scaleY.tween.kill(); hide(); };
      });
    }
    setup().catch(() => {});
    return () => { cancelled = true; media?.revert(); };
  }, []);
  return <div ref={root} className="custom-cursor" aria-hidden="true"><span className="cursor-ring" /><span className="cursor-dot" /></div>;
}

