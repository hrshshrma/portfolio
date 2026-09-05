import Image from "next/image";
import Link from "next/link";

import { EditorialProofHero } from "@/components/editorial-proof-hero";
import { EntryList } from "@/components/entry-list";
import { PageAtmosphere } from "@/components/page-atmosphere";
import { SectionHeading } from "@/components/section-heading";
import { PHOTOS } from "@/data/photography";
import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

export default async function HomePage() {
  const [techEntries, mindEntries] = await Promise.all([
    getContentEntries("tech"),
    getContentEntries("mind"),
  ]);
  const featuredPhotos = PHOTOS.slice(0, 3);

  return (
    <div className="site-container page-shell relative isolate">
      <PageAtmosphere />
      <section className="grid min-h-[68vh] content-between gap-20 border-b border-border pb-12 sm:pb-16">
        <EditorialProofHero
          bio={SITE.bio}
          email={SITE.email}
          listening={SITE.listening}
        />
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Code · light · awareness</span>
          <span aria-hidden="true">Scroll ↓</span>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <p className="eyebrow">Now</p>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.5fr]">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            {SITE.now.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {SITE.now.description}
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <SectionHeading
          eyebrow="Through my lens"
          title="Photography"
          description="Photographs from Delhi, Bengaluru, Karnataka, and the places between them. Mostly streets, architecture, people, and ordinary light."
          href="/photography"
          linkLabel="Open gallery"
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {featuredPhotos.map((photo, index) => (
            <Link
              href="/photography"
              key={photo.id}
              className="group relative overflow-hidden rounded-xl bg-secondary"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 640px) 33vw, 100vw"
                priority={index === 0}
                className="aspect-[4/5] size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-16 text-xs text-white/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {photo.alt}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-16 pb-20 sm:pb-28 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Building & learning"
            title="Tech"
            description="Distributed backend systems, full-stack product paths, production failures, and the AI-native workflows I use to ship."
            href="/tech"
          />
          <EntryList
            entries={techEntries.slice(0, 2)}
            basePath="/tech/writing"
            emptyMessage="Writing from production lessons is in progress."
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Personal notes"
            title="Mind"
            description="Observations about attention, awareness, books, and the structures that help me return to the work."
            href="/mind"
          />
          <EntryList
            entries={mindEntries.slice(0, 2)}
            basePath="/mind/notes"
          />
        </div>
      </section>

      <section className="quiet-panel grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="eyebrow">Commonplace</p>
          <h2 className="font-serif text-4xl tracking-tight">The Library</h2>
          <p className="mt-3 max-w-2xl text-pretty leading-7 text-muted-foreground">
            Books, essays, talks, and selected conversations kept with the
            reason I may need them again.
          </p>
        </div>
        <Link className="text-link" href="/library">
          Browse the index ↗
        </Link>
      </section>
    </div>
  );
}
