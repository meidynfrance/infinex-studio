"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type VideoSlot = {
  src?: string;
  poster?: string;
};

type VideoCarouselProps = {
  videos?: VideoSlot[];
};

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const t = useTranslations("formationUgc");
  const scrollRef = useRef<HTMLDivElement>(null);

  const slots: VideoSlot[] = videos && videos.length > 0
    ? videos
    : Array.from({ length: 4 }, () => ({}));

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slots.map((slot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 snap-center w-[280px] sm:w-[320px]"
          >
            {slot.src ? (
              <video
                src={slot.src}
                poster={slot.poster}
                className="w-full aspect-[9/16] rounded-2xl object-cover border border-white/10"
                controls
                playsInline
                muted
              />
            ) : (
              <div className="w-full aspect-[9/16] rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(94,201,126,0.08)", border: "1px solid rgba(94,201,126,0.15)" }}
                >
                  <svg className="h-7 w-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary/60">{t("carousel.comingSoon")}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 border border-border backdrop-blur-sm transition-colors hover:bg-surface hover:border-green-500/30"
        aria-label="Previous"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 border border-border backdrop-blur-sm transition-colors hover:bg-surface hover:border-green-500/30"
        aria-label="Next"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
