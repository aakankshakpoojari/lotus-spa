import { useState, useEffect } from 'react';
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
import { LoadingScreen } from './components/LoadingScreen';
import { RaindropRipple } from './components/RaindropRipple';
import type { Treatment } from './types';
import { TREATMENTS } from './data/treatments';

export function App() {
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState<Treatment | null>(null);
  const [isFirstVisitGuest, setIsFirstVisitGuest] = useState<boolean>(false);

  // Determine initial loading state: triggers on actual browser reload (Ctrl+R, F5, or refresh button) or initial entrance
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        // 1. Check if user initiated a reload via key or beforeunload
        const hasReloadFlag = sessionStorage.getItem('lotus_reloaded') === 'true';
        if (hasReloadFlag) {
          sessionStorage.removeItem('lotus_reloaded');
          return true;
        }

        // 2. Check Navigation Timing API for browser reload
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0 && navEntries[0].type === 'reload') {
          return true;
        }

        // 3. First-time sanctuary entrance reveal
        const hasVisited = sessionStorage.getItem('lotus_visited');
        if (!hasVisited) {
          sessionStorage.setItem('lotus_visited', 'true');
          return true;
        }
      } catch {
        // Fallback safe
      }
    }
    return false;
  });

  // Listen for actual user reload actions (Ctrl+R, Cmd+R, F5, or beforeunload) to trigger the loading overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmdR = (e.key === 'r' || e.key === 'R') && (e.ctrlKey || e.metaKey);
      const isF5 = e.key === 'F5';

      if (isCtrlOrCmdR || isF5) {
        try {
          sessionStorage.setItem('lotus_reloaded', 'true');
        } catch {
          // Ignore storage restrictions
        }
        setIsLoading(true);
      }
    };

    const handleBeforeUnload = () => {
      try {
        sessionStorage.setItem('lotus_reloaded', 'true');
      } catch {
        // Ignore storage restrictions
      }
      setIsLoading(true);
    };

    window.addEventListener('keydown', handleKeyDown, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // When loading is active on reload / load, conclude once DOM and assets are ready
  useEffect(() => {
    if (isLoading) {
      const finishLoading = () => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 750);
        return () => clearTimeout(timer);
      };

      if (document.readyState === 'complete') {
        finishLoading();
      } else {
        window.addEventListener('load', finishLoading, { once: true });
        return () => window.removeEventListener('load', finishLoading);
      }
    }
  }, [isLoading]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatment: Treatment) => {
    setSelectedBookingTreatment(treatment);
    scrollToSection('booking');
  };

  const handleGuideSelectForBooking = (treatment: Treatment, isFirstVisit: boolean) => {
    setSelectedBookingTreatment(treatment);
    setIsFirstVisitGuest(isFirstVisit);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-pond text-ivory flex flex-col font-sans selection:bg-blush/30 selection:text-ivory">
      {/* Subtle Raindrop Ripple Click Interaction (calm water surface reaction) */}
      <RaindropRipple />

      {/* Premium Lotus Signature Loading Screen (active on actual reload / initial visit) */}
      <LoadingScreen isLoading={isLoading} />

      {/* Navigation (clean, without reload button) */}
      <Navbar
        onBookClick={() => scrollToSection('booking')}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 1 & 2: Hero */}
        <Hero
          onExploreClick={() => scrollToSection('treatments')}
          onPhilosophyClick={() => scrollToSection('philosophy')}
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
