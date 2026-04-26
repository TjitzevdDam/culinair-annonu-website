import Link from "next/link";
import Reveal from "./Reveal";
import type { Dict, Locale } from "@/lib/dict";
import { pathFor } from "@/lib/dict";

export default function ServicesGrid({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.servicesGrid;
  const services = t.items;
  const servicesPath = pathFor("services", locale);
  const brandEventsPath = pathFor("brandEvents", locale);

  return (
    <section className="bg-charcoal-light/50 py-28 md:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                {t.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
              {t.titleA}{" "}
              <span className="italic gold-gradient-text">{t.titleAccent}</span>
              {t.titleEnd}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/[0.06] md:grid-cols-2">
          {services.map((s, i) => {
            const href = i === 0 ? brandEventsPath : `${servicesPath}#${["brand-events","private-chef","proefklas","partnership"][i]}`;
            return (
              <Reveal key={s.n} delay={i * 0.05}>
                <Link
                  href={href}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden bg-charcoal p-10 transition-colors duration-500 hover:bg-charcoal-light ${
                    s.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-gold/10 to-transparent transition-transform duration-700 ease-soft group-hover:scale-x-100`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
                        {s.n}
                      </span>
                      {s.featured && s.featuredLabel && (
                        <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-light">
                          {s.featuredLabel}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
                      {s.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/65 md:text-base">
                      {s.text}
                    </p>
                  </div>
                  <div className="relative mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold-light transition-all duration-500 group-hover:gap-5">
                    {s.more}
                    <span>→</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
