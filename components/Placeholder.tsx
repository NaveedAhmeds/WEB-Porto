import { type CSSProperties } from "react";

type PlaceholderProps = {
  /** mono caption shown in the corner, e.g. "FIG.01 — NEURAL ARCHITECTURE" */
  caption: string;
  /** tailwind aspect ratio class, e.g. "aspect-square" | "aspect-[4/3]" */
  className?: string;
  style?: CSSProperties;
};

/**
 * A refined, intentional placeholder for AI-generated artwork.
 * Renders a clean framed surface with a hairline grid + mono caption,
 * so empty image slots read as "wireframe", never as "broken".
 *
 * To ship real art: drop the file in /public/images and replace this
 * component usage with next/image (see README).
 */
export default function Placeholder({
  caption,
  className = "aspect-[4/3]",
  style,
}: PlaceholderProps) {
  return (
    <div
      style={style}
      className={`relative w-full overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
      {/* hairline grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(#ECECEC 1px, transparent 1px), linear-gradient(90deg, #ECECEC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 78%)",
        }}
      />
      {/* center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border border-line" />
      </div>
      {/* caption */}
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-label text-muted">
        {caption}
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-label text-muted">
        placeholder
      </span>
    </div>
  );
}
