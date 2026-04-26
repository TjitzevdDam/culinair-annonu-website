import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";

const SITE = "https://culinair-annonu.com";

export const metadata: Metadata = {
  title: "Contact — Plan een Kennismaking",
  description:
    "Plan een kennismaking met Culinair AnnoNu. Conceptvoorstel binnen 5 werkdagen. Bezoekadres De Proefklas Zaandam, info@culinair-annonu.com, +31 6 19 15 09 28.",
  keywords: [
    "Culinair AnnoNu contact",
    "brand events offerte",
    "De Proefklas Zaandam",
    "kennismaking brand event",
    "conceptvoorstel brand events",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Culinair AnnoNu",
    description: "Plan een kennismaking. Conceptvoorstel binnen 5 werkdagen.",
    url: `${SITE}/contact`,
    images: ["/images/gm-tivoli.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: SITE },
          { name: "Contact", url: `${SITE}/contact` },
        ]}
      />
      <PageHero
        eyebrow="Laten we praten"
        title={
          <>
            Een{" "}
            <span className="italic gold-gradient-text">conceptvoorstel</span>{" "}
            binnen 5 werkdagen
          </>
        }
        intro="Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie."
        image="/images/gm-tivoli.jpg"
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:gap-24 md:px-10">
          <div>
            <Reveal>
              <div className="rounded-sm border border-white/10 bg-white/[0.02] p-8 md:p-10">
                <h3 className="text-[11px] uppercase tracking-[0.32em] text-gold">
                  Bezoekadres — De Proefklas
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
                  Direct contact
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
              <div className="mt-6 text-xs leading-relaxed text-cream/45">
                Culinair AnnoNu B.V.
                <br />
                KVK 92064426 — BTW NL865871437B01
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
