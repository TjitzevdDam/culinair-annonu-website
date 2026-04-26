import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function ServicesView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.servicesPage;
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: `${SITE}${pathFor("home", locale)}` },
          { name: dict.nav.services, url: `${SITE}${pathFor("services", locale)}` },
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
        image="/images/portret-3.jpg"
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] space-y-24 px-6 md:space-y-32 md:px-10">
          {t.items.map((s, i) => (
            <Reveal key={s.id}>
              <article
                id={s.id}
                className={`scroll-mt-32 grid gap-10 md:grid-cols-[3fr_5fr] md:gap-16 md:items-start ${
                  i === 0
                    ? "rounded-sm border border-gold/30 bg-gradient-to-br from-gold/5 via-transparent to-transparent p-8 md:p-12"
                    : ""
                }`}
              >
                <div>
                  <div className="font-display text-7xl text-gold/30 md:text-8xl">
                    {s.n}
                  </div>
                  <div className="mt-6 text-[11px] uppercase tracking-[0.32em] text-gold">
                    {s.eyebrow}
                  </div>
                  <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-cream md:text-5xl text-balance">
                    {s.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
                    {s.text}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/75"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  {s.ctaLabel && (
                    <Link
                      href={pathFor("brandEvents", locale)}
                      className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold-light transition-all hover:gap-5"
                    >
                      {s.ctaLabel}
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
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
