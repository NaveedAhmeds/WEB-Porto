import { footer, profile, now } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{profile.shortName}</p>
          <p className="mt-1 text-sm text-muted">{footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-content font-mono text-[11px] uppercase tracking-label text-muted/70">
        © {year} {profile.shortName} · Updated {now.updated}
      </p>
    </footer>
  );
}
