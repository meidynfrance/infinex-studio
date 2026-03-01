import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      languages: {
        fr: "/fr/blog",
        en: "/en/blog",
      },
    },
  };
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category } = await searchParams;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  let posts = getAllPosts(locale);

  if (category) {
    posts = posts.filter((p) => p.category === category);
  }

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="flex justify-center mb-12">
          <CategoryFilter />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} delay={index * 0.1} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-text-secondary mt-12">
            {locale === "fr" ? "Aucun article dans cette catégorie." : "No articles in this category."}
          </p>
        )}
      </div>
    </section>
  );
}
