import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const [tech, mind] = await Promise.all([
    getContentEntries("tech"),
    getContentEntries("mind"),
  ]);

  const items = [...tech, ...mind]
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((entry) => {
      const path =
        entry.section === "tech"
          ? `/tech/writing/${entry.slug}`
          : `/mind/notes/${entry.slug}`;
      const url = `${SITE.url}${path}`;

      return `<item>
        <title>${escapeXml(entry.metadata.title)}</title>
        <description>${escapeXml(entry.metadata.summary)}</description>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <pubDate>${new Date(entry.metadata.publishedAt).toUTCString()}</pubDate>
      </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(SITE.name)}</title>
        <description>${escapeXml(SITE.description)}</description>
        <link>${SITE.url}</link>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
