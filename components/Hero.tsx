import Reveal from "@/components/Reveal";
import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[72vh] w-full max-w-content items-center justify-center px-6 pt-28 pb-16 md:px-8 md:pt-36">
      <div className="w-full max-w-4xl">
        <div className="w-full">
        {/* Centered content */}
        <div className="mx-auto w-full max-w-2xl text-center">
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
            <p className="mt-7 text-base leading-relaxed text-ink/90">
              {hero.statement}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {hero.subStatement}
            </p>
          </Reveal>

          {/* Minimal syntax-highlighted code block */}
          <Reveal delay={260}>
            <div className="mt-6 mx-auto max-w-lg rounded-2xl border border-line bg-background/60 px-5 py-4 shadow-sm">
              <div className="mx-auto w-full font-mono text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  <code>
                    <span className="text-indigo-600">const </span>
                    <span className="text-ink">model</span>
                    <span className="text-ink"> = </span>
                    <span className="text-sky-500">await </span>
                    <span className="text-emerald-500">import</span>
                    <span className="text-rose-500">("ml-model")</span>
                    <span className="text-ink">;</span>
                    {'\n'}
                    <span className="text-sky-500">await </span>
                    <span className="text-ink">model.train</span>
                    <span className="text-ink">({'{'} </span>
                    <span className="text-orange-500">epochs</span>
                    <span className="text-ink">: </span>
                    <span className="text-orange-500">3</span>
                    <span className="text-ink"> {'}'} )</span>
                    <span className="text-ink">;</span>
                    {'\n'}
                    <span className="text-indigo-600">deploy</span>
                    <span className="text-ink">(</span>
                    <span className="text-rose-500">'edge'</span>
                    <span className="text-ink">);</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex justify-center">
              <a
                href={hero.cta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:shadow-lift"
              >
                {hero.cta.label}
                <span aria-hidden className="opacity-90">↓</span>
              </a>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
