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
    <footer className="bg-pond-dark text-ivory/70 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 p-1 border border-blush/30 flex items-center justify-center">
                <img src="/images/loading.webp" alt="Lotus Blossom" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] text-ivory">LOTUS</span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-blush -mt-1 font-light">
                  Ayurvedic Spa
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/65 max-w-sm leading-relaxed font-light">
              An oasis of authentic Ayurvedic wisdom, cold-pressed lotus botanical therapies, and quiet luxury. 
              Designed to help you reconnect with your natural rhythm.
            </p>

            <div className="text-xs text-blush font-serif italic">
              "Śānti (Peace) in body, stillness in mind."
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-blush font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70 font-light">
              <li>
                <a href="#hero" className="hover:text-blush transition-colors">Home</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-blush transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-blush transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#wellness-guide" className="hover:text-blush transition-colors">Wellness Guide</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blush transition-colors">Sanctuary</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-blush transition-colors">Book a Visit</a>
              </li>
            </ul>
          </div>

          {/* Curated Rituals */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-blush font-medium">
              Signature Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70 font-light">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <a
                    href="#treatments"
                    onClick={() => onTreatmentClick(t.id)}
                    className="hover:text-blush transition-colors block"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sanctuary Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-blush font-medium">
              Hours & Access
            </h4>
            <div className="text-xs text-ivory/70 space-y-2 leading-relaxed font-light">
              <p>Daily: 8:30 AM – 8:00 PM</p>
              <p>By appointment only to maintain acoustic serenity.</p>
              <p className="text-blush pt-2">Bandra West Enclave, Mumbai</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory/40">
          <p className="max-w-2xl text-[11px] leading-relaxed font-light">
            <strong>Holistic Disclaimer:</strong> Therapies at Lotus Ayurvedic Spa are intended for holistic relaxation, stress alleviation, and botanical skincare. They do not constitute medical diagnosis, treatment, or cure for clinical conditions. Please consult your physician regarding clinical health conditions.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <span>© {CURRENT_YEAR} Lotus Ayurvedic Spa. All rights reserved.</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-midnight border border-white/10 text-blush hover:bg-blush hover:text-pond-dark transition-colors"
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
