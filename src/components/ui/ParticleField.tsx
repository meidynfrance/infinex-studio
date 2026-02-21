"use client";

type Props = {
  variant: "hero" | "cta";
};

const heroNodes = [
  // Violet nodes — edges only, avoid center
  { cx: "8%", cy: "15%", r: 2.5, color: "#8B5CF6", opacity: 0.3, duration: 5, delay: 0 },
  { cx: "92%", cy: "10%", r: 2, color: "#8B5CF6", opacity: 0.25, duration: 6, delay: 0.5 },
  { cx: "5%", cy: "70%", r: 3, color: "#8B5CF6", opacity: 0.35, duration: 4.5, delay: 1 },
  { cx: "88%", cy: "75%", r: 2, color: "#8B5CF6", opacity: 0.3, duration: 5.5, delay: 1.5 },
  { cx: "15%", cy: "45%", r: 2.5, color: "#8B5CF6", opacity: 0.25, duration: 7, delay: 0.3 },
  { cx: "82%", cy: "40%", r: 2, color: "#8B5CF6", opacity: 0.3, duration: 4, delay: 2 },
  { cx: "25%", cy: "85%", r: 2.5, color: "#8B5CF6", opacity: 0.25, duration: 6.5, delay: 0.8 },
  { cx: "72%", cy: "20%", r: 3, color: "#8B5CF6", opacity: 0.3, duration: 5, delay: 1.2 },
  // Cyan nodes
  { cx: "20%", cy: "25%", r: 2, color: "#06B6D4", opacity: 0.25, duration: 5.5, delay: 0.4 },
  { cx: "78%", cy: "60%", r: 2.5, color: "#06B6D4", opacity: 0.2, duration: 6, delay: 1.8 },
  { cx: "35%", cy: "78%", r: 2, color: "#06B6D4", opacity: 0.25, duration: 4.5, delay: 0.6 },
  { cx: "65%", cy: "12%", r: 2.5, color: "#06B6D4", opacity: 0.2, duration: 7, delay: 1 },
];

// Connections between nearby nodes [fromIndex, toIndex]
const heroLines: [number, number][] = [
  [0, 4], // top-left cluster
  [4, 8], // left side
  [1, 7], // top-right cluster
  [7, 11], // right top
  [5, 9], // right side
  [2, 6], // bottom-left
];

function HeroVariant() {
  return (
    <svg
      aria-hidden="true"
      className="particle-field pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connecting lines */}
      {heroLines.map(([from, to], i) => (
        <line
          key={`line-${i}`}
          x1={heroNodes[from].cx}
          y1={heroNodes[from].cy}
          x2={heroNodes[to].cx}
          y2={heroNodes[to].cy}
          stroke="#8B5CF6"
          strokeWidth={0.5}
          style={{
            animation: `opacity-pulse ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* Floating nodes */}
      {heroNodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={node.color}
          opacity={node.opacity}
          style={{
            animation: `particle-float ${node.duration}s ease-in-out infinite`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}

function CtaVariant() {
  return (
    <svg
      aria-hidden="true"
      className="particle-field pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Pulsing rings from center */}
      {[0, 1.2, 2.4].map((delay, i) => (
        <circle
          key={`ring-${i}`}
          cx="50%"
          cy="50%"
          r={80}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth={0.5}
          style={{
            transformOrigin: "50% 50%",
            animation: `ring-expand 3.6s ease-out infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}

      {/* Corner accent dots */}
      {[
        { cx: "10%", cy: "15%", delay: 0 },
        { cx: "90%", cy: "15%", delay: 0.8 },
        { cx: "10%", cy: "85%", delay: 1.5 },
        { cx: "90%", cy: "85%", delay: 0.4 },
      ].map((dot, i) => (
        <circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={3}
          fill="#06B6D4"
          style={{
            animation: `dot-pulse 3s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}

export function ParticleField({ variant }: Props) {
  if (variant === "hero") return <HeroVariant />;
  return <CtaVariant />;
}
