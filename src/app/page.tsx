import Image from "next/image";
import Link from "next/link";

import { EditorialProofHero } from "@/components/editorial-proof-hero";
import { PageAtmosphere } from "@/components/page-atmosphere";
import { PHOTOS } from "@/data/photography";
import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

export default async function HomePage() {
  const mindEntries = await getContentEntries("mind");
  const featuredPhoto = PHOTOS.find((photo) => photo.id === "16") ?? PHOTOS[0];
  const latestMindEntry = mindEntries[0];

  return (
    <div className="site-container page-shell relative isolate">
      <PageAtmosphere />
      <section className="grid min-h-[68vh] content-between gap-20 border-b border-border pb-12 sm:pb-16">
        <EditorialProofHero
          bio={SITE.bio}
          email={SITE.email}
          listening={SITE.listening}
          employer={{
            name: SITE.work[0].company,
            href: SITE.work[0].companyHref,
          }}
        />
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Code · light · awareness</span>
          <span aria-hidden="true">Scroll ↓</span>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mb-8">
          <p className="eyebrow">Index</p>
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            A few ways in.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(13rem,auto)]">
          <Link
            href="/photography"
            className="group relative min-h-[30rem] overflow-hidden rounded-xl border border-border bg-secondary sm:col-span-2 lg:col-span-7 lg:row-span-2"
          >
            <Image
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/20"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-white/75">
                <span>Photography</span>
                <span>{PHOTOS.length} frames</span>
              </div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h3 className="max-w-md font-serif text-4xl tracking-tight sm:text-5xl">
                    Moments I wanted to keep.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                    Streets, people, architecture, journeys, and ordinary
                    light.
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/tech"
            className="group relative flex min-h-[16rem] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/50 hover:bg-card sm:col-span-2 lg:col-span-5"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 520 260"
              preserveAspectRatio="none"
              className="bento-tech-pattern pointer-events-none absolute inset-0 size-full text-accent opacity-[0.13] transition-opacity duration-500 group-hover:opacity-[0.22]"
            >
              <path
                d="M182 42H292C322 42 322 78 352 78H540"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M236 112H326C356 112 356 150 386 150H540"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="5 7"
                className="bento-tech-route"
              />
              <path
                d="M154 212H266C302 212 302 178 338 178H540"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              {[
                [182, 42],
                [352, 78],
                [236, 112],
                [386, 150],
                [154, 212],
                [338, 178],
              ].map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill="currentColor"
                  className="bento-tech-node"
                  style={{ animationDelay: `${index * 0.45}s` }}
                />
              ))}
            </svg>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <p className="eyebrow mb-0">Tech</p>
                <span className="text-xs text-muted-foreground">01</span>
              </div>
              <h3 className="mt-6 max-w-md font-serif text-3xl tracking-tight sm:text-4xl">
                Systems behind the interface.
              </h3>
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                {["Event", "Queue", "Worker", "Delivery"].map(
                  (step, index, steps) => (
                    <span className="flex items-center gap-2" key={step}>
                      <span>{step}</span>
                      {index < steps.length - 1 && (
                        <span aria-hidden="true" className="text-accent">
                          →
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>
              <p className="max-w-lg text-sm leading-6 text-muted-foreground">
                Distributed platforms, full-stack context, and AI-native
                engineering workflows.
              </p>
            </div>
          </Link>

          <Link
            href="/mind"
            className="group relative flex min-h-[13rem] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/50 hover:bg-card lg:col-span-3"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 320 220"
              preserveAspectRatio="none"
              className="bento-mind-pattern pointer-events-none absolute inset-0 size-full text-accent opacity-[0.16] transition-opacity duration-500 group-hover:opacity-[0.26]"
            >
              <path
                d="M-30 176C38 110 80 214 144 152S247 54 350 118"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
              />
              <path
                d="M-38 198C32 132 87 234 154 172S260 73 356 139"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
              />
              <path
                d="M-18 139C44 76 91 175 151 116S249 22 340 78"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
              />
              <path
                d="M24 34C78 1 112 65 166 36S260-6 322 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
              />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <p className="eyebrow mb-0">Mind</p>
              <span className="text-xs text-muted-foreground">02</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl tracking-tight">
                {latestMindEntry?.metadata.title ?? "Notes in progress"}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Attention, awareness, and ideas tested in ordinary life.
              </p>
            </div>
          </Link>

          <Link
            href="/about"
            className="group relative flex min-h-[13rem] flex-col justify-between overflow-hidden rounded-xl border border-border bg-accent/[0.05] p-6 transition-colors hover:border-accent/50 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow mb-0">About</p>
              <span className="text-xs text-muted-foreground">03</span>
            </div>
            <div className="relative">
              <h3 className="font-serif text-3xl tracking-tight">
                Still becoming.
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Past, principles, and what comes next.
              </p>
            </div>
          </Link>

          <Link
            href="/library"
            className="group flex min-h-[12rem] flex-col justify-between rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/50 hover:bg-card sm:col-span-2 lg:col-span-7"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow mb-0">Library</p>
              <span className="topic">First shelf in progress</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  References worth returning to.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  Books, essays, talks, and selected conversations, each kept
                  with a reason.
                </p>
              </div>
              <span aria-hidden="true" className="entry-arrow text-xl">
                ↗
              </span>
            </div>
          </Link>

          <Link
            href="/tech"
            className="group flex min-h-[12rem] flex-col justify-between rounded-xl border border-border bg-secondary/50 p-6 transition-colors hover:border-accent/50 sm:col-span-2 lg:col-span-5"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow mb-0">Now</p>
              <span className="topic">In progress</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h3 className="font-serif text-3xl tracking-tight">
                  {SITE.building.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Context, planning, implementation, review, and testing in one
                  visible loop.
                </p>
              </div>
              <span aria-hidden="true" className="entry-arrow text-xl">
                ↗
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
