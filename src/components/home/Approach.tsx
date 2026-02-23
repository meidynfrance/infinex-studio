"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [
  // Audit - magnifying glass / search
  <svg key="audit" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 8v6M8 11h6" />
  </svg>,
  // Implementation - rocket
  <svg key="implementation" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-secondary">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // Training - graduation cap / users with lightbulb
  <svg key="training" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-tertiary">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
];

export function Approach() {
  const t = useTranslations("approach");

  const cards = [
    { key: "audit", icon: icons[0] },
    { key: "implementation", icon: icons[1] },
    { key: "training", icon: icons[2] },
  ] as const;

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
              <Card className="h-full">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold">
                  {t(`${card.key}.title`)}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {t(`${card.key}.description`)}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
