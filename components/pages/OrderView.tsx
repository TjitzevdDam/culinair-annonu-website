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
            <span className="text-cream">.</span>
          </>
        }
        image="/images/spijs-cover.jpg"
      />

      <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-32">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[640px] w-[640px] rounded-full bg-gold/10 blur-[160px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
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
                      fill
                      priority
                      sizes="(max-width: 1024px) 70vw, 340px"
                      className="object-cover"
                    />
                    {/* Subtle gold inner edge */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/20" />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="mt-12 font-display text-3xl tracking-tight text-cream">
                    {spijs.title}
                  </h2>
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

            {/* Bestelformulier — rechts, in een geornamenteerd kader */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="relative rounded-2xl border border-white/10 bg-charcoal-light/60 p-7 md:p-10 backdrop-blur-sm">
                  {/* Gold corner accents */}
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
