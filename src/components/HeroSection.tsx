import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { hero, contact } from '../data/site';
import { BulletTag, HeroCharacterBox } from './ArtMotifs';

export default function HeroSection() {
  const { language } = useLanguage();
  const h = hero[language];
  const [avatarMode, setAvatarMode] = useState<'character' | 'photo' | 'classical'>('character');

  const cycleAvatar = () => {
    if (avatarMode === 'character') setAvatarMode('classical');
    else if (avatarMode === 'classical') setAvatarMode('photo');
    else setAvatarMode('character');
  };

  return (
    <section
      id="top"
      className="relative bg-black text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-black overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Top Tagline */}
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs sm:text-sm tracking-widest uppercase font-bold text-[#f4cb38] px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
            {language === 'ar' ? 'مهندس برمجيات ونظم // باحث علمي' : 'Back-End & Systems Engineer // R&D Analyst'}
          </span>
        </div>

        {/* Master Hero Stack (Giant Condensed Letters + Overlapping Orange Avatar Box) */}
        <div className="relative w-full my-4 sm:my-8 flex items-center justify-center">
          
          {/* GIGANTIC CONDENSED LETTERS (ABDULLAH Style from Reference) */}
          <h1 className="font-display text-[15vw] sm:text-[18vw] font-bold text-white tracking-tighter leading-none select-none text-center uppercase whitespace-nowrap opacity-95">
            YOUSSEF
          </h1>

          {/* Overlapping Orange Avatar Box in Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative pointer-events-auto">
              
              {/* Clickable Character Box */}
              <button
                type="button"
                onClick={cycleAvatar}
                className="group focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
                title="Click to toggle avatar (Graphic Character / Classical Soul / Real Photo)"
              >
                <HeroCharacterBox
                  size={240}
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 shadow-[8px_8px_0px_0px_#f4cb38]"
                  realPhoto={avatarMode === 'photo'}
                  classical={avatarMode === 'classical'}
                />

                {/* Micro Toggle Hint Badge */}
                <div className="absolute -bottom-3 inset-x-0 mx-auto w-max px-2.5 py-0.5 bg-black border-2 border-white/30 text-[9px] font-mono text-white/90 uppercase tracking-wider rounded-sm group-hover:bg-[#f4cb38] group-hover:text-black transition-colors">
                  Mode: {avatarMode} &bull; Click to switch
                </div>
              </button>

              {/* Floating Bullet Tags Around Orange Avatar (from reference) */}
              
              {/* Top-Left: Back-End & Systems */}
              <div className="absolute -top-6 -left-12 sm:-left-28 md:-left-36 pointer-events-auto">
                <BulletTag>• SYSTEMS ENGINE</BulletTag>
              </div>

              {/* Top-Right: PostgreSQL in C */}
              <div className="absolute -top-6 -right-12 sm:-right-28 md:-right-36 pointer-events-auto">
                <BulletTag>• POSTGRESQL IN C</BulletTag>
              </div>

              {/* Bottom-Left: SoldierDB B+Tree */}
              <div className="absolute -bottom-8 -left-12 sm:-left-28 md:-left-36 pointer-events-auto">
                <BulletTag>• SOLDIERDB B+TREE</BulletTag>
              </div>

              {/* Bottom-Right: RISC-V & x86 Kernel */}
              <div className="absolute -bottom-8 -right-12 sm:-right-28 md:-right-36 pointer-events-auto">
                <BulletTag>• RISC-V SV32 KERNEL</BulletTag>
              </div>

            </div>
          </div>

        </div>

        {/* Subtitle Identity */}
        <div className="mt-8 max-w-3xl space-y-3">
          <p className="font-grotesk text-base sm:text-xl font-bold tracking-tight text-white/90 uppercase">
            {h.fullName} <span className="text-[#ff5500]">—</span> {h.role}
          </p>

          <p className="font-sans text-xs sm:text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'أعمل بالقرب من العتاد، أصمم محركات قواعد البيانات، أساهم في كود بوستجرس بلغة C، وأبحث في نزاهة الاقتباسات العلمية.'
              : 'Forging deep systems close to the machine. Relational database storage engines, PostgreSQL internals in C, and empirical citation-forensics research.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-[#ff5500] hover:bg-[#d04400] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#f4cb38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#f4cb38]"
          >
            Explore Projects ↓
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-white/20 transition-all"
          >
            GitHub Repositories ↗
          </a>
        </div>

      </div>
    </section>
  );
}
