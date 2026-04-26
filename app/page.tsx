import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandEventsLead from "@/components/BrandEventsLead";
import Manifesto from "@/components/Manifesto";
import CasesStrip from "@/components/CasesStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandEventsLead />
      <CasesStrip />
      <Manifesto />
      <ServicesGrid />
      <Cta
        title={
          <>
            Klaar om uw merk{" "}
            <span className="italic gold-gradient-text">culinair te laden?</span>
          </>
        }
        body="Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie."
        ctaLabel="Bespreek uw event"
      />
    </>
  );
}
