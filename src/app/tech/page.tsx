import type { Metadata } from "next";
import Link from "next/link";

import { EntryList } from "@/components/entry-list";
import { PageAtmosphere } from "@/components/page-atmosphere";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tech",
  description:
    "Engineering notes on distributed backend platforms, full-stack product systems, production reliability, and AI-native development workflows.",
  alternates: { canonical: "/tech" },
};

export default async function TechPage() {
  const entries = await getContentEntries("tech");

  return (
    <div className="site-container page-shell relative isolate">
      <PageAtmosphere variant="grid" />
      <header className="page-intro">
        <div>
          <p className="eyebrow">Building & learning</p>
          <h1 className="page-title">Tech</h1>
        </div>
        <div className="max-w-2xl space-y-5">
          <p className="lede">
            I build distributed backend platforms where a small visible action
            depends on a long chain underneath it. My work has crossed APIs,
            queues, enrichment and aggregation workers, template systems,
            databases, autoscaling, observability, and multi-environment
            delivery.
          </p>
          <p className="leading-7 text-muted-foreground">
            I work mainly across TypeScript, Node.js, and Java, with React and
            GraphQL experience that lets me follow the product path end to end.
            I also build AI-native workflows for the engineering lifecycle,
            from understanding a ticket and repository through planning,
            implementation, review, merge-request creation, and testing.
          </p>
        </div>
      </header>

      <ul className="flex flex-wrap gap-2 border-b border-border py-8">
        {[
          "Distributed backend platforms",
          "Performance and reliability",
          "Full-stack product systems",
          "AI-native engineering workflows",
        ].map((theme) => (
          <li className="topic" key={theme}>
            {theme}
          </li>
        ))}
      </ul>

      <section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Platform work at AlphaSense"
          description="From product-facing React and GraphQL work to distributed services, production rollouts, and platform ownership."
        />
        <ol className="divide-y divide-border border-y border-border">
          {SITE.work.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr]"
            >
              <div className="text-sm text-muted-foreground">
                <p>{role.period}</p>
                <p>{role.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">{role.role}</h3>
                <p className="mt-1 text-sm text-accent">{role.company}</p>
                <div className="mt-3 max-w-3xl space-y-3 leading-7 text-muted-foreground">
                  {role.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-20 sm:pb-24">
        <SectionHeading
          eyebrow="AI-native engineering"
          title="AI across the full development loop"
          description="I use AI across the lifecycle of engineering work and keep human review, testing, and verification visible."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
            <p>
              I build reusable skills for recurring engineering problems. One
              example is an email-compatible HTML workflow that I applied to
              production template work and refined from the rendering failures
              I encountered.
            </p>
            <p>
              I also add repository context through AGENTS.md, CLAUDE.md,
              architecture notes, domain concepts, and testing guidance so
              coding agents can navigate unfamiliar services more safely. A
              focused migration skill grew into an extensible plugin and then
              into dynamic workflows inside my personal engineering harness.
            </p>
          </div>
          <div className="quiet-panel">
            <p className="eyebrow">The working loop</p>
            <ol className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {[
                "Ticket and repository context",
                "Analysis and implementation plan",
                "Code changes and review",
                "Merge request and testing",
                "Human verification and delivery",
              ].map((step, index) => (
                <li className="flex items-baseline gap-3" key={step}>
                  <span className="font-serif text-accent">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <SectionHeading
          eyebrow="Currently building"
          title={SITE.building.title}
        />
        <div className="quiet-panel grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {SITE.building.description}
          </p>
          <span className="topic">In progress</span>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <SectionHeading
          eyebrow="Writing"
          title="Engineering notes"
          description="What I understand better after trying, debugging, and revisiting."
        />
        <EntryList
          entries={entries}
          basePath="/tech/writing"
          emptyMessage="I’m preparing notes from production lessons. They will appear here after the examples and claims can stand on their own."
        />
      </section>

      <section className="quiet-panel grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="eyebrow">Inspirations</p>
          <h2 className="font-serif text-3xl">The references behind the work</h2>
          <p className="mt-2 text-muted-foreground">
            Technical books, essays, talks, and conversations live in the
            Library.
          </p>
        </div>
        <Link href="/library" className="text-link">
          Open Library ↗
        </Link>
      </section>
    </div>
  );
}
