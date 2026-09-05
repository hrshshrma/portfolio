import type { Metadata } from "next";

import { EntryList } from "@/components/entry-list";
import { SectionHeading } from "@/components/section-heading";
import { getContentEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mind",
  description:
    "Personal notes on awareness, learning, meditation, attention, and living with more intention.",
  alternates: { canonical: "/mind" },
};

export default async function MindPage() {
  const entries = await getContentEntries("mind");

  return (
    <div className="site-container page-shell">
      <header className="page-intro">
        <div>
          <p className="eyebrow">Inner work</p>
          <h1 className="page-title">Mind</h1>
        </div>
        <p className="lede">
          Notes from paying attention: life learnings, meditation, books,
          awareness, and the practical support systems I test for myself.
        </p>
      </header>

      <section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Notes"
          title="Things I’m learning to notice"
          description="Personal observations, not prescriptions. These ideas are allowed to change as I do."
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
            title: "Practice",
            text: "Small meditation and reflection rituals that make attention easier.",
          },
          {
            title: "Support systems",
            text: "Personal experiments with environment, structure, and ADHD support—shared as experience, never medical advice.",
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
    </div>
  );
}
