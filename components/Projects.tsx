import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Placeholder from "@/components/Placeholder";
import { projects, projectCategories, type Project } from "@/lib/content";

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-label text-muted">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/90">{body}</p>
    </div>
  );
}

function TechRow({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Links({ demo, repo }: { demo?: string; repo?: string }) {
  if (!demo && !repo) return null;
  const ext = (h: string) => (h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
  return (
    <div className="flex flex-wrap gap-3">
      {demo && (
        <a
          href={demo}
          {...ext(demo)}
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out-expo hover:shadow-lift"
        >
          Live demo
          <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↗</span>
        </a>
      )}
      {repo && (
        <a
          href={repo}
          {...ext(repo)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface-hover"
        >
          Source
          <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↗</span>
        </a>
      )}
    </div>
  );
}

function ProjectRow({ project, imageFirst }: { project: Project; imageFirst: boolean }) {
  return (
    <Reveal>
      <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
       <div className={imageFirst ? "md:order-1" : "md:order-2"}>
          {project.image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.figure}`}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <Placeholder caption={`FIG.${project.index} — ${project.figure}`} className="aspect-[4/3]" />
          )}
        </div>
        <div className={imageFirst ? "md:order-2" : "md:order-1"}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-muted">
            <span>{project.index}</span>
            <span className="h-px w-6 bg-line" />
            <span>{project.domain}</span>
          </div>
          <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-muted">{project.tagline}</p>

          <div className="mt-7 space-y-5">
            <CaseBlock label="Problem" body={project.problem} />
            <CaseBlock label="Approach" body={project.approach} />
            <CaseBlock label="Impact" body={project.impact} />
          </div>
          <div className="mt-7 space-y-5">
            <TechRow tech={project.tech} />
            <Links demo={project.demo} repo={project.repo} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  let alt = -1;
  return (
    <section id="projects" className="border-t border-line px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader number="03" label="Selected Projects" title="A few systems, told as case studies." />

        <div className="space-y-20 md:space-y-28">
          {projectCategories.map((category) => {
            const group = projects.filter((p) => p.category === category);
            if (group.length === 0) return null;
            return (
              <div key={category}>
                <Reveal>
                  <div className="mb-12 flex items-baseline gap-5">
                    <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {category}
                    </h3>
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-mono text-[11px] uppercase tracking-label text-muted">
                      {String(group.length).padStart(2, "0")}{" "}
                      {group.length === 1 ? "project" : "projects"}
                    </span>
                  </div>
                </Reveal>
                <div className="space-y-20 md:space-y-28">
                  {group.map((project) => {
                    alt += 1;
                    return (
                      <ProjectRow key={project.index} project={project} imageFirst={alt % 2 === 0} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
