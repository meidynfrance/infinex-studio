"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  post: BlogPostMeta;
  delay?: number;
};

export function PostCard({ post, delay = 0 }: Props) {
  const t = useTranslations("blog");

  return (
    <AnimatedSection delay={delay}>
      <Link href={`/blog/${post.slug}`} className="block group">
        <article className="h-full rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all duration-300 hover:border-accent-primary hover:-translate-y-1">
          <span className="inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
            {t(`categories.${post.category}`)}
          </span>
          <h3 className="mt-4 text-xl font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-accent-primary transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-text-secondary leading-relaxed line-clamp-2">
            {post.description}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-text-secondary">
            <span>{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(post.locale === "fr" ? "fr-FR" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime} min</span>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
}
