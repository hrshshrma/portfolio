export const ALPHASENSE_URL = "https://www.alpha-sense.com/";

export const SITE = {
  name: "Harsh Sharma",
  shortName: "Harsh",
  url: "https://harshsharma.info",
  location: "Bengaluru, India",
  role: "Software Engineer 2 · Distributed systems and AI-native engineering",
  description:
    "Harsh Sharma writes about production software, agent systems, photography, attention, and the references he returns to.",
  email: "totheharshsharma@gmail.com",
  bio: [
    "I’m Harsh, a Software Engineer 2 at AlphaSense in Bengaluru. I build distributed, event-driven platform services across TypeScript, Node.js, and Java. I started with React and GraphQL product work, so I’m comfortable following a feature from the interface through APIs, queues, workers, storage, delivery, and production behavior.",
    "AI is part of how I do that work. I build reusable skills and workflows for planning, implementation, review, testing, and delivery. Outside work, I make photographs, read about attention and awareness, and write down what survives contact with my own life.",
  ],
  now: {
    title:
      "Building distributed platforms with full-stack context and an AI-native development loop.",
    description:
      "I work on distributed notification and alerting platforms where performance, reliability, rollout safety, and observability matter. Alongside that work, I build reusable AI workflows that carry an engineering task from its ticket and repository context through implementation, review, and testing.",
  },
  building: {
    title: "Personal engineering harness",
    description:
      "I’m turning the AI workflows I use for repository context, planning, implementation, review, merge-request creation, and testing into a personal engineering harness. The public version will keep human review and verification visible.",
  },
  listening: {
    track: "Diwali",
    artist: "Skrillex, Naisha & BEAM",
    href: "https://music.youtube.com/watch?v=8UOaWPR-vWU&si=vvjDJb3RFOK6xKrX",
  },
  principles: [
    {
      title: "Let the work meet reality",
      description:
        "Learn enough to form a useful hypothesis. Build the smallest honest version, see what happened, and update the next attempt.",
    },
    {
      title: "Follow the failure all the way through",
      description:
        "A symptom is only the start. Inspect the system around it and keep going until the explanation predicts what you can observe.",
    },
    {
      title: "Build support outside memory",
      description:
        "Checklists, written updates, small time blocks, and a clear next action make good work more repeatable.",
    },
    {
      title: "Leave room for the rest of life",
      description:
        "Work matters to me, but it is one part of a life that also contains people, photographs, music, travel, silence, and ordinary evenings.",
    },
  ],
  work: [
    {
      company: "AlphaSense",
      companyHref: ALPHASENSE_URL,
      role: "Software Engineer 2",
      period: "2024 — now",
      location: "India",
      description: [
        "I build distributed, event-driven platform services for alerting and multi-channel notification delivery.",
        "In H1 2026, I took end-to-end architectural ownership of a major alert-delivery migration. It reduced measured end-to-end p95 latency from 3.04 seconds to 1.41 seconds, while per-pod efficiency on the shared delivery path reached 5–6× its previous level.",
        "The backend work spans Java, TypeScript, Node.js, message queues, Kubernetes, Helm, ArgoCD, and KEDA. I also plan staged rollouts and rollback paths, strengthen release validation, and investigate production behavior across application and infrastructure layers.",
        "I built React micro-app experiences and GraphQL-backed product workflows. That full-stack foundation now helps me reason about a feature from user interaction to backend delivery and production behavior.",
      ],
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
