import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ui, contact } from '../data/site';

interface NavItem {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: string;
  isRoute?: boolean;
  routePath?: string;
}

const navItems: NavItem[] = [
  { id: 'top', labelEn: 'Home', labelAr: 'الرئيسية', icon: '⌂' },
  { id: 'about', labelEn: 'About', labelAr: 'نبذة', icon: 'ℹ' },
  { id: 'experience', labelEn: 'Experience', labelAr: 'الخبرات', icon: '💼' },
  { id: 'work', labelEn: 'Projects', labelAr: 'المشاريع', icon: '⚙' },
  { id: 'publications', labelEn: 'Research', labelAr: 'الأبحاث', icon: '📄' },
  { id: 'writing', labelEn: 'Blog', labelAr: 'المقالات', icon: '✍' },
  { id: 'art', labelEn: 'Art', labelAr: 'الفن', icon: '🎨' },
  { id: 'story', labelEn: 'Story', labelAr: 'القصة', icon: '📜' },
  { id: 'cv', labelEn: 'CV', labelAr: 'السيرة', icon: '📋' },
  { id: 'contact', labelEn: 'Contact', labelAr: 'تواصل', icon: '✉' },
];

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = ui[language];
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="portal-header">
      {/* 2005 Vintage Titlebar Strip */}
      <div className="win-titlebar">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs opacity-80">⚙</span>
          <span>{t.portalName}</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/20 hover:bg-white/30 text-white transition-colors"
            title={t.toggleTheme}
          >
            {theme === 'light' ? '☼ Light' : '☾ Dark'}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Switch Language"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="px-4 py-4 md:px-6 md:py-5 border-b border-[var(--border-light)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[var(--bg-header-gradient)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              <Link to="/" className="text-inherit no-underline hover:text-[var(--link-hover)]">
                {contact.name}
              </Link>
            </h1>
            <span className="badge-retro">
              <span className="badge-retro-key">REV</span>
              <span className="badge-retro-val">2026.11</span>
            </span>
          </div>
          <p className="text-xs md:text-sm text-[var(--text-sub)] mt-1 font-sans">
            {contact.title}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-retro"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="btn-retro"
          >
            {contact.email}
          </a>
        </div>
      </div>

      {/* Navigation Folder Tabs */}
      <div className="nav-tabs overflow-x-auto">
        {navItems.map((item) => {
          const label = language === 'en' ? item.labelEn : item.labelAr;
          const href = onHome ? `#${item.id}` : `/#${item.id}`;

          return (
            <a
              key={item.id}
              href={href}
              className="nav-tab-item"
            >
              <span>{item.icon}</span>
              <span>{label}</span>
            </a>
          );
        })}

        {/* Dedicated Route links */}
        <Link
          to="/story"
          className="nav-tab-item"
        >
          <span>✦</span>
          <span>{language === 'en' ? 'Story (Full Page)' : 'صفحة القصة'}</span>
        </Link>
        <Link
          to="/writing"
          className="nav-tab-item"
        >
          <span>✎</span>
          <span>{language === 'en' ? 'Blog Index' : 'أرشيف المقالات'}</span>
        </Link>
      </div>

      {/* 2005 Breadcrumb & Status Bar */}
      <div className="status-ticker">
        <div className="flex items-center gap-2">
          <span className="opacity-75">PORTAL //</span>
          <span className="text-[var(--text-main)] font-semibold">
            {onHome ? 'index.html' : location.pathname}
          </span>
          <span className="opacity-50">|</span>
          <span>{contact.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="status-dot-online" />
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
            {t.statusOnline}
          </span>
        </div>
      </div>
    </header>
  );
}
