"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const cards = [
  { key: "audit", number: "01" },
  { key: "implementation", number: "02" },
  { key: "training", number: "03" },
] as const;

export function Approach() {
  const t = useTranslations("approach");

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <AnimatedSection key={card.key} delay={index * 0.15}>
              <div className="h-full rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent-primary">
                <span className="text-accent-primary font-bold text-sm tracking-wide">
                  {card.number}
                </span>
                <h3 className="mt-4 text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {t(`${card.key}.title`)}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {t(`${card.key}.description`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
