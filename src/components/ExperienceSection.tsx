import { useLanguage } from '../contexts/LanguageContext';
import { experiences, ui } from '../data/site';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const expList = experiences[language];
  const t = ui[language];

  return (
    <section id="experience" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 02</span>
            <span>{t.sectionExperience}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            CAREER & RESEARCH
          </span>
        </div>

        <div className="panel-body space-y-5">
          {expList.map((exp, idx) => (
            <div
              key={idx}
              className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 shadow-sm"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[var(--border-light)] mb-3">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-[var(--text-main)]">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-semibold text-[var(--accent-blue)]">
                    {exp.role}
                  </div>
                </div>

                <div className="text-xs font-mono text-[var(--text-sub)] sm:text-end">
                  <span className="badge-retro me-2">
                    <span className="badge-retro-key">TYPE</span>
                    <span className="badge-retro-val">{exp.type}</span>
                  </span>
                  <span>{exp.period}</span>
                  <div className="text-[11px] text-[var(--text-faint)]">{exp.location}</div>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-1.5 text-xs md:text-sm text-[var(--text-sub)] ps-4 list-disc marker:text-[var(--accent-blue)]">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

