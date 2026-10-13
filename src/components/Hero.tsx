import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-ivory"
    >
      {/* Background Subtle Gradient & Organic Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Intentional CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
            
            {/* Eyebrow with Botanical Emblem */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cream border border-antique self-start">
              <span className="w-2 h-2 rounded-full bg-sage animate-ping" />
              <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
                AN AYURVEDIC WELLNESS SANCTUARY
              </span>
            </div>

            {/* Oversized Serif Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.04] text-charcoal font-normal tracking-tight">
                Return to your <br />
                <span className="italic font-light text-forest relative inline-block">
                  natural rhythm.
                  {/* Subtle underline flourish */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-gold/40 h-2"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 5.5C45 2 155 2 199 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-xl font-light leading-relaxed">
              Ancient Ayurvedic rituals, thoughtfully reimagined for modern living. 
              Immerse in warm botanicals, sacred silence, and bespoke healing therapies tailored to your unique elemental balance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onDiscoverClick}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-forest text-ivory text-xs uppercase tracking-[0.2em] font-medium shadow-elevated hover:bg-terracotta transition-all duration-300 transform hover:-translate-y-0.5 border border-gold/40"
              >
                <Sparkles className="w-4 h-4 text-gold-light group-hover:rotate-12 transition-transform" />
                <span>Discover Your Ritual</span>
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-cream/80 text-forest text-xs uppercase tracking-[0.2em] font-medium border border-forest/15 hover:border-forest/40 hover:bg-cream transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-sage-dark" />
                <span>Explore Treatments</span>
              </button>
            </div>

            {/* Authentic Brand Markers */}
            <div className="pt-8 border-t border-forest/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-serif text-2xl text-forest font-semibold">100%</p>
                <p className="text-[11px] text-charcoal/70 uppercase tracking-wider mt-0.5">Organic Botanicals</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest font-semibold">5,000+</p>
                <p className="text-[11px] text-charcoal/70 uppercase tracking-wider mt-0.5">Years of Heritage</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-forest font-semibold">Bespoke</p>
                <p className="text-[11px] text-charcoal/70 uppercase tracking-wider mt-0.5">Dosha Rituals</p>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Photographic Composition with Real Watercolor Botanicals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Architectural / Treatment Sanctuary Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-cream bg-cream">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
                    alt="Lotus Ayurvedic Sanctuary Treatment Suite with Warm Sunlight and Natural Botanicals"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle warm gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-80" />

                  {/* Caption badge inside image */}
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold-light font-medium">
                      The Sanctuary Suite
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl mt-1 text-ivory font-light leading-snug">
                      Warm brass bowls, herb-steeped oils & meditative silence
                    </h3>
                  </div>
                </div>
              </div>

              {/* Layered Accent 1: Watercolor White Lotus / Lily Motif */}
              <div className="absolute -top-10 -right-10 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-20 animate-subtle-float">
                <img
                  src="/images/f1.png"
                  alt="Lotus Flower Botanical Motif"
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </div>

              {/* Layered Accent 2: Floating Editorial Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-ivory/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl border border-antique max-w-[240px] sm:max-w-[270px] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center p-1.5 border border-forest/20">
                    <img src="/images/f2.png" alt="Herbal Flower" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-charcoal">Snehana & Swedana</h4>
                    <p className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                      Warm oleation and herbal medicinal decoctions
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Understated Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center">
          <a
            href="#philosophy"
            className="group flex flex-col items-center gap-2 text-charcoal-muted hover:text-forest transition-colors"
            aria-label="Scroll to Our Philosophy"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium group-hover:tracking-[0.35em] transition-all">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border border-forest/25 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-sage rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
