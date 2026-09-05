import type { Metadata } from "next";

import { EntryList } from "@/components/entry-list";
import { PageAtmosphere } from "@/components/page-atmosphere";
import { SectionHeading } from "@/components/section-heading";
import { getContentEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mind",
  description:
    "Personal notes on attention, awareness, books, and the support systems Harsh tests in daily life.",
  alternates: { canonical: "/mind" },
};

export default async function MindPage() {
  const entries = await getContentEntries("mind");

  return (
    <div className="site-container page-shell relative isolate">
      <PageAtmosphere />
      <header className="page-intro">
        <div>
          <p className="eyebrow">Personal notes</p>
          <h1 className="page-title">Mind</h1>
        </div>
        <div className="max-w-2xl space-y-5">
          <p className="lede">
            I have spent years reading about attention, meditation, self-help,
            and awareness. The useful part begins when an idea meets an
            ordinary day and I can see whether it changes how I act.
          </p>
          <p className="leading-7 text-muted-foreground">
            These notes are personal observations. They are not medical advice,
            finished philosophy, or instructions for anyone else.
          </p>
        </div>
      </header>

      <section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Notes"
          title="Things I’m learning to notice"
          description="Ideas are allowed to change when experience gives me a better answer."
        />
        <EntryList entries={entries} basePath="/mind/notes" />
      </section>

      <section className="grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
        {[
          {
            title: "Awareness",
            text: "Seeing a thought or feeling clearly before reacting to it.",
          },
          {
            title: "Attention supports",
            text: "Personal experiments with checklists, written updates, time blocks, environment, and a clear next action.",
          },
          {
            title: "Questions I am testing",
            text: "Ideas I am trying in ordinary life, kept with room for the result to disagree with the plan.",
          },
        ].map((item) => (
          <div className="quiet-panel" key={item.title}>
            <h2 className="font-serif text-2xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-20 border-t border-border pt-8 sm:mt-24">
        <p className="eyebrow">Meditation</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-[10rem_1fr]">
          <h2 className="font-serif text-3xl">An occasional practice</h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            I meditate occasionally. I usually use a Dr Joe Dispenza
            present-moment meditation or a session in Headspace.
          </p>
        </div>
      </section>
    </div>
  );
}
