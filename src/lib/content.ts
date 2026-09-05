import fs from "node:fs";
import path from "node:path";

import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { parse as parseYaml } from "yaml";

export type ContentSection = "tech" | "mind";

export interface ContentMetadata {
  title: string;
  summary: string;
  publishedAt: string;
  type: "writing" | "note";
  topics: string[];
  status?: "published" | "draft";
  image?: string;
}

export interface ContentEntry {
  section: ContentSection;
  slug: string;
  metadata: ContentMetadata;
  html: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

function assertString(
  value: unknown,
  field: string,
  filePath: string
): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid "${field}" in ${filePath}`);
  }
}

function parseMetadata(
  data: Record<string, unknown>,
  filePath: string
): ContentMetadata {
  assertString(data.title, "title", filePath);
  assertString(data.summary, "summary", filePath);
  assertString(data.publishedAt, "publishedAt", filePath);
  assertString(data.type, "type", filePath);

  if (data.type !== "writing" && data.type !== "note") {
    throw new Error(`Invalid "type" in ${filePath}`);
  }

  if (
    data.topics !== undefined &&
    (!Array.isArray(data.topics) ||
      data.topics.some((topic) => typeof topic !== "string"))
  ) {
    throw new Error(`Invalid "topics" in ${filePath}`);
  }

  if (
    data.status !== undefined &&
    data.status !== "published" &&
    data.status !== "draft"
  ) {
    throw new Error(`Invalid "status" in ${filePath}`);
  }

  if (data.image !== undefined && typeof data.image !== "string") {
    throw new Error(`Invalid "image" in ${filePath}`);
  }

  return {
    title: data.title,
    summary: data.summary,
    publishedAt: data.publishedAt,
    type: data.type,
    topics: (data.topics as string[] | undefined) ?? [],
    status: data.status as ContentMetadata["status"],
    image: data.image,
  };
}

function parseSource(source: string, filePath: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const data = parseYaml(match[1]);
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`Invalid frontmatter in ${filePath}`);
  }

  return {
    content: match[2],
    data: data as Record<string, unknown>,
  };
}

async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: { light: "min-light", dark: "min-dark" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

function entryPath(section: ContentSection, slug: string) {
  return path.join(CONTENT_ROOT, section, `${slug}.mdx`);
}

export async function getContentEntry(
  section: ContentSection,
  slug: string
): Promise<ContentEntry | null> {
  const filePath = entryPath(section, slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = parseSource(source, filePath);
  const metadata = parseMetadata(data, filePath);

  return {
    section,
    slug,
    metadata,
    html: await markdownToHtml(content),
  };
}

export async function getContentEntries(
  section: ContentSection
): Promise<ContentEntry[]> {
  const directory = path.join(CONTENT_ROOT, section);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const slugs = fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => path.basename(file, ".mdx"));

  const entries = await Promise.all(
    slugs.map((slug) => getContentEntry(section, slug))
  );

  return entries
    .filter((entry): entry is ContentEntry => entry !== null)
    .filter((entry) => entry.metadata.status !== "draft")
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}
