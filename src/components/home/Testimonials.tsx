"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  const t = useTranslations("testimonials");

  const items = [0, 1, 2] as const;

  return (
    <section className="py-24 sm:py-32 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Card className="h-full flex flex-col" hover={false}>
                <div className="mb-4 text-accent-primary text-3xl">&ldquo;</div>
                <p className="flex-1 text-text-secondary leading-relaxed italic">
                  {t(`items.${i}.quote`)}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-text-primary">
                    {t(`items.${i}.author`)}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {t(`items.${i}.company`)}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
