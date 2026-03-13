"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ServiceIcon } from "./ServiceIcon";

type ServiceCardProps = {
  icon: string;
  benefit: string;
  how: string;
  theme: "green" | "blue";
  index: number;
  featured?: boolean;
  href?: string;
};

const themeConfig = {
  green: { rgb: "94,201,126", color: "var(--color-green)" },
  blue: { rgb: "79,163,224", color: "var(--color-blue)" },
};

export function ServiceCard({ icon, benefit, how, theme, index, featured = false, href }: ServiceCardProps) {
  const { rgb, color } = themeConfig[theme];
  const num = String(index + 1).padStart(2, "0");
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!glowRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(${rgb},0.12), transparent 60%)`;
    },
    [rgb],
  );

  if (featured) {
    const card = (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.7,
          delay: (index % 2) * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`group relative rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden${href ? " cursor-pointer" : ""}`}
        style={{
          backgroundColor: `rgba(${rgb},0.03)`,
          border: `1px solid rgba(${rgb},0.06)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `rgba(${rgb},0.2)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `rgba(${rgb},0.06)`;
          if (glowRef.current) glowRef.current.style.background = "transparent";
        }}
      >
        {/* Mouse-follow glow */}
        <div ref={glowRef} className="card-glow" />

        {/* Large background number */}
        <span
          className="bg-number pointer-events-none absolute -right-4 -top-6 text-[10rem] font-bold leading-none select-none sm:text-[12rem]"
          style={{ color: `rgba(${rgb},0.04)` }}
        >
          {num}
        </span>

        {/* Subtle inner border highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 60px rgba(${rgb},0.03)`,
          }}
        />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-shrink-0">
            <div
              className="icon-box flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `rgba(${rgb},0.08)`,
                border: `1px solid rgba(${rgb},0.12)`,
                "--glow-color": `rgba(${rgb},0.25)`,
              } as React.CSSProperties}
            >
              <ServiceIcon name={icon} color={color} size={26} />
            </div>
          </div>
          <div className="flex-1">
            <span
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color }}
            >
              Service {num}
            </span>
            <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
              {benefit}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-[1.8] text-text-secondary/70">
              {how}
            </p>
            {href && (
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ color }}
              >
                En savoir plus
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );

    if (href) {
      return <Link href={href}>{card}</Link>;
    }
    return card;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      style={{
        backgroundColor: `rgba(${rgb},0.02)`,
        border: `1px solid rgba(${rgb},0.05)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `rgba(${rgb},0.05)`;
        e.currentTarget.style.borderColor = `rgba(${rgb},0.12)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `rgba(${rgb},0.02)`;
        e.currentTarget.style.borderColor = `rgba(${rgb},0.05)`;
        if (glowRef.current) glowRef.current.style.background = "transparent";
      }}
    >
      {/* Mouse-follow glow */}
      <div ref={glowRef} className="card-glow" />

      {/* Number */}
      <span
        className="bg-number pointer-events-none absolute -right-2 -top-3 text-[5rem] font-bold leading-none select-none"
        style={{ color: `rgba(${rgb},0.04)` }}
      >
        {num}
      </span>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="icon-box flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `rgba(${rgb},0.08)`,
              border: `1px solid rgba(${rgb},0.1)`,
              "--glow-color": `rgba(${rgb},0.25)`,
            } as React.CSSProperties}
          >
            <ServiceIcon name={icon} color={color} size={20} />
          </div>
          <span
            className="text-[0.6rem] font-medium uppercase tracking-[0.2em]"
            style={{ color: `rgba(${rgb},0.5)` }}
          >
            {num}
          </span>
        </div>
        <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug text-white">
          {benefit}
        </h3>
        <p className="mt-2.5 text-[0.82rem] leading-[1.75] text-text-secondary/60">
          {how}
        </p>
      </div>
    </motion.div>
  );
}
