import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-antique">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
              Sanctuary Etiquette & Guidance
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal">
            Frequently Asked Questions
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            Everything you need to know to prepare for a restful, unhurried wellness visit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-cream/70 border-forest/30 shadow-soft'
                    : 'bg-ivory border-forest/15 hover:border-forest/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-forest/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-forest text-ivory' : 'text-forest hover:bg-forest/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-charcoal-muted leading-relaxed font-light animate-fadeIn">
                    <div className="pt-2 border-t border-forest/10">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
