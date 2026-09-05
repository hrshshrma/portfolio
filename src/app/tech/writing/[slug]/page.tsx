import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentArticle } from "@/components/content-article";
import { SITE } from "@/data/site";
import { getContentEntries, getContentEntry } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = await getContentEntries("tech");
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getContentEntry("tech", slug);
  if (!entry || entry.metadata.status === "draft") return {};

  return {
    title: entry.metadata.title,
    description: entry.metadata.summary,
    alternates: { canonical: `/tech/writing/${entry.slug}` },
    openGraph: {
      type: "article",
      title: entry.metadata.title,
      description: entry.metadata.summary,
      publishedTime: entry.metadata.publishedAt,
      url: `/tech/writing/${entry.slug}`,
    },
  };
}

export default async function TechArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getContentEntry("tech", slug);
  if (!entry || entry.metadata.status === "draft") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.metadata.title,
    description: entry.metadata.summary,
    datePublished: entry.metadata.publishedAt,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/tech/writing/${entry.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContentArticle
        entry={entry}
        backHref="/tech"
        backLabel="All tech"
      />
    </>
  );
}
