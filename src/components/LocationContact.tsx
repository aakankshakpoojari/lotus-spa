import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-pond-dark relative text-ivory border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} className="text-blush" />
            <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
              Sanctuary Enclave
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
            Find stillness with us.
          </h2>

          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Nestled in a secluded courtyard garden away from urban transit noise. All visits are prepared exclusively by advance reservation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sanctuary Information */}
          <div className="lg:col-span-6 bg-midnight/50 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6 divide-y divide-white/10">
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-pond text-blush shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-normal text-ivory">
                    Sanctuary Address
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-1 leading-relaxed font-light">
                    Pavilion 4, Gulmohar Avenue, Bandra West Enclave <br />
                    Mumbai, Maharashtra 400050, India
                  </p>
                  <span className="text-[10px] text-blush/80 uppercase tracking-wider block mt-1">
                    * Sample sanctuary address.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6">
                <div className="p-2.5 rounded-lg bg-pond text-blush shrink-0 border border-white/10">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-normal text-ivory">
                    Sanctuary Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-1 leading-relaxed font-light">
                    Monday to Sunday: 8:30 AM – 8:00 PM <br />
                    Morning Rituals: 9:00 AM · Final Twilight Session: 6:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6">
                <div className="p-2.5 rounded-lg bg-pond text-blush shrink-0 border border-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-normal text-ivory">
                    Sanctuary Concierge
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-1 font-light leading-relaxed">
                    Concierge Line: +91 (Sanctuary Desk) <br />
                    Direct Enquiries: concierge@lotusayurvedicspa.example
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-widest font-medium hover:bg-blush-light transition-colors"
              >
                <span>Request Appointment</span>
              </a>

              <a
                href="#faqs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-xs uppercase tracking-wider text-ivory/80 hover:text-blush hover:border-blush/40 transition-colors"
              >
                <span>Guest Etiquette</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Atmosphere */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-midnight relative min-h-[340px] flex flex-col justify-end p-6 sm:p-8 text-ivory">
            <img
              src="/images/landing.jpeg"
              alt="Lotus Ayurvedic Sanctuary Courtyard with blooming pink lotus flowers"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pond via-pond/60 to-transparent" />

            <div className="relative z-10 space-y-3 max-w-md">
              <span className="text-[10px] uppercase tracking-[0.2em] text-blush font-medium">
                The Arrival Experience
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-ivory leading-snug">
                Quiet footsteps, warm herbal decoctions, and still water reflections.
              </h3>
              <p className="text-xs text-ivory/70 leading-relaxed font-light">
                Private dressing chambers, pure bronze foot baths, and dedicated silent unwinding alcoves allow guests to transition smoothly from the outer city to inward peace.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
