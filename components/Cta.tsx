import Link from "next/link";
import Reveal from "./Reveal";

export default function Cta({
  eyebrow = "Laten we praten",
  title,
  body,
  ctaLabel = "Plan een kennismaking",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold/10 via-charcoal to-charcoal py-28 md:py-36">
      <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-7xl text-balance">
            {title}
          </h2>
        </Reveal>
        {body && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              {body}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.3}>
          <Link
            href={ctaHref}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
          >
            {ctaLabel}
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
