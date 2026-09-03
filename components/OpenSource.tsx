"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { contributions, type Contribution } from "@/lib/content";

function Links({ demo, repo }: { demo?: string; repo?: string }) {
  if (!demo && !repo) return null;
  const ext = (h: string) => (h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
  return (
    <div className="flex flex-wrap gap-3 md:justify-end">
      {demo && (
        <a
          href={demo}
          {...ext(demo)}
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:shadow-lift"
        >
          Live
          <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↗</span>
        </a>
      )}
      {repo && (
        <a
          href={repo}
          {...ext(repo)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface-hover"
        >
          Source
          <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↗</span>
        </a>
      )}
    </div>
  );
}

function Row({ c }: { c: Contribution }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && panelRef.current) panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [open]);

  return (
    <div className="grid gap-x-10 gap-y-5 border-b border-line py-8 md:grid-cols-[1fr_auto]">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-medium tracking-tight text-ink">{c.name}</h3>
          {c.tag && (
            <span className="rounded-full bg-ink px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-label text-white">
              {c.tag}
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-label text-muted">{c.role}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{c.summary}</p>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-transparent px-3 py-1.5 font-mono text-[11px] text-muted transition-colors duration-200 hover:bg-surface-hover"
          >
            {open ? "Hide" : "Details"}
            <span className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▾</span>
          </button>

          {c.tech && c.tech.length > 0 && (
            <div className="ml-2 hidden items-center gap-2 md:flex">
              {c.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {open && (
          <div ref={panelRef} className="mt-4 rounded-lg border border-line bg-background p-4">
            <p className="text-sm leading-relaxed text-ink/90">{c.summary}</p>
            {c.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="md:pt-1">
        <Links demo={c.demo} repo={c.repo} />
      </div>
    </div>
  );
}

export default function OpenSource() {
  return (
    <section id="open-source" className="border-t border-line px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          number="04"
          label="Open Source Contributions"
          title="My work in public contributions and collaborative builds."
        />
        <div className="border-t border-line">
          {contributions.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <Row c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
