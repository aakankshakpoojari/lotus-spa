import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import type { Treatment } from '../types';
import { Clock, ArrowUpRight } from 'lucide-react';
import { TreatmentDetailModal } from './TreatmentDetailModal';
import { LotusMotif } from './LotusMotif';

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
    <section id="treatments" className="py-20 md:py-24 bg-pond-dark relative text-ivory border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Editorial & Asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <LotusMotif size={20} className="text-blush" />
              <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
                Therapeutic Repertoire
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
              Rituals tailored to your rhythm.
            </h2>
            <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
              Every ritual is administered with hand-warmed botanical oils, cold-pressed lotus extracts, and mindful practitioner pacing.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blush text-pond-dark shadow-sm'
                    : 'bg-midnight/60 text-ivory/70 hover:text-ivory hover:bg-midnight border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Catalogue Grid: Varied, refined, human-designed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
          {filteredTreatments.map((treatment, index) => {
            const isFeatured = index === 0 && selectedCategory === 'All';

            return (
              <article
                key={treatment.id}
                className={`group flex flex-col justify-between rounded-2xl bg-midnight/50 border border-white/10 hover:border-blush/40 transition-all duration-300 overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    isFeatured ? 'h-64 sm:h-80' : 'h-56 sm:h-64'
                  }`}
                  onClick={() => setActiveModalTreatment(treatment)}
                >
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent opacity-90" />

                  {/* Top Bar inside Image */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-pond/85 backdrop-blur-md text-[10px] uppercase tracking-wider text-blush border border-blush/20">
                      {treatment.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pond/85 backdrop-blur-md text-[10px] text-ivory/80 border border-white/10">
                      <Clock className="w-3 h-3 text-blush" />
                      <span>{treatment.durationMinutes} min</span>
                    </span>
                  </div>

                  {/* Bottom title in image */}
                  <div className="absolute bottom-4 inset-x-4">
                    <p className="text-[11px] font-serif italic text-gold tracking-widest mb-0.5">
                      {treatment.sanskritName}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal leading-snug">
                      {treatment.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-ivory/70 text-sm font-light leading-relaxed">
                    {treatment.shortDescription}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    {/* Active Botanicals */}
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.herbalIngredients.slice(0, 3).map((ingredient) => (
                        <span
                          key={ingredient}
                          className="text-[10px] tracking-wide text-ivory/60 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>

                    {/* Pricing & Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-ivory/40 uppercase tracking-wider block">Sample rate</span>
                        <span className="font-serif text-lg font-normal text-ivory">
                          ₹{treatment.priceINR.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveModalTreatment(treatment)}
                          className="px-3.5 py-2 rounded-full border border-white/15 text-xs uppercase tracking-wider text-ivory/80 hover:text-blush hover:border-blush/40 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectForBooking(treatment)}
                          className="px-4 py-2 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-wider font-medium hover:bg-blush-light transition-colors"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quiet disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-ivory/40 italic">
            * Sample indicative rates in INR. Durations include preliminary constitutional consultation and post-ritual herbal tea.
          </p>
        </div>

      </div>

      {/* Detail Modal */}
      <TreatmentDetailModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBook={onSelectForBooking}
      />
    </section>
  );
};
