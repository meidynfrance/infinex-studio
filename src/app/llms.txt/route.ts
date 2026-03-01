import { getAllPosts } from "@/lib/blog";

export function GET() {
  const frPosts = getAllPosts("fr");
  const enPosts = getAllPosts("en");

  const lines: string[] = [
    "# Infinex",
    "",
    "> AI consulting for SMBs — audit, deployment, and training. Concrete results in weeks.",
    "",
    "Infinex helps SMBs (5-200 employees) increase margins with AI. We audit processes, deploy custom automations, and train teams for lasting adoption.",
    "",
    "## Pages",
    "",
    "- [Home (FR)](https://infinex.studio/fr)",
    "- [Home (EN)](https://infinex.studio/en)",
    "- [Get Started (FR)](https://infinex.studio/fr/get-started)",
    "- [Get Started (EN)](https://infinex.studio/en/get-started)",
    "- [Blog (FR)](https://infinex.studio/fr/blog)",
    "- [Blog (EN)](https://infinex.studio/en/blog)",
    "",
    "## Services",
    "",
    "- **Audit & Strategy**: Process audit, quick win identification, costed action plan",
    "- **AI Deployment**: Custom automations, AI tools integrated into workflows",
    "- **Training & Adoption**: Hands-on workshops for lasting AI adoption",
    "",
    "## Blog Posts (FR)",
    "",
  ];

  for (const post of frPosts) {
    lines.push(`- [${post.title}](https://infinex.studio/fr/blog/${post.slug}): ${post.description}`);
  }

  lines.push("");
  lines.push("## Blog Posts (EN)");
  lines.push("");

  for (const post of enPosts) {
    lines.push(`- [${post.title}](https://infinex.studio/en/blog/${post.slug}): ${post.description}`);
  }

  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
