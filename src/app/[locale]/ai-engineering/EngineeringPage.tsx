"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function EngineeringPage() {
  const t = useTranslations("engineering");

  const modelCards = ["subscription", "outcome", "ai"] as const;
  const advantages = [0, 1, 2, 3, 4] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-accent-secondary/10 blur-[128px]" />
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

      {/* Model */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              {t("model.title")}
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {modelCards.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.15}>
                <Card className="h-full">
                  <h3 className="text-xl font-bold">{t(`model.${key}.title`)}</h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {t(`model.${key}.description`)}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages comparison */}
      <section className="py-24 sm:py-32 bg-background-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              {t("advantages.title")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-2 bg-background-secondary">
                <div className="border-b border-r border-border p-4 text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  Traditional
                </div>
                <div className="border-b border-border p-4 text-sm font-semibold text-accent-primary uppercase tracking-wider">
                  Infinex
                </div>
              </div>
              {advantages.map((i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="border-b border-r border-border p-4 text-text-secondary">
                    {t(`advantages.items.${i}.traditional`)}
                  </div>
                  <div className="border-b border-border p-4 text-text-primary font-medium">
                    {t(`advantages.items.${i}.infinex`)}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
