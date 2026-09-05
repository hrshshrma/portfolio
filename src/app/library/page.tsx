import type { Metadata } from "next";

import { LibraryIndex } from "@/components/library-index";

export const metadata: Metadata = {
  title: "Library",
  description:
    "A curated commonplace book of books, essays, videos, and selected conversations.",
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
          The books, essays, videos, and selected LLM conversations I return
          to—each kept with a short note about what changed in my thinking.
        </p>
      </header>

      <section className="py-16 sm:py-20">
        <LibraryIndex />
      </section>
    </div>
  );
}
