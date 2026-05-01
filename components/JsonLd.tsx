const SITE = "https://culinair-annonu.com";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Vlielandstraat 2, De Groene Bark, Lokaal 207",
  addressLocality: "Zaandam",
  postalCode: "1506 ZK",
  addressCountry: "NL",
};

const ORG_BASE = {
  "@id": `${SITE}/#org`,
  name: "Culinair AnnoNu",
  alternateName: "Culinair AnnoNu B.V.",
  legalName: "Culinair AnnoNu B.V.",
  url: SITE,
  logo: `${SITE}/images/logo-gold.png`,
  email: "info@culinair-annonu.com",
  telephone: "+31619150928",
  vatID: "NL865871437B01",
  taxID: "92064426",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    "@id": `${SITE}/over-ons#tjitze`,
    name: "Tjitze van der Dam",
    jobTitle: "Culinair Regisseur & Oprichter",
    url: `${SITE}/over-ons`,
  },
  address: ADDRESS,
  areaServed: { "@type": "Country", name: "Nederland" },
  sameAs: [
    "https://www.instagram.com/culinairannonu",
    "https://www.linkedin.com/company/culinair-annonu/",
    "https://www.facebook.com/culinairannonu",
  ],
};

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EventPlanner", "LocalBusiness"],
        ...ORG_BASE,
        description:
          "Culinair AnnoNu is een high-end brand-events agency in Nederland. Wij produceren exclusieve culinaire merkmomenten — van concept tot uitvoering — voor premium merken zoals Penfolds, Gault & Millau, DPG Media en Gall & Gall.",
        knowsAbout: [
          "High-End Brand Events",
          "Brand Events Nederland",
          "Culinaire Brand Experience",
          "Luxury Events",
          "Gastronomische Events",
          "Brand Dinner",
          "Private Chef",
          "Culinaire Merkbeleving",
          "Multi-Event Partnership",
        ],
        slogan: "De culinaire regisseur voor merken",
        priceRange: "€€€€",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diensten",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Brand Events",
              description:
                "Culinaire evenementen van 15 tot 2000 gasten — concept, productie en regie onder één dak.",
              url: `${SITE}/brand-events`,
            },
            {
              "@type": "Offer",
              name: "Private Chef",
              description:
                "Vanaf 6 personen transformeren wij uw locatie tot exclusief restaurant. Inclusief sommelier en bediening.",
              url: `${SITE}/diensten#private-chef`,
            },
            {
              "@type": "Offer",
              name: "De Proefklas",
              description:
                "Onze culinaire locatie in Zaandam voor workshops, Chef's Tables en intieme brand events tot 25 gasten.",
              url: `${SITE}/diensten#proefklas`,
            },
            {
              "@type": "Offer",
              name: "Multi-Event Partnership",
              description:
                "Doorlopend culinair jaarprogramma voor merken die structureel willen laden.",
              url: `${SITE}/diensten#partnership`,
            },
          ],
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+31619150928",
          email: "info@culinair-annonu.com",
          contactType: "sales",
          areaServed: "NL",
          availableLanguage: ["Dutch", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Culinair AnnoNu",
        publisher: { "@id": `${SITE}/#org` },
        inLanguage: "nl-NL",
      },
    ],
  };
  return <Script data={data} id="org-jsonld" />;
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/over-ons#tjitze`,
    name: "Tjitze van der Dam",
    jobTitle: "Culinair Regisseur & Oprichter",
    description:
      "Tjitze van der Dam is oprichter van Culinair AnnoNu en culinair regisseur met 25+ jaar ervaring in de top van de Nederlandse gastronomie. Auteur van Spijs en Hollandse Klassiekers AnnoNu.",
    url: `${SITE}/over-ons`,
    image: `${SITE}/images/tjitze-portrait.jpg`,
    worksFor: { "@id": `${SITE}/#org` },
    sameAs: [
      "https://www.linkedin.com/company/culinair-annonu/",
      "https://www.instagram.com/culinairannonu",
    ],
  };
  return <Script data={data} id="person-jsonld" />;
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <Script data={data} id="breadcrumbs-jsonld" />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/brand-events#service`,
        name: "High-End Brand Events",
        serviceType: "Brand Event Production",
        provider: { "@id": `${SITE}/#org` },
        areaServed: { "@type": "Country", name: "Nederland" },
        description:
          "Wij produceren high-end brand events voor merken: van intieme chef's table voor 15 directieleden tot festivals voor 2000 gasten. Concept, productie en regie onder één dak.",
        url: `${SITE}/brand-events`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };
  return <Script data={data} id="service-jsonld" />;
}

export function CasesJsonLd() {
  const cases = [
    {
      name: "Penfolds Grange Dinner",
      description:
        "Exclusief wijnmakers-diner rond de Penfolds Grange 2018. Een avond op het hoogste niveau voor relaties en pers.",
    },
    {
      name: "100Chefs by Gault & Millau",
      description:
        "100 chefs, 2000 gasten, 2 dagen Miele Experience Center — het grootste gastronomische brand event van Nederland.",
    },
    {
      name: "Wijnmakersdiner",
      description:
        "Exclusief diner met de wijnmaker aan tafel. Het verhaal achter elke fles vertaald in een gastronomisch parcours.",
    },
    {
      name: "24H Chefs",
      description:
        "Ons signature event: 24 uur non-stop koken met de top van Nederland. Het bewijs van onze culinaire slagkracht.",
    },
    {
      name: "Gault & Millau Gidslancering",
      description:
        "De jaarlijkse gidslancering — culinaire regie van het evenement waar de top van de Nederlandse gastronomie samenkomt.",
    },
    {
      name: "DPG Media & JOE Radio",
      description:
        "Doorlopend culinair programma voor DPG Media en JOE Radio — van branded content tot live events.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brand Event Cases — Culinair AnnoNu",
    itemListElement: cases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: c.name,
        description: c.description,
        organizer: { "@id": `${SITE}/#org` },
      },
    })),
  };
  return <Script data={data} id="cases-jsonld" />;
}

function Script({ data, id }: { data: unknown; id: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
