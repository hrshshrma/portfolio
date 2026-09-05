"use client";

import { useMemo, useState } from "react";

import {
  LIBRARY_ITEMS,
  LIBRARY_TYPES,
} from "@/data/library";
import { cn } from "@/lib/utils";

type Filter = (typeof LIBRARY_TYPES)[number];

export function LibraryIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? LIBRARY_ITEMS
        : LIBRARY_ITEMS.filter((item) => item.type === filter),
    [filter]
  );

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        aria-label="Filter library"
      >
        {LIBRARY_TYPES.map((type) => (
          <button
            type="button"
            key={type}
            onClick={() => setFilter(type)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs",
              filter === type
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
            aria-pressed={filter === type}
          >
            {type}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="quiet-panel grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow">The first shelf</p>
            <h2 className="font-serif text-3xl">The shelf is still empty.</h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              I am reviewing old bookmarks and notes before adding anything.
              Every entry will need a correct source, an honest reading status,
              and a personal reason to return.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Books · essays · video · chats
          </p>
        </div>
      ) : (
        <ol className="divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li
              key={`${item.type}-${item.title}`}
              className="grid gap-4 py-7 sm:grid-cols-[8rem_1fr_auto]"
            >
              <div>
                <span className="topic">{item.type}</span>
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.status}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h2>
                {item.creator && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.creator}
                  </p>
                )}
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  {item.note}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 sm:justify-end">
                {item.topics.map((topic) => (
                  <span className="topic" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
