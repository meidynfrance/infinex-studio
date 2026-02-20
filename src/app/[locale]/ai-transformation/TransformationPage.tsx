"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function TransformationPage() {
  const t = useTranslations("transformation");

  const steps = [0, 1, 2, 3] as const;
  const benefits = [0, 1, 2, 3] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent-primary/10 blur-[128px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-xl text-text-secondary"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              {t("process.title")}
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold">
                    {t(`process.steps.${i}.title`)}
                  </h3>
                  <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                    {t(`process.steps.${i}.description`)}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              {t("benefits.title")}
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-primary sm:text-5xl font-[family-name:var(--font-space-grotesk)]">
                    {t(`benefits.items.${i}.metric`)}
                  </div>
                  <p className="mt-3 text-text-secondary">
                    {t(`benefits.items.${i}.description`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <AnimatedSection className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            {t("cta.title")}
          </h2>
          <div className="mt-8">
            <Button href="/get-started" size="lg">
              {t("cta.button")}
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
