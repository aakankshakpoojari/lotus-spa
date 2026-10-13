import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Our Philosophy', href: '#philosophy' },
    { name: 'Sanctuary', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-pond/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-water-depth'
            : 'bg-gradient-to-b from-pond/80 via-pond/30 to-transparent py-5 sm:py-6 text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Elegant Lotus Wordmark with botanical animated emblem */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Lotus Ayurvedic Spa"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 p-1 border border-blush/30 transition-transform duration-500 group-hover:rotate-12">
                <img
                  src="/images/loading.webp"
                  alt="Lotus Emblem"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-normal text-ivory transition-colors">
                  LOTUS
                </span>
                <span className="text-[8.5px] tracking-[0.3em] uppercase -mt-1 font-light text-blush">
                  Ayurvedic Spa
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.22em] text-ivory/80 hover:text-blush transition-colors duration-300 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Book Your Ritual CTA */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onBookClick}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium px-5 sm:px-6 py-2.5 rounded-full bg-blush/15 hover:bg-blush text-ivory hover:text-pond-dark border border-blush/40 transition-all duration-300 shadow-pond-glow transform active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Book Your Ritual</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-ivory hover:text-blush transition-colors focus:outline-none"
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
          className="fixed inset-0 z-40 bg-pond-dark/80 backdrop-blur-md md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-midnight border-l border-white/10 p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img src="/images/loading.webp" alt="Lotus" className="w-8 h-8 object-contain" />
                  <span className="font-serif text-xl tracking-widest text-ivory">LOTUS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-ivory/70 hover:text-blush"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif tracking-wider text-ivory hover:text-blush transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest py-3 rounded-full bg-blush text-pond-dark font-medium hover:bg-blush-light transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Ritual</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
