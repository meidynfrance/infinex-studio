"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [
  // Strategy - compass
  <svg key="strategy" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
  </svg>,
  // Transformation - refresh
  <svg key="transform" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary">
    <path d="M21 2v6h-6M3 22v-6h6M21 13a9 9 0 01-15.36 5.64M3 11a9 9 0 0115.36-5.64" />
  </svg>,
  // Engineering - code
  <svg key="engineering" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-primary">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
];

export function Approach() {
  const t = useTranslations("approach");

  const cards = [
    { key: "strategy", icon: icons[0] },
    { key: "transformation", icon: icons[1] },
    { key: "engineering", icon: icons[2] },
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
