"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Button } from "@/components/ui/Button";


type ServiceLandingProps = {
  namespace: "croissance" | "efficacite";
  theme: "green" | "blue";
};

const themeConfig = {
  green: {
    color: "var(--color-green)",
    rgb: "94,201,126",
    buttonVariant: "green" as const,
  },
  blue: {
    color: "var(--color-blue)",
    rgb: "79,163,224",
    buttonVariant: "blue" as const,
  },
};

export function ServiceLanding({ namespace, theme }: ServiceLandingProps) {
  const t = useTranslations(namespace);
  const config = themeConfig[theme];

  const services = Array.from({ length: 12 }, (_, i) => ({
    icon: t(`services.${i}.icon`),
    benefit: t(`services.${i}.benefit`),
    how: t(`services.${i}.how`),
    link: t.has(`services.${i}.link`) ? t(`services.${i}.link`) : undefined,
  }));

  return (
    <div className="relative overflow-hidden">
      {/* ── Animated background ── */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />

      {/* Gradient orbs */}
      <div
        className="orb orb-1"
        style={{ background: `rgba(${config.rgb},0.06)` }}
      />
      <div
        className="orb orb-2"
        style={{ background: `rgba(${config.rgb},0.04)` }}
      />
      <div
        className="orb orb-3"
        style={{ background: `rgba(${config.rgb},0.05)` }}
      />

      {/* Horizontal scan line */}
      <div
        className="scan-line z-[1]"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${config.rgb},0.15), transparent)`,
        }}
      />

      {/* Top edge glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[500px]"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${config.rgb},0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Back button */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-white group"
          >
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t("back")}
          </Link>
        </motion.div>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em]"
          style={{
            color: config.color,
            borderColor: `rgba(${config.rgb},0.2)`,
            backgroundColor: `rgba(${config.rgb},0.04)`,
          }}
        >
          <ServiceIcon name={namespace === "croissance" ? "trend-up" : "bolt"} color={config.color} size={14} />
          {t("eyebrow")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("title").split(t("titleAccent"))[0]}
          <span style={{ color: config.color }}>{t("titleAccent")}</span>
          {t("title").split(t("titleAccent"))[1]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>
      </section>

      {/* Separator */}
      <div className="gradient-line mx-auto max-w-7xl" />

      {/* Services grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Section mid-glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: `radial-gradient(circle, rgba(${config.rgb},0.03) 0%, transparent 60%)`,
          }}
        />

        <div className="relative grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              benefit={service.benefit}
              how={service.how}
              theme={theme}
              index={i}
              featured
              href={service.link}
            />
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-28">
        {/* CTA spotlight glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background: `radial-gradient(ellipse 50% 50% at 50% 30%, rgba(${config.rgb},0.08) 0%, transparent 70%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-6 text-base text-text-secondary sm:text-lg">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-10">
            <Button href="/get-started" variant={config.buttonVariant} size="lg" className="btn-shimmer rounded-full">
              {t("ctaButton")} →
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
