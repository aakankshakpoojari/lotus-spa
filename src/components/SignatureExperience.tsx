import React, { useState } from 'react';
import { Leaf, Shield, Heart, Feather } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

export const SignatureExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Sacred Lotus & Herbal Decoctions',
      sanskrit: 'औषध तैल (Aushadha Taila)',
      icon: Leaf,
      description: 'Medicated oils slowly simmered in copper and earthenware urns with fresh lotus stamens, cow milk, and cold-pressed sesame. Every molecule carries potent botanical memory directly to dehydrated tissues.',
      image: '/images/herbs2.png',
      spec: 'Copper-warmed infused oils',
    },
    {
      id: 1,
      title: 'Acoustic Stillness & Dark Water Sanctuary',
      sanskrit: 'मौन (Mauna - Sacred Silence)',
      icon: Feather,
      description: 'Hand-loomed organic cotton linens, the acoustic damping of dark water stone alcoves, and gentle bronze singing bowls insulate our sanctuary suites from urban turbulence.',
      image: '/images/Ammentiies.png',
      spec: 'Acoustically insulated stone chambers',
    },
    {
      id: 2,
      title: 'Synchronized Breath & Flow',
      sanskrit: 'प्राण (Prāṇa Flow)',
      icon: Heart,
      description: 'Practitioners apprentice in classical lineages of Kerala and Rishikesh. They tune their breath to yours, ensuring massage pressure is never abrasive, but deeply restorative and intuitive.',
      image: '/images/massage.png',
      spec: 'Lineage-trained Vaidya practitioners',
    },
    {
      id: 3,
      title: 'Holistic Post-Ritual Stillness',
      sanskrit: 'विश्राम (Viśrāma Rest)',
      icon: Shield,
      description: 'Your journey concludes in our silent tea courtyard with restorative pink lotus tea, warm herbal compresses, and dedicated unwinding time without rush.',
      image: '/images/landing.jpeg',
      spec: 'Unhurried post-ritual courtyard tea',
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-pond relative text-ivory border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} className="text-blush" />
            <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
              Sanctuary Dimensions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
            An atmosphere created for <br />
            <span className="italic text-blush">uninterrupted calm.</span>
          </h2>

          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Every sensory element—from the temperature of our copper urns to the quiet frequency of our treatment suites—is calibrated to support circadian rest.
          </p>
        </div>

        {/* Experience Grid / Split-Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Tab Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-midnight border-blush/40 shadow-sm'
                      : 'bg-midnight/30 border-white/5 hover:bg-midnight/60 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                        isActive ? 'bg-blush/15 text-blush' : 'bg-white/5 text-ivory/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-lg text-ivory font-normal">
                          {pillar.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-gold/80 tracking-wider font-serif italic block">
                        {pillar.sanskrit}
                      </span>
                      {isActive && (
                        <p className="text-xs text-ivory/75 leading-relaxed pt-2 font-light">
                          {pillar.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Immersive Artwork */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-midnight shadow-water-depth">
              <div className="aspect-[16/10] relative">
                <img
                  key={activeTab}
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pond via-pond/30 to-transparent opacity-85" />

                {/* Subtle caption */}
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blush font-medium block mb-1">
                    Sanctuary Dimension {activeTab + 1} of 4 · {pillars[activeTab].spec}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-ivory font-light">
                    {pillars[activeTab].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Editorial sanctuary attributes ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-midnight/40 border border-white/5 text-center">
                <span className="text-[11px] text-ivory/80 font-medium block">Pure Copper</span>
                <span className="text-[10px] text-ivory/40 uppercase tracking-wider">Heating vessels</span>
              </div>
              <div className="p-3 rounded-lg bg-midnight/40 border border-white/5 text-center">
                <span className="text-[11px] text-ivory/80 font-medium block">Organic Linen</span>
                <span className="text-[10px] text-ivory/40 uppercase tracking-wider">Hand-loomed</span>
              </div>
              <div className="p-3 rounded-lg bg-midnight/40 border border-white/5 text-center">
                <span className="text-[11px] text-ivory/80 font-medium block">Private Suites</span>
                <span className="text-[10px] text-ivory/40 uppercase tracking-wider">Single guest chambers</span>
              </div>
              <div className="p-3 rounded-lg bg-midnight/40 border border-white/5 text-center">
                <span className="text-[11px] text-ivory/80 font-medium block">Unhurried Care</span>
                <span className="text-[10px] text-ivory/40 uppercase tracking-wider">Zero overlapping slots</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
