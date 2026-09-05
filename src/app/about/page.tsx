import type { Metadata } from "next";

import { PageAtmosphere } from "@/components/page-atmosphere";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Harsh Sharma’s path from full-stack product work to distributed platforms, along with the principles shaping what comes next.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="reading-container page-shell relative isolate">
      <PageAtmosphere />
      <header className="border-b border-border pb-12 sm:pb-16">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Still becoming.</h1>
        <p className="lede mt-8">
          I build software for a living and keep notes because my memory is
          less reliable than a written trail. The notes usually begin with a
          system that failed, a plan I avoided, a photograph I wanted to keep,
          or a question that would not leave me alone.
        </p>
      </header>

      <div className="mt-16 space-y-20">
        <section className="grid gap-6 sm:grid-cols-[10rem_1fr]">
          <p className="eyebrow">Past</p>
          <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
            <p>
              I studied at Delhi Technological University and joined AlphaSense
              in 2024. My first professional work was close to the interface,
              building React micro-apps and GraphQL-backed product flows.
            </p>
            <p>
              I later moved into the platform behind alerts and notifications,
              where the visible feature is only the last step in a much longer
              path through queues, workers, templates, databases, and
              production environments.
            </p>
            <p>
              That move changed what I enjoy about engineering. I like
              following a failure through the whole system, finding the
              assumption that broke, and leaving behind a clearer model for
              the next person.
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-[10rem_1fr]">
          <p className="eyebrow">Present</p>
          <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
            <p>
              I am a Software Engineer 2 at AlphaSense, where I build
              distributed platform services for alerting and notification
              delivery. Recent work has included architecture changes, service
              migrations, performance measurement, production rollouts,
              integration testing, and failures that crossed application and
              infrastructure boundaries.
            </p>
            <p>
              My full-stack background helps me follow those systems through
              React and GraphQL product flows when needed. I also build
              AI-native engineering workflows around repository context,
              planning, implementation, review, testing, and delivery.
              Photography gives me a way to express my creative side and
              preserve how life felt.
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
              I want to work on hard problems that reward deep engineering and
              produce real value. I also want to stay with a problem long
              enough to make the result useful to other people.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
