import { Card, Container, Pill, SectionHeader } from "@/components/ui";
import Reveal from "@/components/sections/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="pb-[72px] md:pb-28">
      <Container>
        <SectionHeader number="03" eyebrow="Toolkit" title="Technical Skills" />

        <Card className="rounded-2xl px-5 py-1 md:px-8 md:py-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-wrap gap-x-8 gap-y-3 border-b border-divider py-6 last:border-b-0"
            >
              <h3 className="flex-[0_0_180px] pt-2 text-[15px] font-medium leading-tight text-ink">
                {group.label}
              </h3>
              <ul className="flex min-w-0 flex-[1_1_400px] flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <Pill>{skill}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      </Container>
    </Reveal>
  );
}
