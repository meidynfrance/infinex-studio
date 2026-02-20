"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";

export function GetStartedPage() {
  const t = useTranslations("getStarted");

  return (
    <section className="relative py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold sm:text-5xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
