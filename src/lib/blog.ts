import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogCategory = "strategie-ia" | "automatisation" | "formation" | "cas-usage" | "outils-ia";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: BlogCategory;
  readingTime: number;
  locale: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(locale: string): BlogPostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR);
  const suffix = `.${locale}.mdx`;

  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => {
      const slug = file.replace(suffix, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category as BlogCategory,
        readingTime: Math.ceil(stats.minutes),
        locale,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.${locale}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category as BlogCategory,
    readingTime: Math.ceil(stats.minutes),
    locale,
    content,
  };
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  const slugs = new Set<string>();

  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const slug = file.replace(/\.(fr|en)\.mdx$/, "");
      slugs.add(slug);
    }
  }

  return Array.from(slugs);
}
