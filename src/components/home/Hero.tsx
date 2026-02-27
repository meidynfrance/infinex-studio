"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl leading-[1.05]">
          <SplitTextReveal text={t("title")} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 text-xl text-accent-primary sm:text-2xl lg:text-3xl font-semibold"
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10"
        >
          <Button href="/get-started" size="lg">
            {t("cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
