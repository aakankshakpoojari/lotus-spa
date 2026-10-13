import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface FooterProps {
  onTreatmentClick: (tId: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onTreatmentClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-ivory/80 pt-20 pb-12 border-t border-forest-light/30 relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-light/20">
          
          {/* Brand & Mission - 5 Cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-light/40 p-1 border border-gold/40 flex items-center justify-center">
                <img src="/images/f1.png" alt="Lotus Blossom" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest text-ivory">LOTUS</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold-light -mt-1 font-medium">
                  Ayurvedic Sanctuary
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/70 max-w-sm leading-relaxed font-light">
              An oasis of authentic Ayurvedic wisdom, cold-pressed botanical therapies, and quiet luxury. 
              Designed to help you reconnect with your primordial elemental balance.
            </p>

            <div className="text-xs text-gold-light font-serif italic">
              "Śānti (Peace) in body, stillness in mind."
            </div>
          </div>

          {/* Quick Nav Links - 2 Cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70">
              <li>
                <a href="#hero" className="hover:text-gold-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-gold-light transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-gold-light transition-colors">Treatment Collection</a>
              </li>
              <li>
                <a href="#wellness-guide" className="hover:text-gold-light transition-colors">Wellness Guide</a>
              </li>
              <li>
                <a href="#sanctuary" className="hover:text-gold-light transition-colors">The Sanctuary Suite</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-gold-light transition-colors">Book a Visit</a>
              </li>
            </ul>
          </div>

          {/* Curated Rituals - 3 Cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium">
              Rituals & Therapies
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <a
                    href="#treatments"
                    onClick={() => onTreatmentClick(t.id)}
                    className="hover:text-gold-light transition-colors block"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sanctuary Contact - 2 Cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-light font-medium">
              Hours & Access
            </h4>
            <div className="text-xs text-ivory/70 space-y-2 leading-relaxed">
              <p>Daily: 8:30 AM – 8:00 PM</p>
              <p>By appointment only to maintain acoustic serenity.</p>
              <p className="text-gold-light pt-2">Bandra West Enclave, Mumbai</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Holistic Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory/50">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            <strong>Holistic Disclaimer:</strong> Therapies at Lotus Ayurvedic Spa are intended for holistic relaxation, stress alleviation, and botanical skincare. They do not constitute medical diagnosis, treatment, or cure for medical conditions. Please consult your physician regarding clinical health conditions.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <span>© {CURRENT_YEAR} Lotus Ayurvedic Spa. All rights reserved.</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-forest-light/40 text-gold-light hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
