import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image = "/images/gm-zaal.jpg",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-44 md:pb-32 md:pt-56">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-zoom opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.4rem,6vw,5.4rem)] font-medium leading-[1.05] tracking-tightest text-cream text-balance">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
