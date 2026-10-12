import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-base text-foreground">{site.shortName}</p>
          <p className="mt-1">{site.footer.note}</p>
        </div>

        <div className="flex items-center gap-5">
          {site.footer.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-4 text-center text-xs text-foreground/40 md:px-10">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
