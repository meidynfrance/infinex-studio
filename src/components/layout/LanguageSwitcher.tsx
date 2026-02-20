"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const nextLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary cursor-pointer"
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
