import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function ContactView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.contactPage;
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: `${SITE}${pathFor("home", locale)}` },
          { name: dict.nav.contact, url: `${SITE}${pathFor("contact", locale)}` },
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
        image="/images/gm-tivoli.jpg"
      />

      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                {t.directMail.eyebrow}
              </span>
              <span className="h-px w-10 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-7xl text-balance">
              {t.directMail.titleA}{" "}
              <span className="italic gold-gradient-text">{t.directMail.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              {t.directMail.body}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="mailto:info@culinair-annonu.com"
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-5 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light md:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {t.directMail.ctaLabel}
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-cream/50">
              <span>{t.directMail.phoneLabel}</span>
              <a
                href="tel:+31619150928"
                className="text-cream/85 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light"
              >
                +31 6 19 15 09 28
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-light/30 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-6 md:grid-cols-2 md:gap-8 md:px-10">
          <Reveal>
            <div className="h-full rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <h3 className="text-[11px] uppercase tracking-[0.32em] text-gold">
                {t.addressHeading}
              </h3>
              <p className="mt-5 font-display text-xl leading-snug text-cream">
                De Groene Bark, Lokaal 207
                <br />
                Vlielandstraat 2
                <br />
                1506 ZK Zaandam
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <h3 className="text-[11px] uppercase tracking-[0.32em] text-gold">
                {t.directHeading}
              </h3>
              <p className="mt-5 space-y-2 font-display text-xl leading-snug text-cream">
                <a
                  href="mailto:info@culinair-annonu.com"
                  className="block transition-colors hover:text-gold-light"
                >
                  info@culinair-annonu.com
                </a>
                <a
                  href="tel:+31619150928"
                  className="block transition-colors hover:text-gold-light"
                >
                  +31 6 19 15 09 28
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-[1320px] whitespace-pre-line px-6 text-center text-xs leading-relaxed text-cream/40 md:px-10">
            {t.legal}
          </p>
        </Reveal>
      </section>
    </>
  );
}
