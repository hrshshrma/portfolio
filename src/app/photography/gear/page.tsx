import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photography gear",
  description: "The tools and process behind Harsh Sharma’s photography.",
  alternates: { canonical: "/photography/gear" },
};

export default function GearPage() {
  return (
    <div className="reading-container page-shell">
      <p className="eyebrow">Photography</p>
      <h1 className="page-title">Tools, not trophies.</h1>
      <p className="lede mt-8">
        I’m documenting the exact camera, lenses, and editing setup I use. The
        useful part of this page will be why each tool earns a place—not a list
        of specifications.
      </p>

      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <div className="quiet-panel">
          <p className="eyebrow">Capture</p>
          <h2 className="font-serif text-3xl">Camera kit</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Body, lenses, and carry setup will be added after the kit is
            photographed and verified.
          </p>
        </div>
        <div className="quiet-panel">
          <p className="eyebrow">Develop</p>
          <h2 className="font-serif text-3xl">Lightroom process</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Presets and before/after notes are planned. They will appear only
            when they are useful enough to share.
          </p>
        </div>
      </section>

      <Link href="/photography" className="text-link mt-12 inline-block">
        ← Back to the gallery
      </Link>
    </div>
  );
}
