import { useLanguage } from '../contexts/LanguageContext';
import { cvData, sectionOrder, ui, cvUpdated, contact } from '../data/site';
import type { CVItem } from '../data/site';
import { BulletTag } from './ArtMotifs';

export default function CVSection() {
  const { language } = useLanguage();
  const t = ui[language];

  const items = cvData[language];
  const grouped = items.reduce<Record<string, CVItem[]>>((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});
  const order = sectionOrder[language] ?? sectionOrder.en;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              VERIFIED CURRICULUM VITAE &bull; 2026 EDITION
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              CURRICULUM VITAE
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-[#f4cb38] hover:bg-[#e0b828] text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff] transition-all flex items-center gap-2"
            >
              <span>⎙</span>
              <span>{t.printCv}</span>
            </button>
            <span className="font-mono text-xs text-white/50">{cvUpdated}</span>
          </div>
        </div>

        {/* CV Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {order.map((cat) => {
            const list = grouped[cat];
            if (!list || list.length === 0) return null;

            return (
              <div
                key={cat}
                className="bg-[#121316] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f4cb38] space-y-4"
              >
                <div className="flex items-center justify-between border-b-2 border-white/10 pb-3">
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#f4cb38]">
                    {cat}
                  </h3>
                  <span className="font-mono text-xs text-white/50">{list.length} Items</span>
                </div>

                <div className="space-y-4 font-grotesk text-xs sm:text-sm">
                  {list.map((item, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-white uppercase">{item.title}</span>
                        {item.year && (
                          <span className="font-mono text-xs text-[#ff5500] font-bold shrink-0">{item.year}</span>
                        )}
                      </div>
                      {item.role && (
                        <div className="font-mono text-xs text-[#f4cb38] mt-0.5">{item.role}</div>
                      )}
                      {item.description && (
                        <div className="text-white/70 text-xs mt-1 leading-relaxed">{item.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
