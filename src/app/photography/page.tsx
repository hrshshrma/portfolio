import type { Metadata } from "next";
import Link from "next/link";

import { PhotoGallery } from "@/components/photo-gallery";
import { PHOTOS } from "@/data/photography";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photographs of streets, people, architecture, and ordinary light by Harsh Sharma.",
  alternates: { canonical: "/photography" },
};

export default function PhotographyPage() {
  return (
    <div className="site-container page-shell">
      <header className="page-intro">
        <div>
          <p className="eyebrow">Through my lens</p>
          <h1 className="page-title">Photography</h1>
        </div>
        <div>
          <div className="max-w-2xl space-y-5">
            <p className="lede">
              Photography gives me a place to express the creative part of
              myself. I use it to capture life while it is happening, feel good
              about what is around me, and preserve memories I want to return
              to.
            </p>
            <p className="leading-7 text-muted-foreground">
              Most of these frames came from cities, forts, temples,
              coastlines, people close to me, and ordinary evenings. The place
              and the reason I kept the frame matter more than a polished
              caption.
            </p>
          </div>
          <Link href="/photography/gear" className="text-link mt-5 inline-block">
            Camera and gear ↗
          </Link>
        </div>
      </header>

      <div className="flex items-center justify-between py-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span>{PHOTOS.length} frames</span>
        <span>Click any image to open</span>
      </div>
      <PhotoGallery photos={PHOTOS} />
    </div>
  );
}
