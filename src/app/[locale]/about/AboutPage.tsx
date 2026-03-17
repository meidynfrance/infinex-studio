"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const rgb = "255,229,1";
const color = "var(--color-accent-primary)";

const iconMap: Record<string, string> = {
  content: "content",
  automation: "automation",
  tools: "tools",
  training: "training",
};

export function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="orb orb-1" style={{ background: `rgba(${rgb},0.04)` }} />
      <div className="orb orb-2" style={{ background: `rgba(${rgb},0.03)` }} />
      <div className="orb orb-3" style={{ background: `rgba(${rgb},0.04)` }} />
      <div
        className="scan-line z-[1]"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.1), transparent)` }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[500px]"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${rgb},0.06) 0%, transparent 70%)` }}
      />

      {/* ── HERO ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 pt-36 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em]"
          style={{ color, borderColor: `rgba(${rgb},0.2)`, backgroundColor: `rgba(${rgb},0.04)` }}
        >
          {t("eyebrow")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("title")}
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

      {/* ── FONDATEUR ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className="relative overflow-hidden rounded-2xl aspect-[3/4]"
              style={{ border: `1px solid rgba(${rgb},0.1)` }}
            >
              <img
                src="/images/meidy.jpg"
                alt={t("founder.name")}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-bold text-white">{t("founder.name")}</p>
                <p className="mt-1 text-sm" style={{ color }}>{t("founder.role")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("founder.eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("founder.name")}</h2>
            <p className="mt-2 text-text-secondary" style={{ color }}>{t("founder.role")}</p>
            <p className="mt-6 text-text-secondary leading-relaxed">{t("founder.description")}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">{t("founder.description2")}</p>
          </motion.div>
        </div>
      </section>

      {/* ── VISION IA ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12"
          style={{ backgroundColor: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.08)` }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>Vision</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("vision.title")}</h2>
          <div className="mt-8 space-y-4">
            <p className="text-lg text-white leading-relaxed">{t("vision.text")}</p>
            <p className="text-text-secondary leading-relaxed">{t("vision.text2")}</p>
          </div>
        </motion.div>
      </section>

      {/* ── CE QUE NOUS FAISONS ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>Expertise</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("expertise.title")}</h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {([0, 1, 2, 3] as const).map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 transition-colors"
              style={{ backgroundColor: `rgba(${rgb},0.02)`, border: `1px solid rgba(${rgb},0.06)` }}
            >
              <div className="icon-box" style={{ "--icon-color": color } as React.CSSProperties}>
                <ServiceIcon name={iconMap[t(`expertise.items.${i}.icon`)] || "tools"} color={color} size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{t(`expertise.items.${i}.title`)}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{t(`expertise.items.${i}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("cta.title")}</h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <div className="mt-10">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color }}
            >
              {t("cta.button")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
