import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  post: BlogPostMeta;
};

export async function PostHeader({ post }: Props) {
  const t = await getTranslations("blog");

  return (
    <header className="mb-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors mb-8"
      >
        &larr; {t("backToBlog")}
      </Link>

      <span className="block mb-4">
        <span className="inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
          {t(`categories.${post.category}`)}
        </span>
      </span>

      <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl leading-[1.1]">
        {post.title}
      </h1>

      <div className="mt-6 flex items-center gap-4 text-text-secondary">
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
    </header>
  );
}
