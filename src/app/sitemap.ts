import type { MetadataRoute } from "next";

import { SITE } from "@/data/site";
import { getContentEntries } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tech, mind] = await Promise.all([
    getContentEntries("tech"),
    getContentEntries("mind"),
  ]);
  const staticRoutes = [
    "",
    "/photography",
    "/photography/gear",
    "/tech",
    "/mind",
    "/about",
    "/library",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...tech.map((entry) => ({
      url: `${SITE.url}/tech/writing/${entry.slug}`,
      lastModified: new Date(entry.metadata.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...mind.map((entry) => ({
      url: `${SITE.url}/mind/notes/${entry.slug}`,
      lastModified: new Date(entry.metadata.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
