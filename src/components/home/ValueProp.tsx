"use client";

import { useTranslations } from "next-intl";
import { SplitTextRevealOnScroll } from "@/components/ui/SplitTextRevealOnScroll";

export function ValueProp() {
  const t = useTranslations("valueProp");

  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-6xl leading-[1.1]">
          <SplitTextRevealOnScroll text={t("statement")} />
        </h2>
      </div>
    </section>
  );
}
