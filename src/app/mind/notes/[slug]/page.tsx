import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentArticle } from "@/components/content-article";
import { SITE } from "@/data/site";
import { getContentEntries, getContentEntry } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = await getContentEntries("mind");
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getContentEntry("mind", slug);
  if (!entry) return {};

  return {
    title: entry.metadata.title,
    description: entry.metadata.summary,
    alternates: { canonical: `/mind/notes/${entry.slug}` },
    openGraph: {
      type: "article",
      title: entry.metadata.title,
      description: entry.metadata.summary,
      publishedTime: entry.metadata.publishedAt,
      url: `/mind/notes/${entry.slug}`,
    },
  };
}

export default async function MindNotePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getContentEntry("mind", slug);
  if (!entry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.metadata.title,
    description: entry.metadata.summary,
    datePublished: entry.metadata.publishedAt,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/mind/notes/${entry.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContentArticle entry={entry} backHref="/mind" backLabel="All notes" />
    </>
  );
}
