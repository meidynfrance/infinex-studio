"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import type { BlogCategory } from "@/lib/blog";

const categories: BlogCategory[] = ["strategie-ia", "automatisation", "formation", "cas-usage", "outils-ia"];

export function CategoryFilter() {
  const t = useTranslations("blog");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const activeCategory = searchParams.get("category");

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={pathname}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !activeCategory
            ? "bg-accent-primary text-[#0A0A0A]"
            : "bg-surface border border-border text-text-secondary hover:border-accent-primary hover:text-accent-primary"
        }`}
      >
        {t("allCategories")}
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`${pathname}?category=${cat}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat
              ? "bg-accent-primary text-[#0A0A0A]"
              : "bg-surface border border-border text-text-secondary hover:border-accent-primary hover:text-accent-primary"
          }`}
        >
          {t(`categories.${cat}`)}
        </Link>
      ))}
    </div>
  );
}
