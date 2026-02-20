"use client";

import { useTranslations } from "next-intl";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FAQ() {
  const t = useTranslations("faq");

  const items = [0, 1, 2, 3].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <Accordion items={items} />
        </AnimatedSection>
      </div>
    </section>
  );
}
