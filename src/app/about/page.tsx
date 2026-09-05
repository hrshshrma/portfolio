import type { Metadata } from "next";

import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Harsh Sharma’s path, principles, present focus, and vision for the work ahead.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="reading-container page-shell">
      <header className="border-b border-border pb-12 sm:pb-16">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Still becoming.</h1>
        <p className="lede mt-8">
          I’m Harsh—an engineer who builds things, breaks things, learns from
          both, and occasionally captures life through a camera lens.
        </p>
      </header>

      <div className="mt-16 space-y-20">
        <section className="grid gap-6 sm:grid-cols-[10rem_1fr]">
          <p className="eyebrow">Past</p>
          <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
            <p>
              I started as a curious kid from a middle-class family who fell in
              love with making things on computers. That curiosity led me from
              campus into software engineering at AlphaSense.
            </p>
            <p>
              I began on the Dashboard team building React micro-apps and
              GraphQL workflows, then moved closer to platform problems:
              alerts, notification infrastructure, queues, templates, and the
              less visible systems people rely on every day.
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-[10rem_1fr]">
          <p className="eyebrow">Present</p>
          <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
            <p>{SITE.now.description}</p>
            <p>
              Outside work, photography slows me down. Reading and meditation
              help me notice where my attention goes. Writing is how I test
              whether I understood any of it.
            </p>
          </div>
        </section>

        <section>
          <p className="eyebrow">Principles</p>
          <div className="divide-y divide-border border-y border-border">
            {SITE.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr_1.5fr]"
              >
                <span className="font-serif text-xl text-accent">
                  0{index + 1}
                </span>
                <h2 className="font-serif text-2xl">{principle.title}</h2>
                <p className="leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-[10rem_1fr]">
          <p className="eyebrow">Ahead</p>
          <div className="thread-rule">
            <p className="text-balance font-serif text-3xl leading-tight sm:text-4xl">
              I want to work on meaningful problems with people who make me
              think better—and build more than I merely consume.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
