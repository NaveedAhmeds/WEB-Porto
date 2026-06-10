import Reveal from "@/components/Reveal";
import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[88vh] max-w-content items-center px-6 pt-32 pb-20 md:px-8 md:pt-40">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        {/* Left — content */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-muted">
              AI / ML · Security
            </p>
          </Reveal>

          <Reveal delay={80} blur>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/90">
              {hero.statement}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {hero.subStatement}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <a
                href={hero.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:gap-3 hover:shadow-lift"
              >
                {hero.cta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                >
                  ↓
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — AI artwork */}
        <Reveal delay={200} blur>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line md:aspect-[5/6]">
            <Image
              src="/direction.png"
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
