import React from 'react';

/**
 * Bullet Tag Badge (from reference hero around the avatar)
 */
export function BulletTag({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/90 bg-black/60 border border-white/20 rounded-sm backdrop-blur-sm shadow-sm hover:border-[#ff5500] hover:text-[#ff5500] transition-colors ${className}`}
    >
      <span className="text-[#ff5500] text-sm leading-none">•</span>
      <span>{children}</span>
    </span>
  );
}

export function SparkleStar({
  size = 16,
  color = 'currentColor',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={`inline-block shrink-0 ${className}`}>
      <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
    </svg>
  );
}

export function EllipticalTag({
  children,
  className = '',
  starColor = '#f4cb38',
}: {
  children: React.ReactNode;
  className?: string;
  starColor?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white bg-black/60 border border-white/20 rounded-sm shadow-sm ${className}`}>
      <span className="text-[#f4cb38] font-bold">•</span>
      <span>{children}</span>
    </span>
  );
}

/**
 * Hero Character Avatar Box (Matches reference orange square)
 * Stippled / cross-hatched graphic character with intense eyes and mustache.
 * Can be clicked to toggle to Youssef's real photo or classical portrait.
 */
export type HeroAvatarMode = 'character' | 'photo1' | 'photo2' | 'classical';

/**
 * 1. HERO CHARACTER BOX (Pop-Art Avatar / Photo Switcher)
 * Renders the iconic stippled ink pop-art character on orange square,
 * or switches to Youssef's enhanced real photos / classical portrait,
 * framed in bold neo-brutalist poster styling.
 */
export function HeroCharacterBox({
  size = 280,
  className = '',
  mode,
  realPhoto = false,
  classical = false,
}: {
  size?: number | string;
  className?: string;
  mode?: HeroAvatarMode;
  realPhoto?: boolean;
  classical?: boolean;
}) {
  const currentMode: HeroAvatarMode =
    mode ?? (classical ? 'classical' : realPhoto ? 'photo1' : 'character');

  // Real Photo 01: Horizon by the Sea (Warm enhanced pop-art color grade)
  if (currentMode === 'photo1') {
    return (
      <div
        className={`relative aspect-square overflow-hidden bg-[#ff5500] border-4 border-black shadow-[8px_8px_0px_0px_#f4cb38] ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/images/youssef_portrait_1.jpg"
          alt="Youssef Ali Ahmed - Horizon"
          className="w-full h-full object-cover filter contrast-110 saturate-115 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-[#f4cb38] text-black font-mono font-bold text-[9px] uppercase px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000]">
          RECORD // 01
        </div>
        <div className="absolute bottom-2 inset-x-2 bg-black/90 border-2 border-white/20 px-2.5 py-1 text-[10px] font-mono text-[#f4cb38] font-bold text-center uppercase tracking-wider flex items-center justify-between shadow-[2px_2px_0px_0px_#000]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
            <span>Youssef Ali</span>
          </span>
          <span className="text-white/80">Horizon</span>
        </div>
      </div>
    );
  }

  // Real Photo 02: Open Blue Sky & Sunny Smile (Vivid cyan pop-art grade)
  if (currentMode === 'photo2') {
    return (
      <div
        className={`relative aspect-square overflow-hidden bg-[#00c2ff] border-4 border-black shadow-[8px_8px_0px_0px_#ff5500] ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/images/youssef_portrait_2.jpg"
          alt="Youssef Ali Ahmed - Smile"
          className="w-full h-full object-cover filter contrast-110 saturate-115 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-[#00c2ff] text-black font-mono font-bold text-[9px] uppercase px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000]">
          RECORD // 02
        </div>
        <div className="absolute bottom-2 inset-x-2 bg-black/90 border-2 border-white/20 px-2.5 py-1 text-[10px] font-mono text-[#00c2ff] font-bold text-center uppercase tracking-wider flex items-center justify-between shadow-[2px_2px_0px_0px_#000]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00c2ff] animate-pulse"></span>
            <span>Youssef Ali</span>
          </span>
          <span className="text-[#f4cb38]">Blue Sky</span>
        </div>
      </div>
    );
  }

  // Classical Soul: Museum Oil Portrait
  if (currentMode === 'classical') {
    return (
      <div
        className={`relative aspect-square overflow-hidden bg-[#f4cb38] border-4 border-black shadow-[8px_8px_0px_0px_#ff5500] ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/classical_portrait.jpg"
          alt="The Classical Soul"
          className="w-full h-full object-cover filter contrast-115 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-[#f4cb38] text-black font-mono font-bold text-[9px] uppercase px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000]">
          MUSEUM
        </div>
        <div className="absolute bottom-2 inset-x-2 bg-black/90 border-2 border-white/20 px-2.5 py-1 text-[10px] font-mono text-[#f4cb38] font-bold text-center uppercase tracking-wider flex items-center justify-between shadow-[2px_2px_0px_0px_#000]">
          <span>✦ Classical Soul</span>
          <span className="text-white/80">Oil Plate</span>
        </div>
      </div>
    );
  }

  // Default: Graphic Ink Character from Reference
  return (
    <div
      className={`relative aspect-square bg-[#ff5500] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_#f4cb38] flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute top-2 right-2 bg-black text-[#f4cb38] font-mono font-bold text-[9px] uppercase px-1.5 py-0.5 border border-white/30 shadow-[2px_2px_0px_0px_#000]">
        INK ART
      </div>
      {/* Handcrafted Graphic Ink Illustration from Reference */}
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hatch-pattern" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#000" strokeWidth="1.2" opacity="0.35" />
          </pattern>
        </defs>

        {/* Neck and Collar */}
        <path d="M 120,270 L 110,320 L 210,320 L 200,270 Z" fill="#ffffff" stroke="#000" strokeWidth="4" />
        <path d="M 140,270 L 110,320 M 180,270 L 210,320" stroke="#000" strokeWidth="3" />
        {/* Shirt Collar V */}
        <polygon points="120,270 160,305 135,320" fill="#ffffff" stroke="#000" strokeWidth="3" />
        <polygon points="200,270 160,305 185,320" fill="#ffffff" stroke="#000" strokeWidth="3" />

        {/* Head Shape */}
        <path
          d="M 100,175 C 95,110 120,70 160,70 C 200,70 225,110 220,175 C 220,230 195,270 160,270 C 125,270 100,230 100,175 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="6"
        />

        {/* Shadow Shading on Head Left */}
        <path
          d="M 100,175 C 95,110 120,70 160,70 C 140,90 120,130 115,185 C 112,230 130,260 160,270 C 125,270 100,230 100,175 Z"
          fill="url(#hatch-pattern)"
        />

        {/* Left Ear */}
        <path
          d="M 98,165 C 75,160 70,185 85,200 C 95,208 100,200 102,190"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="5"
        />
        <path d="M 85,175 C 80,180 82,190 88,192" stroke="#000" strokeWidth="3" fill="none" />

        {/* Right Ear */}
        <path
          d="M 222,165 C 245,160 250,185 235,200 C 225,208 220,200 218,190"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="5"
        />

        {/* Eyes (Intense, Big, Bulging) */}
        {/* Left Eye */}
        <circle cx="138" cy="145" r="22" fill="#ffffff" stroke="#000" strokeWidth="5" />
        <circle cx="140" cy="144" r="8" fill="#000000" />
        <circle cx="137" cy="141" r="2.5" fill="#ffffff" />
        {/* Left Eyebrow Arch */}
        <path d="M 115,120 Q 138,105 160,118" stroke="#000" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Right Eye */}
        <circle cx="188" cy="142" r="20" fill="#ffffff" stroke="#000" strokeWidth="5" />
        <circle cx="187" cy="142" r="7.5" fill="#000000" />
        <circle cx="185" cy="139" r="2.5" fill="#ffffff" />
        {/* Right Eyebrow Arch */}
        <path d="M 172,118 Q 192,105 210,122" stroke="#000" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path
          d="M 160,135 Q 164,168 152,176 Q 168,178 168,170"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Prominent Thick Graphic Mustache */}
        <path
          d="M 125,188 C 135,178 155,182 162,192 C 168,182 188,178 200,188 C 205,198 195,212 180,210 C 165,208 163,198 162,198 C 160,198 158,208 144,210 C 130,212 120,198 125,188 Z"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* Mouth under mustache */}
        <path d="M 148,218 Q 162,224 176,218" stroke="#000" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Chin line and texture */}
        <path d="M 152,242 Q 162,246 172,242" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Hair Stubble on Head */}
        <path d="M 115,85 L 120,70 M 130,78 L 135,65 M 150,75 L 150,60 M 170,75 L 172,62 M 190,80 L 195,68 M 205,88 L 212,75" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Quirky Silhouette Character on Yellow Square (Top-right of reference)
 */
export function QuirkyProfileBox({
  size = 180,
  className = '',
}: {
  size?: number | string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-square bg-[#f4cb38] border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_#000] flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full object-contain" fill="none">
        {/* Neck & Body */}
        <path d="M 70,140 Q 60,190 50,200 L 150,200 Q 140,190 120,140 Z" fill="#18181b" />
        {/* Head with Long Beak-Nose */}
        <path
          d="M 115,50 C 95,45 85,55 85,75 C 80,95 70,110 40,120 C 70,125 90,125 95,145 C 105,150 125,145 130,130 C 135,110 135,70 115,50 Z"
          fill="#18181b"
          stroke="#000"
          strokeWidth="3"
        />
        {/* Spiky Hair */}
        <path
          d="M 85,70 L 78,50 L 90,58 L 92,42 L 102,52 L 110,38 L 118,50 L 128,45 L 122,60"
          stroke="#18181b"
          strokeWidth="4"
          strokeLinecap="round"
          fill="#18181b"
        />
        {/* Big Curious Eye */}
        <ellipse cx="88" cy="85" rx="14" ry="12" fill="#ffffff" />
        <circle cx="86" cy="85" r="5" fill="#000000" />
        <circle cx="84" cy="83" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
}

/**
 * Character Gazing Upward on Coral Red (Bottom-left Tile 1: SoldierDB)
 */
export function CharacterAwe({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square bg-[#ff4d4d] border-4 border-black overflow-hidden flex items-end justify-center ${className}`}>
      <svg viewBox="0 0 300 360" className="w-full h-full object-contain" fill="none">
        {/* Yellow Collar */}
        <path d="M 60,340 Q 150,300 240,340 L 260,380 L 40,380 Z" fill="#facc15" stroke="#000" strokeWidth="5" />
        
        {/* Tense Stretched Neck Lines */}
        <path d="M 100,240 L 90,340 M 200,240 L 210,340 M 130,260 L 125,330 M 170,260 L 175,330" stroke="#000" strokeWidth="3" />
        <path d="M 85,250 C 70,300 80,340 90,360 L 210,360 C 220,340 230,300 215,250 Z" fill="#fca5a5" stroke="#000" strokeWidth="5" />
        <path d="M 130,260 L 120,340 M 170,260 L 180,340 M 150,270 L 150,340" stroke="#e11d48" strokeWidth="2.5" />

        {/* Head Gazing Upwards */}
        <path
          d="M 90,240 C 70,160 85,80 150,80 C 215,80 230,160 210,240 C 190,265 110,265 90,240 Z"
          fill="#fca5a5"
          stroke="#000"
          strokeWidth="6"
        />

        {/* Nostrils Looking Up */}
        <ellipse cx="140" cy="180" rx="6" ry="8" fill="#18181b" />
        <ellipse cx="160" cy="180" rx="6" ry="8" fill="#18181b" />
        <path d="M 150,150 L 150,175 Q 150,185 140,185 M 150,185 Q 150,185 160,185" stroke="#000" strokeWidth="4" />

        {/* Open Astonished Mouth */}
        <ellipse cx="150" cy="215" rx="16" ry="18" fill="#000000" stroke="#000" strokeWidth="4" />
        <path d="M 142,225 Q 150,220 158,225" stroke="#f43f5e" strokeWidth="4" />

        {/* Eyes Gazing Straight Up */}
        {/* Left Eye */}
        <ellipse cx="125" cy="135" rx="14" ry="16" fill="#ffffff" stroke="#000" strokeWidth="5" />
        <ellipse cx="125" cy="126" rx="6" ry="7" fill="#0284c7" />
        <circle cx="125" cy="126" r="3" fill="#000000" />
        <circle cx="123" cy="124" r="1.5" fill="#ffffff" />
        {/* Right Eye */}
        <ellipse cx="175" cy="135" rx="14" ry="16" fill="#ffffff" stroke="#000" strokeWidth="5" />
        <ellipse cx="175" cy="126" rx="6" ry="7" fill="#0284c7" />
        <circle cx="175" cy="126" r="3" fill="#000000" />
        <circle cx="173" cy="124" r="1.5" fill="#ffffff" />

        {/* Cyan/Turquoise Hair */}
        <path
          d="M 85,150 C 75,100 90,65 115,55 C 130,50 170,50 185,55 C 210,65 225,100 215,150 C 225,120 220,70 195,50 C 170,35 130,35 105,50 C 80,70 75,120 85,150 Z"
          fill="#38bdf8"
          stroke="#000"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

/**
 * Character Screaming with Sunglasses on Electric Blue (Tile 2: Joe's OS)
 */
export function CharacterScream({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square bg-[#00c2ff] border-4 border-black overflow-hidden flex items-end justify-center ${className}`}>
      <svg viewBox="0 0 300 360" className="w-full h-full object-contain" fill="none">
        {/* Pink / Magenta Collar */}
        <path d="M 60,340 Q 150,310 240,340 L 260,380 L 40,380 Z" fill="#ec4899" stroke="#000" strokeWidth="5" />

        {/* Stretched Neck */}
        <path d="M 90,260 L 80,350 L 220,350 L 210,260 Z" fill="#fed7aa" stroke="#000" strokeWidth="5" />
        <path d="M 125,280 L 120,340 M 175,280 L 180,340" stroke="#f97316" strokeWidth="3" />

        {/* Head */}
        <path
          d="M 80,180 C 75,90 115,60 150,60 C 185,60 225,90 220,180 C 215,260 190,290 150,290 C 110,290 85,260 80,180 Z"
          fill="#fed7aa"
          stroke="#000"
          strokeWidth="6"
        />

        {/* Yellow Sunglasses with Waves/Hands in Reflection */}
        {/* Sunglasses Frame */}
        <path
          d="M 85,155 C 90,135 140,135 145,150 C 150,135 200,135 205,155 C 205,175 160,185 148,168 C 136,185 85,175 85,155 Z"
          fill="#fef08a"
          stroke="#000"
          strokeWidth="5"
        />
        {/* Left Lens Dark Red Reflection */}
        <ellipse cx="115" cy="158" rx="20" ry="14" fill="#7f1d1d" stroke="#000" strokeWidth="2" />
        <path d="M 100,162 Q 115,150 130,165" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Right Lens Dark Red Reflection */}
        <ellipse cx="175" cy="158" rx="20" ry="14" fill="#7f1d1d" stroke="#000" strokeWidth="2" />
        <path d="M 160,162 Q 175,150 190,165" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Massive Screaming Open Mouth */}
        <path
          d="M 120,205 C 120,195 180,195 180,205 C 185,260 175,280 150,280 C 125,280 115,260 120,205 Z"
          fill="#000000"
          stroke="#000"
          strokeWidth="5"
        />
        {/* Teeth row top */}
        <rect x="135" y="202" width="30" height="6" rx="2" fill="#ffffff" />
        {/* Tongue inside mouth */}
        <ellipse cx="150" cy="260" rx="16" ry="12" fill="#f43f5e" stroke="#000" strokeWidth="2" />
        <line x1="150" y1="250" x2="150" y2="265" stroke="#9f1239" strokeWidth="2" />

        {/* Nose bridge above glasses */}
        <ellipse cx="150" cy="148" rx="5" ry="3" fill="#fed7aa" stroke="#000" strokeWidth="2" />
      </svg>
    </div>
  );
}

/**
 * Realistic Laptop Device Mockup from Reference
 * Used to showcase live systems: PeerTrust Forensics, PostgreSQL Tooling, SoldierDB.
 */
export function LaptopMockup({
  title = 'THE MASTER',
  badge = 'LIVE SYSTEM',
  children,
  className = '',
}: {
  title?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full max-w-xl mx-auto group ${className}`}>
      {/* Laptop Top Display Shell */}
      <div className="relative rounded-t-2xl bg-[#1c1d21] p-3 sm:p-4 border-2 border-b-0 border-[#2e3038] shadow-2xl">
        {/* Top Notch Camera */}
        <div className="w-16 h-2.5 mx-auto bg-black rounded-b-md mb-2 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Screen Display Frame */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black border border-white/10 shadow-inner">
          {/* Mockup Top Window Bar */}
          <div className="h-6 bg-[#121316] border-b border-white/10 px-3 flex items-center justify-between text-[10px] font-mono text-white/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="uppercase tracking-widest text-[#f4cb38] font-bold">{title}</span>
            <span className="text-[9px] px-1.5 py-0.2 bg-white/10 rounded">{badge}</span>
          </div>

          {/* Child Content inside Screen */}
          <div className="w-full h-[calc(100%-24px)] overflow-hidden bg-black p-2 sm:p-3">
            {children}
          </div>
        </div>
      </div>

      {/* Laptop Base Keyboard Surface */}
      <div className="relative h-4 sm:h-5 bg-gradient-to-b from-[#2a2c33] to-[#1a1b20] rounded-b-xl border-2 border-t-0 border-[#383a44] shadow-2xl">
        {/* Thumb Opening Notch */}
        <div className="w-20 h-1.5 mx-auto bg-[#121316] rounded-b-md" />
      </div>
      {/* Bottom Lip Shadow */}
      <div className="w-[96%] h-2 mx-auto bg-black/60 blur-sm rounded-full -mt-0.5" />
    </div>
  );
}

/**
 * Brutalist Animated Marquee Banner
 */
export function MarqueeTicker({
  text = 'SYSTEMS ARCHITECT // DATABASE INTERNALS // RISC-V SV32 KERNEL // PEERTRUST FORENSICS // POSTGRESQL IN C //',
  className = '',
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-[#f4cb38] text-black font-display text-lg sm:text-2xl uppercase tracking-wider py-2 select-none border-y-4 border-black ${className}`}>
      <div className="inline-block animate-[marquee_25s_linear_infinite]">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}
