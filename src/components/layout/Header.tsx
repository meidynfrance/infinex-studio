"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          INFINEX
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-white"
          >
            {t("blog")}
          </Link>
          <LanguageSwitcher />
          <Link
            href="/get-started"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
          >
            {t("getStarted")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-secondary cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5">
          <nav className="flex flex-col px-4 py-6 space-y-5">
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              {t("blog")}
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/get-started"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-white px-6 py-2.5 text-center text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
              >
                {t("getStarted")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
