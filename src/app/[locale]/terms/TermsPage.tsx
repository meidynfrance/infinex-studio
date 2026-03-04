"use client";

import { useTranslations } from "next-intl";

export function TermsPage() {
  const t = useTranslations("terms");

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-sm text-text-secondary">{t("lastUpdated")}</p>

        <div className="mt-12 space-y-10 text-text-secondary text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("object.title")}</h2>
            <p className="mt-3">{t("object.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("services.title")}</h2>
            <p className="mt-3">{t("services.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("access.title")}</h2>
            <p className="mt-3">{t("access.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("ip.title")}</h2>
            <p className="mt-3">{t("ip.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("liability.title")}</h2>
            <p className="mt-3">{t("liability.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("modifications.title")}</h2>
            <p className="mt-3">{t("modifications.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("law.title")}</h2>
            <p className="mt-3">{t("law.content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
