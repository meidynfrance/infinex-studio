import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  post: BlogPostMeta;
};

export function BlogPostSchema({ post }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Infinex",
      url: "https://infinex.studio",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://infinex.studio/${post.locale}/blog/${post.slug}`,
    },
    inLanguage: post.locale === "fr" ? "fr-FR" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
