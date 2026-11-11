import { useLanguage } from '../contexts/LanguageContext';
import { cvData, sectionOrder, ui, cvUpdated, contact } from '../data/site';
import type { CVItem } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function CVSection() {
  const { language } = useLanguage();
  const t = ui[language];

  const items = cvData[language];
  const grouped = items.reduce<Record<string, CVItem[]>>((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});
  const order = sectionOrder[language] ?? sectionOrder.en;

  return (
    <section id="cv" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 08: Curriculum Vitae                         */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#161a1c] text-white">
          
          {/* Header Banner */}
          <div className="bg-[#101314] p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="chapter-number text-white font-serif">08</span>
                <SparkleStar size={18} color="#e5b85c" />
                <span className="text-xs font-mono text-[#e5b85c] tracking-widest uppercase">
                  Curriculum Vitae
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {language === 'ar' ? 'السيرة الذاتية والمؤهلات الأكاديمية' : 'Curriculum Vitae & Credentials'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-full bg-[#e5b85c] hover:bg-[#d4a342] text-[#141c18] text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <span>🖨</span>
                <span>{language === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Export CV'}</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 space-y-10">
            {/* Candidate Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {contact.name}
                </h4>
                <div className="text-xs sm:text-sm text-[#e5b85c] font-medium mt-0.5">
                  {contact.title}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/70">
                <span>{contact.location}</span>
                <span>&bull;</span>
                <span>{contact.email}</span>
                <span>&bull;</span>
                <span>{contact.phone}</span>
              </div>
            </div>

            {/* Categorized Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {order.map((cat) => {
                const sectionItems = grouped[cat];
                if (!sectionItems || sectionItems.length === 0) return null;

                return (
                  <div
                    key={cat}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10">
                        <SparkleStar size={14} color="#e5b85c" />
                        <h5 className="font-serif text-lg font-bold text-white tracking-wide">
                          {cat}
                        </h5>
                      </div>

                      <div className="space-y-4">
                        {sectionItems.map((item, idx) => (
                          <div key={idx} className="text-xs">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                              <span className="font-bold text-sm text-white">
                                {item.title}
                              </span>
                              {item.meta && (
                                <span className="font-mono text-[11px] text-[#e5b85c]">
                                  {item.meta}
                                </span>
                              )}
                            </div>

                            {item.sub && (
                              <div className="text-white/80 font-medium mt-0.5">
                                {item.sub}
                              </div>
                            )}

                            {item.description && (
                              <div className="text-white/60 leading-relaxed mt-1">
                                {item.description}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Review date */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/50">
              <span>Last reviewed: {cvUpdated}</span>
              <span className="text-[#e5b85c]">Verified Academic &amp; Industry Record</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
