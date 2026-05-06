export const meta = {
  siteName: "Aivolvix",
  title: "Aivolvix — A studio building the brands of tomorrow",
  description:
    "Aivolvix Private Limited is a young Indian consumer-tech studio. Parent of IITian Vibes (college merch) and Crayonz (AI-native design). Founded 2023.",
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
      tagline: "AI-native design studio for college merch.",
      url: "https://crayonz.ai",
      preview: "/brands/crayonz.png",
    },
  ],
};

export const work = {
  eyebrow: "The work",
  display: "Brand · Design · AI · Software · POD.",
  paragraphs: [
    "We start with brand. Every product, every page, every line of copy is built from a clear point of view about who it's for and why it deserves to exist. Heritage cues, modern execution, no shortcuts on quality.",
    "We build our own AI and design tools. Generative image pipelines, virtual try-on, automated mockup rendering, design quality scoring — all running in-house so our brands ship faster and ship sharper than anyone treating AI as a bolt-on.",
    "We own the commerce stack end-to-end. Custom storefronts on Cloudflare, Supabase for data, Cashfree for payments, Qikink for sub-three-day campus delivery across India. Built to scale from day one.",
  ],
};

export const founders = {
  eyebrow: "Built by",
  people: [
    {
      name: "Arun Raghav S",
      role: "Co-founder · CTO",
      bio: "IIT student. Builds the AI, design, and engineering side of Aivolvix. Background in 3D / WebGL and AI-driven product. Portfolio at arunraghavdev.com.",
    },
    {
      name: "Anurag Kumar Bharti",
      role: "Co-founder · CEO",
      bio: "IIT student. Brand, ops, growth. Drove the IITian Vibes launch from IIT Jodhpur in 2023, now extending across 23 IITs.",
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
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/company/aivolvix" },
    { name: "Instagram", url: "https://instagram.com/aivolvix" },
  ],
};

export const footer = {
  company: "Aivolvix Private Limited",
  registration: "Registered in India · CIN forthcoming",
  directors: "Directors: Arun Raghav S, Anurag Kumar Bharti",
  email: "hello@aivolvix.in",
  links: [{ name: "Legal", href: "/legal" }],
  year: 2026,
};

export const legalPage = {
  title: "Legal",
  body: [
    "Aivolvix Private Limited is a private company incorporated under the Companies Act, 2013, in India.",
    "Registered office: To be updated upon registration filing.",
    "Corporate Identification Number (CIN): To be updated.",
    "Directors: Arun Raghav S, Anurag Kumar Bharti.",
    "For all corporate, partnership, or press inquiries: hello@aivolvix.in.",
  ],
};
