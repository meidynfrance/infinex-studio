"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "infinex_utm";

export function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fromUrl: Record<string, string> = {};
    let hasNew = false;
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) {
        fromUrl[key] = value;
        hasNew = true;
      }
    }

    if (hasNew) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    }
  }, [searchParams]);

  return null;
}
