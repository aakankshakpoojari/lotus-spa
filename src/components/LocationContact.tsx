import React from 'react';
import { MapPin, Clock, Phone, Compass } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-antique">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
              Sanctuary Haven
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal">
            Find Stillness With Us
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base font-light">
            Located in a quiet garden enclave away from urban bustle. Advance appointments are recommended.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Details & Atmospheric Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Sanctuary Information */}
          <div className="lg:col-span-6 bg-ivory rounded-3xl p-8 sm:p-10 shadow-soft border border-antique flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 pb-6 border-b border-forest/10">
                <div className="p-3 rounded-xl bg-forest/10 text-forest shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-charcoal">
                    Sanctuary Address (Configurable)
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">
                    Pavilion 4, Gulmohar Avenue, Bandra West enclave <br />
                    Mumbai, Maharashtra 400050, India
                  </p>
                  <span className="text-[10px] text-sage-dark uppercase tracking-wider block mt-1">
                    * Sample sanctuary address. Replace with your permanent property address.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-forest/10">
                <div className="p-3 rounded-xl bg-forest/10 text-forest shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-charcoal">
                    Sanctuary Hours
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">
                    Monday to Sunday: 8:30 AM – 8:00 PM <br />
                    Morning Rituals Commence: 9:00 AM <br />
                    Final Twilight Session: 6:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-forest/10 text-forest shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-charcoal">
                    Sanctuary Concierge
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-1">
                    Concierge Line: +91 (Sanctuary Desk) <br />
                    Direct Enquiries: concierge@lotusayurvedicspa.example
                  </p>
                  <span className="text-[10px] text-sage-dark uppercase tracking-wider block mt-1">
                    * Configurable contact placeholders.
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Consultation CTA */}
            <div className="pt-6 border-t border-forest/10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-ivory text-xs uppercase tracking-widest font-medium hover:bg-terracotta transition-colors shadow-sm"
              >
                <span>Request Appointment</span>
              </a>

              <a
                href="#faqs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-forest/20 text-xs uppercase tracking-wider text-forest hover:bg-cream transition-colors"
              >
                <span>View Guest Etiquette</span>
              </a>
            </div>

          </div>

          {/* Right Column: Natural Architecture Visual & Map Enclave Frame */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-soft border border-antique bg-forest relative min-h-[380px] flex flex-col justify-end p-8 text-ivory">
            <img
              src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=85"
              alt="Lotus Ayurvedic Sanctuary Courtyard and Zen Garden"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/80 to-transparent" />

            <div className="relative z-10 space-y-4 max-w-md">
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold-light font-medium">
                The Arrival Experience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory">
                Gentle footsteps, warm herbal scents, and a courtyard designed for quiet breath.
              </h3>
              <p className="text-xs text-ivory/80 leading-relaxed font-light">
                Private dressing chambers, pure bronze foot baths, and dedicated silent relaxation alcoves ensure seamless retreat from the outside world.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
