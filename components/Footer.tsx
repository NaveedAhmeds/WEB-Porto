import { footer, profile, now } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-12 md:px-8">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl">
          <div className="relative -mt-8 flex items-center justify-center">
            <div className="z-10 w-full rounded-full border border-line bg-background/70 px-6 py-3 shadow-md backdrop-blur-sm">
              <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <div className="text-center md:text-left">
                  <p className="text-sm font-medium text-ink">{profile.shortName}</p>
                  <p className="mt-1 text-sm text-muted">{footer.tagline}</p>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-4">
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
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-content text-center font-mono text-[11px] uppercase tracking-label text-muted/70">
            © {year} {profile.shortName} · Updated {now.updated}
          </p>
        </div>
      </div>
    </footer>
  );
}
