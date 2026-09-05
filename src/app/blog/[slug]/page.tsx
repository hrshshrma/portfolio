import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegacyBlogArticlePage({ params }: PageProps) {
  const { slug: requestedSlug } = await params;
  const slug =
    requestedSlug === "Blocking-Render-in-React"
      ? "blocking-render-in-react"
      : requestedSlug.toLowerCase();

  redirect(`/tech/writing/${slug}`);
}
