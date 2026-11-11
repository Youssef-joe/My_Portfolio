import { useLanguage } from '../contexts/LanguageContext';
import { about, ui, contact } from '../data/site';
import { QuirkyProfileBox, BulletTag } from './ArtMotifs';

export default function AboutSection() {
  const { language } = useLanguage();
  const a = about[language];
  const t = ui[language];

  const skills = [
    'PostgreSQL in C',
    'SoldierDB Engine',
    'Joe’s OS (RISC-V/x86)',
    'PeerTrust Forensics',
    'B+Tree Indexing',
    'Elixir & Go',
    'Kafka & Microservices',
    'Docker & Linux',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Block (Matches Top-Right of Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-4 border-white/10 bg-[#121316] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#f4cb38]">
          
          {/* Left Column: Bold Philosophical Quote & Statement */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              <span>●</span>
              <span>PHILOSOPHY &bull; CORE IDENTITY</span>
            </div>

            {/* Giant Graphic Statement (from top-right of reference) */}
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              I'M A SYSTEMS ENGINEER WHO LOVES TURNING HARD LOW-LEVEL PROBLEMS INTO CLEAN, ROBUST AND MECHANICAL ENGINES.
            </h2>

            <div className="font-mono text-base sm:text-xl font-bold text-[#ff5500] tracking-wide uppercase">
              "Rigor is my style"
            </div>

            <p className="font-grotesk text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
              {a.lead}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-white/70 leading-relaxed font-sans pt-4 border-t border-white/10">
              {a.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Competencies Badges */}
            <div className="pt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <BulletTag key={skill}>{skill}</BulletTag>
              ))}
            </div>
          </div>

          {/* Right Column: Quirky Silhouette Character Box on Yellow (Snapshot Top-Right) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4">
            <div className="hover:rotate-2 transition-transform duration-300">
              <QuirkyProfileBox size={220} className="w-48 h-48 sm:w-56 sm:h-56" />
            </div>

            <div className="mt-4 text-center">
              <div className="font-display text-lg uppercase tracking-wider text-[#f4cb38]">
                ARCHIVAL AVATAR // 01
              </div>
              <div className="font-mono text-[11px] text-white/60">
                Cairo &bull; Systems &bull; Research
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
