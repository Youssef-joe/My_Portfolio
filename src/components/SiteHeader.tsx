import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/site';
import { SparkleStar } from './ArtMotifs';

interface NavItem {
  id: string;
  num: string;
  labelEn: string;
  labelAr: string;
}

const navItems: NavItem[] = [
  { id: 'top', num: '00', labelEn: 'Cover', labelAr: 'الغلاف' },
  { id: 'about', num: '01', labelEn: 'Hello', labelAr: 'مرحباً' },
  { id: 'work', num: '02', labelEn: 'Systems', labelAr: 'الأنظمة' },
  { id: 'kernel', num: '03', labelEn: 'Kernel', labelAr: 'النواة' },
  { id: 'publications', num: '04', labelEn: 'Research', labelAr: 'الأبحاث' },
  { id: 'art', num: '05', labelEn: 'Art & Soul', labelAr: 'الفن والروح' },
  { id: 'story', num: '06', labelEn: 'Chronicles', labelAr: 'السجل' },
  { id: 'writing', num: '07', labelEn: 'Journal', labelAr: 'المقالات' },
  { id: 'cv', num: '08', labelEn: 'CV', labelAr: 'السيرة' },
  { id: 'contact', num: '09', labelEn: 'Contact', labelAr: 'تواصل' },
];

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = ui[language];
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur-md bg-[#0b3323]/80 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo with Star Accent */}
          <Link
            to="/"
            className="flex items-center gap-2 group text-white hover:text-[#f4d38c] transition-colors"
          >
            <SparkleStar size={20} color="#f4d38c" className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-serif text-lg font-bold tracking-tight">
              Youssef Ali
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15 hidden sm:inline-block">
              2026 Edition
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 font-sans text-xs">
            {navItems.map((item) => {
              const href = onHome ? `#${item.id}` : `/#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className="px-2.5 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1.5"
                >
                  <span className="text-[10px] font-mono text-[#f4d38c] opacity-80">{item.num}</span>
                  <span>{language === 'ar' ? item.labelAr : item.labelEn}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Direct CMS / Dispatch Studio Link */}
            <Link
              to="/editor"
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#ea5e24] text-white border border-white/20 transition-all duration-200 hidden md:inline-flex items-center gap-1.5"
              title="IP-Restricted Dispatch Studio"
            >
              <span>✦</span>
              <span>Studio</span>
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-[11px] font-mono px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
              title="Toggle Language"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Theme Toggle (Gallery Art / Dark Monograph) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
              title={theme === 'light' ? 'Switch to Dark Velvet Monograph' : 'Switch to Light Gallery Art'}
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
              className="xl:hidden p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
            className="xl:hidden border-t border-white/10 bg-[#072217]/95 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => {
                const href = onHome ? `#${item.id}` : `/#${item.id}`;
                return (
                  <a
                    key={item.id}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white flex items-center gap-2 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#f4d38c]">{item.num}</span>
                    <span>{language === 'ar' ? item.labelAr : item.labelEn}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
              <Link
                to="/editor"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white flex items-center gap-1.5"
              >
                <span>✦</span>
                <span>Dispatch Studio</span>
              </Link>
              <Link
                to="/writing"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white"
              >
                Technical Notebook →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
