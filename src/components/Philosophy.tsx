import React from 'react';
import { Wind, Sun, Mountain } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-24 bg-pond relative text-ivory border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <LotusMotif size={20} className="text-blush" />
          <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
            Ayurvedic Foundations
          </span>
        </div>

        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-[1.15]">
              Stillness is not absence. <br />
              <span className="italic text-blush">It is the return of alignment.</span>
            </h2>

            <div className="space-y-5 text-ivory/80 text-base sm:text-lg font-light leading-relaxed">
              <p>
                In classical Ayurveda, the sacred lotus (<span className="italic font-serif text-blush">Padma</span>) 
                is revered because it rises untouched through dark water to open in clean, effortless symmetry. 
                It reminds us that vitality is an inherent biological state—obscured only when our daily rhythms 
                become disconnected from nature.
              </p>
              <p>
                At Lotus, every therapeutic touch honors your individual constitutional makeup (<span className="italic font-serif text-blush">Prakriti</span>). 
                We use unhurried sessions, warm cold-pressed herbal oils, and intentional stillness to re-establish your baseline harmony.
              </p>
            </div>

            {/* Dosha Constitutional Ledger (Editorial breakdown instead of repetitive cards) */}
            <div className="pt-6 border-t border-white/10 space-y-5">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xs uppercase tracking-[0.22em] text-ivory/60 font-medium">
                  The Three Constitutional Forces (Tridosha)
                </h3>
                <span className="text-[11px] text-gold/80 italic font-serif">Prakriti Alignment</span>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {/* Vata */}
                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                  <div className="sm:col-span-4 flex items-center gap-2">
                    <Wind className="w-3.5 h-3.5 text-blush shrink-0" />
                    <span className="font-serif text-lg font-normal text-ivory">Vāta (वात)</span>
                    <span className="text-[10px] text-ivory/50 uppercase tracking-wider ml-1">Air & Ether</span>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-xs text-ivory/70 leading-relaxed font-light">
                      Governs movement and nerve transmission. Restored through slow, grounding rhythm, warmed black sesame oils, and silence.
                    </p>
                  </div>
                </div>

                {/* Pitta */}
                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                  <div className="sm:col-span-4 flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="font-serif text-lg font-normal text-ivory">Pitta (पित्त)</span>
                    <span className="text-[10px] text-ivory/50 uppercase tracking-wider ml-1">Fire & Water</span>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-xs text-ivory/70 leading-relaxed font-light">
                      Governs metabolism and clarity. Tempered through cooling pink lotus extracts, sandalwood pastes, and gentle floral pressure.
                    </p>
                  </div>
                </div>

                {/* Kapha */}
                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                  <div className="sm:col-span-4 flex items-center gap-2">
                    <Mountain className="w-3.5 h-3.5 text-botanical-light shrink-0" />
                    <span className="font-serif text-lg font-normal text-ivory">Kapha (कफ)</span>
                    <span className="text-[10px] text-ivory/50 uppercase tracking-wider ml-1">Earth & Water</span>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-xs text-ivory/70 leading-relaxed font-light">
                      Governs structure and stability. Stimulated through dry herbal friction, warm herbal compresses, and invigorating botanicals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Classical Epigraph */}
            <blockquote className="pl-5 border-l-2 border-blush/40 py-1 space-y-1.5">
              <p className="font-serif italic text-base sm:text-lg text-ivory/90 leading-snug">
                "Health is the balanced flow of vital energies, nourished tissues, and a peaceful mind residing in its natural home."
              </p>
              <cite className="block text-[11px] uppercase tracking-[0.18em] text-blush/80 not-italic font-light">
                — Sushruta Samhita (circa 600 BCE)
              </cite>
            </blockquote>

          </div>

          {/* Right Column: Grounded Editorial Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-midnight shadow-water-depth">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="/images/herbs2.png"
                  alt="Ayurvedic raw herbs, brass vessel, and dried lotus petals"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pond via-pond/30 to-transparent opacity-85" />

                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-blush block mb-1 font-medium">
                    Sanctuary Botanical Standard
                  </span>
                  <h4 className="font-serif text-xl text-ivory font-light leading-snug">
                    Steeped in small copper and earthenware vessels
                  </h4>
                  <p className="text-xs text-ivory/75 mt-1 font-light leading-relaxed">
                    Cold-pressed single-source oils prepared in adherence to traditional Vedic decanting principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-midnight/40 border border-white/5 flex items-center justify-between text-xs text-ivory/70">
              <span className="font-light">Zero synthetic fragrances or preservatives</span>
              <span className="text-gold font-serif italic text-sm">100% Botanical Origin</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
