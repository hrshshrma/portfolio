export const LIBRARY_TYPES = [
  "All",
  "Book",
  "Essay",
  "Video",
  "Conversation",
] as const;

export type LibraryType = Exclude<(typeof LIBRARY_TYPES)[number], "All">;

export interface LibraryItem {
  title: string;
  creator?: string;
  type: LibraryType;
  status: "Reading" | "Finished" | "Revisiting" | "Saved";
  note: string;
  href?: string;
  topics: string[];
}

// This collection is intentionally curated by hand. Add only references that
// Harsh has personally selected and reviewed for public sharing.
export const LIBRARY_ITEMS: LibraryItem[] = [];
