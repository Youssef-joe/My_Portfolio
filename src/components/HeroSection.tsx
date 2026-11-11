import { useLanguage } from '../contexts/LanguageContext';
import { hero, contact } from '../data/site';
import { SparkleStar } from './ArtMotifs';

export default function HeroSection() {
  const { language } = useLanguage();
  const h = hero[language];

  // Floating ambient sparkles
  const sparkles = [
    { top: '15%', left: '12%', size: 14 },
    { top: '22%', right: '15%', size: 18 },
    { top: '65%', left: '8%', size: 12 },
    { top: '75%', right: '10%', size: 16 },
    { top: '40%', left: '20%', size: 10 },
    { top: '35%', right: '22%', size: 12 },
  ];

  return (
    <section
      id="top"
      className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] max-h-[960px] flex flex-col justify-between items-center text-white overflow-hidden py-10 px-4 sm:px-6 bg-[#092f20]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 40%, rgba(26, 102, 68, 0.5) 0%, rgba(9, 47, 32, 0.98) 70%, #061f15 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")
        `,
      }}
    >
      {/* Animated Floating Celestial Sparkles */}
      {sparkles.map((sp, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none animate-pulse"
          style={{ top: sp.top, left: sp.left, right: sp.right, animationDuration: `${3 + (i % 3)}s` }}
        >
          <SparkleStar size={sp.size} color="#f4d38c" />
        </div>
      ))}

      {/* Top Edition Stamp */}
      <div className="pt-2 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono tracking-widest uppercase border border-white/15 backdrop-blur-sm shadow-sm">
          <SparkleStar size={11} color="#f4d38c" />
          <span>Architecture &bull; Systems &bull; Research</span>
          <SparkleStar size={11} color="#f4d38c" />
        </span>
      </div>

      {/* Central Majestic Typography — Dribbble Cover (Snapshot 1) */}
      <div className="relative z-10 my-auto text-center max-w-4xl px-4 py-8">
        {/* Horizontal flanking rules with stars */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <SparkleStar size={16} color="#f4d38c" />
            <div className="h-[1px] w-12 sm:w-28 md:w-44 bg-white/40" />
            <SparkleStar size={20} color="#ffffff" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <SparkleStar size={20} color="#ffffff" />
            <div className="h-[1px] w-12 sm:w-28 md:w-44 bg-white/40" />
            <SparkleStar size={16} color="#f4d38c" />
          </div>
        </div>

        {/* Master "Portfolio" with Star Tittle on 'i' */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-md select-none leading-none">
          <span>Portfol</span>
          <span className="relative inline-block text-white">
            <span className="inline-block relative">
              ı
              {/* Star replacing the dot */}
              <SparkleStar
                size={26}
                color="#f4d38c"
                className="absolute -top-3 sm:-top-5 -right-1.5 sm:-right-2 animate-pulse"
              />
            </span>
          </span>
          <span>o</span>
        </h1>

        {/* Subtitle Identity */}
        <p className="font-sans text-base sm:text-xl md:text-2xl text-white/95 font-medium tracking-wide mt-4">
          {h.fullName}{' '}
          <span className="text-[#f4d38c] font-serif italic mx-1.5">—</span>{' '}
          <span className="text-white/85">{h.role}</span>
        </p>

        {/* Spaced Version Letters: 2 0 2 6   E D I T I O N */}
        <div className="text-xs sm:text-sm font-sans uppercase font-medium text-white/75 mt-3 select-none tracking-[0.45em]">
          2 0 2 6 &nbsp; E D I T I O N
        </div>

        {/* Quick Statement Pill */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white font-sans text-xs tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <SparkleStar size={14} color="#f4d38c" className="group-hover:rotate-90 transition-transform duration-300" />
            <span>{language === 'ar' ? 'استكشف الفن والأنظمة' : 'Explore The Monograph'}</span>
            <span className="text-[#f4d38c]">↓</span>
          </a>
        </div>
      </div>

      {/* Bottom Floating Contact Pills Bar (Snapshot 1) */}
      <div className="w-full max-w-5xl mx-auto pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 text-xs">
        <a
          href={contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="art-pill-link"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>youssef-ali.vercel.app</span>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="art-pill-link"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>{contact.email}</span>
        </a>

        <span className="art-pill-link cursor-default">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{contact.location}</span>
        </span>

        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="art-pill-link"
        >
          <span>GitHub</span>
          <span className="text-[#f4d38c]">↗</span>
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="art-pill-link"
        >
          <span>LinkedIn</span>
          <span className="text-[#f4d38c]">↗</span>
        </a>
      </div>
    </section>
  );
}
