import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Marquee from "@/components/Marquee";
import { ServiceJsonLd, BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function BrandEventsView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.brandEventsPage;
  const homeLabel = locale === "nl" ? "Home" : "Home";
  return (
    <>
      <ServiceJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: homeLabel, url: `${SITE}${pathFor("home", locale)}` },
          { name: dict.nav.brandEvents, url: `${SITE}${pathFor("brandEvents", locale)}` },
        ]}
      />
      <PageHero
        eyebrow={t.pageHero.eyebrow}
        title={
          <>
            {t.pageHero.titleA}{" "}
            <span className="italic gold-gradient-text">{t.pageHero.titleAccent}</span>
            {t.pageHero.titleEnd ?? ""}
          </>
        }
        intro={t.pageHero.intro}
        image="/images/24h-chefs.jpg"
      />

      <Marquee />

      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                    {t.formats.eyebrow}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                  {t.formats.titleA}{" "}
                  <span className="italic gold-gradient-text">{t.formats.titleAccent}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
                  {t.formats.body}
                </p>
              </Reveal>
            </div>

            <div className="space-y-px">
              {t.formats.items.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="group relative overflow-hidden border-t border-white/10 py-8 transition-colors duration-500 last:border-b">
                    <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 md:items-baseline">
                      <div>
                        <h3 className="font-display text-2xl text-cream md:text-3xl">
                          {f.title}
                        </h3>
                        <span className="mt-2 inline-block text-xs uppercase tracking-[0.22em] text-gold">
                          {f.range}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-cream/70 md:text-base">
                        {f.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 ease-soft group-hover:w-full" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal-light/40 py-28 md:py-40">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            src="/images/gm-zaal-tivoli.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  {t.process.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                {t.process.titleA}{" "}
                <span className="italic gold-gradient-text">{t.process.titleAccent}</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-white/[0.08] sm:grid-cols-2">
            {t.process.items.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="group h-full bg-charcoal-light/80 p-10">
                  <div className="font-display text-5xl text-gold/40 transition-colors duration-500 group-hover:text-gold">
                    {p.n}
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-cream md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65 md:text-base">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title={
          <>
            {t.cta.titleA}{" "}
            <span className="italic gold-gradient-text">{t.cta.titleAccent}</span>
          </>
        }
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={pathFor("contact", locale)}
      />
    </>
  );
}
