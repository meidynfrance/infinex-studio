import type { MetadataRoute } from "next";

const baseUrl = "https://infinex.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];
  const routes = [
    "",
    "/ai-transformation",
    "/ai-engineering",
    "/about",
    "/get-started",
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

  return entries;
}
