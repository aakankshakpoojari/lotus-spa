import { Compass } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

interface HeroProps {
  onExploreClick: () => void;
  onPhilosophyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPhilosophyClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden bg-pond"
    >
      {/* 1. Full-Viewport Living Lotus Pond Photograph Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full animate-lotus-float scale-105 origin-center transition-transform duration-1000">
          <img
            src="/images/landing.jpeg"
            alt="Living Lotus Pond with three sacred blooming pink lotus flowers and dark still water"
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
          />
        </div>

        {/* 2. Realistic Water Ripples Overlay around the water & flowers */}
        {/* Ripple cluster 1 (Center-Left) */}
        <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-blush/20 animate-water-ripple" />
          <div className="absolute inset-0 rounded-full border border-white/10 animate-water-ripple-delayed" />
        </div>

        {/* Ripple cluster 2 (Lower Right) */}
        <div className="absolute bottom-1/5 right-1/4 translate-x-1/4 w-96 h-96 pointer-events-none hidden sm:block">
          <div className="absolute inset-0 rounded-full border border-blush/15 animate-water-ripple" style={{ animationDelay: '1.8s' }} />
        </div>

        {/* Subtle Water Light Shimmer */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-blush/5 to-transparent pointer-events-none animate-water-shimmer" />

        {/* 3. Thoughtful Luxury Gradients: Keeps dark water deep and text readable while leaving lotus flowers luminous */}
        {/* Top Vignette for Nav and Headline readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-pond/90 via-pond/40 to-transparent h-2/3" />
        {/* Gentle Left Gradient for Headline Text Column */}
        <div className="absolute inset-0 bg-gradient-to-r from-pond/80 via-pond/40 to-transparent w-full lg:w-3/5" />
        {/* Bottom subtle grounding transition into next section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-pond via-pond/60 to-transparent" />
      </div>

      {/* 4. Hero Content — Positioned with generous negative space, leaving the flowers visible */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6 sm:space-y-8 text-left pt-8 sm:pt-12">
          
          {/* Eyebrow with consistent animated lotus SVG motif */}
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} className="text-blush" />
            <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
              Ayurvedic Sanctuary
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.04] text-ivory font-normal tracking-tight drop-shadow-md">
              Return to your <br />
              <span className="italic font-light text-blush relative inline-block">
                natural rhythm.
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-ivory/85 max-w-xl font-light leading-relaxed drop-shadow-sm">
            Ancient Ayurvedic wisdom. Restorative rituals. <br className="hidden sm:inline" />
            A quieter kind of luxury.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={onExploreClick}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blush hover:bg-blush-light text-pond-dark text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Rituals</span>
            </button>

            <button
              type="button"
              onClick={onPhilosophyClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pond/60 backdrop-blur-md text-ivory text-xs uppercase tracking-[0.2em] font-medium border border-white/20 hover:border-blush/50 hover:bg-pond/80 transition-all duration-300 active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-blush" />
              <span>Our Philosophy</span>
            </button>
          </div>

        </div>
      </div>

      {/* 5. Discreet Scroll Indicator at Bottom */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8">
        <a
          href="#philosophy"
          className="group flex flex-col items-center gap-2 text-ivory/60 hover:text-blush transition-colors"
          aria-label="Scroll to discover philosophy"
        >
          <span className="text-[9.5px] uppercase tracking-[0.32em] font-light">
            Scroll to Enter
          </span>
          <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-blush rounded-full animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
};
