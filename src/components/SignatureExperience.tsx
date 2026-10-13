import React, { useState } from 'react';
import { Sparkles, Leaf, Shield, Heart, Feather } from 'lucide-react';

export const SignatureExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Sacred Herbal Decoctions',
      sanskrit: 'औषध तैल (Aushadha Taila)',
      icon: Leaf,
      description: 'Our medicated oils are slowly simmered for seven days in pure copper and clay urns with fresh herbs, cow milk, and cold-pressed sesame. Every molecule carries potent botanical memory directly to dehydrated tissues.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'text-sage'
    },
    {
      id: 1,
      title: 'Acoustic & Tactile Stillness',
      sanskrit: 'मौन (Mauna - Sacred Silence)',
      icon: Feather,
      description: 'From natural hand-loomed organic cotton linens to the acoustic damping of raw terracotta tiles and gentle bamboo chimes, our sanctuary suites are insulated from electromagnetic noise and city turbulence.',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'text-gold'
    },
    {
      id: 2,
      title: 'Synchronized Breath & Pressure',
      sanskrit: 'प्राण (Prāṇa Flow)',
      icon: Heart,
      description: 'Our practitioners undergo traditional gurukula-style apprenticeship in Kerala and Rishikesh. They tune their breath to yours, ensuring massage pressure is never abrasive, but deeply restorative and intuitive.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'text-terracotta'
    },
    {
      id: 3,
      title: 'Holistic Post-Ritual Care',
      sanskrit: 'विश्राम (Viśrāma Rest)',
      icon: Shield,
      description: 'Your journey does not end when the massage concludes. We guide you to the Lotus tea salon for digestive fennel infusions, warm herbal compresses, and dedicated unwinding time without rush.',
      image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'text-forest'
    }
  ];

  return (
    <section id="sanctuary" className="py-24 sm:py-32 bg-forest text-ivory relative overflow-hidden">
      {/* Decorative botanical subtle background */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-light border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-gold-light">
              The Sanctuary Sanctuary
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal leading-tight">
            Slow down. <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-light">Let nature take over.</span>
          </h2>

          <p className="text-ivory/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Ayurveda is not merely a service; it is an art of conscious unwinding. 
            Step through our doors into an unbroken rhythm of tranquility, botanical warmth, and timeless hospitality.
          </p>
        </div>

        {/* Interactive Experience Grid / Split-Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Tab Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-forest-light/70 border-gold/40 shadow-elevated transform translate-x-2'
                      : 'bg-forest-dark/40 border-forest-light/40 hover:bg-forest-light/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 transition-colors ${
                        isActive ? 'bg-gold/20 text-gold-light' : 'bg-forest/50 text-ivory/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg sm:text-xl text-ivory font-normal">
                          {pillar.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-gold-light tracking-wider font-serif italic block">
                        {pillar.sanskrit}
                      </span>
                      {isActive && (
                        <p className="text-xs text-ivory/85 leading-relaxed pt-2 font-light animate-fadeIn">
                          {pillar.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Immersive Dynamic Artwork with Botanical Flower Asset */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-forest-light/40 bg-forest-dark">
              <div className="aspect-[16/11] sm:aspect-[16/10] relative">
                <img
                  key={activeTab}
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover transition-opacity duration-700 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent opacity-80" />

                {/* Floating Botanical Flower from our local images */}
                <div className="absolute top-6 right-6 w-24 h-24 pointer-events-none animate-subtle-float">
                  <img
                    src="/images/f1.png"
                    alt="Lotus"
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                {/* Bottom Story Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-forest-deep/85 backdrop-blur-md border border-gold/20">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-gold-light font-medium">
                    Sanctuary Dimension {activeTab + 1} of 4
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-ivory mt-1">
                    {pillars[activeTab].title}
                  </h4>
                  <p className="text-xs text-ivory/80 mt-1 font-light leading-relaxed">
                    {pillars[activeTab].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Experience Badges below image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-3.5 rounded-xl bg-forest-light/40 border border-forest-light/50 text-center">
                <p className="font-serif text-lg text-gold-light">Warm Copper</p>
                <p className="text-[10px] text-ivory/70 uppercase tracking-wider mt-0.5">Vessel Heating</p>
              </div>
              <div className="p-3.5 rounded-xl bg-forest-light/40 border border-forest-light/50 text-center">
                <p className="font-serif text-lg text-gold-light">100% Linen</p>
                <p className="text-[10px] text-ivory/70 uppercase tracking-wider mt-0.5">Organic Textiles</p>
              </div>
              <div className="p-3.5 rounded-xl bg-forest-light/40 border border-forest-light/50 text-center">
                <p className="font-serif text-lg text-gold-light">Single Guest</p>
                <p className="text-[10px] text-ivory/70 uppercase tracking-wider mt-0.5">Private Suites</p>
              </div>
              <div className="p-3.5 rounded-xl bg-forest-light/40 border border-forest-light/50 text-center">
                <p className="font-serif text-lg text-gold-light">Zero Rush</p>
                <p className="text-[10px] text-ivory/70 uppercase tracking-wider mt-0.5">Guaranteed Buffer</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
