"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "infinex_utm";

export type UtmParams = Partial<
  Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content", string>
>;

export function useUtm(): UtmParams {
  const [utm, setUtm] = useState<UtmParams>({});

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUtm(JSON.parse(stored));
      }
    } catch {
      // sessionStorage not available
    }
  }, []);

  return utm;
}
