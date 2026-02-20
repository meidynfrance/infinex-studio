import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
              INFINEX
            </Link>
            <p className="mt-3 text-sm text-text-secondary">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("footer.services")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/ai-transformation"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.transformation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-engineering"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.engineering")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {t("nav.about")}
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
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@infinex.studio"
                  className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  hello@infinex.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Infinex. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
