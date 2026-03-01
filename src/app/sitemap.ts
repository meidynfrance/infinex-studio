import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

const baseUrl = "https://infinex.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const routes = [
    "",
    "/get-started",
    "/blog",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  const slugs = getAllSlugs();
  for (const locale of locales) {
    for (const slug of slugs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
