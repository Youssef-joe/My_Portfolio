import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui, hero } from '../data/site';

export default function StoryPage() {
  const { language } = useLanguage();
  const t = ui[language];
  const h = hero[language];

  return (
    <div className="portal-frame">
      <SiteHeader />

      <main className="p-4 md:p-6 space-y-6">
        
        {/* Story Breadcrumbs */}
        <div className="text-xs font-mono text-[var(--text-sub)] pb-2 border-b border-[var(--border-light)] flex items-center gap-2">
          <Link to="/" className="text-[var(--link-color)] hover:underline">
            Portal Index
          </Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">chronicles.html</span>
        </div>

        {/* Hero Story Banner */}
        <div className="panel-card">
          <div className="panel-card-header">
            <div className="panel-title">
              <span className="text-[var(--accent-red)]">§</span>
              <span>THE CHRONICLES OF YOUSSEF ALI AHMED // THE THREE ERAS</span>
            </div>
            <span className="badge-retro">
              <span className="badge-retro-key">MEMOIR</span>
              <span className="badge-retro-val">AUTOBIOGRAPHY</span>
            </span>
          </div>

          <div className="panel-body">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
              <div className="lg:col-span-5">
                <div className="border-2 border-[var(--border-strong)] bg-black p-1 shadow-lg">
                  <img
                    src="/images/art_deco_wisdom_hero.jpg"
                    alt="Allegory of Wisdom"
                    className="w-full h-auto object-cover"
                  />
                  <div className="text-[10px] font-mono text-center text-white/80 py-1 bg-black">
                    Plate 01: Allegory of Wisdom & Mechanical Order
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-main)] uppercase leading-tight">
                  {language === 'en'
                    ? 'The Journey from Assembly to Database Storage Engines'
                    : 'الرحلة من لغة التجميع إلى محركات تخزين قواعد البيانات'}
                </h1>

                <p className="font-serif italic text-sm md:text-base text-[var(--text-sub)] border-l-2 border-[var(--accent-red)] ps-4">
                  "{h.statement}"
                </p>

                <p className="prose-body text-xs md:text-sm text-[var(--text-sub)] leading-relaxed">
                  {language === 'en'
                    ? 'Every engineer has a defining impulse. Mine has always been the refusal to treat software systems as magical black boxes. When working with a database, I wanted to understand its disk layout and concurrency latches. When sending packets over a network, I wanted to see the raw byte frames. This chronicle documents the three distinct phases of that exploration.'
                    : 'لكل مهندس دافع يحدده. دافعي كان دائماً رفض التعامل مع الأنظمة البرمجية كصناديق سوداء سحرية. عندما أتعامل مع قاعدة بيانات، أردت أن أفهم تخطيطها على القرص ومزامنة الأقفال. وعند إرسال الحزم عبر الشبكة، أردت رؤية الإطارات الخام بالبايت. يوثق هذا السجل المراحل الثلاث لتلك الرحلة.'}
                </p>
              </div>
            </div>

            {/* In-depth Chapters */}
            <div className="space-y-8 pt-6 border-t border-[var(--border-light)]">
              {eras.map((era, index) => {
                const e = era[language];
                return (
                  <div key={era.id} className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-5 shadow-sm">
                    <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2 mb-4">
                      <span className="badge-retro">
                        <span className="badge-retro-key">CHAPTER</span>
                        <span className="badge-retro-val">0{index + 1}</span>
                      </span>
                      <span className="font-mono text-xs text-[var(--text-faint)]">
                        {era.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-4">
                        <div className="border border-[var(--border-strong)] bg-black p-1">
                          <img src={era.image} alt={era.title} className="w-full h-auto object-cover" />
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-3">
                        <h2 className="font-serif text-lg md:text-xl font-bold text-[var(--text-main)]">
                          {e.chapter}
                        </h2>

                        <p className="prose-body text-xs md:text-sm text-[var(--text-sub)] leading-relaxed">
                          {e.description}
                        </p>

                        <div className="pt-2 text-xs font-mono text-[var(--text-faint)]">
                          // Key Artifacts: {index === 0 ? 'Assembly, Microcontrollers, C Foundation' : index === 1 ? 'Joe’s OS (x86 & RISC-V), Ayno Messaging Engine, SoldierDB B+Tree' : 'ScienceWerx PeerTrust Benchmark Paper, PostgreSQL C Tooling, AI Infrastructure'}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back Home */}
            <div className="mt-8 pt-4 border-t border-[var(--border-light)] flex justify-between items-center text-xs">
              <Link to="/" className="btn-retro">
                ← {t.backHome}
              </Link>
              <a href="#top" className="text-[var(--text-faint)] hover:underline">
                ↑ {t.backToTop}
              </a>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
