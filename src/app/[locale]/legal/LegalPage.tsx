"use client";

import { useTranslations } from "next-intl";

export function LegalPage() {
  const t = useTranslations("legal");

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-sm text-text-secondary">{t("lastUpdated")}</p>

        <div className="mt-12 space-y-10 text-text-secondary text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("editor.title")}</h2>
            <p className="mt-3 whitespace-pre-line">{t("editor.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("publication.title")}</h2>
            <p className="mt-3">{t("publication.content")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">{t("hosting.title")}</h2>
            <p className="mt-3 whitespace-pre-line">{t("hosting.content")}</p>
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
            <h2 className="text-lg font-semibold text-text-primary">{t("law.title")}</h2>
            <p className="mt-3">{t("law.content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
