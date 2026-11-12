import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/site';

interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
}

const navItems: NavItem[] = [
  { id: 'top', labelEn: 'HOME', labelAr: 'الرئيسية' },
  { id: 'about', labelEn: 'ABOUT', labelAr: 'عنّي' },
  { id: 'work', labelEn: 'SYSTEMS', labelAr: 'الأنظمة' },
  { id: 'kernel', labelEn: 'KERNEL', labelAr: 'النواة' },
  { id: 'publications', labelEn: 'RESEARCH', labelAr: 'الأبحاث' },
  { id: 'art', labelEn: 'ART', labelAr: 'الفن' },
  { id: 'writing', labelEn: 'JOURNAL', labelAr: 'المقالات' },
  { id: 'contact', labelEn: 'CONTACT', labelAr: 'تواصل' },
];

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = ui[language];
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo with TM symbol as in reference */}
          <Link
            to="/"
            className="flex items-center gap-1 shrink-0 group text-white hover:text-[#f4cb38] transition-colors"
          >
            <span className="font-display text-xl min-[360px]:text-2xl sm:text-3xl tracking-tight whitespace-nowrap">
              YOUSSEF ALI
            </span>
            <span className="font-mono text-xs text-[#f4cb38] align-super -mt-2 font-bold">
              ™
            </span>
          </Link>

          {/* Desktop Nav Items (Middle: HOME > PORTFOLIO SERVICES CONTACT) */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-6 font-mono text-xs tracking-widest font-bold">
            {navItems.map((item, idx) => {
              const href = onHome ? `#${item.id}` : `/#${item.id}`;
              return (
                <div key={item.id} className="flex items-center gap-3 2xl:gap-6">
                  <a
                    href={href}
                    className="hover:text-[#f4cb38] transition-colors uppercase py-1"
                  >
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </a>
                  {idx < navItems.length - 1 && (
                    <span className="text-white/30 text-[10px]">&gt;</span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct CMS / Dispatch Studio Link */}
            <Link
              to="/editor"
              className="text-[11px] font-mono font-bold px-3 py-1 bg-[#ff5500] hover:bg-[#e04a00] text-white border-2 border-black shadow-[2px_2px_0px_0px_#fff] transition-all hidden sm:inline-flex items-center gap-1 uppercase"
              title="IP-Restricted Dispatch Studio"
            >
              <span>●</span>
              <span>Studio</span>
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-[11px] font-mono font-bold px-2.5 py-1 bg-white/10 hover:bg-[#f4cb38] hover:text-black border border-white/20 transition-all uppercase"
              title="Toggle Language"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 bg-white/10 hover:bg-[#f4cb38] hover:text-black border border-white/20 transition-all"
              title={theme === 'light' ? 'Switch to Dark Poster' : 'Switch to Light Poster'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 bg-white/10 text-white hover:bg-[#f4cb38] hover:text-black transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t-2 border-white/20 bg-black px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 text-sm font-mono font-bold">
              {navItems.map((item) => {
                const href = onHome ? `#${item.id}` : `/#${item.id}`;
                return (
                  <a
                    key={item.id}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-white/5 hover:bg-[#f4cb38] hover:text-black text-white border border-white/10 transition-colors uppercase"
                  >
                    <span>{language === 'ar' ? item.labelAr : item.labelEn}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
              <Link
                to="/editor"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f4cb38] font-bold uppercase"
              >
                ● Dispatch Studio
              </Link>
              <Link
                to="/writing"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f4cb38] font-bold uppercase"
              >
                Technical Journal →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
