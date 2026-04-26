export type Locale = "nl" | "en";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";

export const SITE = "https://culinair-annonu.com";

// Path mapping per locale. Keys are stable IDs, values are URL paths per locale.
export const paths = {
  home: { nl: "/", en: "/en" },
  brandEvents: { nl: "/brand-events", en: "/en/brand-events" },
  cases: { nl: "/cases", en: "/en/cases" },
  services: { nl: "/diensten", en: "/en/services" },
  about: { nl: "/over-ons", en: "/en/about" },
  contact: { nl: "/contact", en: "/en/contact" },
  privacy: { nl: "/privacy", en: "/en/privacy" },
  terms: { nl: "/voorwaarden", en: "/en/terms" },
} as const;

export type PathKey = keyof typeof paths;

export function pathFor(key: PathKey, locale: Locale): string {
  return paths[key][locale];
}

const dictNL = {
  switchTo: { label: "EN", aria: "Switch to English" },
  nav: {
    brandEvents: "Brand Events",
    cases: "Cases",
    services: "Diensten",
    about: "Over Ons",
    contact: "Contact",
    cta: "Plan een gesprek",
  },
  hero: {
    eyebrow: "High-End Brand Events",
    titleStart: "Culinaire ervaringen",
    titleMid: "die uw merk",
    rotatingWords: ["verrassen", "raken", "verbinden", "verbluffen", "laden"],
    body: "Concept, productie en regie — onder één dak. Wij ontwerpen culinaire merkmomenten waarmee u uw relaties verrast en uw merk op het hoogste niveau presenteert. Bewezen bij Penfolds, Gault & Millau, DPG Media en Gall & Gall.",
    ctaPrimary: "Bespreek uw event",
    ctaSecondary: "Bekijk cases",
    scroll: "Scroll",
  },
  brandEventsLead: {
    eyebrow: "Onze hoofddiscipline",
    titleA: "High-end",
    titleAccent: "brand events",
    body: "Van een chef’s-table-diner voor 15 directieleden tot een gastronomisch festival voor 2000 gasten. Wij produceren culinaire merkmomenten waarmee u op het hoogste niveau speelt — strategisch, creatief en operationeel.",
    cta: "Zo werken wij",
    pillars: [
      {
        n: "01",
        title: "Concept",
        text: "Wat moet uw gast voelen, onthouden, doorvertellen? Dat is het vertrekpunt — niet het menu.",
      },
      {
        n: "02",
        title: "Productie",
        text: "Locatie, chef, decor, sommelier, entertainment, logistiek. Eén regisseur, één draaiboek.",
      },
      {
        n: "03",
        title: "Regie",
        text: "Op de avond zelf staan wij naast u. Elk detail valt op zijn plek — u hoeft alleen te genieten.",
      },
    ],
  },
  manifesto: {
    eyebrow: "Wie wij zijn",
    titleA: "Voor merken die",
    titleAccent: "hoog mikken.",
    body1: "Culinair AnnoNu bedenkt, produceert en levert exclusieve culinaire ervaringen waarmee merken hun relaties verrassen, hun merk laden en hun netwerk activeren. Onder creatieve leiding van Tjitze van der Dam combineren wij culinaire autoriteit met merkstrategie en totaalregie.",
    body2: "Wij werken met topchefs, regisseren de avond van tafelschikking tot entertainment, en zorgen dat uw merk centraal staat. Niet als leverancier, maar als creatief partner.",
    portraitAlt: "Culinair regie — Tjitze van der Dam",
    stats: [
      { number: "25+", label: "Jaar culinaire regie" },
      { number: "100+", label: "Brand events" },
      { number: "50+", label: "Premium merken" },
    ],
  },
  casesStrip: {
    eyebrow: "Cases",
    titleA: "Bewezen bij",
    titleAccent: "premium merken",
    cta: "Alle cases",
  },
  cases: [
    {
      title: "Penfolds Grange Dinner",
      tag: "Brand Dinner",
      img: "/images/gerecht-tartaar.jpg",
      blurb: "Exclusief wijnmakers-diner rond de Penfolds Grange 2018. Een avond op het hoogste niveau voor relaties en pers.",
    },
    {
      title: "100Chefs by Gault & Millau",
      tag: "Grand Experience · 2000 gasten",
      img: "/images/100chefs.jpg",
      blurb: "100 chefs, 2000 gasten, 2 dagen Miele Experience Center. Het grootste gastronomische brand event van Nederland.",
    },
    {
      title: "Wijnmakersdiner",
      tag: "Brand Dinner",
      img: "/images/dinner-tafel.jpg",
      blurb: "Exclusief diner met de wijnmaker aan tafel. Het verhaal achter elke fles, vertaald in een gastronomisch parcours dat het merk laadt en relaties verrast.",
    },
    {
      title: "24H Chefs",
      tag: "Signature Event",
      img: "/images/24h-chefs-table.jpg",
      blurb: "Ons eigen signature event: 24 uur non-stop koken met de top van Nederland. Het bewijs van onze slagkracht.",
    },
    {
      title: "Gault & Millau Gidslancering",
      tag: "Brand Event · Gidslancering",
      img: "/images/gm-winnaars.jpg",
      blurb: "De jaarlijkse lancering van de Gault & Millau Gids. Culinaire regie van het evenement waar de top van de Nederlandse gastronomie samenkomt.",
    },
    {
      title: "DPG Media & JOE Radio",
      tag: "Multi-Event Partnership",
      img: "/images/gerecht.jpg",
      blurb: "Doorlopend culinair programma voor DPG Media en JOE Radio. Van branded content tot live culinaire events bij radioshows en mediaproducties.",
    },
  ],
  servicesGrid: {
    eyebrow: "Wat wij leveren",
    titleA: "Totaalregie, van",
    titleAccent: "concept",
    titleEnd: " tot applaus",
    items: [
      {
        n: "01",
        title: "Brand Events",
        text: "Onze hoofddiscipline. Culinaire evenementen voor merken — 15 tot 2000 gasten — van concept tot regie.",
        featured: true,
        featuredLabel: "Hoofddiscipline",
        more: "Meer",
      },
      {
        n: "02",
        title: "Private Chef",
        text: "Vanaf 6 personen transformeren wij uw locatie tot exclusief restaurant. Sommelier en bediening inbegrepen.",
        more: "Meer",
      },
      {
        n: "03",
        title: "De Proefklas",
        text: "Onze eigen culinaire locatie in Zaandam. Workshops, Chef’s Tables en intieme brand events tot 25 gasten.",
        more: "Meer",
      },
      {
        n: "04",
        title: "Multi-Event Partnership",
        text: "Doorlopend culinair jaarprogramma voor merken die structureel willen laden — content, events, ROI.",
        more: "Meer",
      },
    ],
  },
  ctaHome: {
    eyebrow: "Laten we praten",
    titleA: "Klaar om uw merk",
    titleAccent: "culinair te laden?",
    body: "Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie.",
    ctaLabel: "Bespreek uw event",
  },
  marqueeLabel: "Merken die op ons vertrouwen",
  footer: {
    tagline: "De culinaire regisseur voor merken.",
    blurb: "Wij produceren high-end brand events waarmee merken hun relaties verrassen en hun merk laden — van concept tot uitvoering.",
    navHeading: "Navigatie",
    addressHeading: "Bezoekadres",
    addressVenue: "De Proefklas",
    addressLines: ["De Groene Bark, Lokaal 207", "Vlielandstraat 2", "1506 ZK Zaandam"],
    privacy: "Privacy",
    terms: "Voorwaarden",
    legalSuffix: "KVK 92064426 — BTW NL865871437B01",
  },
  brandEventsPage: {
    pageHero: {
      eyebrow: "Onze hoofddiscipline",
      titleA: "High-end",
      titleAccent: "brand events",
      titleEnd: " van concept tot applaus",
      intro: "Wij zijn de culinaire regisseur voor merken die op het hoogste niveau willen spelen. Een creatief partner met culinaire autoriteit, merkstrategie en totaalregie.",
    },
    formats: {
      eyebrow: "Formats",
      titleA: "Drie schaalformaten,",
      titleAccent: "één regie",
      body: "Of het nu een diner voor 15 directieleden is of een festival voor 2000 gasten — onze werkwijze blijft dezelfde: één regisseur die het merk centraal stelt.",
      items: [
        { title: "Brand Dinner", range: "15 – 60 gasten", desc: "Intieme chef’s table of meergangendiner waarbij uw merk persoonlijk wordt geladen via verhaal, smaak en sfeer. Ideaal voor relatiebeheer, productlanceringen en VIP-introducties." },
        { title: "Brand Experience", range: "60 – 300 gasten", desc: "Een immersive culinaire avond waarbij gasten meegenomen worden door een gecureerd parcours van smaken, momenten en activaties. Eén thema, één merk, één avond." },
        { title: "Grand Experience", range: "300 – 2000 gasten", desc: "Festival-formaat. Meerdere chefs, meerdere zones, één regie. Bewezen bij 100Chefs by Gault & Millau en 24H Chefs." },
      ],
    },
    process: {
      eyebrow: "Werkwijze",
      titleA: "Vier fases,",
      titleAccent: "één regisseur",
      items: [
        { n: "01", title: "Briefing & strategie", text: "We beginnen niet bij het menu, maar bij uw merk. Wat moet de gast voelen? Wat moet hij doorvertellen? Welk merkverhaal moet centraal staan?" },
        { n: "02", title: "Concept & regie", text: "Wij vertalen die merkstrategie naar een culinair concept met chef, locatie, decor, sommelier, entertainment en tafelschikking. Eén regisseur, één draaiboek." },
        { n: "03", title: "Productie", text: "Logistiek, vergunningen, leveranciers, decor, AV, personeel, content. Wij sturen het hele orkest aan zodat uw team zich op het merk kan richten." },
        { n: "04", title: "Uitvoering & nazorg", text: "Op de avond zelf staat onze regie ernaast u. Na afloop volgen content, evaluatie en — bij multi-event partnerships — een doorlopend programma." },
      ],
    },
    cta: {
      titleA: "Een idee voor uw merk?",
      titleAccent: "Wij regisseren.",
      body: "Vertel ons over uw merk, uw doelgroep en de gelegenheid. Binnen 5 werkdagen leveren wij een conceptvoorstel.",
      ctaLabel: "Bespreek uw event",
    },
  },
  casesPage: {
    pageHero: {
      eyebrow: "Ons werk",
      titleA: "Bewezen bij",
      titleAccent: "premium merken",
      intro: "Een selectie van de culinaire brand events die wij hebben geproduceerd. Van intieme chef’s tables tot grootschalige gastronomische festivals.",
    },
    cta: {
      titleA: "Uw merk",
      titleAccent: "hier?",
      body: "Wij bedenken graag een concept dat past bij uw merk en doelgroep. Laten we kennismaken.",
      ctaLabel: "Plan een kennismaking",
    },
  },
  servicesPage: {
    pageHero: {
      eyebrow: "Wat wij leveren",
      titleA: "Totaalregie, van",
      titleAccent: "concept",
      titleEnd: " tot applaus",
      intro: "Wij bedenken het concept, regisseren de avond, en zorgen dat elk detail bijdraagt aan uw merkbeleving. Vier diensten, één regisseur.",
    },
    items: [
      {
        id: "brand-events",
        n: "01",
        title: "Brand Events",
        eyebrow: "Onze hoofddiscipline",
        text: "De kern van wat wij doen. Wij produceren culinaire evenementen waarmee merken als Penfolds, Gault & Millau en Nestlé hun relaties verrassen en hun merkidentiteit versterken — van intiem diner voor 15 gasten tot grootschalig festival voor 2000 bezoekers.",
        bullets: ["Concept", "Locatie", "Chef", "Entertainment", "Styling", "Totaalregie"],
        ctaLabel: "Lees meer over Brand Events",
      },
      {
        id: "private-chef",
        n: "02",
        title: "Private Chef",
        eyebrow: "Vanaf 6 personen",
        text: "Wij transformeren uw locatie tot een exclusief restaurant. Chef Tjitze of een van onze private chefs komt naar u toe voor een gastronomisch meergangendiner dat nergens anders te ervaren is. Inclusief sommelier en bediening.",
        bullets: ["Op locatie", "Meerdere gangen", "Sommelier", "Bediening"],
      },
      {
        id: "proefklas",
        n: "03",
        title: "De Proefklas",
        eyebrow: "Onze culinaire locatie in Zaandam",
        text: "Een inspirerende ruimte voor workshops, Chef’s Table diners en creatieve sessies. De perfecte setting voor intieme brand events tot 25 gasten. Eerder ingezet door Gall & Gall en Landgoed de Salentein.",
        bullets: ["Workshops", "Chef’s Table", "Teambuilding", "Productlancering"],
      },
      {
        id: "partnership",
        n: "04",
        title: "Multi-Event Partnership",
        eyebrow: "Voor structurele inzet",
        text: "Voor merken die culinaire beleving structureel willen inzetten — zoals onze samenwerking met DPG Media en JOE Radio. Een doorlopend programma van events, content en ervaringen die uw merk het hele jaar laden.",
        bullets: ["Jaarprogramma", "Contentstrategie", "Merkactivatie", "ROI-tracking"],
      },
    ],
    cta: {
      titleA: "Klaar om uw merk",
      titleAccent: "culinair te laden?",
      body: "Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie.",
      ctaLabel: "Plan een kennismaking",
    },
  },
  aboutPage: {
    pageHero: {
      eyebrow: "Wie wij zijn",
      titleA: "Voor merken die",
      titleAccent: "hoog mikken.",
      intro: "Culinair AnnoNu bedenkt, produceert en levert exclusieve culinaire ervaringen voor merken die op het hoogste niveau willen spelen.",
    },
    person: {
      eyebrow: "Tjitze van der Dam",
      titleA: "Culinair regisseur,",
      titleAccent: "creatief partner",
      body1: "Tjitze van der Dam is oprichter en culinair regisseur van Culinair AnnoNu. Met 25+ jaar ervaring in de top van de Nederlandse gastronomie produceerde hij honderden brand events voor onder andere Penfolds, Gault & Millau, DPG Media, Gall & Gall en Landgoed de Salentein.",
      body2: "Hij combineert culinaire autoriteit met een scherp oog voor merkstrategie. Daarnaast is hij auteur van de kookboeken Spijs en Hollandse Klassiekers AnnoNu, bedenker van het signature event 24H Chefs en samenwerker bij 100Chefs by Gault & Millau.",
      portraitAlt: "Tjitze van der Dam — Culinair Regisseur",
    },
    principles: {
      eyebrow: "Onze principes",
      titleA: "Vier principes,",
      titleAccent: "één manier van werken",
      items: [
        { title: "Concept eerst, menu later", text: "Wij beginnen niet bij ingrediënten of gerechten. We beginnen bij uw merk, uw doelgroep en het gevoel dat u wilt opwekken." },
        { title: "Eén regie", text: "Geen losse leveranciers. Eén projectleider houdt locatie, chef, sommelier, decor en logistiek in handen." },
        { title: "Culinaire autoriteit", text: "Tjitze werkt al 25+ jaar met de top van de Nederlandse gastronomie. Die autoriteit zit verweven in elk concept." },
        { title: "Het merk centraal", text: "Wij zijn niet de ster van uw avond — uw merk wel. Ons werk lukt als gasten praten over u, niet over ons." },
      ],
    },
    cta: {
      eyebrow: "Werken met ons",
      titleA: "Een merk dat ons",
      titleAccent: "interesseert?",
      body: "Wij werken alleen met merken waar we creatief mee uit de voeten kunnen. Vertel ons over uw ambitie.",
      ctaLabel: "Plan een kennismaking",
    },
  },
  contactPage: {
    pageHero: {
      eyebrow: "Laten we praten",
      titleA: "Een",
      titleAccent: "conceptvoorstel",
      titleEnd: " binnen 5 werkdagen",
      intro: "Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie.",
    },
    addressHeading: "Bezoekadres — De Proefklas",
    directHeading: "Direct contact",
    legal: "Culinair AnnoNu B.V.\nKVK 92064426 — BTW NL865871437B01",
    form: {
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mailadres",
      company: "Bedrijf / Merk",
      eventType: "Type event",
      eventTypeOptions: [
        { value: "", label: "Selecteer een dienst..." },
        { value: "brand-event", label: "Brand Event" },
        { value: "private-chef", label: "Private Chef" },
        { value: "proefklas", label: "De Proefklas" },
        { value: "multi-event", label: "Multi-Event Partnership" },
        { value: "anders", label: "Anders / Weet ik nog niet" },
      ],
      message: "Vertel ons over uw plannen",
      messagePlaceholder: "Uw merk, het gewenste aantal gasten, de gelegenheid…",
      submit: "Verstuur aanvraag",
      thankTitle: "Bedankt voor uw bericht.",
      thankBody: "Wij nemen binnen 24 uur contact met u op met een eerste reactie en — indien passend — een conceptvoorstel binnen 5 werkdagen.",
    },
  },
};

const dictEN: typeof dictNL = {
  switchTo: { label: "NL", aria: "Schakel naar Nederlands" },
  nav: {
    brandEvents: "Brand Events",
    cases: "Cases",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
  },
  hero: {
    eyebrow: "High-End Brand Events",
    titleStart: "Culinary experiences",
    titleMid: "that make your brand",
    rotatingWords: ["surprise", "resonate", "connect", "astound", "shine"],
    body: "Concept, production and direction — under one roof. We design culinary brand moments that delight your relations and present your brand at the highest level. Proven for Penfolds, Gault & Millau, DPG Media and Gall & Gall.",
    ctaPrimary: "Discuss your event",
    ctaSecondary: "View cases",
    scroll: "Scroll",
  },
  brandEventsLead: {
    eyebrow: "Our core discipline",
    titleA: "High-end",
    titleAccent: "brand events",
    body: "From an intimate chef’s-table dinner for 15 leadership guests to a gastronomic festival for 2,000. We produce culinary brand moments that let you play at the highest level — strategically, creatively and operationally.",
    cta: "How we work",
    pillars: [
      { n: "01", title: "Concept", text: "What should your guest feel, remember, retell? That is the starting point — not the menu." },
      { n: "02", title: "Production", text: "Venue, chef, decor, sommelier, entertainment, logistics. One director, one playbook." },
      { n: "03", title: "Direction", text: "On the night itself we stand beside you. Every detail falls into place — you only have to enjoy." },
    ],
  },
  manifesto: {
    eyebrow: "Who we are",
    titleA: "For brands that",
    titleAccent: "aim high.",
    body1: "Culinair AnnoNu conceives, produces and delivers exclusive culinary experiences with which brands surprise their relations, charge their brand and activate their network. Under the creative leadership of Tjitze van der Dam, we combine culinary authority with brand strategy and end-to-end direction.",
    body2: "We work with top chefs, direct the evening from seating plan to entertainment, and ensure your brand takes centre stage. Not as a vendor, but as a creative partner.",
    portraitAlt: "Culinary direction — Tjitze van der Dam",
    stats: [
      { number: "25+", label: "Years of culinary direction" },
      { number: "100+", label: "Brand events" },
      { number: "50+", label: "Premium brands" },
    ],
  },
  casesStrip: {
    eyebrow: "Cases",
    titleA: "Proven with",
    titleAccent: "premium brands",
    cta: "All cases",
  },
  cases: [
    { title: "Penfolds Grange Dinner", tag: "Brand Dinner", img: "/images/gerecht-tartaar.jpg", blurb: "Exclusive winemaker’s dinner around the Penfolds Grange 2018. An evening at the highest level for relations and press." },
    { title: "100Chefs by Gault & Millau", tag: "Grand Experience · 2,000 guests", img: "/images/100chefs.jpg", blurb: "100 chefs, 2,000 guests, 2 days at the Miele Experience Center. The largest gastronomic brand event in the Netherlands." },
    { title: "Winemaker’s Dinner", tag: "Brand Dinner", img: "/images/dinner-tafel.jpg", blurb: "Exclusive dinner with the winemaker at the table. The story behind every bottle, translated into a gastronomic journey that charges the brand and surprises relations." },
    { title: "24H Chefs", tag: "Signature Event", img: "/images/24h-chefs-table.jpg", blurb: "Our own signature event: 24 hours of non-stop cooking with the top of the Netherlands. Proof of our culinary firepower." },
    { title: "Gault & Millau Guide Launch", tag: "Brand Event · Guide Launch", img: "/images/gm-winnaars.jpg", blurb: "The annual launch of the Gault & Millau Guide. Culinary direction of the event where the top of Dutch gastronomy convenes." },
    { title: "DPG Media & JOE Radio", tag: "Multi-Event Partnership", img: "/images/gerecht.jpg", blurb: "Ongoing culinary programme for DPG Media and JOE Radio — from branded content to live culinary events at radio shows and media productions." },
  ],
  servicesGrid: {
    eyebrow: "What we deliver",
    titleA: "End-to-end direction, from",
    titleAccent: "concept",
    titleEnd: " to applause",
    items: [
      { n: "01", title: "Brand Events", text: "Our core discipline. Culinary events for brands — 15 to 2,000 guests — from concept to direction.", featured: true, featuredLabel: "Core discipline", more: "More" },
      { n: "02", title: "Private Chef", text: "From 6 guests we transform your venue into an exclusive restaurant. Sommelier and service included.", more: "More" },
      { n: "03", title: "De Proefklas", text: "Our own culinary venue in Zaandam. Workshops, Chef’s Tables and intimate brand events up to 25 guests.", more: "More" },
      { n: "04", title: "Multi-Event Partnership", text: "Year-round culinary programme for brands that want to charge their relations structurally — content, events, ROI.", more: "More" },
    ],
  },
  ctaHome: {
    eyebrow: "Let’s talk",
    titleA: "Ready to charge your brand,",
    titleAccent: "culinary style?",
    body: "Tell us about your brand, your audience and what you want to achieve. We come back with a concept that matches your ambition.",
    ctaLabel: "Discuss your event",
  },
  marqueeLabel: "Brands that trust us",
  footer: {
    tagline: "Culinary direction for brands.",
    blurb: "We produce high-end brand events that let brands surprise their relations and charge their brand — from concept to delivery.",
    navHeading: "Navigate",
    addressHeading: "Visit",
    addressVenue: "De Proefklas",
    addressLines: ["De Groene Bark, Lokaal 207", "Vlielandstraat 2", "1506 ZK Zaandam, the Netherlands"],
    privacy: "Privacy",
    terms: "Terms",
    legalSuffix: "Chamber of Commerce 92064426 — VAT NL865871437B01",
  },
  brandEventsPage: {
    pageHero: {
      eyebrow: "Our core discipline",
      titleA: "High-end",
      titleAccent: "brand events",
      titleEnd: " from concept to applause",
      intro: "We are the culinary director for brands that want to play at the highest level. A creative partner with culinary authority, brand strategy and end-to-end direction.",
    },
    formats: {
      eyebrow: "Formats",
      titleA: "Three formats,",
      titleAccent: "one direction",
      body: "Whether it is a dinner for 15 leadership guests or a festival for 2,000 — our approach stays the same: one director that puts the brand at the centre.",
      items: [
        { title: "Brand Dinner", range: "15 – 60 guests", desc: "Intimate chef’s table or multi-course dinner where your brand is charged personally through story, taste and atmosphere. Ideal for relationship management, product launches and VIP introductions." },
        { title: "Brand Experience", range: "60 – 300 guests", desc: "An immersive culinary evening that takes guests through a curated journey of flavours, moments and activations. One theme, one brand, one night." },
        { title: "Grand Experience", range: "300 – 2,000 guests", desc: "Festival format. Multiple chefs, multiple zones, one direction. Proven for 100Chefs by Gault & Millau and 24H Chefs." },
      ],
    },
    process: {
      eyebrow: "Approach",
      titleA: "Four phases,",
      titleAccent: "one director",
      items: [
        { n: "01", title: "Briefing & strategy", text: "We do not start at the menu, but at your brand. What should the guest feel? What should they retell? Which brand story should be central?" },
        { n: "02", title: "Concept & direction", text: "We translate that brand strategy into a culinary concept with chef, venue, decor, sommelier, entertainment and seating. One director, one playbook." },
        { n: "03", title: "Production", text: "Logistics, permits, suppliers, decor, AV, staff, content. We conduct the entire orchestra so your team can focus on the brand." },
        { n: "04", title: "Execution & follow-up", text: "On the night itself our direction stands beside you. Afterwards: content, evaluation and — for multi-event partnerships — an ongoing programme." },
      ],
    },
    cta: {
      titleA: "An idea for your brand?",
      titleAccent: "We direct.",
      body: "Tell us about your brand, your audience and the occasion. Within 5 working days we deliver a concept proposal.",
      ctaLabel: "Discuss your event",
    },
  },
  casesPage: {
    pageHero: {
      eyebrow: "Our work",
      titleA: "Proven with",
      titleAccent: "premium brands",
      intro: "A selection of the culinary brand events we have produced. From intimate chef’s tables to large-scale gastronomic festivals.",
    },
    cta: {
      titleA: "Your brand",
      titleAccent: "here?",
      body: "We would love to develop a concept that fits your brand and audience. Let’s get acquainted.",
      ctaLabel: "Schedule an introduction",
    },
  },
  servicesPage: {
    pageHero: {
      eyebrow: "What we deliver",
      titleA: "End-to-end direction, from",
      titleAccent: "concept",
      titleEnd: " to applause",
      intro: "We conceive the concept, direct the evening and ensure every detail contributes to your brand experience. Four services, one director.",
    },
    items: [
      {
        id: "brand-events",
        n: "01",
        title: "Brand Events",
        eyebrow: "Our core discipline",
        text: "The heart of what we do. We produce culinary events with which brands such as Penfolds, Gault & Millau and Nestlé surprise their relations and reinforce their brand identity — from intimate dinners for 15 to large-scale festivals for 2,000.",
        bullets: ["Concept", "Venue", "Chef", "Entertainment", "Styling", "End-to-end direction"],
        ctaLabel: "Read more about Brand Events",
      },
      {
        id: "private-chef",
        n: "02",
        title: "Private Chef",
        eyebrow: "From 6 guests",
        text: "We transform your venue into an exclusive restaurant. Chef Tjitze or one of our private chefs comes to you for a multi-course gastronomic dinner that cannot be experienced anywhere else. Sommelier and service included.",
        bullets: ["On location", "Multi-course", "Sommelier", "Service"],
      },
      {
        id: "proefklas",
        n: "03",
        title: "De Proefklas",
        eyebrow: "Our culinary venue in Zaandam",
        text: "An inspiring space for workshops, Chef’s Table dinners and creative sessions. The perfect setting for intimate brand events up to 25 guests. Previously hosted Gall & Gall and Landgoed de Salentein.",
        bullets: ["Workshops", "Chef’s Table", "Team building", "Product launches"],
      },
      {
        id: "partnership",
        n: "04",
        title: "Multi-Event Partnership",
        eyebrow: "For structural use",
        text: "For brands that want to deploy culinary experience structurally — like our partnership with DPG Media and JOE Radio. An ongoing programme of events, content and experiences that charge your brand all year long.",
        bullets: ["Annual programme", "Content strategy", "Brand activation", "ROI tracking"],
      },
    ],
    cta: {
      titleA: "Ready to charge your brand,",
      titleAccent: "culinary style?",
      body: "Tell us about your brand, your audience and what you want to achieve. We come back with a concept that matches your ambition.",
      ctaLabel: "Schedule an introduction",
    },
  },
  aboutPage: {
    pageHero: {
      eyebrow: "Who we are",
      titleA: "For brands that",
      titleAccent: "aim high.",
      intro: "Culinair AnnoNu conceives, produces and delivers exclusive culinary experiences for brands that want to play at the highest level.",
    },
    person: {
      eyebrow: "Tjitze van der Dam",
      titleA: "Culinary director,",
      titleAccent: "creative partner",
      body1: "Tjitze van der Dam is the founder and culinary director of Culinair AnnoNu. With 25+ years of experience at the top of Dutch gastronomy, he has produced hundreds of brand events for Penfolds, Gault & Millau, DPG Media, Gall & Gall and Landgoed de Salentein, among others.",
      body2: "He combines culinary authority with a sharp eye for brand strategy. He is also the author of the cookbooks Spijs and Hollandse Klassiekers AnnoNu, the creator of the signature event 24H Chefs and a collaborator at 100Chefs by Gault & Millau.",
      portraitAlt: "Tjitze van der Dam — Culinary Director",
    },
    principles: {
      eyebrow: "Our principles",
      titleA: "Four principles,",
      titleAccent: "one way of working",
      items: [
        { title: "Concept first, menu later", text: "We do not start with ingredients or dishes. We start with your brand, your audience and the feeling you want to evoke." },
        { title: "One direction", text: "No loose suppliers. One project director keeps venue, chef, sommelier, decor and logistics in hand." },
        { title: "Culinary authority", text: "Tjitze has worked with the top of Dutch gastronomy for 25+ years. That authority is woven into every concept." },
        { title: "The brand at the centre", text: "We are not the star of your evening — your brand is. Our work succeeds when guests talk about you, not us." },
      ],
    },
    cta: {
      eyebrow: "Working with us",
      titleA: "A brand that",
      titleAccent: "interests us?",
      body: "We only work with brands we can engage with creatively. Tell us about your ambition.",
      ctaLabel: "Schedule an introduction",
    },
  },
  contactPage: {
    pageHero: {
      eyebrow: "Let’s talk",
      titleA: "A",
      titleAccent: "concept proposal",
      titleEnd: " within 5 working days",
      intro: "Tell us about your brand, your audience and what you want to achieve. We come back with a concept that matches your ambition.",
    },
    addressHeading: "Visit — De Proefklas",
    directHeading: "Direct contact",
    legal: "Culinair AnnoNu B.V.\nChamber of Commerce 92064426 — VAT NL865871437B01",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "E-mail",
      company: "Company / Brand",
      eventType: "Event type",
      eventTypeOptions: [
        { value: "", label: "Select a service…" },
        { value: "brand-event", label: "Brand Event" },
        { value: "private-chef", label: "Private Chef" },
        { value: "proefklas", label: "De Proefklas" },
        { value: "multi-event", label: "Multi-Event Partnership" },
        { value: "anders", label: "Other / Not sure yet" },
      ],
      message: "Tell us about your plans",
      messagePlaceholder: "Your brand, expected guest count, the occasion…",
      submit: "Send enquiry",
      thankTitle: "Thank you for your message.",
      thankBody: "We will get back to you within 24 hours with a first response — and, where appropriate, a concept proposal within 5 working days.",
    },
  },
};

export const dictionaries = { nl: dictNL, en: dictEN };
export type Dict = typeof dictNL;

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
