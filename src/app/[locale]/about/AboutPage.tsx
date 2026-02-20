"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function AboutPage() {
  const t = useTranslations("about");

  const values = [0, 1, 2, 3] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl"
          >
            {t("title")}
          </motion.h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection>
              <Card hover={false} className="h-full">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {t("vision.title")}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed text-lg">
                  {t("vision.description")}
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <Card hover={false} className="h-full">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {t("mission.title")}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed text-lg">
                  {t("mission.description")}
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
              {t("values.title")}
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="text-xl font-bold">
                    {t(`values.items.${i}.title`)}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {t(`values.items.${i}.description`)}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
