import Reveal from "@/components/Reveal";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-content items-center px-6 pt-32 pb-20 md:px-8 md:pt-40">
      <div className="w-full">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-muted">AI / ML · Security</p>
          </Reveal>

          <Reveal delay={80} blur>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-lg leading-relaxed text-ink/90">{hero.statement}</p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-base leading-relaxed text-muted">{hero.subStatement}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-6 max-w-md rounded-2xl border border-line bg-white/30 backdrop-blur-sm px-4 py-3">
              <pre className="font-mono text-sm text-ink/90 leading-6">
                <code>
                  <span className="text-sky-400">const</span> model <span className="text-muted">=</span>{' '}
                  <span className="text-emerald-400">await</span> import(
                  <span className="text-amber-300">"ml-model"</span>
                  );
                  <br />
                  <span className="text-emerald-400">await</span> model.train({'{'}
                  <span className="text-rose-400"> epochs</span>: <span className="text-emerald-300">3</span>
                  {'}'});
                  <br />
                  <span className="text-sky-400">deploy</span>(<span className="text-amber-300">'edge'</span>)
                </code>
              </pre>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <a
                href={hero.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:gap-3 hover:shadow-lift"
              >
                {hero.cta.label}
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↓</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
