import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 md:py-24 bg-pond relative text-ivory border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Heading & Etiquette Note */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-2.5">
              <LotusMotif size={20} className="text-blush" />
              <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
                Guest Etiquette
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
              Preparing for your visit.
            </h2>

            <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
              To preserve our acoustic stillness, we accept appointments exclusively in advance. 
              Here are thoughtful details regarding attire, consultation pacing, and timing.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-ivory/50 font-light">
                Have specific contraindications or prenatal requirements? <br />
                Our Vaidya will discuss custom adaptations prior to commencing your session.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 space-y-3" role="region" aria-label="Frequently Asked Questions">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-midnight/80 border-blush/40 shadow-sm'
                      : 'bg-midnight/30 border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg text-ivory font-normal">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-blush text-pond-dark border-blush' : 'text-ivory/60'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
                      <div className="pt-2 border-t border-white/10">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
