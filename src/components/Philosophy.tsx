import React from 'react';
import { Droplet, Sun, Wind, Mountain } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-cream/40 relative overflow-hidden">
      {/* Organic texture background */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-terracotta" />
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium">
            Our Ayurvedic Philosophy
          </span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Editorial Text - 7 Cols */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-[1.12]">
              Wellness is not a destination. <br />
              <span className="italic text-terracotta font-light">It is a return.</span>
            </h2>

            <div className="space-y-6 text-charcoal-muted text-base sm:text-lg font-light leading-relaxed">
              <p>
                In a world that continually demands more speed, Ayurveda offers an ancient, timeless counter-current: 
                the wisdom of stillness. We believe the human body is not an engine to be fixed, but an organic garden to be tended.
              </p>
              <p>
                At Lotus, every treatment begins by honoring your constitutional rhythm—your <span className="font-serif italic text-forest font-medium">Prakriti</span>. 
                Using sun-warmed cold-pressed oils, wild-harvested Himalayan botanicals, and synchronous touch, 
                our therapies quiet systemic inflammation, soothe overloaded senses, and gently restore cellular equilibrium.
              </p>
            </div>

            {/* The 3 Doshas / Elemental Pillars - Editorial Row */}
            <div className="pt-6 border-t border-forest/10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-forest font-medium mb-6">
                Harmonizing The Elemental Forces (Tridosha)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Vata */}
                <div className="p-5 rounded-xl bg-ivory border border-antique hover:border-gold/60 transition-all duration-300">
                  <div className="flex items-center gap-2 text-forest mb-2">
                    <Wind className="w-4 h-4 text-sage" />
                    <span className="font-serif text-lg font-medium">Vāta (वात)</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-medium block mb-1.5">
                    Air & Ether · Space
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Governs movement and mind. Balanced with warm sesame oil, grounding pressure, and deep quietude.
                  </p>
                </div>

                {/* Pitta */}
                <div className="p-5 rounded-xl bg-ivory border border-antique hover:border-gold/60 transition-all duration-300">
                  <div className="flex items-center gap-2 text-terracotta mb-2">
                    <Sun className="w-4 h-4 text-terracotta-light" />
                    <span className="font-serif text-lg font-medium">Pitta (पित्त)</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-medium block mb-1.5">
                    Fire & Water · Metabolism
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Governs digestion and clarity. Soothed with cooling coconut oils, chandan, and gentle jasmine florals.
                  </p>
                </div>

                {/* Kapha */}
                <div className="p-5 rounded-xl bg-ivory border border-antique hover:border-gold/60 transition-all duration-300">
                  <div className="flex items-center gap-2 text-forest mb-2">
                    <Mountain className="w-4 h-4 text-forest-light" />
                    <span className="font-serif text-lg font-medium">Kapha (कफ)</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-medium block mb-1.5">
                    Earth & Water · Structure
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Governs stability and immunity. Invigorated with herbal dry poultices, mustard seeds, and warm spice.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote attribution block */}
            <blockquote className="p-6 rounded-2xl bg-forest text-ivory relative overflow-hidden">
              <div className="relative z-10 flex items-start gap-4">
                <Droplet className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-serif italic text-lg sm:text-xl text-ivory leading-snug">
                    "When diet and lifestyle are wrong, medicine is of no use. 
                    When diet and lifestyle are pure, medicine is of no need."
                  </p>
                  <cite className="block text-xs uppercase tracking-[0.2em] text-gold-light mt-3 not-italic">
                    — Charaka Samhita (circa 300 BCE)
                  </cite>
                </div>
              </div>
            </blockquote>

          </div>

          {/* Asymmetrical Right Column: Natural Textures & Botanical Collage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              
              {/* Primary Image: Botanical Herbal Oils & Mortar */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-ivory">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85"
                    alt="Ayurvedic herbal oils, cold-pressed extracts, and botanical remedies"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-ivory">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold-light">Purity Guaranteed</span>
                    <h4 className="font-serif text-lg text-ivory mt-0.5">Cold-pressed single estate oils</h4>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Image: River Stones & Water */}
              <div className="absolute -bottom-8 -left-8 w-44 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-4 border-ivory hidden sm:block">
                <div className="aspect-square relative">
                  <img
                    src="https://images.unsplash.com/photo-1512290900672-1f02e6040857?auto=format&fit=crop&w=800&q=85"
                    alt="River stones and water therapy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Watercolor Blossom Overlay */}
              <div className="absolute -top-10 -right-8 w-32 h-32 pointer-events-none animate-subtle-float">
                <img
                  src="/images/f3.png"
                  alt="Ayurvedic Botanical Blossom"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

            </div>

            {/* Note on Authenticity */}
            <div className="pt-10 sm:pt-14">
              <div className="p-5 rounded-xl bg-ivory/80 border border-forest/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-forest">
                    Non-Commercial Commitment
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  We never use mineral oils, artificial fragrances, or synthetic stabilizers. 
                  Every decoction is steeped fresh in our herbal dispensary each morning.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
