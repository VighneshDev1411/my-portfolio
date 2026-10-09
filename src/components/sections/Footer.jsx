import { footer, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-page flex-wrap justify-between gap-x-6 gap-y-2 px-6 pt-6 pb-12 text-[13px] text-ink-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono">{footer.note}</p>
    </footer>
  );
}
