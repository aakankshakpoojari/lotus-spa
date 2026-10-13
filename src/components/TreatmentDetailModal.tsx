import React from 'react';
import { X, Clock, Sparkles, Check, HeartHandshake, ShieldCheck } from 'lucide-react';
import type { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatment: Treatment) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook,
}) => {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-ivory rounded-2xl shadow-2xl overflow-hidden border border-antique max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory/80 text-charcoal hover:bg-forest hover:text-ivory transition-colors shadow-sm"
          aria-label="Close treatment details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner with Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={treatment.imageUrl}
            alt={treatment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-ivory">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-gold-light text-[11px] font-medium tracking-widest uppercase mb-2 border border-gold/30">
              {treatment.category}
            </span>
            <p className="text-xs text-gold-light tracking-widest font-serif italic">
              {treatment.sanskritName}
            </p>
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
              {treatment.name}
            </h2>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Key Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-cream border border-antique">
            <div className="flex items-center gap-2 text-forest">
              <Clock className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium">{treatment.durationMinutes} minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-charcoal-muted">Indicative Price:</span>
              <span className="font-serif text-lg font-semibold text-forest">
                ₹{treatment.priceINR.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="text-xs text-charcoal-muted italic">
              Best time: {treatment.idealTime}
            </div>
          </div>

          {/* Editorial Full Narrative */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold">
              The Ritual Narrative
            </h3>
            <p className="text-charcoal-muted leading-relaxed font-light text-sm sm:text-base">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Holistic Benefits */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Sensory & Physiological Benefits</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-muted">
                  <span className="w-4 h-4 rounded-full bg-sage/20 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-forest" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wild Herbal Ingredients */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold">
              Active Botanical Elements
            </h3>
            <div className="flex flex-wrap gap-2">
              {treatment.herbalIngredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-ivory border border-forest/15 text-xs text-forest font-medium"
                >
                  🌿 {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibility / Wellbeing Note */}
          <div className="p-4 rounded-xl bg-cream/70 border border-forest/10 flex items-start gap-3 text-xs text-charcoal-muted">
            <ShieldCheck className="w-4 h-4 text-sage-dark shrink-0 mt-0.5" />
            <p>
              Prices shown are indicative sample figures. Every therapy is designed for holistic relaxation and mindful rejuvenation, not as medical intervention. Our practitioners verify skin and wellness preferences before every session.
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-cream border-t border-antique flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
              Ready to experience this ritual?
            </span>
            <span className="font-serif text-lg text-forest font-medium">
              Reserve your sanctuary suite
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-forest/20 text-xs uppercase tracking-wider text-charcoal hover:bg-ivory transition-colors w-1/2 sm:w-auto text-center"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(treatment);
              }}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs uppercase tracking-widest font-medium hover:bg-terracotta transition-colors shadow-sm w-1/2 sm:w-auto"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-gold-light" />
              <span>Select for Booking</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
