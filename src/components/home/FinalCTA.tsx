"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ParticleField } from "@/components/ui/ParticleField";

export function FinalCTA() {
  const t = useTranslations("finalCta");

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/10 blur-[128px]" />
        <ParticleField variant="cta" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg text-text-secondary sm:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <WhatsAppButton />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
