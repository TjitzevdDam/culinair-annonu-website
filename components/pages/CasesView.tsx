import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { CasesJsonLd, BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function CasesView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.casesPage;
  return (
    <>
      <CasesJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: `${SITE}${pathFor("home", locale)}` },
          { name: dict.nav.cases, url: `${SITE}${pathFor("cases", locale)}` },
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
        image="/images/gm-zaal.jpg"
      />

      <section className="bg-charcoal py-28 md:py-32">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="space-y-24 md:space-y-32">
            {dict.cases.map((c, i) => (
              <article
                key={c.title}
                className={`grid gap-10 md:grid-cols-2 md:gap-16 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1500ms] ease-soft hover:scale-105"
                    />
                    <div className="absolute -bottom-px -right-px h-20 w-20 border-b-2 border-r-2 border-gold/60" />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div>
                    <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-light">
                      {c.tag}
                    </span>
                    <h2 className="mt-6 font-display text-3xl leading-[1.05] tracking-tight text-cream md:text-5xl text-balance">
                      {c.title}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                      {c.blurb}
                    </p>
                  </div>
                </Reveal>
              </article>
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
