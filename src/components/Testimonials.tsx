import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

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
    <section className="py-20 md:py-24 bg-pond-dark relative text-ivory border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <LotusMotif size={18} className="text-blush" />
          <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
            Guest Impressions
          </span>
        </div>

        {/* Editorial Testimonial Card */}
        <div className="relative bg-midnight/50 rounded-2xl p-8 sm:p-12 border border-white/10 text-center">
          
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Treatment Label Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-pond text-blush text-[10px] font-medium uppercase tracking-widest border border-blush/20">
              {current.treatmentName}
            </span>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory font-normal leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Guest Attributions */}
            <div className="pt-2">
              <p className="font-serif text-base text-blush font-normal">{current.author}</p>
              <p className="text-[11px] text-ivory/50 uppercase tracking-wider mt-0.5">
                {current.location} · {current.date}
              </p>
            </div>

            {/* Carousel Navigation Buttons & Dots */}
            <div className="pt-4 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prev}
                className="p-2.5 rounded-full border border-white/15 text-ivory/70 hover:text-blush hover:border-blush/40 transition-colors bg-pond/40"
                aria-label="Previous guest impression"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-blush' : 'w-1.5 bg-white/20'
                    }`}
                    aria-label={`Go to impression ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="p-2.5 rounded-full border border-white/15 text-ivory/70 hover:text-blush hover:border-blush/40 transition-colors bg-pond/40"
                aria-label="Next guest impression"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
