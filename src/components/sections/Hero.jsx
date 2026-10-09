import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button, Card, Container, MetaLabel } from "@/components/ui";
import { about, facts, links, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-[72px] md:pt-28 md:pb-28">
      <Container className="flex flex-col gap-14 md:gap-24">
        <div className="flex flex-col items-start gap-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-[13px] leading-none text-ink-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-success"
            />
            {profile.status}
          </p>

          <h1 className="max-w-[980px] text-[clamp(44px,7vw,84px)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
            I build <span className="accent-word">retrieval</span> and{" "}
            <span className="accent-word">agent</span> systems that hold up in
            production.
          </h1>

          <p className="max-w-[620px] text-[19px] font-light leading-[1.6] text-ink-2">
            {profile.lead}
          </p>

          <div className="flex w-full flex-wrap gap-3 xs:w-auto">
            <Button href="#work">
              See my work
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Button>
            {/* TODO: add public/resume.pdf */}
            <Button variant="secondary" href={profile.resumeUrl} download>
              <Download size={16} strokeWidth={1.8} aria-hidden="true" />
              Download résumé
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {facts.map((fact) => (
              <li key={fact.label}>
                <Card className="flex h-full flex-col gap-1.5 rounded-lg p-6">
                  <MetaLabel>{fact.label}</MetaLabel>
                  <p className="text-[17px] font-medium leading-snug text-ink">
                    {fact.value}
                  </p>
                  <p className="text-sm text-ink-3">{fact.sub}</p>
                </Card>
              </li>
            ))}
          </ul>

          <AboutCard />
        </div>
      </Container>
    </section>
  );
}

const aboutLinks = [
  { label: "Email", href: `mailto:${links.email}`, icon: Mail },
  { label: "GitHub", href: links.github, icon: Github, external: true },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin, external: true },
  { label: "Portfolio", href: links.portfolio, icon: ExternalLink, external: true },
];

function AboutCard() {
  return (
    <Card className="flex flex-wrap gap-10 rounded-2xl p-7 md:p-10">
      <div className="flex flex-[1_1_380px] flex-col gap-4">
        <MetaLabel>About</MetaLabel>
        <p className="text-[17px] font-medium leading-normal text-ink">
          {about.intro}
        </p>
        <p className="text-[15px] text-ink-2">{about.bio}</p>

        <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
          {about.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="text-sm text-ink-3">{metric.label}</dt>
              <dd className="text-[28px] font-medium leading-tight tracking-[-0.02em] text-ink">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {aboutLinks.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
              >
                <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-[1_1_320px] flex-col gap-4">
        <MetaLabel>Key achievements</MetaLabel>
        <ul className="flex flex-col gap-3">
          {about.achievements.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-[15px] text-ink-2 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
