import type { Metadata } from "next";
import Link from "next/link";

import { EntryList } from "@/components/entry-list";
import { SectionHeading } from "@/components/section-heading";
import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tech",
  description:
    "Engineering notes, projects, current experiments, and technical inspirations from Harsh Sharma.",
  alternates: { canonical: "/tech" },
};

export default async function TechPage() {
  const entries = await getContentEntries("tech");

  return (
    <div className="site-container page-shell">
      <header className="page-intro">
        <div>
          <p className="eyebrow">Building & learning</p>
          <h1 className="page-title">Tech</h1>
        </div>
        <p className="lede">
          Notes from building software systems, learning AI engineering, and
          turning unclear problems into things that work.
        </p>
      </header>

      <section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Currently building"
          title={SITE.now.title}
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            {SITE.now.description}
          </p>
          <div className="quiet-panel">
            <p className="eyebrow">Current themes</p>
            <ul className="flex flex-wrap gap-2">
              {[
                "Event-driven systems",
                "Notification platforms",
                "LLM engineering",
                "AI agents",
              ].map((theme) => (
                <li className="topic" key={theme}>
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <SectionHeading
          eyebrow="Writing"
          title="Engineering notes"
          description="What I understand better after trying, debugging, and revisiting."
        />
        <EntryList entries={entries} basePath="/tech/writing" />
      </section>

      <section className="pb-20 sm:pb-24">
        <SectionHeading eyebrow="Experience" title="Where I’ve worked" />
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
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
