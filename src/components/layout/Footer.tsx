import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Large watermark text */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden">
        <span className="text-[12rem] font-bold leading-none text-white/[0.015] tracking-tight sm:text-[16rem]">
          INFINEX
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              INFINEX
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary/60">
              {t("footer.company")}
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="text-sm text-text-secondary transition-colors duration-200 hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-secondary transition-colors duration-200 hover:text-white">
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary/60">
              {t("footer.contact")}
            </h3>
            <div className="mt-5">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-sm text-white transition-colors duration-200 hover:text-text-secondary"
              >
                {t("nav.getStarted")}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Infinex. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="text-xs text-text-secondary/40 transition-colors hover:text-text-secondary">
              {t("nav.legal")}
            </Link>
            <Link href="/privacy" className="text-xs text-text-secondary/40 transition-colors hover:text-text-secondary">
              {t("nav.privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-text-secondary/40 transition-colors hover:text-text-secondary">
              {t("nav.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
