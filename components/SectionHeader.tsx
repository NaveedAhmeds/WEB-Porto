import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  number: string; // "01"
  label: string; // "About"
  title?: string; // optional larger heading line
  description?: string;
};

export default function SectionHeader({
  number,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-label text-muted">
          <span>{number}</span>
          <span className="h-px w-8 bg-line" />
          <span>{label}</span>
        </div>
        {title && (
          <h2 className="mt-5 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
