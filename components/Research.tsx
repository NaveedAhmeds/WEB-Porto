"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { researchNotes, type ResearchNote } from "@/lib/content";

export default function Research() {
  const [open, setOpen] = useState<ResearchNote | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section
      id="research"
      className="border-y border-line bg-surface px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-content">
        <SectionHeader
          number="02"
          label="Research & Notes"
          title="Working notes on the systems I'm building and breaking."
          description="Not blog posts but rather running observations on AI, security, and how modern systems behave under pressure. Open one for my full take."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {researchNotes.map((note, i) => (
            <Reveal
              as="article"
              key={note.title}
              delay={(i % 3) * 60}
              className="bg-background"
            >
              <button
                type="button"
                onClick={() => setOpen(note)}
                className="group flex h-full w-full flex-col p-7 text-left transition-colors duration-300 hover:bg-surface-hover"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-label text-muted">
                  <span className="text-ink/70">{note.category}</span>
                  <span>{note.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink">
                  {note.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {note.insight}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-label text-muted transition-colors duration-200 group-hover:text-ink">
                  Read note
                  <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          <div className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-auto rounded-t-3xl border border-line bg-background p-7 shadow-lift sm:rounded-2xl md:p-9">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-surface-hover hover:text-ink"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-muted">
              <span className="text-ink/70">{open.category}</span>
              <span className="h-px w-6 bg-line" />
              <span>{open.date}</span>
            </div>

            <h3 className="mt-4 max-w-md text-xl font-medium leading-tight tracking-tight text-ink md:text-2xl">
              {open.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{open.insight}</p>

            <div className="mt-7 border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-label text-muted">
                My take
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
                {open.take}
              </p>
            </div>

            {(open.source || open.video) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {open.source && (
                  <a
                    href={open.source.url}
                    target={open.source.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:shadow-lift"
                  >
                    {open.source.label}
                    <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                )}
                {open.video && (
                  <a
                    href={open.video.url}
                    target={open.video.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface-hover"
                  >
                    {open.video.label} ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
