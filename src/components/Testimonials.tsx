import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-cream/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-antique">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
              Guest Impressions
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal">
            A little more at ease.
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            Reflections from guests who found rest within our sanctuary rooms.
          </p>
        </div>

        {/* Editorial Testimonial Carousel Card */}
        <div className="relative bg-ivory rounded-3xl p-8 sm:p-14 shadow-elevated border border-antique">
          
          {/* Subtle Quote Watermark */}
          <div className="absolute top-6 right-8 text-forest/10 pointer-events-none">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
            
            {/* Treatment Label Badge */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-forest/5 text-forest text-[11px] font-medium uppercase tracking-widest border border-forest/10">
              {current.treatmentName}
            </span>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Guest Attributions */}
            <div className="space-y-1 pt-2">
              <p className="font-serif text-lg text-forest font-medium">{current.author}</p>
              <p className="text-xs text-charcoal-muted uppercase tracking-wider">
                {current.location} · {current.date}
              </p>
            </div>

            {/* Carousel Navigation Buttons & Dots */}
            <div className="pt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                className="p-3 rounded-full border border-forest/20 text-charcoal hover:bg-forest hover:text-ivory transition-colors"
                aria-label="Previous impression"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-forest' : 'w-2 bg-forest/20'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="p-3 rounded-full border border-forest/20 text-charcoal hover:bg-forest hover:text-ivory transition-colors"
                aria-label="Next impression"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Editorial note regarding reviews */}
        <p className="text-center text-[11px] text-charcoal-muted/60 pt-6 italic">
          * Fictional guest impressions displayed as illustrative examples. Unfiltered customer guestbook entries updated seasonally.
        </p>

      </div>
    </section>
  );
};
