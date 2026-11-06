import { useLanguage } from '../contexts/LanguageContext';
import { work, ui } from '../data/site';

export default function WorkSection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="work" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 03</span>
            <span>{t.sectionWork}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            ARCHITECTURES & CODE
          </span>
        </div>

        <div className="panel-body">
          <p className="text-xs text-[var(--text-sub)] font-mono mb-4 pb-2 border-b border-[var(--border-light)]">
            // INDEX OF CORE REPOSITORIES, STORAGE ENGINES, KERNELS & DISTRIBUTED SYSTEMS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.map((item) => {
              const c = item[language];

              return (
                <div
                  key={item.id}
                  className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 flex flex-col justify-between hover:border-[var(--accent-blue)] transition-colors shadow-sm"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-[var(--text-main)] flex items-center gap-1.5">
                          <span className="text-[var(--accent-blue)]">▸</span>
                          {c.title}
                        </h3>
                        <div className="text-xs text-[var(--text-sub)] font-medium">
                          {c.role}
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-[var(--text-faint)] whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="prose-body text-xs text-[var(--text-sub)] leading-relaxed mb-3">
                      {c.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 mb-3 pt-2 border-t border-[var(--border-light)]">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-light)] text-[var(--text-sub)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {item.href && (
                      <div className="text-end">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro text-[11px]"
                        >
                          <span>↗</span>
                          <span>{language === 'en' ? 'Repository / Link' : 'المستودع / الرابط'}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
