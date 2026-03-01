import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostContent } from "@/components/blog/PostContent";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogPostSchema } from "@/components/structured-data/BlogPostSchema";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ["fr", "en"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `https://infinex.studio/${locale}/blog/${slug}`,
      siteName: "Infinex",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      languages: {
        fr: `/fr/blog/${slug}`,
        en: `/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlogPostSchema post={post} />
        <article>
          <PostHeader post={post} />
          <PostContent content={post.content} />
        </article>
        <BlogCTA />
      </div>
    </section>
  );
}
