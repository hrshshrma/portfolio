import type { Metadata } from "next";

import { LibraryIndex } from "@/components/library-index";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Books, essays, talks, and selected conversations kept with a note about why they matter.",
  alternates: { canonical: "/library" },
};

export default function LibraryPage() {
  return (
    <div className="site-container page-shell">
      <header className="page-intro">
        <div>
          <p className="eyebrow">Commonplace</p>
          <h1 className="page-title">Library</h1>
        </div>
        <p className="lede">
          I keep references because I forget where an idea came from and
          because the useful part of a book is rarely the whole book. This
          index holds the things I expect to return to, along with the reason
          each one stayed.
        </p>
      </header>

      <section className="py-16 sm:py-20">
        <LibraryIndex />
      </section>
    </div>
  );
}
