import React, { useEffect, useState, useCallback } from 'react';

interface RippleInstance {
  id: number;
  x: number;
  y: number;
}

export const RaindropRipple: React.FC = () => {
  const [ripples, setRipples] = useState<RippleInstance[]>([]);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    // Respect user's reduced-motion preference
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    // Capture coordinate
    const x = e.clientX;
    const y = e.clientY;
    const newRipple: RippleInstance = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setRipples((prev) => [...prev.slice(-6), newRipple]);
  }, []);

  useEffect(() => {
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [handlePointerDown]);

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (ripples.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden select-none"
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          onAnimationEnd={() => removeRipple(ripple.id)}
        >
          {/* Primary blooming water ring */}
          <div
            className="raindrop-ripple-primary w-10 h-10"
            style={{
              width: '36px',
              height: '36px',
            }}
          />
          {/* Faint secondary concentric echo */}
          <div
            className="raindrop-ripple-secondary"
            style={{
              width: '48px',
              height: '48px',
            }}
          />
        </div>
      ))}
    </div>
  );
};
