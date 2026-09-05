import Link from "next/link";

import type { ContentEntry } from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface EntryListProps {
  entries: ContentEntry[];
  basePath: string;
  emptyMessage?: string;
}

export function EntryList({
  entries,
  basePath,
  emptyMessage = "Nothing published here yet.",
}: EntryListProps) {
  if (entries.length === 0) {
    return (
      <div className="quiet-panel">
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ol className="divide-y divide-border border-y border-border">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <Link
            href={`${basePath}/${entry.slug}`}
            className="entry-row group"
          >
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                {entry.metadata.topics.map((topic) => (
                  <span className="topic" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-2xl tracking-tight group-hover:text-accent">
                {entry.metadata.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {entry.metadata.summary}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground sm:flex-col sm:items-end">
              <time dateTime={entry.metadata.publishedAt}>
                {formatDate(entry.metadata.publishedAt)}
              </time>
              <span aria-hidden="true" className="entry-arrow">
                ↗
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
