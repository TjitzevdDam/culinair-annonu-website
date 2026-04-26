import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { PersonJsonLd, BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function AboutView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.aboutPage;
  return (
    <>
      <PersonJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: `${SITE}${pathFor("home", locale)}` },
          { name: dict.nav.about, url: `${SITE}${pathFor("about", locale)}` },
        ]}
      />
      <PageHero
        eyebrow={t.pageHero.eyebrow}
        title={
          <>
            {t.pageHero.titleA}{" "}
            <span className="italic gold-gradient-text">{t.pageHero.titleAccent}</span>
          </>
        }
        intro={t.pageHero.intro}
        image="/images/tjitze-portrait.jpg"
      />

      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:grid-cols-[5fr_6fr] md:gap-24 md:px-10">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/tjitze-portrait.jpg"
                alt={t.person.portraitAlt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute -bottom-px -right-px h-24 w-24 border-b-2 border-r-2 border-gold" />
              <div className="absolute -top-px -left-px h-24 w-24 border-t-2 border-l-2 border-gold/40" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  {t.person.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                {t.person.titleA}{" "}
                <span className="italic gold-gradient-text">{t.person.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-cream/75 md:text-lg">
                {t.person.body1}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
                {t.person.body2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-light/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  {t.principles.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                {t.principles.titleA}{" "}
                <span className="italic gold-gradient-text">{t.principles.titleAccent}</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {t.principles.items.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="border-t border-white/10 pt-8">
                  <h3 className="font-display text-2xl text-cream md:text-3xl">
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
        eyebrow={t.cta.eyebrow}
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
