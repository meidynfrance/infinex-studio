"use client";

import { useTranslations } from "next-intl";

export function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-sm text-text-secondary">{t("lastUpdated")}</p>

        <div className="mt-12 space-y-10 text-text-secondary text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("controller.title")}</h2>
            <p className="mt-3 whitespace-pre-line">{t("controller.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("dataCollected.title")}</h2>
            <p className="mt-3">{t("dataCollected.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("purpose.title")}</h2>
            <p className="mt-3">{t("purpose.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("storage.title")}</h2>
            <p className="mt-3">{t("storage.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("retention.title")}</h2>
            <p className="mt-3">{t("retention.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("rights.title")}</h2>
            <p className="mt-3">{t("rights.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("cookies.title")}</h2>
            <p className="mt-3">{t("cookies.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("thirdParty.title")}</h2>
            <p className="mt-3">{t("thirdParty.content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
