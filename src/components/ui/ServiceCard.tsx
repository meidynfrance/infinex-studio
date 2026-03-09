"use client";

import { motion } from "framer-motion";
import { ServiceIcon } from "./ServiceIcon";

type ServiceCardProps = {
  icon: string;
  benefit: string;
  how: string;
  theme: "green" | "blue";
  index: number;
  featured?: boolean;
};

const themeConfig = {
  green: { rgb: "94,201,126", color: "var(--color-green)" },
  blue: { rgb: "79,163,224", color: "var(--color-blue)" },
};

export function ServiceCard({ icon, benefit, how, theme, index, featured = false }: ServiceCardProps) {
  const { rgb, color } = themeConfig[theme];
  const num = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="group relative col-span-1 md:col-span-2 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
        style={{
          backgroundColor: `rgba(${rgb},0.04)`,
          border: `1px solid rgba(${rgb},0.08)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `rgba(${rgb},0.18)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `rgba(${rgb},0.08)`;
        }}
      >
        {/* Large background number */}
        <span
          className="pointer-events-none absolute -right-4 -top-6 text-[10rem] font-bold leading-none select-none sm:text-[12rem]"
          style={{ color: `rgba(${rgb},0.04)` }}
        >
          {num}
        </span>

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-shrink-0">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.12)` }}
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
          </div>
        </div>
      </motion.div>
    );
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
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `rgba(${rgb},0.05)`;
        e.currentTarget.style.borderColor = `rgba(${rgb},0.12)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `rgba(${rgb},0.02)`;
        e.currentTarget.style.borderColor = `rgba(${rgb},0.05)`;
      }}
    >
      {/* Number */}
      <span
        className="pointer-events-none absolute -right-2 -top-3 text-[5rem] font-bold leading-none select-none"
        style={{ color: `rgba(${rgb},0.04)` }}
      >
        {num}
      </span>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.1)` }}
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
