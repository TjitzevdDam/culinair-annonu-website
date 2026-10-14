import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

// Voor chefs in de pool: alleen bereikbaar via de link (WhatsApp-groep).
export const metadata: Metadata = {
  title: "Afspraken thuisdiners",
  description:
    "De vaste afspraken voor de thuisdiners van de chefpool van Culinair AnnoNu.",
  alternates: { canonical: "/chefpool/privatedinners" },
  robots: { index: false, follow: false },
};

const INVOICE_EMAIL = "info@culinair-annonu.com";

const afspraken = [
  {
    label: "Het diner",
    value: "4 gangen, 6 personen",
    text: "Bij de gasten thuis, van maandag tot en met donderdag.",
  },
  {
    label: "Budget",
    value: "€ 550 excl. btw",
    text: "Per diner. De inkoop en je reiskosten zitten hierin.",
  },
  {
    label: "Menu",
    value: "Jouw keuze",
    text: "Je bepaalt het menu zelf. De dieetwensen van de gasten krijg je van ons per mail.",
  },
  {
    label: "Tijden",
    value: "18:00 aanwezig",
    text: "De eerste gang serveer je tussen 18:30 en 18:45 uur.",
  },
  {
    label: "Zelf meenemen",
    value: "Alles voor het diner",
    text: "Je mise en place, keukenmaterialen, servies en bestek.",
  },
  {
    label: "Dranken",
    value: "Regelt de gast",
    text: "De gasten zorgen zelf voor de dranken tijdens het diner.",
  },
];

const stappen = [
  "We plaatsen een beschikbaar diner met alle details in de WhatsApp-groep.",
  "Interesse? Stuur Flora een privébericht. In de groep kunnen alleen beheerders berichten plaatsen.",
  "Krijg je het diner, dan mailen we je de dieetwensen van de gasten.",
  "Je stelt het menu samen en doet zelf de inkoop.",
  "Op de dag zelf ben je om 18:00 bij de gasten en serveer je de eerste gang tussen 18:30 en 18:45.",
  "Na het diner stuur je je factuur aan Culinair AnnoNu. Die betalen we binnen de betaaltermijn.",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-gold" />
      <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
        {children}
      </span>
    </div>
  );
}

export default function ChefpoolAfsprakenPage() {
  return (
    <>
      <PageHero
        eyebrow="Chefpool private dinners"
        title={
          <>
            De afspraken voor onze{" "}
            <span className="italic gold-gradient-text">thuisdiners.</span>
          </>
        }
        intro="Alles wat je moet weten voordat je een diner aanneemt. Zo weet je precies waar je aan toe bent."
        image="/images/dinner-tafel.jpg"
      />

      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {afspraken.map((a, i) => (
              <Reveal key={a.label} delay={(i % 3) * 0.06} className="h-full">
                <div className="h-full bg-charcoal p-8 md:p-10">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                    {a.label}
                  </div>
                  <div className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
                    {a.value}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65 md:text-base">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-light/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:px-10 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Zo werkt het</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
                Van aanbod tot{" "}
                <span className="italic gold-gradient-text">factuur.</span>
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-6">
              {stappen.map((s, i) => (
                <Reveal key={s} delay={i * 0.05}>
                  <li className="flex gap-5 border-t border-white/10 pt-6">
                    <span className="w-6 shrink-0 font-display text-2xl italic text-gold/80">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-base leading-relaxed text-cream/80">
                      {s}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-sm border border-white/10 bg-charcoal p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                  Factuurgegevens
                </div>
                <p className="mt-5 text-base leading-relaxed text-cream/85">
                  Culinair AnnoNu B.V.
                  <br />
                  Vlielandstraat 2, De Groene Bark, lokaal 207
                  <br />
                  1506 ZK Zaandam
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/60">
                  KVK 92064426
                  <br />
                  Btw NL865871437B01
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/60">
                  Mail je factuur naar{" "}
                  <a
                    href={`mailto:${INVOICE_EMAIL}`}
                    className="text-cream/85 underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
                  >
                    {INVOICE_EMAIL}
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-sm border border-white/10 bg-charcoal p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                  Zegt een gast af?
                </div>
                <p className="mt-5 text-base leading-relaxed text-cream/80">
                  Dat is ontzettend jammer. We verzetten het diner dan met de
                  gast. Een vergoeding is er in dat geval niet, ook geen
                  onkostenvergoeding: wij worden zelf ook alleen per afgerond
                  diner betaald.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 text-sm leading-relaxed text-cream/60 md:flex-row md:items-center md:justify-between md:px-10 md:text-base">
          <p>
            Vragen? Stuur Flora een bericht of mail naar{" "}
            <a
              href="mailto:info@culinair-annonu.com"
              className="text-cream/85 underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
            >
              info@culinair-annonu.com
            </a>
            .
          </p>
          <Link
            href="/chefpool"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-gold/50 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:bg-gold hover:text-charcoal"
          >
            Nog niet aangemeld? Naar de chefpool →
          </Link>
        </div>
      </section>
    </>
  );
}
