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

      <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
        <div className="relative mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  {t.team.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                {t.team.titleA}{" "}
                <span className="italic gold-gradient-text">{t.team.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg">
                {t.team.intro}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:gap-10 md:mt-20">
            {t.team.members.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-charcoal-light/40 p-8 backdrop-blur-md transition-all duration-700 ease-soft hover:border-gold/40 hover:bg-charcoal-light/70 md:p-10">
                  <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gold/[0.04] blur-3xl transition-opacity duration-700 group-hover:bg-gold/[0.10]" />

                  <div className="relative flex items-center gap-6">
                    {m.photo ? (
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold/40 md:h-28 md:w-28">
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/50 bg-gradient-to-br from-gold/15 via-transparent to-transparent md:h-28 md:w-28">
                        <span className="font-display text-4xl italic gold-gradient-text md:text-5xl">
                          {m.initial}
                        </span>
                        <span className="absolute -inset-1.5 rounded-full border border-gold/15" />
                      </div>
                    )}

                    <div>
                      <h3 className="font-display text-3xl text-cream md:text-4xl">
                        {m.name}
                      </h3>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.32em] text-gold">
                        {m.role}
                      </div>
                    </div>
                  </div>

                  <p className="relative mt-8 text-sm leading-relaxed text-cream/65 md:text-base">
                    {m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
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
