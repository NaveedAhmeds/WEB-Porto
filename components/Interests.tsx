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

      <div className="grid border-t border-line sm:grid-cols-2 sm:gap-x-12">
        {interests.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 60} className="h-full">
            <div className="flex h-full gap-5 border-b border-line py-7">
              <span className="pt-0.5 font-mono text-xs text-muted">{item.index}</span>
              <div className="flex flex-col">
                <h3 className="text-base font-medium tracking-tight text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.blurb}</p>
                <p className="mt-3 border-l border-line pl-3 text-[13px] italic leading-relaxed text-ink/55">
                  {item.why}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
