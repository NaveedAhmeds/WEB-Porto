import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { interests } from "@/lib/content";

export default function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
      <SectionHeader
        number="06"
        label="Areas of Interest"
        title="Where software engineering, intelligence, and security meet."
      />

      <div className="grid gap-6 border-t border-line sm:grid-cols-2 sm:gap-x-8">
        {interests.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 60} className="h-full">
            <div className="rounded-lg border border-line bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-md bg-surface px-3 py-2 font-mono text-sm text-muted">{item.index}</div>
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  <p className="mt-3 text-[13px] italic leading-relaxed text-ink/70">{item.why}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
