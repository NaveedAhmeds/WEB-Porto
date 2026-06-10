import Reveal from "@/components/Reveal";
import { now } from "@/lib/content";

export default function Now() {
  return (
    <section id="now" className="border-y border-line px-6 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-content">
        <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-label text-muted">
          <span className="text-ink/60">Now</span>
          <span className="h-px w-6 bg-line" />
          <span>Updated {now.updated}</span>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          <Reveal>
            <div className="md:border-r md:border-line md:pr-12">
              <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                Current Focus
              </p>
              <ul className="mt-4 space-y-2.5">
                {now.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-baseline gap-3 text-sm leading-snug text-ink/90"
                  >
                    <span className="text-[11px] text-muted/70">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                Recently Exploring
              </p>
              <ul className="mt-4 space-y-2.5">
                {now.exploring.map((e) => (
                  <li
                    key={e}
                    className="flex items-baseline gap-3 text-sm leading-snug text-muted"
                  >
                    <span className="text-line">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
