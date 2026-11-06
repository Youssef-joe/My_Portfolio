import { useLanguage } from '../contexts/LanguageContext';
import { cvData, sectionOrder, ui, cvUpdated, contact } from '../data/site';
import type { CVItem } from '../data/site';

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
    <section id="cv" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 08</span>
            <span>{t.sectionCV}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="btn-retro text-xs"
              title="Print Curriculum Vitae"
            >
              <span>🖨</span>
              <span>{language === 'en' ? 'Print / Export CV' : 'طباعة السيرة الذاتية'}</span>
            </button>
          </div>
        </div>

        <div className="panel-body">
          {/* Resume Header Placard */}
          <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border-light)] mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[var(--border-light)] pb-2 mb-3">
              <div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  {contact.name}
                </h3>
                <p className="text-xs text-[var(--text-sub)]">
                  {contact.title}
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--text-faint)] sm:text-end">
                <div>{contact.location}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
              </div>
            </div>

            <div className="text-xs text-[var(--text-sub)] leading-relaxed">
              <strong>Professional Summary:</strong> Back-end and systems engineer focused on database engineering and AI infrastructure. Open-source contributor in C to the PostgreSQL ecosystem, builder of SoldierDB, first author of the PeerTrust citation-forensics benchmark paper at ScienceWerx, and former GDG technical lead.
            </div>
          </div>

          {/* Grouped Sections */}
          <div className="space-y-6">
            {order.map((category) => {
              const rows = grouped[category];
              if (!rows?.length) return null;

              return (
                <div key={category} className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 shadow-sm">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[var(--accent-blue)] border-b border-[var(--border-light)] pb-1.5 mb-3">
                    ▸ {category}
                  </h4>

                  <div className="space-y-3">
                    {rows.map((row, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 text-xs pb-2 border-b border-[var(--border-light)] last:border-b-0 last:pb-0"
                      >
                        <div className="flex-1">
                          <span className="font-bold text-[var(--text-main)] text-sm">
                            {row.title}
                          </span>
                          {row.subtitle && (
                            <div className="text-[var(--text-sub)] text-xs mt-0.5">
                              {row.subtitle}
                            </div>
                          )}
                        </div>

                        {row.year && (
                          <div className="font-mono text-[11px] text-[var(--text-faint)] whitespace-nowrap sm:text-end">
                            {row.year}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Revision footer */}
          <div className="mt-4 pt-3 border-t border-[var(--border-light)] flex justify-between items-center text-xs text-[var(--text-faint)] font-mono">
            <span>
              {t.updatedPrefix}: {cvUpdated}
            </span>
            <span>
              Format: 2005 Technical Standard // Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
