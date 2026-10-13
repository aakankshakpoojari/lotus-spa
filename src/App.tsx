import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TreatmentCatalog } from './components/TreatmentCatalog';
import { SignatureExperience } from './components/SignatureExperience';
import { WellnessGuide } from './components/WellnessGuide';
import { BookingSection } from './components/BookingSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import type { Treatment } from './types';
import { TREATMENTS } from './data/treatments';

export function App() {
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState<Treatment | null>(null);
  const [isFirstVisitGuest, setIsFirstVisitGuest] = useState<boolean>(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user selects a treatment from catalogue or modal to book
  const handleSelectTreatmentForBooking = (treatment: Treatment) => {
    setSelectedBookingTreatment(treatment);
    scrollToSection('booking');
  };

  // When a user selects from the wellness guide recommendation
  const handleGuideSelectForBooking = (treatment: Treatment, isFirstVisit: boolean) => {
    setSelectedBookingTreatment(treatment);
    setIsFirstVisitGuest(isFirstVisit);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans selection:bg-sage/30 selection:text-forest">
      {/* Navigation */}
      <Navbar
        onBookClick={() => scrollToSection('booking')}
        onGuideClick={() => scrollToSection('wellness-guide')}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 1 & 2: Hero */}
        <Hero
          onDiscoverClick={() => scrollToSection('wellness-guide')}
          onExploreClick={() => scrollToSection('treatments')}
        />

        {/* Section 3: Philosophy & Ayurvedic Foundations */}
        <Philosophy />

        {/* Section 4: Curated Treatment Collection */}
        <TreatmentCatalog
          onSelectForBooking={handleSelectTreatmentForBooking}
        />

        {/* Section 5: Signature Sanctuary Wellness Experience */}
        <SignatureExperience />

        {/* Section 6: Interactive Wellness Guide & Deterministic Recommender */}
        <WellnessGuide
          onBookTreatment={handleGuideSelectForBooking}
        />

        {/* Section 7: The Booking Experience */}
        <BookingSection
          key={`${selectedBookingTreatment?.id || 'default'}-${isFirstVisitGuest ? 'first' : 'returning'}`}
          initialTreatment={selectedBookingTreatment}
          initialIsFirstVisit={isFirstVisitGuest}
        />

        {/* Section 8: Testimonials */}
        <Testimonials />

        {/* Section 9: FAQ */}
        <FaqSection />

        {/* Section 10: Location & Contact */}
        <LocationContact />
      </main>

      {/* Section 11: Refined Footer */}
      <Footer
        onTreatmentClick={(tId) => {
          const t = TREATMENTS.find(item => item.id === tId);
          if (t) {
            handleSelectTreatmentForBooking(t);
          }
        }}
      />
    </div>
  );
}

export default App;
