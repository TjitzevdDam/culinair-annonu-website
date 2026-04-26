import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy-beleid van Culinair AnnoNu B.V.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy</>}
        intro="Tekst volgt. Voor vragen over privacy: info@culinair-annonu.com."
      />
      <section className="bg-charcoal py-20" />
    </>
  );
}
