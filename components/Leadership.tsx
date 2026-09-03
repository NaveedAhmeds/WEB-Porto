import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { leadership } from "@/lib/content";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
      <SectionHeader
        number="05"
        label="Leadership & Hackathons"
        title="Building under constraints, and staying close to where the field is moving."
      />

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {leadership.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 70}>
            <article className="flex h-full flex-col items-stretch gap-4 rounded-2xl border border-line bg-background p-6 transition-shadow hover:shadow-lift">
              <div className="relative overflow-hidden rounded-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="mt-1 flex flex-col gap-2 text-center">
                <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-label text-muted">
                  <span className="text-ink/70">{item.type}</span>
                  <span className="h-px w-5 bg-line" />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
