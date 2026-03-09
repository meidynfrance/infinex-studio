"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BlogCTA() {
  const t = useTranslations("blog.postCta");

  return (
    <AnimatedSection>
      <div className="mt-16 rounded-2xl bg-background-secondary p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-text-secondary text-lg">
          {t("description")}
        </p>
        <div className="mt-6">
          <Button href="/get-started" size="lg">
            {t("cta")}
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
