import { useLanguage } from '../contexts/LanguageContext';
import { about, ui } from '../data/site';

export default function AboutSection() {
  const { language } = useLanguage();
  const a = about[language];
  const t = ui[language];

  const skillGroups = [
    {
      category: language === 'en' ? 'Programming Languages' : 'لغات البرمجة',
      skills: ['Go', 'C', 'C++', 'TypeScript', 'JavaScript', 'Elixir', 'Python', 'SQL', 'C#', 'Assembly'],
    },
    {
      category: language === 'en' ? 'Back-End & Systems' : 'الخلفية والأنظمة',
      skills: ['Node.js', 'NestJS', 'Express.js', 'Phoenix (Elixir)', 'FastAPI', '.NET', 'REST', 'Microservices', 'WebSockets', 'gRPC', 'Kafka', 'Jest'],
    },
    {
      category: language === 'en' ? 'Data & Infrastructure' : 'قواعد البيانات والبنية',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM', 'Docker', 'GitHub Actions (CI/CD)', 'Google Cloud Platform (GCP)', 'Firebase', 'Linux'],
    },
    {
      category: language === 'en' ? 'Front-End Frameworks' : 'أطر الواجهة الأمامية',
      skills: ['React', 'Next.js', 'Remix'],
    },
  ];

  return (
    <section id="about" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 01</span>
            <span>{t.sectionAbout}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            PHILOSOPHY & SKILLS
          </span>
        </div>

        <div className="panel-body">
          {/* Lead philosophy quote */}
          <div className="p-3 mb-4 bg-[var(--bg-subtle)] border-l-4 border-[var(--accent-blue)] font-serif italic text-base md:text-lg text-[var(--text-main)]">
            "{a.lead}"
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-3 mb-6">
            {a.body.map((p, idx) => (
              <p key={idx} className="prose-body text-sm leading-relaxed text-[var(--text-sub)]">
                {p}
              </p>
            ))}
          </div>

          {/* Core Skills Matrix */}
          <div className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-main)] mb-3 pb-2 border-b border-[var(--border-light)]">
              {language === 'en' ? 'Core Technical Skills & Tooling Inventory' : 'مصفوفة المهارات التقنية والأدوات'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="bg-[var(--bg-surface)] p-3 border border-[var(--border-light)]">
                  <div className="font-semibold text-xs text-[var(--text-main)] mb-2 font-mono">
                    ▸ {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-light)] text-[var(--text-sub)] rounded-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
