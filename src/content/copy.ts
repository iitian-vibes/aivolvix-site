export const meta = {
  siteName: "Aivolvix",
  title: "Aivolvix — A studio building the brands of tomorrow",
  description:
    "Aivolvix Private Limited is a young Indian consumer-tech studio. Parent of IITian Vibes (college merch brand) and Crayonz (creator marketplace + AI design SaaS). Founded 2023.",
  url: "https://aivolvix.in",
  ogImage: "/og.jpg",
  twitter: "@aivolvix",
} as const;

export const hero = {
  eyebrow: "A · V · X — Aivolvix Private Limited",
  // Headline is hard-coded in Hero.astro because of the bold/italic mix.
  body:
    "A small consumer-tech studio out of India. We make brands young people actually want to wear, use, and talk about — combining heritage retail with AI-native design tooling.",
};

export const brands = {
  eyebrow: "Two brands. One studio.",
  items: [
    {
      slug: "iitianvibes",
      name: "IITian Vibes",
      tagline: "College merch, made for the IIT community.",
      url: "https://iitianvibes.com",
      preview: "/brands/iitianvibes.png",
    },
    {
      slug: "crayonz",
      name: "Crayonz",
      tagline: "Creator marketplace, AI design studio, and merch SaaS.",
      url: "https://crayonz.ai",
      preview: "/brands/crayonz.png",
    },
  ],
};

export const work = {
  eyebrow: "The work",
  display: "Two distinct bets on consumer commerce.",
  brands: [
    {
      name: "IITian Vibes",
      url: "iitianvibes.com",
      paragraph:
        "Premium college merchandise for India's top engineering campuses. Tees, hoodies, varsity jackets — designed with the community, made for the community. Founded in 2023 at IIT Jodhpur, now serving students and alumni across 23 IITs.",
    },
    {
      name: "Crayonz",
      url: "crayonz.ai",
      paragraph:
        "A creator-led merchandise platform with three layers: a marketplace where independent creators design and sell their own merch, an AI design studio that turns ideas into print-ready apparel in seconds, and a SaaS layer that lets other brands plug the same engine into their storefronts.",
    },
  ],
  closing:
    "Two surface areas for the same bet — that the next generation of consumer brands will be built around AI-native creation, community participation, and design that actually means something.",
};

export const founders = {
  eyebrow: "Built by",
  people: [
    {
      name: "Arun Raghav S",
      role: "Co-founder · Engineering & AI",
      bio: "IIT student. Engineer first. Owns the AI, design tooling, and product engineering side of Aivolvix. Background in 3D / WebGL and AI-driven products. Portfolio at arunraghavdev.com.",
    },
    {
      name: "Anurag Kumar Bharti",
      role: "Co-founder · Brand & Growth",
      bio: "IIT student. Writes code, but spends most days on brand, ops, and growth. Drove the IITian Vibes launch from IIT Jodhpur in 2023, now extending across 23 IITs.",
    },
  ],
};

export const numbers = {
  eyebrow: "By the numbers",
  stats: [
    { value: 2, label: "BRANDS", animateTo: 2 },
    { value: 23, label: "IITs SERVED", animateTo: 23 },
    { value: 2023, label: "FOUNDED", animateTo: 2023 },
    { value: 100, label: "DESIGNS", animateTo: 100, suffix: "+" },
  ],
};

export const connect = {
  eyebrow: "Get in touch",
  // Display headline is hard-coded in Connect.astro for the italic mix.
  email: "hello@aivolvix.in",
  // Aivolvix itself has no social presence — follow the brands directly.
  brandSocials: [
    {
      brand: "IITian Vibes",
      links: [
        { name: "Instagram", url: "https://www.instagram.com/iitian.vibess/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/iitian-vibes-400093337" },
      ],
    },
    {
      brand: "Crayonz",
      links: [
        { name: "X / Twitter", url: "https://x.com/crayonz_ai" },
      ],
    },
  ],
};

export const footer = {
  company: "Aivolvix Private Limited",
  registration: "Registered in Chhattisgarh, India · CIN U74101CT2026PTC019601",
  directors: "Directors: Arun Raghav S, Anurag Kumar Bharti",
  email: "hello@aivolvix.in",
  links: [{ name: "Legal", href: "/legal" }],
  year: 2026,
};

export const legalPage = {
  title: "Legal",
  intro:
    "Aivolvix Private Limited is a private company limited by shares, incorporated under the Companies Act, 2013, in the State of Chhattisgarh, India.",
  details: [
    { label: "Legal name", value: "Aivolvix Private Limited" },
    { label: "Corporate Identification Number (CIN)", value: "U74101CT2026PTC019601" },
    { label: "Permanent Account Number (PAN)", value: "ABECA7206J" },
    { label: "Goods & Services Tax Identification (GSTIN)", value: "22ABECA7206J1ZX" },
    {
      label: "Registered office",
      value:
        "Block 7, Sai Heritage Home, Phase-1, Street-3, Ashish Nagar, West Risali, Civic Centre Bhilai, Durg – 490006, Chhattisgarh, India",
    },
    { label: "Directors", value: "Arun Raghav S · Anurag Kumar Bharti" },
    { label: "Corporate contact", value: "hello@aivolvix.in" },
  ],
  closing:
    "For partnership, press, vendor, or B2B inquiries, please reach us at hello@aivolvix.in. Brand-specific customer support is handled directly by the respective brand: support@iitianvibes.com or hello@crayonz.ai.",
};
