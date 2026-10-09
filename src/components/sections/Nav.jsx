"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cx } from "@/components/ui";
import { profile } from "@/data/portfolio";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-nav backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-6 py-[18px]"
      >
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-2.5 text-ink hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-[10px] bg-accent-soft font-mono text-[13px] font-medium text-accent"
          >
            {profile.initials}
          </span>
          <span className="font-semibold tracking-[-0.01em]">
            {profile.name}
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav-links"
          className="flex size-11 items-center justify-center rounded-md text-ink hover:bg-surface xs:hidden"
        >
          {open ? (
            <X size={20} strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.8} aria-hidden="true" />
          )}
          <span className="sr-only">Menu</span>
        </button>

        <ul
          id="primary-nav-links"
          className={cx(
            "w-full flex-col gap-1 xs:flex xs:w-auto xs:flex-row xs:items-center",
            open ? "flex" : "hidden"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="flex min-h-11 items-center rounded-full px-3.5 py-2.5 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 xs:pt-0 xs:pl-1">
            <a
              href="#contact"
              onClick={close}
              className="flex min-h-11 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover hover:text-bg"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
