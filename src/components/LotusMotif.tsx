import React from 'react';

interface LotusMotifProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

/**
 * Consistent Animated Lotus SVG Motif
 * An original, delicate sacred lotus vector emblem inspired by classical Indian temple carvings
 * and modern Aman/Aēsop botanical editorial identity.
 */
export const LotusMotif: React.FC<LotusMotifProps> = ({
  className = 'text-blush',
  size = 36,
  animate = true,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${animate ? 'animate-lotus-float' : ''}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
      >
        {/* Central Lotus Core / Pericarp */}
        <circle
          cx="50"
          cy="52"
          r="6"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="50" cy="52" r="2" fill="currentColor" fillOpacity="0.6" />

        {/* Central Upright Petal (Inner) */}
        <path
          d="M50 22 C45 35, 45 46, 50 52 C55 46, 55 35, 50 22 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Inner Left Petal */}
        <path
          d="M50 52 C42 46, 32 38, 36 28 C43 32, 47 43, 50 52 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Inner Right Petal */}
        <path
          d="M50 52 C58 46, 68 38, 64 28 C57 32, 53 43, 50 52 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Outer Mid Left Petal */}
        <path
          d="M50 55 C38 52, 22 45, 23 37 C34 40, 44 49, 50 55 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Outer Mid Right Petal */}
        <path
          d="M50 55 C62 52, 78 45, 77 37 C66 40, 56 49, 50 55 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Lower Left Base Petal */}
        <path
          d="M50 56 C36 58, 18 57, 19 49 C30 52, 43 54, 50 56 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Lower Right Base Petal */}
        <path
          d="M50 56 C64 58, 82 57, 81 49 C70 52, 57 54, 50 56 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Water Ripple Foundation Arc */}
        <path
          d="M26 68 C38 73, 62 73, 74 68"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 4"
          opacity="0.5"
        />
        <path
          d="M34 76 C42 79, 58 79, 66 76"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};
