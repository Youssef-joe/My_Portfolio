import { useLanguage } from '../contexts/LanguageContext';
import { experiences, ui } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const expList = experiences[language];
  const t = ui[language];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 07: Professional Experience                  */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#162024] text-white">
          
          {/* Header Banner */}
          <div className="bg-[#10171a] p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="chapter-number text-white font-serif">07</span>
                <SparkleStar size={18} color="#38bdf8" />
                <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase">
                  Career Appointments
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {language === 'ar' ? 'الخبرات المهنية والمناصب البحثية' : 'Engineering Career & Research Track'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <EllipticalTag starColor="#38bdf8">High-Scale Production</EllipticalTag>
              <EllipticalTag starColor="#38bdf8">Empirical R&amp;D</EllipticalTag>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            {expList.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:border-[#38bdf8]/60 transition-colors duration-300 shadow-md"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 pb-4 mb-4 border-b border-white/10">
                  <div>
                    <span className="font-serif text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </span>
                    <div className="text-sm font-semibold text-[#38bdf8] mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-white/60">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                      {exp.type}
                    </span>
                    <span>{exp.period}</span>
                    <span className="hidden sm:inline">&bull;</span>
                    <span className="hidden sm:inline">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-white/85 ps-4 list-disc marker:text-[#38bdf8]">
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

      </div>
    </section>
  );
}
