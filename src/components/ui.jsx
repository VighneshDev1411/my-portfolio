import { ChevronDown } from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }) {
  return (
    <div className={cx("mx-auto w-full max-w-page px-6", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({ number, eyebrow, title, link }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[13px] text-accent">
          {number} — {eyebrow}
        </p>
        <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.03em] text-ink md:text-[44px]">
          {title}
        </h2>
      </div>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-[15px] font-medium"
        >
          {link.label}
        </a>
      )}
    </div>
  );
}

const buttonVariants = {
  primary: "bg-accent text-white hover:bg-accent-hover hover:text-white",
  secondary:
    "border border-border-strong bg-surface text-ink hover:bg-surface-muted hover:text-ink",
  dark: "bg-ink text-white hover:bg-accent-hover hover:text-white",
};

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  ...rest
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-[22px] py-3.5 text-[15px] font-medium leading-none transition-[background-color,transform] duration-200 motion-safe:hover:-translate-y-px max-xs:w-full",
        buttonVariants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Card({ as: Tag = "div", className, children }) {
  return (
    <Tag className={cx("border border-border bg-surface", className)}>
      {children}
    </Tag>
  );
}

export function Pill({ children }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-ink-2">
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-sm bg-chip px-3 py-1.5 font-mono text-xs text-ink-2">
      {children}
    </span>
  );
}

export function IconTile({ icon: Icon }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-medium leading-none text-accent">
      {children}
    </span>
  );
}

export function MetaLabel({ children, className }) {
  return (
    <p
      className={cx(
        "font-mono text-xs uppercase tracking-[0.08em] text-ink-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

// Native <details> disclosure: keyboard accessible with no JS.
export function Disclosure({ summary, children }) {
  return (
    <details className="group">
      <summary className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-accent hover:text-accent-hover">
        <span className="group-open:hidden">{summary}</span>
        <span className="hidden group-open:inline">Show less</span>
        <ChevronDown
          size={16}
          strokeWidth={1.8}
          className="disclosure-icon"
          aria-hidden="true"
        />
      </summary>
      <div className="flex flex-col gap-5 pt-3">{children}</div>
    </details>
  );
}

export function StackLine({ items }) {
  return (
    <p className="font-mono text-xs text-ink-muted">{items.join(" · ")}</p>
  );
}

export { cx };
