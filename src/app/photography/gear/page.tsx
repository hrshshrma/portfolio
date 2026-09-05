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
        The camera matters when it helps me keep a moment. This is the small kit
        I use now and the editing process I am still documenting.
      </p>

      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <div className="quiet-panel">
          <p className="eyebrow">Capture</p>
          <h2 className="font-serif text-3xl">Camera kit</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            I use a Sony Alpha 6000 with the compact 16-50mm kit lens and a
            55-210mm zoom lens. It gives me the image quality I want without
            requiring a large, expensive kit.
          </p>
          <p className="mt-3 leading-7 text-muted-foreground">
            I also use a OnePlus 13R because the camera already in my pocket is
            often the one that preserves the moment.
          </p>
        </div>
        <div className="quiet-panel">
          <p className="eyebrow">Develop</p>
          <h2 className="font-serif text-3xl">Lightroom process</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            I edit in Lightroom. A fuller process note is coming after I
            document the steps I actually repeat.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Presets are coming later. There is no download yet.
          </p>
        </div>
      </section>

      <Link href="/photography" className="text-link mt-12 inline-block">
        ← Back to the gallery
      </Link>
    </div>
  );
}
