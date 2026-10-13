import React, { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  /** Explicit control to show loader */
  isLoading: boolean;
  /** Callback fired after fade-out transition concludes */
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onFinish }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(!isLoading);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Animate progress while isLoading is true
  useEffect(() => {
    if (!isLoading) {
      // When loading finishes, smoothly push progress to 100% and initiate fade-out
      const completeTimer = setTimeout(() => {
        setProgress(100);
      }, 0);
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        const dismissTimer = setTimeout(() => {
          setIsDismissed(true);
          if (onFinish) onFinish();
        }, 500);

        return () => clearTimeout(dismissTimer);
      }, 300);

      return () => {
        clearTimeout(completeTimer);
        clearTimeout(fadeTimer);
      };
    }

    // isLoading is true: reset dismissal, reset start time, and animate progress curve
    startTimeRef.current = performance.now();

    const animateProgress = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;

      // Realistic progress curve that accelerates initially then decelerates near completion
      let currentProgress = 0;
      if (elapsed < 600) {
        currentProgress = (elapsed / 600) * 55;
      } else if (elapsed < 1400) {
        currentProgress = 55 + ((elapsed - 600) / 800) * 32; // up to 87%
      } else if (elapsed < 2400) {
        currentProgress = 87 + ((elapsed - 1400) / 1000) * 7; // up to 94%
      } else {
        currentProgress = Math.min(97, 94 + ((elapsed - 2400) / 2000) * 3);
      }

      setProgress(currentProgress);
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoading, onFinish]);

  // Handle bfcache (back-forward cache) to prevent stale loading state
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsDismissed(true);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Loading sanctuary"
      aria-live="polite"
      aria-busy={isLoading}
      style={{
        backgroundColor: '#080908',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Top Thin White Progress Line */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed top-0 left-0 h-[2.5px] bg-white transition-[width] duration-150 ease-out z-[100000]"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        }}
      />

      {/* Center Perfectly Rotated Lotus Centerpiece */}
      <div className="relative flex items-center justify-center p-4">
        <img
          src="/images/loading.webp"
          alt="Lotus flower rotating"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 aspect-square object-contain animate-spin-lotus"
          style={{
            transformOrigin: 'center center',
            filter: 'drop-shadow(0 0 25px rgba(234, 226, 211, 0.12))',
          }}
          loading="eager"
        />
      </div>
    </aside>
  );
};
