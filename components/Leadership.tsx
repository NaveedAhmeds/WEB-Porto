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
            <article className="group">
              <div className="relative">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line md:aspect-[5/6]">
            <Image
              src={item.image}  
              alt="Abstract neural-network architecture"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-muted">
                <span className="text-ink/70">{item.type}</span>
                <span className="h-px w-5 bg-line" />
                <span>{item.period}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
