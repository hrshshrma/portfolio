import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-2xl mx-auto py-20 sm:py-24 px-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-serif text-4xl sm:text-5xl mb-12 tracking-tight">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="group flex flex-col space-y-1 mb-6 py-3 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-secondary/50"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col gap-1">
                <p className="tracking-tight group-hover:text-accent transition-colors duration-200">{post.metadata.title}</p>
                <p className="text-sm text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
