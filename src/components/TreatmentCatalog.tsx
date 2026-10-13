import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import type { Treatment } from '../types';
import { Clock, Eye, Calendar, Sparkles } from 'lucide-react';
import { TreatmentDetailModal } from './TreatmentDetailModal';

interface TreatmentCatalogProps {
  onSelectForBooking: (treatment: Treatment) => void;
}

export const TreatmentCatalog: React.FC<TreatmentCatalogProps> = ({ onSelectForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories = ['All', 'Body Therapy', 'Deep Relaxation', 'Botanical Skincare', 'Specialized Ritual'];

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Background grain & ambient glows */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -ml-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-antique">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-forest">
              Curated Treatment Collection
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Rituals for the way you feel.
          </h2>

          <p className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
            Discover thoughtful wellness experiences designed around your time, preferences, and intention. 
            Each ritual uses artisanal warm oils and mindful herbal decoctions.
          </p>

          {/* Category Filter Navigation */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'bg-cream/60 text-charcoal-muted hover:bg-cream hover:text-forest border border-forest/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Catalogue Grid - Varied Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredTreatments.map((treatment, index) => {
            const isFeatured = index === 0 && selectedCategory === 'All';
            return (
              <div
                key={treatment.id}
                className={`group flex flex-col justify-between rounded-2xl bg-cream/35 border border-forest/15 hover:border-gold/50 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden relative ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Floating Badges */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-80' : 'h-64 sm:h-72'}`}>
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-80" />

                  {/* Category & Sanskrit badge */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                    <span className="px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-medium text-forest shadow-sm">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Botanical flower stamp if provided */}
                  {treatment.accentFlower && (
                    <div className="absolute top-3 right-3 w-12 h-12 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                      <img
                        src={treatment.accentFlower}
                        alt="Flower motif"
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                  )}

                  {/* Card bottom banner inside image */}
                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <p className="text-[11px] font-serif italic text-gold-light tracking-widest">
                      {treatment.sanskritName}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal leading-snug">
                      {treatment.name}
                    </h3>
                  </div>
                </div>

                {/* Card Editorial Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-charcoal-muted text-sm font-light leading-relaxed line-clamp-3">
                      {treatment.shortDescription}
                    </p>

                    {/* Metadata: Duration & Price */}
                    <div className="flex items-center justify-between pt-2 border-t border-forest/10 text-xs">
                      <div className="flex items-center gap-1.5 text-forest font-medium">
                        <Clock className="w-3.5 h-3.5 text-sage" />
                        <span>{treatment.durationMinutes} mins</span>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className="text-[10px] text-charcoal-muted uppercase">Indicative</span>
                        <span className="font-serif text-base font-semibold text-charcoal">
                          ₹{treatment.priceINR.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalTreatment(treatment)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-forest/20 text-xs uppercase tracking-wider font-medium text-forest hover:bg-forest/5 hover:border-forest/40 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-sage" />
                      <span>Discover Ritual</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectForBooking(treatment)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-forest text-ivory text-xs uppercase tracking-wider font-medium hover:bg-terracotta transition-colors shadow-sm"
                      title="Reserve this ritual"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gold-light" />
                      <span>Book</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing disclaimer note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-muted/70 italic">
            * All prices shown are illustrative sample rates in INR and subject to applicable taxes. Durations include introductory herbal tea and consultation.
          </p>
        </div>

      </div>

      {/* Modal for In-depth Treatment Ritual Insights */}
      <TreatmentDetailModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBook={onSelectForBooking}
      />
    </section>
  );
};
