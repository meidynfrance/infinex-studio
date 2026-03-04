import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
              INFINEX
            </Link>
            <p className="mt-3 text-sm text-text-secondary">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/get-started"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.getStarted")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("footer.contact")}
            </h3>
            <div className="mt-4">
              <Link
                href="/get-started"
                className="text-sm text-accent-primary transition-colors hover:text-accent-primary/80"
              >
                {t("nav.getStarted")} &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-text-secondary/60">
              &copy; {new Date().getFullYear()} Infinex. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <Link
                href="/legal"
                className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary"
              >
                {t("nav.legal")}
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary"
              >
                {t("nav.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary"
              >
                {t("nav.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
