import Link from "next/link";

import type { ContentEntry } from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface ContentArticleProps {
  entry: ContentEntry;
  backHref: string;
  backLabel: string;
}

export function ContentArticle({
  entry,
  backHref,
  backLabel,
}: ContentArticleProps) {
  return (
    <div className="reading-container page-shell">
      <Link href={backHref} className="text-link">
        ← {backLabel}
      </Link>
      <header className="mt-12 border-b border-border pb-10">
        <div className="mb-5 flex flex-wrap gap-2">
          {entry.metadata.topics.map((topic) => (
            <span className="topic" key={topic}>
              {topic}
            </span>
          ))}
        </div>
        <h1 className="text-balance font-serif text-5xl tracking-tight sm:text-6xl">
          {entry.metadata.title}
        </h1>
        <p className="lede mt-6">{entry.metadata.summary}</p>
        <time
          dateTime={entry.metadata.publishedAt}
          className="mt-6 block text-sm text-muted-foreground"
        >
          {formatDate(entry.metadata.publishedAt)}
        </time>
      </header>
      <article
        className="prose-editorial mt-12"
        dangerouslySetInnerHTML={{ __html: entry.html }}
      />
    </div>
  );
}
