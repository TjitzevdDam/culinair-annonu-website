import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Culinair AnnoNu B.V.",
  alternates: { canonical: "/voorwaarden" },
  robots: { index: false, follow: true },
};

export default function VoorwaardenPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Algemene voorwaarden</>}
        intro="Tekst volgt. Voor vragen: info@culinair-annonu.com."
      />
      <section className="bg-charcoal py-20" />
    </>
  );
}
