import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui, hero } from '../data/site';
import { SparkleStar, EllipticalTag } from '../components/ArtMotifs';

export default function StoryPage() {
  const { language } = useLanguage();
  const t = ui[language];
  const h = hero[language];

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Story Breadcrumbs */}
        <div className="text-xs font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-main)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[var(--link-color)] hover:underline">
              Portal Index
            </Link>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold">chronicles.html</span>
          </div>

          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
            Biographical Monograph
          </span>
        </div>

        {/* Master Memoir Cover Card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-main)] bg-[var(--bg-surface)]">
          {/* Header Banner */}
          <div className="bg-[#1b140f] p-8 sm:p-14 text-white border-b border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <SparkleStar size={18} color="#ea5e24" />
              <span className="text-xs font-mono text-[#ea5e24] tracking-widest uppercase">
                The Memoir &bull; Three Eras of Craft
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {language === 'en'
                ? 'From First Curiosity to Database Kernel Engineering'
                : 'من أول شرارة فضول إلى هندسة أنوية وقواعد البيانات'}
            </h1>

            <p className="font-serif text-lg sm:text-xl text-white/90 italic max-w-3xl leading-relaxed border-l-2 border-[#ea5e24] pl-4">
              "{h.statement}"
            </p>
          </div>

          {/* Three Eras Detailed Progression */}
          <div className="p-8 sm:p-12 lg:p-16 space-y-16">
            {eras.map((era, index) => {
              const e = era[language];
              const isEven = index % 2 === 1;

              return (
                <div
                  key={era.id}
                  className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-card)] p-8 sm:p-10 shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Real Photo Artifact */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black group">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={era.image}
                            alt={e.chapter}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                          />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-center">
                          <span className="font-mono text-xs text-[#f4d38c] tracking-widest uppercase">
                            AUTHENTIC ARCHIVE // {era.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Prose */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#ea5e24] tracking-widest uppercase px-3 py-1 rounded-full bg-[#ea5e24]/10 border border-[#ea5e24]/20">
                          {era.title}
                        </span>
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          {era.subtitle}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)] leading-snug">
                        {e.chapter}
                      </h2>

                      <p className="font-sans text-sm sm:text-base text-[var(--text-sub)] leading-relaxed">
                        {e.description}
                      </p>

                      <div className="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-light)] text-xs font-mono">
                        <span className="text-[var(--text-muted)] font-bold">Archival Item: </span>
                        <span className="text-[var(--text-main)]">{era.image.split('/').pop()}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Bottom Nav */}
            <div className="pt-8 border-t border-[var(--border-main)] flex justify-between items-center text-xs font-mono">
              <Link to="/" className="text-[#ea5e24] hover:underline flex items-center gap-1">
                <span>←</span>
                <span>Return to Monograph Cover</span>
              </Link>
              <a href="#top" className="text-[var(--text-muted)] hover:underline">
                ↑ Top of Memoir
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
