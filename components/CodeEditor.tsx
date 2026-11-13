"use client";
import { useEffect, useMemo, useRef } from "react";
import { name, jobTitle, profile, projects } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function CodeEditor() {
  const { t } = useLanguage();
  const root = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const rows = useMemo(() => [
    `// ${t.codeComment}`,
    "export const developer = {",
    `  name: ${JSON.stringify(name)},`,
    `  role: ${JSON.stringify(jobTitle)},`,
    '  frontend: ["React", "Next.js", "TypeScript"],',
    `  backend: ${JSON.stringify(profile.backend.slice(0, 2))},`,
    `  database: ${JSON.stringify(profile.database.slice(0, 2))},`,
    `  projects: ${JSON.stringify(projects.map(p => p.name))},`,
    "} satisfies Record<string, string | string[]>;",
  ], [t.codeComment]);

  useEffect(() => {
    const node = root.current;
    if (!node || played.current) return;
    let cancelled = false;
    let media: ReturnType<typeof import("gsap")["gsap"]["matchMedia"]> | undefined;
    const chars = Array.from(node.querySelectorAll<HTMLElement>(".code-char"));
    const caret = document.createElement("span");
    caret.className = "typing-caret";
    caret.ariaHidden = "true";
    const reveal = () => {
      chars.forEach(char => char.style.removeProperty("visibility"));
      caret.remove();
      node.dataset.typing = "complete";
    };
    async function setup() {
      try {
        const { gsap } = await import("gsap");
        if (cancelled || !node) return;
        played.current = true;
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) { reveal(); return; }
        media = gsap.matchMedia();
        media.add("(prefers-reduced-motion: no-preference)", () => {
          if (node.dataset.typing === "complete") return;
          chars.forEach(char => { char.style.visibility = "hidden"; });
          node.dataset.typing = "active";
          let visible = 0;
          const progress = { count: 0 };
          const timeline = gsap.timeline({ onComplete: reveal });
          timeline.to(progress, {
            count: chars.length, duration: 2.6, ease: "none",
            onUpdate: () => {
              const next = Math.floor(progress.count);
              for (; visible < next; visible++) chars[visible].style.visibility = "visible";
              if (visible) chars[visible - 1].appendChild(caret);
            },
          }, .12);
          return reveal;
        });
      } catch { reveal(); }
    }
    setup();
    return () => { cancelled = true; media?.revert(); if (played.current) reveal(); };
  }, [rows]);

  const highlight = (line: string) => {
    const tokens = line.startsWith("//") ? [line] : line.split(/("[^"\n]*"|\b(?:export|const|satisfies|Record|string)\b|\bdeveloper\b|\b\w+(?=:))/g);
    return tokens.map((part, index) => {
      const type = part.startsWith("//") ? "comment" : part.startsWith('"') ? "string" : /^(export|const|satisfies)$/.test(part) ? "keyword" : /^(Record|string)$/.test(part) ? "type" : part === "developer" ? "variable" : /^\w+$/.test(part) ? "property" : "plain";
      return <span key={index} className={`token-${type}`}>{Array.from(part).map((char, i) => <span className="code-char" key={i}>{char}</span>)}</span>;
    });
  };
  return <div className="editor-scroll-layer"><div className="editor-entrance"><div ref={root} className="editor-tilt" role="region" aria-label={t.editorLabel}>
    <div className="editor-toolbar"><span className="window-controls" aria-hidden="true"><i /><i /><i /></span><span className="editor-tab">DeveloperProfile.ts</span><span className="editor-language" aria-hidden="true">TS</span></div>
    <pre className="editor-accessible-code">{rows.join("\n")}</pre>
    <pre className="editor-code" aria-hidden="true"><code>{rows.map((row, index) => <span className="code-line" key={index}><span className="line-number">{index + 1}</span><span className="line-source">{highlight(row)}</span></span>)}</code></pre>
  </div></div></div>;
}

