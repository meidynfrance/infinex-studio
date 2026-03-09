"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

function ChoiceCard({
  href,
  badge,
  badgeIcon,
  title,
  description,
  cta,
  accentColor,
  accentRgb,
  delay,
}: {
  href: string;
  badge: string;
  badgeIcon: string;
  title: string;
  description: string;
  cta: string;
  accentColor: string;
  accentRgb: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col rounded-3xl p-10 sm:p-12 transition-all duration-500 hover:-translate-y-1"
        style={{
          backgroundColor: `rgba(${accentRgb},0.04)`,
          border: `1px solid rgba(${accentRgb},0.1)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = `rgba(${accentRgb},0.07)`;
          e.currentTarget.style.borderColor = `rgba(${accentRgb},0.2)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `rgba(${accentRgb},0.04)`;
          e.currentTarget.style.borderColor = `rgba(${accentRgb},0.1)`;
        }}
      >
        {/* Badge */}
        <span
          className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em]"
          style={{
            color: accentColor,
            borderColor: `rgba(${accentRgb},0.2)`,
            backgroundColor: `rgba(${accentRgb},0.06)`,
          }}
        >
          <ServiceIcon name={badgeIcon} color={accentColor} size={14} /> {badge}
        </span>

        {/* Title */}
        <h2 className="mt-8 text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-5 flex-1 text-base leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between">
          <span
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 group-hover:gap-3"
            style={{ color: accentColor }}
          >
            {cta}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>

          <div
            className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
            style={{
              border: `1px solid rgba(${accentRgb},0.15)`,
              backgroundColor: `rgba(${accentRgb},0.05)`,
            }}
          >
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function HomeCards() {
  const t = useTranslations("homeCards");

  return (
    <section id="services" className="relative py-20 sm:py-28">
      {/* Section label */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white/25">Choisissez </span>
            <span className="text-white">votre levier</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <ChoiceCard
            href="/croissance"
            badge={t("growth.badge")}
            badgeIcon="trend-up"
            title={t("growth.title")}
            description={t("growth.description")}
            cta={t("growth.cta")}
            accentColor="var(--color-green)"
            accentRgb="94,201,126"
            delay={0}
          />
          <ChoiceCard
            href="/efficacite"
            badge={t("efficiency.badge")}
            badgeIcon="bolt"
            title={t("efficiency.title")}
            description={t("efficiency.description")}
            cta={t("efficiency.cta")}
            accentColor="var(--color-blue)"
            accentRgb="79,163,224"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
