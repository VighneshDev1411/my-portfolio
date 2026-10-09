import { Container, Pill, SectionHeader } from "@/components/ui";
import Reveal from "@/components/sections/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="pb-[72px] md:pb-28">
      <Container>
        <SectionHeader number="03" eyebrow="Toolkit" title="Technical Skills" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-5 gap-y-9">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <h3 className="text-[15px] font-medium text-ink">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <Pill>{skill}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Reveal>
  );
}
