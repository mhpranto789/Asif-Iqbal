import React, { useState, useEffect, useRef } from 'react';
import { RoutePath, Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentRoute,
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        openButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems: { route: RoutePath; label: string }[] = [
    { route: 'story', label: t.nav.story },
    { route: 'work', label: t.nav.work },
    { route: 'music', label: t.nav.music },
    { route: 'ideas', label: t.nav.ideas },
    { route: 'speaking', label: t.nav.speaking },
    { route: 'blog', label: t.nav.blog },
  ];

  const handleNavClick = (route: RoutePath) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F6F7]/90 backdrop-blur-md border-b border-[#D9E1E5]">
      {/* Skip Navigation for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#101B25] text-white text-sm font-medium rounded shadow-md"
      >
        Skip to main content
      </a>

      {/* 3-Zone Top Bar Container (1280px max) */}
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none"
          aria-label={language === 'en' ? 'Go to Asif Iqbal Homepage' : 'আসিফ ইকবাল মূলপাতা'}
        >
          <span className="font-display text-2xl tracking-tight text-[#101B25] group-hover:text-[#155E63] transition-colors">
            {language === 'en' ? 'Asif Iqbal' : 'আসিফ ইকবাল'}
          </span>
        </button>

        {/* Zone 2: 4–6 nav links, single-line, clean text */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#101B25] font-semibold'
                    : 'text-[#596774] hover:text-[#101B25]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#155E63]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1–2 primary actions (Language Switch + Connect) */}
        <div className="flex items-center gap-4">
          {/* Functional Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold tracking-wider text-[#101B25] border border-[#D9E1E5] rounded hover:border-[#155E63] hover:text-[#155E63] transition-colors whitespace-nowrap cursor-pointer"
            aria-label={`Switch language to ${language === 'en' ? 'Bangla' : 'English'}`}
            title={`Switch to ${language === 'en' ? 'Bangla (বাংলা)' : 'English'}`}
          >
            {language === 'en' ? 'বাংলা' : 'EN'}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded transition-colors whitespace-nowrap cursor-pointer ${
              currentRoute === 'contact'
                ? 'bg-[#155E63] text-white shadow-sm'
                : 'bg-[#101B25] text-white hover:bg-[#155E63]'
            }`}
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            ref={openButtonRef}
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#101B25] hover:text-[#155E63] transition-colors focus-visible:outline-none"
            aria-label={t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 bg-[#101B25]/60 backdrop-blur-sm md:hidden flex justify-end"
        >
          <div className="w-full max-w-xs bg-[#F4F6F7] h-full shadow-2xl flex flex-col p-6 border-l border-[#D9E1E5]">
            <div className="flex items-center justify-between pb-6 border-b border-[#D9E1E5]">
              <span className="font-display text-xl text-[#101B25]">
                {language === 'en' ? 'Asif Iqbal' : 'আসিফ ইকবাল'}
              </span>
              <button
                ref={closeButtonRef}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#596774] hover:text-[#101B25] transition-colors cursor-pointer"
                aria-label={t.nav.menuClose}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 py-8 flex flex-col gap-6" aria-label="Mobile Navigation List">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left text-lg font-medium transition-colors ${
                  currentRoute === 'home' ? 'text-[#155E63] font-semibold' : 'text-[#101B25]'
                }`}
              >
                {t.nav.home}
              </button>
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left text-lg font-medium transition-colors ${
                    currentRoute === item.route ? 'text-[#155E63] font-semibold' : 'text-[#101B25]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left text-lg font-medium transition-colors ${
                  currentRoute === 'contact' ? 'text-[#155E63] font-semibold' : 'text-[#101B25]'
                }`}
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="pt-6 border-t border-[#D9E1E5] flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-sm font-semibold border border-[#D9E1E5] rounded text-[#101B25] hover:border-[#155E63]"
              >
                {language === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}
              </button>
              <span className="text-xs text-[#596774]">v1.0 (2026)</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
