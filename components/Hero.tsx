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

          {/* Lightweight CNN animation: SVG + CSS for fast rendering */}
          <Reveal delay={260}>
            <div className="mt-6 mx-auto max-w-lg rounded-2xl border border-line bg-background/60 px-5 py-4 shadow-sm">
              <div className="mx-auto w-full">
                <svg viewBox="0 0 200 80" className="w-full h-20" aria-hidden>
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0.02" />
                    </linearGradient>
                    <filter id="f" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="0.6" result="b" />
                      <feBlend in="SourceGraphic" in2="b" mode="overlay" />
                    </filter>
                  </defs>

                  {/* Input grid */}
                  <g>
                    {Array.from({ length: 4 }).map((_, r) => (
                      <g key={r} transform={`translate(${8 + r * 18},8)`}>
                        {Array.from({ length: 4 }).map((__, c) => (
                          <rect
                            key={c}
                            x={c * 6}
                            y={0}
                            width={5}
                            height={5}
                            rx={1}
                            fill="#ffffff"
                            fillOpacity={0.06}
                          />
                        ))}
                      </g>
                    ))}
                  </g>

                  {/* Conv layer boxes */}
                  <g>
                    <rect x="86" y="6" width="22" height="22" rx="2" fill="#ffffff" fillOpacity="0.06" />
                    <rect x="112" y="20" width="18" height="18" rx="2" fill="#ffffff" fillOpacity="0.04" />
                    <rect x="136" y="30" width="10" height="10" rx="1" fill="#ffffff" fillOpacity="0.08" />
                  </g>

                  {/* animated activations (circles) */}
                  <g>
                    <circle cx="92" cy="18" r="1.8" fill="#7c3aed">
                      <animate attributeName="r" values="1.2;3;1.2" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="fillOpacity" values="0.6;0.1;0.6" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="118" cy="28" r="1.4" fill="#06b6d4">
                      <animate attributeName="r" values="1;2.8;1" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="141" cy="36" r="1" fill="#10b981">
                      <animate attributeName="r" values="0.8;2.2;0.8" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* arrows */}
                  <g stroke="#fff" strokeOpacity="0.06" strokeWidth="1.2" fill="none">
                    <path d="M56 12 L86 18" />
                    <path d="M100 22 L112 28" />
                    <path d="M128 30 L136 34" />
                  </g>
                </svg>
                <p className="mt-2 font-mono text-xs text-muted">Realtime convolutional activation — conceptual</p>
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
      </div>
    </section>
  );
}
