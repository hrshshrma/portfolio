export const SITE = {
  name: "Harsh Sharma",
  shortName: "Harsh",
  url: "https://harshsharma.info",
  location: "Bengaluru, India",
  role: "Software engineer, learner, and photographer",
  description:
    "A personal space for engineering, photography, inner work, and the references that shape how I think.",
  email: "totheharshsharma@gmail.com",
  bio: [
    "I’m Harsh — a software engineer in Bengaluru, building event-driven systems and learning how to make useful products with AI.",
    "Away from code, I photograph ordinary moments, read widely, and write to understand what I’m learning about work and life.",
  ],
  now: {
    title: "Learning in public, building with intent.",
    description:
      "I’m currently working on monitoring and notification systems at AlphaSense while going deeper into AI engineering, LLMs, and agents.",
  },
  principles: [
    {
      title: "Run the loop",
      description:
        "Learn enough to form a smart hypothesis. Run the experiment. Update the model. Repeat.",
    },
    {
      title: "Build more than you consume",
      description:
        "Ideas become useful only when they meet reality. Make the smallest honest version and learn from it.",
    },
    {
      title: "Hold life lightly",
      description:
        "No single bright or difficult thread defines the whole fabric. Keep moving and keep weaving.",
    },
  ],
  work: [
    {
      company: "AlphaSense",
      role: "Software Engineer · Monitoring Platform",
      period: "2025 — now",
      location: "Bengaluru",
      description:
        "Building event-driven alerting and centralized notification systems, including priority processing and email platform work.",
    },
    {
      company: "AlphaSense",
      role: "Software Engineer · Dashboard",
      period: "2024 — 2025",
      location: "Pune",
      description:
        "Built React micro-app experiences and GraphQL-backed product workflows, including a modern Watchlist experience.",
    },
  ],
  navigation: [
    { href: "/", label: "Home" },
    { href: "/photography", label: "Photography" },
    { href: "/tech", label: "Tech" },
    { href: "/mind", label: "Mind" },
    { href: "/about", label: "About" },
    { href: "/library", label: "Library" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/hrshshrma" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/imharshsharma/",
    },
    { label: "X", href: "https://x.com/nycdiscovery" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/thodasharmalo/",
    },
  ],
} as const;

export type NavigationItem = (typeof SITE.navigation)[number];
