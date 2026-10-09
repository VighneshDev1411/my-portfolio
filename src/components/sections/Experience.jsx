import {
  Card,
  Container,
  Disclosure,
  MetaLabel,
  SectionHeader,
  Tag,
} from "@/components/ui";
import Reveal from "@/components/sections/Reveal";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Reveal as="section" id="experience" className="pb-[72px] md:pb-28">
      <Container>
        <SectionHeader
          number="02"
          eyebrow="Experience"
          title="Professional Experience"
        />

        <Card className="rounded-2xl px-5 py-1 md:px-8 md:py-2">
          <ol>
            {experience.map((job) => (
              <ExperienceRow key={`${job.company}-${job.dates}`} job={job} />
            ))}
          </ol>
        </Card>

        <div className="mt-8 flex flex-col gap-3">
          <MetaLabel>Education</MetaLabel>
          <ul className="flex flex-col gap-3">
            {education.map((item) => (
              <li
                key={item.degree}
                className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] text-ink-2"
              >
                <span className="font-medium text-ink">{item.degree}</span>
                <span>{item.school}</span>
                <span className="font-mono text-[13px] leading-[1.85] text-ink-muted">
                  {item.dates}
                </span>
                {item.coursework && (
                  <span className="basis-full text-sm text-ink-3">
                    Coursework: {item.coursework}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Reveal>
  );
}

function ExperienceRow({ job }) {
  return (
    <li className="flex flex-wrap gap-x-8 gap-y-2 border-b border-divider py-7 last:border-b-0">
      <div className="flex flex-[0_0_180px] flex-col gap-1 pt-1 font-mono text-[13px] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          {job.current && (
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-success"
            />
          )}
          {job.dates}
        </span>
        {job.location && <span>{job.location}</span>}
      </div>

      <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-1.5">
        <h3 className="text-[19px] font-medium leading-[1.4] text-ink">
          {job.role} · {job.company}
        </h3>
        <p className="text-[15px] text-ink-2">
          {job.summaryLabel && (
            <span className="font-medium text-ink">{job.summaryLabel}: </span>
          )}
          {job.summary}
        </p>

        <Disclosure summary="Key contributions & stack">
          <ul className="flex flex-col gap-3">
            {job.contributions.map((item) => (
              <li
                key={item.text}
                className="relative pl-4 text-[15px] text-ink-2 before:absolute before:top-[0.7em] before:left-0 before:size-1 before:rounded-full before:bg-ink-muted"
              >
                {item.title && (
                  <span className="font-medium text-ink">{item.title}: </span>
                )}
                {item.text}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <MetaLabel>Tech stack</MetaLabel>
            <ul className="flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>

          {job.clients && (
            <div className="flex flex-col gap-2">
              <MetaLabel>Enterprise clients</MetaLabel>
              <ul className="flex flex-wrap gap-2">
                {job.clients.map((client) => (
                  <li key={client}>
                    <Tag>{client}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Disclosure>
      </div>
    </li>
  );
}
