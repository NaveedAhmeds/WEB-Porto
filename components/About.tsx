import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
      <SectionHeader number="01" label="About" />
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="max-w-2xl space-y-6">
          {about.body.map((para, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-lg leading-relaxed text-ink/90 first:text-xl first:text-ink">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} blur>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line md:aspect-[5/6]">
            <Image
              src="/about.png"
              alt="Abstract neural-network architecture"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
