"use client";

type IconProps = {
  name: string;
  color?: string;
  size?: number;
};

const icons: Record<string, (color: string) => React.ReactNode> = {
  // === CROISSANCE ===
  search: (c) => (
    <>
      <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M16.5 16.5L21 21" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  target: (c) => (
    <>
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill={c} />
    </>
  ),
  email: (c) => (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M3 7l9 6 9-6" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  video: (c) => (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M16 9.5l5-2.5v10l-5-2.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  social: (c) => (
    <>
      {/* Stack of carousel slides */}
      <rect x="2" y="6" width="16" height="12" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="5" y="3" width="16" height="12" rx="2" stroke={c} strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M6 12h8M6 15h5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="10" r="1.5" fill={c} opacity="0.6" />
      {/* Swipe arrow */}
      <path d="M20 15l2-2-2-2" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  analytics: (c) => (
    <>
      <path d="M3 20h18" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20V14" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20V10" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20V6" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 20V4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  image: (c) => (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="8.5" cy="8.5" r="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M21 15l-5-5L5 21" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  globe: (c) => (
    <>
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M3 12h18" stroke={c} strokeWidth="1.5" fill="none" />
    </>
  ),
  bot: (c) => (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="14" r="1.5" fill={c} />
      <circle cx="15" cy="14" r="1.5" fill={c} />
      <path d="M12 4v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1" fill={c} />
    </>
  ),
  blog: (c) => (
    <>
      <path d="M4 4h16v16H4z" stroke={c} strokeWidth="1.5" fill="none" rx="2" />
      <path d="M8 8h8M8 12h6M8 16h4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  lightbulb: (c) => (
    <>
      <path d="M9 21h6M12 3a6 6 0 014 10.5V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-3.5A6 6 0 0112 3z" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  refresh: (c) => (
    <>
      <path d="M4 12a8 8 0 0114.5-4.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M20 12a8 8 0 01-14.5 4.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M18.5 3v4.5H14" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5.5 21v-4.5H10" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),

  // === EFFICACITE ===
  clipboard: (c) => (
    <>
      <path d="M9 3h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V3z" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="5" y="5" width="14" height="16" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M9 11h6M9 15h4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  gear: (c) => (
    <>
      {/* Interlocking gears */}
      <circle cx="9" cy="12" r="3" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="12" r="1" fill={c} />
      <path d="M9 8v-1M9 17v-1M5.5 10l-.8-.5M13.3 14.5l-.8-.5M5.5 14l-.8.5M13.3 9.5l-.8.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16.5" cy="8" r="2" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="8" r="0.7" fill={c} />
      <path d="M16.5 5.2v-.7M16.5 11.5v-.7M14.2 6.8l-.5-.3M19.3 9.5l-.5-.3M14.2 9.2l-.5.3M19.3 6.5l-.5.3" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      {/* Arrow: automation flow */}
      <path d="M14 16h6M18 14l2 2-2 2" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  dashboard: (c) => (
    <>
      <rect x="3" y="3" width="8" height="10" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="13" y="3" width="8" height="6" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="3" y="15" width="8" height="6" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="13" y="11" width="8" height="10" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
    </>
  ),
  presentation: (c) => (
    <>
      <rect x="3" y="3" width="18" height="13" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M12 16v5M8 21h8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 9l3 2 2-3 3 4 2-1" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  document: (c) => (
    <>
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7l-6-4z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M14 3v4h6" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 13h8M8 17h5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  education: (c) => (
    <>
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M20 8v7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 10.5v5.5a6 6 0 0012 0v-5.5" stroke={c} strokeWidth="1.5" fill="none" />
    </>
  ),
  chat: (c) => (
    <>
      {/* Chat bubble with headset feel */}
      <path d="M4 18V8a7 7 0 0114 0v2" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="3" y="10" width="5" height="5" rx="1.5" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="16" y="10" width="5" height="5" rx="1.5" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M8 14a4 4 0 004 4h1" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="15" cy="18" r="1.5" stroke={c} strokeWidth="1.5" fill="none" />
    </>
  ),
  inbox: (c) => (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M3 12h5l2 3h4l2-3h5" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </>
  ),
  extract: (c) => (
    <>
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7l-6-4z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M14 3v4h6" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M12 11v6M9 14l3 3 3-3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  calendar: (c) => (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1" fill={c} />
      <circle cx="12" cy="15" r="1" fill={c} />
      <circle cx="16" cy="15" r="1" fill={c} />
    </>
  ),
  legal: (c) => (
    <>
      <path d="M12 3v18" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 7l7-4 7 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 7v4a4 4 0 004 4h0" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M19 7v4a4 4 0 01-4 4h0" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M8 21h8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  radar: (c) => (
    <>
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="12" cy="12" r="1" stroke={c} strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M12 3v9l6.5 6.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="15" cy="9" r="1.5" fill={c} />
    </>
  ),

  // === BADGES ===
  "trend-up": (c) => (
    <>
      <path d="M4 18l5-5 3 3 8-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 5h5v5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  bolt: (c) => (
    <>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </>
  ),
};

export function ServiceIcon({ name, color = "currentColor", size = 24 }: IconProps) {
  const renderIcon = icons[name];
  if (!renderIcon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcon(color)}
    </svg>
  );
}
