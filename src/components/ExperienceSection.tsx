import { useLanguage } from '../contexts/LanguageContext';
import { experiences, ui } from '../data/site';
import { BulletTag } from './ArtMotifs';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const expList = experiences[language];
  const t = ui[language];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              INDUSTRY &bull; RESEARCH &bull; OPEN SOURCE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              ENGINEERING APPOINTMENTS
            </h2>
          </div>
          <span className="font-mono text-xs text-white/60">
            ScienceWerx &bull; EnovaWorx &bull; PostgreSQL C
          </span>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {expList.map((exp, index) => (
            <div
              key={index}
              className="bg-[#121316] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f4cb38] hover:shadow-[8px_8px_0px_0px_#ff5500] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                      {exp.role}
                    </span>
                    <span className="px-2 py-0.5 bg-[#f4cb38] text-black font-mono font-bold text-[10px] uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#ff5500] font-bold mt-1 uppercase">
                    {exp.company} &bull; {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 font-grotesk text-xs sm:text-sm text-white/80">
                {exp.bullets.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#f4cb38] font-bold">▸</span>
                    <span>{pt}</span>
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
