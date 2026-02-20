"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/10 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent-secondary/10 blur-[96px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 text-xl text-accent-primary sm:text-2xl lg:text-3xl font-semibold"
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10"
        >
          <WhatsAppButton />
        </motion.div>
      </div>
    </section>
  );
}
