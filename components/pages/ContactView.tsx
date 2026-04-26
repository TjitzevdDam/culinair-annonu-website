import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
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

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:gap-24 md:px-10">
          <div>
            <Reveal>
              <div className="rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10">
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
              <div className="mt-6 rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10">
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

            <Reveal delay={0.2}>
              <div className="mt-6 whitespace-pre-line text-xs leading-relaxed text-cream/45">
                {t.legal}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm dict={dict} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
