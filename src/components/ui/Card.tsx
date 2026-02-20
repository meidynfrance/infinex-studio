"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: Props) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-secondary p-6 md:p-8 ${
        hover
          ? "transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/5 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
