"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "infinex_utm";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function useUtm(): UtmParams {
  const searchParams = useSearchParams();
  const [utm, setUtm] = useState<UtmParams>({});

  useEffect(() => {
    // Check URL for UTM params
    const fromUrl: UtmParams = {};
    let hasNew = false;
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) {
        fromUrl[key] = value;
        hasNew = true;
      }
    }

    // If new UTM params found in URL, save them (overwrite previous)
    if (hasNew) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      setUtm(fromUrl);
      return;
    }

    // Otherwise, load from sessionStorage
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUtm(JSON.parse(stored));
      }
    } catch {
      // sessionStorage not available
    }
  }, [searchParams]);

  return utm;
}
