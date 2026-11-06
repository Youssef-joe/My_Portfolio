import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui } from '../data/site';

export default function StorySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="story" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 07</span>
            <span>{t.sectionStory}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            MEMOIR & CHRONICLES
          </span>
        </div>

        <div className="panel-body">
          {/* Header intro */}
          <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border-light)] mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-[var(--text-main)]">
                {language === 'en' ? 'The Chronicle of Three Eras' : 'سجل العصور الثلاثة'}
              </h3>
              <p className="text-xs text-[var(--text-sub)] mt-1">
                {language === 'en'
                  ? 'A narrative tracing the arc from first curiosity and assembly code to database kernels, operating systems, and scientific forensics.'
                  : 'مسار سردي يتتبع الرحلة من أول شرارة فضول ولغة التجميع إلى محركات قواعد البيانات، وأنظمة التشغيل، والتحليل الجنائي للأبحاث.'}
              </p>
            </div>
            <Link
              to="/story"
              className="btn-retro whitespace-nowrap text-xs"
            >
              <span>✦</span>
              <span>{language === 'en' ? 'Open Dedicated Story Reader' : 'فتح صفحة القصة المستقلة'}</span>
            </Link>
          </div>

          {/* Three Eras Display */}
          <div className="space-y-6">
            {eras.map((era, index) => {
              const e = era[language];
              const isEven = index % 2 === 1;

              return (
                <div
                  key={era.id}
                  className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    
                    {/* Chapter image */}
                    <div className={`md:col-span-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="border-2 border-[var(--border-strong)] bg-black p-1">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={era.image}
                            alt={era.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white font-mono text-[10px] px-2 py-0.5 text-center">
                            {era.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chapter text */}
                    <div className={`md:col-span-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2 mb-2">
                        <span className="badge-retro">
                          <span className="badge-retro-key">ERA</span>
                          <span className="badge-retro-val">{era.subtitle}</span>
                        </span>
                        <span className="font-mono text-xs text-[var(--text-faint)]">
                          {era.title}
                        </span>
                      </div>

                      <h4 className="font-serif text-base md:text-lg font-bold text-[var(--text-main)] mb-2">
                        {e.chapter}
                      </h4>

                      <p className="prose-body text-xs md:text-sm text-[var(--text-sub)] leading-relaxed">
                        {e.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-5 p-3 bg-[var(--bg-subtle)] border border-[var(--border-light)] text-center text-xs text-[var(--text-sub)] font-mono">
            // "Elegant architecture is a byproduct of refusing to treat any layer as a black box."
          </div>
        </div>
      </div>
    </section>
  );
}
