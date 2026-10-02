import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ChefpoolForm from "@/components/ChefpoolForm";

// Bewust niet in de navigatie of sitemap: alleen bereikbaar via de link.
export const metadata: Metadata = {
  title: "Chefpool private dinners",
  description:
    "Door de grote vraag naar private dinners breiden we onze pool van chefs uit. Private chefs uit heel Nederland kunnen zich hier aanmelden.",
  alternates: { canonical: "/chefpool" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Chefpool private dinners | Culinair AnnoNu",
    description:
      "Private dinners door heel Nederland, meestal voor vier personen, van maandag tot en met donderdag. Meld je aan voor onze chefpool.",
    images: [{ url: "/images/gerecht-tartaar.jpg", width: 1200, height: 800 }],
  },
};

const facts = [
  { value: "Vaak 4", label: "personen per diner" },
  { value: "Jouw menu", label: "gangen en gasten flexibel" },
  { value: "Ma t/m do", label: "doordeweekse avonden" },
  { value: "Heel NL", label: "jij kiest je provincies" },
];

const steps = [
  "Meld je aan met het formulier.",
  "We nemen contact met je op.",
  "Je komt in onze WhatsApp-groep, waarin we de diners in jouw regio uitvragen.",
];

export default function ChefpoolPage() {
  return (
    <>
      <PageHero
        eyebrow="Chefpool private dinners"
        title={
          <>
            Kook mee aan onze{" "}
            <span className="italic gold-gradient-text">private dinners.</span>
          </>
        }
        intro="De vraag naar private dinners groeit hard. Daarom breiden we onze pool van chefs uit, met private chefs die door heel Nederland actief zijn."
        image="/images/gerecht-tartaar.jpg"
      />

      <section className="relative bg-charcoal pb-28 md:pb-36">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:px-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/[0.06]">
                {facts.map((f) => (
                  <div key={f.value} className="bg-charcoal p-5 sm:p-6">
                    <div className="whitespace-nowrap font-display text-[22px] text-gold sm:text-3xl lg:text-2xl xl:text-4xl">
                      {f.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-cream/55">
                      {f.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-cream/60">
                De meeste aanvragen zijn voor vier personen. Het aantal gasten en
                gangen ligt niet vast: dat stemmen we per diner af.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                    Zo werkt het
                  </span>
                </div>
                <ol className="mt-6 space-y-5">
                  {steps.map((s, i) => (
                    <li key={s} className="flex gap-5">
                      <span className="font-display text-2xl italic text-gold/80">
                        {i + 1}
                      </span>
                      <span className="pt-1.5 text-base leading-relaxed text-cream/75">
                        {s}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 text-sm leading-relaxed text-cream/50">
                Vragen? Mail naar{" "}
                <a
                  href="mailto:info@culinair-annonu.com"
                  className="text-cream/80 underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
                >
                  info@culinair-annonu.com
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-white/10 bg-charcoal-light/50 p-7 backdrop-blur-md md:p-10">
              <h2 className="font-display text-3xl leading-tight text-cream md:text-4xl">
                Meld je aan
              </h2>
              <p className="mt-3 mb-8 text-sm text-cream/55">
                Het kost je één minuut. Wij nemen daarna contact met je op.
              </p>
              <ChefpoolForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
