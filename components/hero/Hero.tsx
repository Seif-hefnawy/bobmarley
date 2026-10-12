import { site } from "@/data/site";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Hero() {
  const lines = site.hero.heading.split("\n");
  

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-foreground"
    >
      {/* Background image — focal point shifted right on small screens so the cup stays visible */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src={site.hero.image}
          alt=""
          priority
          sizes="100vw"
          className="object-[77%_50%] md:object-center"
        />
      </div>

      {/* Overlay: darker on the left and bottom where the text sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10 md:bg-gradient-to-r md:from-foreground/85 md:via-foreground/45 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-foreground/60 to-transparent"
      />

      <div className="relative z-20 mx-auto w-full max-w-content px-6 pb-14 pt-32 md:px-10 md:pb-24 ">
        <p className="text-sm tracking-wide text-background/80">{site.hero.eyebrow}</p>
        <h1 className="mt-5 font-display text-[3rem] leading-[1.02] text-background sm:text-[4rem] md:text-[5.6rem]">
          {lines.map((line, i) => (
            <span key={i} className={`block ${i > 0 ? "italic text-accent-soft" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-relaxed text-background/80 md:text-[1.15rem]">
          {site.hero.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={site.hero.ctaHref}
            className="inline-flex h-12 items-center bg-background px-7 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent-soft"
          >
            {site.hero.ctaLabel}
          </a>
          <a
            href={site.hero.secondaryHref}
            className="border-b border-background/70 pb-0.5 text-sm text-background transition-opacity duration-200 hover:opacity-70"
          >
            {site.hero.secondaryLabel}
          </a>
        </div>

        
      </div>
    </section>
  );
}
