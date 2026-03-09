"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const particles = [
  { top: "12%", left: "8%", delay: 0, duration: 7 },
  { top: "20%", left: "85%", delay: 1.5, duration: 9 },
  { top: "45%", left: "15%", delay: 3, duration: 6 },
  { top: "35%", left: "75%", delay: 0.5, duration: 8 },
  { top: "60%", left: "50%", delay: 2, duration: 10 },
  { top: "25%", left: "40%", delay: 4, duration: 7 },
  { top: "55%", left: "90%", delay: 1, duration: 9 },
  { top: "70%", left: "25%", delay: 3.5, duration: 8 },
  { top: "15%", left: "60%", delay: 2.5, duration: 6 },
  { top: "50%", left: "5%", delay: 0.8, duration: 11 },
  { top: "40%", left: "55%", delay: 1.2, duration: 7 },
  { top: "65%", left: "70%", delay: 3.8, duration: 9 },
];

export function HomeHero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight */}
      <div className="hero-spotlight" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: i % 3 === 0 ? "4px" : "2px",
            height: i % 3 === 0 ? "4px" : "2px",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-text-secondary"
        >
          {t("eyebrow")}
        </motion.div>

        {/* H1 — massive typography with bi-tone */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-white/30">{"L'IA "}</span>
          <span className="text-white">qui travaille</span>
          <br />
          <span className="text-white/30">pour </span>
          <span className="text-white">votre business.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons — outline + filled pair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#services"
            className="rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Nos services
          </a>
          <a
            href="/get-started"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
