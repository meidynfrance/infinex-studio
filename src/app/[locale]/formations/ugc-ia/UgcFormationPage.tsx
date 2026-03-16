"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { UgcFormationForm } from "@/components/forms/UgcFormationForm";
import { VideoCarousel } from "@/components/formations/VideoCarousel";

const rgb = "94,201,126";
const color = "var(--color-green)";

export function UgcFormationPage() {
  const t = useTranslations("formationUgc");

  const programItems = [0, 1, 2, 3] as const;
  const audienceItems = [0, 1, 2, 3] as const;

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="orb orb-1" style={{ background: `rgba(${rgb},0.06)` }} />
      <div className="orb orb-2" style={{ background: `rgba(${rgb},0.04)` }} />
      <div className="orb orb-3" style={{ background: `rgba(${rgb},0.05)` }} />
      <div
        className="scan-line z-[1]"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.15), transparent)` }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[500px]"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(${rgb},0.08) 0%, transparent 70%)` }}
      />

      {/* Back button */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/croissance"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-white group"
          >
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t("back")}
          </Link>
        </motion.div>
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em]"
          style={{ color, borderColor: `rgba(${rgb},0.2)`, backgroundColor: `rgba(${rgb},0.04)` }}
        >
          <ServiceIcon name="video" color={color} size={14} />
          {t("eyebrow")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t("title").split(t("titleAccent"))[0]}
          <span style={{ color }}>{t("titleAccent")}</span>
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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#inscription"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: color }}
          >
            {t("heroCta")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>

      </section>

      {/* ── VIDEO CAROUSEL ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("carousel.eyebrow")}</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("carousel.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary">{t("carousel.subtitle")}</p>
        </motion.div>

        <VideoCarousel
          videos={[
            { src: "/videos/ugc/1581766169768548.mp4" },
            { src: "/videos/ugc/preview_video_App_Demo__Brown_Girl_1.mp4" },
            { src: "/videos/ugc/preview_video_YKPSPLZO7iUKw4t_5DBaf_LMQeZPrm.mp4" },
            { src: "/videos/ugc/preview_video_showcase_007d5ec8-c355-4904-9170-7d84ed675a8d_50144192.mp4" },
            { src: "/videos/ugc/2.mp4" },
            { src: "/videos/ugc/3.mp4" },
            { src: "/videos/ugc/5.mp4" },
            { src: "/videos/ugc/case_study_2.mp4" },
          ]}
        />
      </section>

      <div className="gradient-line mx-auto max-w-7xl" />

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-red-400">{t("problem.eyebrow")}</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t("problem.title")}</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{t("problem.description")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("solution.eyebrow")}</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t("solution.title")}</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{t("solution.description")}</p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("program.eyebrow")}</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("program.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary">{t("program.subtitle")}</p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {programItems.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 transition-colors"
              style={{ backgroundColor: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.06)` }}
            >
              <span className="text-2xl font-bold" style={{ color }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{t(`program.items.${i}.title`)}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{t(`program.items.${i}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("audience.eyebrow")}</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("audience.title")}</h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {audienceItems.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl p-5"
              style={{ backgroundColor: `rgba(${rgb},0.02)`, border: `1px solid rgba(${rgb},0.05)` }}
            >
              <span className="mt-0.5 text-lg" style={{ color }}>&#10003;</span>
              <div>
                <h3 className="font-bold text-white">{t(`audience.items.${i}.title`)}</h3>
                <p className="mt-1 text-sm text-text-secondary">{t(`audience.items.${i}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DETAILS PRATIQUES ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12"
          style={{ backgroundColor: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.08)` }}
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t("details.title")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {([0, 1, 2] as const).map((i) => (
              <div key={i}>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary">{t(`details.items.${i}.label`)}</span>
                <p className="mt-2 text-lg font-bold text-white">{t(`details.items.${i}.value`)}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-secondary leading-relaxed" style={{ color }}>{t("details.sessionNote")}</p>
        </motion.div>
      </section>

      {/* ── FORMULAIRE ── */}
      <section id="inscription" className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color }}>{t("formSection.eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t("formSection.title")}</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{t("formSection.description")}</p>
            <div className="mt-8 space-y-4">
              {([0, 1, 2] as const).map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color }}>&#10003;</span>
                  <span className="text-text-secondary">{t(`formSection.bullets.${i}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Suspense><UgcFormationForm /></Suspense>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
