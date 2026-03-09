"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";

export function GetStartedPage() {
  const t = useTranslations("getStarted");

  const benefits = [0, 1, 2] as const;

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-[1.1]">
              <SplitTextReveal text={t("title")} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-text-secondary"
            >
              {t("subtitle")}
            </motion.p>
            <div className="mt-10 space-y-6">
              {benefits.map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 text-accent-primary text-xl font-bold">&#10003;</span>
                  <div>
                    <h3 className="font-bold text-lg">{t(`benefits.${i}.title`)}</h3>
                    <p className="mt-1 text-text-secondary">{t(`benefits.${i}.description`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Suspense><ContactForm /></Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
