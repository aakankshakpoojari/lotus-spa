import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onGuideClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onGuideClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Philosophy', href: '#philosophy' },
    { name: 'Rituals & Treatments', href: '#treatments' },
    { name: 'Wellness Guide', href: '#wellness-guide', action: onGuideClick },
    { name: 'Sanctuary Experience', href: '#sanctuary' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-sm border-b border-forest/10 py-3.5'
            : 'bg-gradient-to-b from-forest/30 via-forest/10 to-transparent py-5 text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Lotus Ayurvedic Spa Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-forest/20 p-1 border border-gold/40 transition-transform duration-300 group-hover:rotate-12">
                <img
                  src="/images/f1.png"
                  alt="Lotus Flower Emblem"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl sm:text-2xl tracking-widest font-normal transition-colors duration-300 ${
                    isScrolled ? 'text-forest' : 'text-ivory'
                  }`}
                >
                  LOTUS
                </span>
                <span
                  className={`text-[9px] tracking-[0.28em] uppercase -mt-1 font-medium ${
                    isScrolled ? 'text-sage-dark' : 'text-ivory/80'
                  }`}
                >
                  Ayurvedic Sanctuary
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.action) {
                      e.preventDefault();
                      link.action();
                    }
                  }}
                  className={`text-xs uppercase tracking-[0.16em] transition-all duration-300 relative py-1 hover:text-gold ${
                    isScrolled ? 'text-charcoal/80' : 'text-ivory/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Book a Visit CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onGuideClick}
                className={`hidden lg:flex items-center gap-1.5 text-xs tracking-wider uppercase px-3.5 py-2 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? 'border-forest/20 text-forest hover:bg-forest/5'
                    : 'border-ivory/30 text-ivory hover:bg-ivory/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Ritual Quiz</span>
              </button>

              <button
                type="button"
                onClick={onBookClick}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded-full bg-forest text-ivory shadow-sm hover:bg-terracotta hover:shadow-md transition-all duration-300 transform active:scale-95 border border-gold/30"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-light" />
                <span>Book a Visit</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                  isScrolled ? 'text-forest hover:bg-forest/10' : 'text-ivory hover:bg-ivory/15'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-ivory shadow-2xl p-6 flex flex-col justify-between border-l border-antique"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-forest/10">
                <div className="flex items-center gap-2.5">
                  <img src="/images/f1.png" alt="Lotus" className="w-8 h-8 object-contain" />
                  <span className="font-serif text-xl tracking-wider text-forest">LOTUS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-charcoal/70 hover:text-forest"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (link.action) {
                        e.preventDefault();
                        link.action();
                      }
                    }}
                    className="text-base font-serif text-charcoal hover:text-forest hover:translate-x-1 transition-all py-1.5 border-b border-forest/5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-forest/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGuideClick();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-3 rounded-full border border-forest/20 text-forest"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Find Your Ritual</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest py-3 rounded-full bg-forest text-ivory hover:bg-terracotta transition-colors"
              >
                <Calendar className="w-4 h-4 text-gold-light" />
                <span>Book a Visit</span>
              </button>
              <p className="text-[11px] text-center text-charcoal/60 pt-2">
                Sanctuary open daily · 8:30 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
