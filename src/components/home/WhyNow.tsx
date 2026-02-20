"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function WhyNow() {
  const t = useTranslations("whyNow");

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="mt-10 space-y-6">
          <AnimatedSection delay={0.1}>
            <p className="text-2xl font-bold text-accent-primary sm:text-3xl">
              {t("paragraph1")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t("paragraph2")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg text-text-primary font-medium">
              {t("paragraph3")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 rounded-2xl border border-accent-primary/30 bg-accent-primary/5 p-6 sm:p-8">
              <p className="text-xl font-bold text-accent-primary sm:text-2xl">
                {t("highlight")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
