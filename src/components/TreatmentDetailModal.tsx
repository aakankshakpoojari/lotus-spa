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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-pond-dark/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-midnight rounded-3xl shadow-water-depth overflow-hidden border border-white/15 max-h-[90vh] flex flex-col text-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-pond/80 text-ivory hover:text-blush transition-colors border border-white/15"
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
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-ivory">
            <span className="inline-block px-3 py-1 rounded-full bg-pond/80 backdrop-blur-md text-blush text-[11px] font-medium tracking-widest uppercase mb-2 border border-blush/30">
              {treatment.category}
            </span>
            <p className="text-xs text-gold tracking-widest font-serif italic">
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
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-pond border border-white/10">
            <div className="flex items-center gap-2 text-blush">
              <Clock className="w-4 h-4 text-blush" />
              <span className="text-sm font-medium">{treatment.durationMinutes} minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-ivory/60">Indicative Rate:</span>
              <span className="font-serif text-lg font-semibold text-ivory">
                ₹{treatment.priceINR.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="text-xs text-ivory/60 italic">
              Best time: {treatment.idealTime}
            </div>
          </div>

          {/* Editorial Full Narrative */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold">
              The Ritual Narrative
            </h3>
            <p className="text-ivory/80 leading-relaxed font-light text-sm sm:text-base">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Holistic Benefits */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Sensory & Physiological Benefits</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-ivory/75">
                  <span className="w-4 h-4 rounded-full bg-botanical/30 text-botanical-light flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blush" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botanical Ingredients */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold">
              Active Botanical Elements
            </h3>
            <div className="flex flex-wrap gap-2">
              {treatment.herbalIngredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-pond border border-white/10 text-xs text-ivory/85 font-medium"
                >
                  🪷 {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Wellbeing Note */}
          <div className="p-4 rounded-xl bg-pond/60 border border-white/10 flex items-start gap-3 text-xs text-ivory/70">
            <ShieldCheck className="w-4 h-4 text-botanical-light shrink-0 mt-0.5" />
            <p>
              Prices shown are indicative sample figures. Every therapy is designed for holistic relaxation and mindful rejuvenation, not as medical intervention. Our practitioners verify skin and wellness preferences before every session.
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-pond border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-[10px] uppercase tracking-wider text-ivory/60 block">
              Ready to experience this ritual?
            </span>
            <span className="font-serif text-lg text-ivory font-medium">
              Reserve your sanctuary suite
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-ivory hover:bg-white/5 transition-colors w-1/2 sm:w-auto text-center"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(treatment);
              }}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-widest font-medium hover:bg-blush-light transition-colors shadow-sm w-1/2 sm:w-auto"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Select for Booking</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
