import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import OrderForm from "@/components/OrderForm";
import {
  spijs,
  formatPrice,
  productBlurb,
  productHighlights,
} from "@/lib/shop";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import { type Dict, type Locale, pathFor, SITE } from "@/lib/dict";

export default function OrderView({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.shop;
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: `${SITE}${pathFor("home", locale)}` },
          {
            name: dict.nav.cookbook,
            url: `${SITE}${pathFor("bestellen", locale)}`,
          },
        ]}
      />
      <PageHero
        eyebrow={t.page.eyebrow}
        title={
          <>
            {t.page.titleA}{" "}
            <span className="italic gold-gradient-text">
              {t.page.titleAccent}
            </span>
          </>
        }
        image="/images/spijs-cover.jpg"
      />

      {/* INTRO — verhaal van het boek */}
      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gold/8 blur-[180px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

        <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                {t.intro.eyebrow}
              </span>
              <span className="h-px w-10 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-cream text-balance">
              {t.intro.titleA}{" "}
              <span className="italic gold-gradient-text">
                {t.intro.titleAccent}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-cream/75">
              {t.intro.body1}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-cream/65">
              {t.intro.body2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PIJLERS — drie lagen */}
      <section className="relative isolate overflow-hidden bg-charcoal-light/60 py-24 md:py-32">
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                {t.pillars.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tightest text-cream text-balance">
              {t.pillars.titleA}{" "}
              <span className="italic gold-gradient-text">
                {t.pillars.titleAccent}
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/8 md:grid-cols-3">
            {t.pillars.items.map((p, i) => (
              <Reveal key={p.n} delay={0.15 + i * 0.08}>
                <article className="h-full bg-charcoal p-8 md:p-10">
                  <div className="font-display text-3xl text-gold">{p.n}</div>
                  <h3 className="mt-4 font-display text-2xl tracking-tight text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">
                    {p.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CITAAT */}
      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[480px] w-[480px] rounded-full bg-gold/12 blur-[160px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-display italic text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.25] text-cream/90 text-balance">
              <span aria-hidden className="text-gold mr-2">
                &ldquo;
              </span>
              {t.quote.text}
              <span aria-hidden className="text-gold ml-2">
                &rdquo;
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {t.quote.author}
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVER DE AUTEUR */}
      <section className="relative isolate overflow-hidden bg-charcoal-light/60 py-24 md:py-32">
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid items-center gap-12 md:gap-20 lg:grid-cols-[1fr_320px]">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                    {t.aboutAuthor.eyebrow}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tightest text-cream text-balance">
                  {t.aboutAuthor.titleA}{" "}
                  <span className="italic gold-gradient-text">
                    {t.aboutAuthor.titleAccent}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-cream/70">
                  {t.aboutAuthor.body}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="relative mx-auto aspect-[3/4] w-[280px] lg:w-[320px] overflow-hidden shadow-[0_50px_120px_-40px_rgba(196,149,106,0.4)]">
                <Image
                  src="/images/tjitze-portrait.jpg"
                  alt={t.aboutAuthor.portraitAlt}
                  fill
                  sizes="(max-width: 1024px) 280px, 320px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-gold/25"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BESTELLEN — boek-info + formulier */}
      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[640px] w-[640px] rounded-full bg-gold/10 blur-[160px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                {t.orderSection.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 mb-16 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tightest text-cream text-balance">
              {t.orderSection.titleA}{" "}
              <span className="italic gold-gradient-text">
                {t.orderSection.titleAccent}
              </span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Boek-info — links, sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div
                    className="relative aspect-[3/4] max-w-[340px] mx-auto lg:mx-0 shadow-[0_50px_120px_-40px_rgba(196,149,106,0.4)]"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <Image
                      src={spijs.cover}
                      alt={`${spijs.title} — cover`}
                      sizes="(max-width: 1024px) 70vw, 340px"
                      fill
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/20" />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h3 className="mt-12 font-display text-3xl tracking-tight text-cream">
                    {spijs.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-cream/55">
                    {locale === "en" ? spijs.subtitle.en : spijs.subtitle.nl}
                  </p>
                  <p className="mt-5 max-w-md text-cream/70 leading-relaxed">
                    {productBlurb(spijs, locale)}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {productHighlights(spijs, locale).map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-cream/65"
                      >
                        <span className="mt-2 inline-block h-px w-3 bg-gold shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-10 font-display text-5xl text-cream">
                    {formatPrice(spijs.price, locale)}
                    <span className="ml-3 text-sm text-cream/50">
                      {t.page.pricePerCopy}
                    </span>
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Bestelformulier — rechts */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="relative rounded-2xl border border-white/10 bg-charcoal-light/60 p-7 md:p-10 backdrop-blur-sm">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-px -top-px h-12 w-12 border-l border-t border-gold/50"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-px -bottom-px h-12 w-12 border-r border-b border-gold/50"
                  />

                  <p className="text-[11px] uppercase tracking-[0.42em] text-gold mb-3">
                    {t.form.heading}
                  </p>
                  <p className="mb-8 max-w-md text-sm text-cream/65 leading-relaxed">
                    {t.form.intro}
                  </p>
                  <OrderForm product={spijs} dict={dict} locale={locale} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
