import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { hero, contact } from '../data/site';
import { BulletTag, HeroCharacterBox, HeroAvatarMode } from './ArtMotifs';

const heroTags = [
  // positions: anchored to the portrait's outer edge, overlapping it by 2rem
  { label: 'SYSTEMS ENGINE', pos: '-top-6 right-[calc(100%-2rem)]' },
  { label: 'POSTGRESQL IN C', pos: '-top-6 left-[calc(100%-2rem)]' },
  { label: 'SOLDIERDB B+TREE', pos: '-bottom-9 right-[calc(100%-2rem)]' },
  { label: 'RISC-V SV32 KERNEL', pos: '-bottom-9 left-[calc(100%-2rem)]' },
];

const portraitModes: {
  mode: HeroAvatarMode;
  icon: string;
  short: string;
  long?: string;
  active: string;
}[] = [
  { mode: 'character', icon: '●', short: 'Graphic Ink', active: 'bg-[#ff5500] text-white border-black shadow-[3px_3px_0px_0px_#f4cb38]' },
  { mode: 'photo1', icon: '📷', short: 'Photo 01', long: '(Horizon)', active: 'bg-[#f4cb38] text-black border-black shadow-[3px_3px_0px_0px_#ff5500]' },
  { mode: 'photo2', icon: '☀️', short: 'Photo 02', long: '(Sky)', active: 'bg-[#00c2ff] text-black border-black shadow-[3px_3px_0px_0px_#f4cb38]' },
  { mode: 'classical', icon: '✦', short: 'Classical', active: 'bg-white text-black border-black shadow-[3px_3px_0px_0px_#ff5500]' },
];

export default function HeroSection() {
  const { language } = useLanguage();
  const h = hero[language];
  const [avatarMode, setAvatarMode] = useState<HeroAvatarMode>('character');

  const cycleAvatar = () => {
    if (avatarMode === 'character') setAvatarMode('photo1');
    else if (avatarMode === 'photo1') setAvatarMode('photo2');
    else if (avatarMode === 'photo2') setAvatarMode('classical');
    else setAvatarMode('character');
  };

  return (
    <section
      id="top"
      className="relative bg-black text-white pt-8 pb-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-black overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Top Tagline */}
        <div className="mb-2 sm:mb-6">
          <span className="inline-block font-mono text-[10px] sm:text-sm tracking-widest uppercase font-bold text-[#f4cb38] px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
            {language === 'ar' ? 'مهندس برمجيات ونظم // باحث علمي' : 'Back-End & Systems Engineer // R&D Analyst'}
          </span>
        </div>

        {/*
          Master Hero Stack.
          Phones/small tablets (< md): name, then portrait, then tags — stacked in flow.
          md and up: portrait overlaps the centre of the giant name, tags float around it.
          Name and portrait are both sized in vw so the composition scales together.
        */}
        <div className="relative w-full mt-4 sm:mt-6 md:my-6 md:py-14 flex flex-col items-center justify-center">

          {/* GIGANTIC CONDENSED LETTERS */}
          <h1
            dir="ltr"
            className="font-display text-[25vw] md:text-[18vw] 2xl:text-[16rem] font-bold text-white tracking-tighter leading-[0.85] select-none text-center uppercase whitespace-nowrap opacity-95"
          >
            YOUSSEF
          </h1>

          {/* Portrait: in flow below the name on small screens, overlaid on md+ */}
          <div className="relative mt-5 md:mt-0 md:absolute md:inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative pointer-events-auto">
              <button
                type="button"
                onClick={cycleAvatar}
                className="group relative block w-[min(66vw,17rem)] md:w-[20vw] md:max-w-[16rem] aspect-square focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f4cb38] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                title="Click to cycle portrait (Graphic Ink / Real Photo 01 / Real Photo 02 / Classical)"
                aria-label={`Portrait: ${avatarMode}. Click to cycle`}
              >
                <HeroCharacterBox className="w-full h-full" mode={avatarMode} />

                {/* Micro Toggle Hint Badge */}
                <div className="absolute -bottom-3 inset-x-0 mx-auto w-max px-2 py-0.5 bg-black border-2 border-white/30 text-[9px] font-mono text-white/90 uppercase tracking-wider rounded-sm group-hover:bg-[#f4cb38] group-hover:text-black transition-colors shadow-[2px_2px_0px_0px_#000]">
                  ↻ {avatarMode}
                </div>
              </button>

              {/* Floating Bullet Tags around the portrait (md+ only) */}
              {heroTags.map((tag) => (
                <div key={tag.label} className={`hidden md:block absolute pointer-events-auto whitespace-nowrap ${tag.pos}`}>
                  <BulletTag className="text-[10px] lg:text-xs">{tag.label}</BulletTag>
                </div>
              ))}
            </div>
          </div>

          {/* Tags as a tidy grid on small screens */}
          <div className="md:hidden mt-8 flex flex-wrap justify-center gap-2 w-full max-w-sm">
            {heroTags.map((tag) => (
              <BulletTag key={tag.label} className="whitespace-nowrap text-[10px] px-2 tracking-wide">
                {tag.label}
              </BulletTag>
            ))}
          </div>
        </div>

        {/* Interactive Avatar Mode Switcher */}
        <div className="mt-6 md:mt-4 grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-2 w-full max-w-sm md:max-w-none z-20">
          <span className="col-span-2 font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold md:me-1">
            PORTRAIT:
          </span>
          {portraitModes.map((m) => (
            <button
              key={m.mode}
              type="button"
              onClick={() => setAvatarMode(m.mode)}
              aria-pressed={avatarMode === m.mode}
              className={`px-3 py-2 md:py-1 font-mono text-[11px] sm:text-xs font-bold uppercase transition-all border-2 cursor-pointer whitespace-nowrap ${
                avatarMode === m.mode
                  ? m.active
                  : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {m.icon} {m.short}
              {m.long && <span className="hidden lg:inline"> {m.long}</span>}
            </button>
          ))}
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
        <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto max-w-sm sm:max-w-none items-stretch sm:items-center justify-center gap-4">
          <a
            href="#work"
            className="text-center px-6 py-3 bg-[#ff5500] hover:bg-[#d04400] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#f4cb38] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#f4cb38]"
          >
            Explore Projects ↓
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-white/20 transition-all"
          >
            GitHub Repositories ↗
          </a>
        </div>

      </div>
    </section>
  );
}
