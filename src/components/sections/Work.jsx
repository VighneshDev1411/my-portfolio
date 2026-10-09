import { ArrowUpRight } from "lucide-react";
import {
  Badge,
  Card,
  Container,
  Disclosure,
  IconTile,
  MetaLabel,
  SectionHeader,
  StackLine,
  Tag,
} from "@/components/ui";
import Reveal from "@/components/sections/Reveal";
import {
  featuredProject,
  links,
  moreProjects,
  projects,
} from "@/data/portfolio";

export default function Work() {
  return (
    <Reveal as="section" id="work" className="pb-[72px] md:pb-28">
      <Container>
        <SectionHeader
          number="01"
          eyebrow="Selected work"
          title="Featured Projects"
          link={{ label: "All projects on GitHub →", href: links.github }}
        />

        <div className="flex flex-col gap-5">
          <FeaturedProject project={featuredProject} />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
            <ProjectCard project={moreProjects} />
          </div>
        </div>
      </Container>
    </Reveal>
  );
}

function ProjectLinks({ project }) {
  if (!project.links?.length && !project.note) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-5">
      {project.links?.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.href}
            href={link.href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            aria-label={`${link.label}: ${project.title}`}
            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium"
          >
            {link.label}
            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        );
      })}
      {project.note && (
        <span className="font-mono text-xs text-ink-muted">{project.note}</span>
      )}
    </div>
  );
}

function ProjectDetails({ project }) {
  if (!project.features) return null;
  return (
    <Disclosure summary="More details">
      {project.summary && (
        <p className="text-[15px] text-ink-2">{project.description}</p>
      )}
      <div className="flex flex-col gap-2">
        <MetaLabel>{project.featuresLabel}</MetaLabel>
        <ul className="flex flex-col gap-1.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="relative pl-4 text-sm text-ink-2 before:absolute before:top-[0.65em] before:left-0 before:size-1 before:rounded-full before:bg-ink-muted"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface-muted p-5">
        <MetaLabel>{project.highlightsLabel}</MetaLabel>
        <p className="text-sm text-ink-2">{project.highlights}</p>
      </div>
    </Disclosure>
  );
}

function FeaturedProject({ project }) {
  return (
    <Card
      as="article"
      className="flex flex-wrap items-center gap-10 rounded-2xl p-7 md:p-10"
    >
      <div className="flex flex-[1_1_380px] flex-col gap-[18px]">
        <Badge>{project.tag}</Badge>
        <div className="flex flex-col gap-1">
          <h3 className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">
            {project.title}
          </h3>
          <p className="text-[15px] text-ink-3">{project.subtitle}</p>
        </div>
        <p className="text-ink-2">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <ProjectLinks project={project} />
        <ProjectDetails project={project} />
      </div>

      <div className="flex min-h-[280px] flex-[1_1_360px] flex-col justify-center gap-5 self-stretch rounded-lg border border-border bg-surface-muted p-7">
        <MetaLabel>Review pipeline</MetaLabel>
        <ol className="flex flex-col">
          {project.pipeline.map((step, i) => {
            const last = i === project.pipeline.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className={
                      last
                        ? "flex size-7 shrink-0 items-center justify-center rounded-sm bg-accent font-mono text-[11px] text-white"
                        : "flex size-7 shrink-0 items-center justify-center rounded-sm border border-border-strong bg-surface font-mono text-[11px] text-ink-2"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      last
                        ? "font-mono text-[13px] font-medium text-ink"
                        : "font-mono text-[13px] text-ink-2"
                    }
                  >
                    {step}
                  </span>
                </div>
                {!last && (
                  <span
                    aria-hidden="true"
                    className="ml-[13.5px] h-4 w-px bg-border-strong"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </Card>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      as="article"
      className="flex flex-col gap-3.5 rounded-xl p-8 transition-[transform,border-color] duration-[250ms] ease-out hover:border-border-strong motion-safe:hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile icon={project.icon} />
        {project.tag && <MetaLabel>{project.tag}</MetaLabel>}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.015em] text-ink">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm text-ink-3">{project.subtitle}</p>
        )}
      </div>
      <p className="grow text-[15px] text-ink-2">
        {project.summary ?? project.description}
      </p>
      <StackLine items={project.stack} />
      <ProjectLinks project={project} />
      <ProjectDetails project={project} />
    </Card>
  );
}
