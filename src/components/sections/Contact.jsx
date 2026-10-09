import { Github, Linkedin, Mail } from "lucide-react";
import { Button, Container } from "@/components/ui";
import Reveal from "@/components/sections/Reveal";
import { contact, links } from "@/data/portfolio";

export default function Contact() {
  return (
    <Reveal as="section" id="contact" className="pb-[72px] md:pb-28">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-surface-tint p-[clamp(40px,6vw,80px)] max-xs:px-6">
          <p className="font-mono text-[13px] text-accent">04 — Contact</p>
          <h2 className="text-[clamp(36px,5vw,60px)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
            Let&apos;s Work <span className="accent-word">Together</span>
          </h2>
          <p className="max-w-[520px] text-[17px] text-ink-2">
            {contact.paragraph}
          </p>

          <div className="flex w-full flex-wrap gap-3 xs:w-auto">
            <Button variant="dark" href={`mailto:${links.email}`}>
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
              Send me an email
            </Button>
            <Button variant="secondary" href={links.linkedin} external>
              <Linkedin size={16} strokeWidth={1.8} aria-hidden="true" />
              LinkedIn
            </Button>
            <Button variant="secondary" href={links.github} external>
              <Github size={16} strokeWidth={1.8} aria-hidden="true" />
              GitHub
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs break-all text-ink-muted">
            <li>{links.email}</li>
            <li>{links.githubLabel}</li>
            <li>{links.linkedinLabel}</li>
          </ul>
        </div>
      </Container>
    </Reveal>
  );
}
