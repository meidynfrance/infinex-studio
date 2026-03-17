"use client";

import { useCallback } from "react";

const STORAGE_KEY = "infinex_utm";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmParams = Partial<
  Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content", string>
>;

/**
 * Returns a getter that reads UTM params at call time (not at mount).
 * Checks sessionStorage first, then falls back to current URL search params.
 * This avoids race conditions with UtmCapture's Suspense boundary.
 */
export function useUtm(): () => UtmParams {
  return useCallback(() => {
    // 1. Try sessionStorage (written by UtmCapture on previous navigations)
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UtmParams;
        if (Object.keys(parsed).length > 0) {
          return parsed;
        }
      }
    } catch {
      // sessionStorage not available
    }

    // 2. Fallback: read directly from current URL (covers direct landing)
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl: Record<string, string> = {};
      let hasAny = false;
      for (const key of UTM_KEYS) {
        const value = params.get(key);
        if (value) {
          fromUrl[key] = value;
          hasAny = true;
        }
      }
      if (hasAny) {
        // Also persist for subsequent navigations
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
        return fromUrl;
      }
    } catch {
      // URL API not available
    }

    return {};
  }, []);
}
