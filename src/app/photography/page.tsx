import type { Metadata } from "next";
import Link from "next/link";

import { PhotoGallery } from "@/components/photo-gallery";
import { PHOTOS } from "@/data/photography";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A visual notebook of streets, people, architecture, and light photographed by Harsh Sharma.",
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
          <p className="lede">
            A visual notebook of ordinary moments—streets, people,
            architecture, and the way light changes all of them.
          </p>
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
