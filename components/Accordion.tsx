"use client";
import { useEffect, useId, useRef, useState } from "react";

export default function Accordion({ title, children, initialOpen = false }: {
  title: React.ReactNode;
  children: React.ReactNode;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = panel.current;
    const inner = content.current;
    if (!node || !inner) return;
    let cancelled = false;
    let tween: { kill: () => void } | undefined;
    const settled = () => {
      if (open) node.style.height = "auto";
      window.dispatchEvent(new Event("portfolio:layout"));
    };
    // Freeze the current rendered height before animating from auto or reversing.
    node.style.height = `${node.getBoundingClientRect().height}px`;
    const animate = async () => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        node.style.height = open ? "auto" : "0px";
        settled();
        return;
      }
      const { gsap } = await import("gsap");
      if (cancelled) return;
      tween = gsap.to(node, {
        height: open ? inner.scrollHeight : 0,
        duration: .36,
        ease: "power2.inOut",
        overwrite: "auto",
        onComplete: settled,
      });
    };
    animate();
    return () => { cancelled = true; tween?.kill(); };
  }, [open]);

  return <div className={`smooth-accordion ${open ? "is-open" : ""}`}>
    <h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
      {title}<span aria-hidden="true">{open ? "−" : "+"}</span>
    </button></h3>
    <div id={id} ref={panel} className="accordion-panel" inert={!open} style={{ height: initialOpen ? "auto" : 0 }}>
      <div ref={content} className="accordion-inner">{children}</div>
    </div>
  </div>;
}
