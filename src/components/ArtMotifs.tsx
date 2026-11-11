import React from 'react';

/**
 * 4-pointed sparkle star SVG motif from the Dribbble design
 */
export function SparkleStar({
  size = 18,
  className = '',
  color = 'currentColor',
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
    </svg>
  );
}

/**
 * Horizontal decorative rule flanked by sparkle stars
 */
export function SparkleDivider({
  className = '',
  starSize = 16,
  lineWidth = 'w-16 md:w-32',
  color = 'rgba(255,255,255,0.4)',
}: {
  className?: string;
  starSize?: number;
  lineWidth?: string;
  color?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SparkleStar size={starSize} color={color} />
      <div className={`h-[1px] ${lineWidth} bg-current opacity-40`} />
    </div>
  );
}

/**
 * Circular rotating stamp seal as seen in the top right corner of Snapshot 2
 */
export function CircularSeal({
  text = 'SYSTEMS ARCHITECT & R&D • 2026 EDITION • ',
  size = 110,
  className = '',
}: {
  text?: string;
  size?: number;
  className?: string;
}) {
  const id = React.useId().replace(/:/g, '');
  const r = 38;
  const cx = 50;
  const cy = 50;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full circular-seal text-white/90 drop-shadow-sm"
      >
        <defs>
          <path
            id={`circlePath-${id}`}
            d={`M ${cx}, ${cy} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <circle cx={cx} cy={cy} r={r + 6} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <circle cx={cx} cy={cy} r={r - 10} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <text
          fill="currentColor"
          fontSize="8.2"
          fontWeight="600"
          letterSpacing="0.18em"
          fontFamily="var(--font-sans)"
        >
          <textPath href={`#circlePath-${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      {/* Center glowing star */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SparkleStar size={size * 0.22} color="#f4d38c" className="drop-shadow" />
      </div>
    </div>
  );
}

/**
 * Elliptical hand-drawn style outline badge
 */
export function EllipticalTag({
  children,
  className = '',
  starColor = '#f4d38c',
}: {
  children: React.ReactNode;
  className?: string;
  starColor?: string;
}) {
  return (
    <span
      className={`elliptical-tag bg-white/10 hover:bg-white/20 border-white/40 text-white backdrop-blur-sm shadow-sm ${className}`}
    >
      <SparkleStar size={11} color={starColor} />
      <span>{children}</span>
    </span>
  );
}

/**
 * Illustrated Botanical Elements from Snapshot 2:
 * Daisies, purple bell flowers, oak-lobed leaves, and white star blossoms.
 */
export function DaisyFlower({ size = 70, className = '' }: { size?: number; className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" className={`overflow-visible ${className}`}>
      {/* Petals */}
      <g fill="#facc15" stroke="#ca8a04" strokeWidth="1.5">
        {petals.map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-28"
            rx="7"
            ry="18"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      {/* Center Disc with texture */}
      <circle cx="0" cy="0" r="16" fill="#c2410c" stroke="#7c2d12" strokeWidth="2" />
      <circle cx="0" cy="0" r="12" fill="#d97706" />
      {/* Stipple Dots */}
      <circle cx="-5" cy="-5" r="1.5" fill="#78350f" />
      <circle cx="4" cy="-4" r="1.5" fill="#78350f" />
      <circle cx="-3" cy="5" r="1.5" fill="#78350f" />
      <circle cx="5" cy="4" r="1.5" fill="#78350f" />
      <circle cx="0" cy="0" r="2" fill="#fef08a" />
    </svg>
  );
}

export function PurpleBellFlower({ size = 56, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 70" fill="none" className={`overflow-visible ${className}`}>
      {/* Stem / top beads */}
      <circle cx="30" cy="8" r="3" fill="#ffffff" />
      <circle cx="24" cy="12" r="2" fill="#ffffff" />
      <circle cx="36" cy="12" r="2" fill="#ffffff" />
      {/* Fig / Bell Body */}
      <path
        d="M 30,12 C 16,16 6,32 10,50 C 12,58 18,65 24,62 C 28,60 30,64 36,62 C 42,60 48,58 50,50 C 54,32 44,16 30,12 Z"
        fill="#7e22ce"
        stroke="#581c87"
        strokeWidth="2"
      />
      {/* Highlight petal fold */}
      <path
        d="M 30,22 C 24,30 22,46 26,56 C 30,54 32,56 34,56 C 38,46 36,30 30,22 Z"
        fill="#9333ea"
        opacity="0.8"
      />
      {/* Scallop drops */}
      <circle cx="18" cy="58" r="2.5" fill="#ffffff" />
      <circle cx="30" cy="62" r="2.5" fill="#ffffff" />
      <circle cx="42" cy="58" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function WhiteBlossom({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="-15 -15 30 30" className={`overflow-visible ${className}`}>
      <g fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8">
        {[0, 72, 144, 216, 288].map((angle) => (
          <circle
            key={angle}
            cx="0"
            cy="-7"
            r="4.5"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
      <circle cx="0" cy="0" r="3" fill="#facc15" />
    </svg>
  );
}

export function OakLeaf({
  size = 64,
  className = '',
  color = '#15803d',
  flip = false,
}: {
  size?: number;
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 100"
      className={`overflow-visible ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      {/* Lobed Leaf */}
      <path
        d="M 40,95 Q 40,60 38,30 C 35,28 20,32 18,22 C 16,12 28,14 30,8 C 32,2 48,2 50,8 C 52,14 64,12 62,22 C 60,32 45,28 42,30 Q 40,60 40,95 Z"
        fill={color}
        stroke="#14532d"
        strokeWidth="1.5"
      />
      {/* Veins */}
      <path d="M 40,85 L 40,15" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 40,60 Q 28,52 24,48" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M 40,60 Q 52,52 56,48" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M 40,40 Q 30,34 26,30" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M 40,40 Q 50,34 54,30" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/**
 * Botanical & organic vine frame surrounding the portrait (Snapshot 2)
 */
export function BotanicalFrame({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative p-8 sm:p-10 overflow-hidden rounded-3xl bg-[#092b1e] border-2 border-[#164e37] shadow-2xl ${className}`}>
      {/* Botanical Backdrop Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #166534 0%, #052e16 100%)`,
        }}
      />

      {/* Frame inner matting */}
      <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl bg-black/40">
        {children}
      </div>

      {/* Overlapping Botanical Flora (Snapshot 2 exact motif layout) */}
      
      {/* Top-Left Daisy */}
      <div className="absolute -top-3 -left-3 z-20 pointer-events-none drop-shadow-lg">
        <DaisyFlower size={76} />
      </div>

      {/* Top-Right Purple Bell */}
      <div className="absolute top-2 -right-1 z-20 pointer-events-none drop-shadow-md rotate-12">
        <PurpleBellFlower size={54} />
      </div>

      {/* Top Center Oak Leaves & Vine */}
      <div className="absolute top-0 left-1/3 z-20 pointer-events-none -translate-x-1/2 drop-shadow-md rotate-45">
        <OakLeaf size={56} color="#166534" />
      </div>

      {/* Left Mid Purple Bell */}
      <div className="absolute top-1/3 -left-3 z-20 pointer-events-none drop-shadow-md -rotate-12">
        <PurpleBellFlower size={50} />
      </div>

      {/* Right Mid Daisy */}
      <div className="absolute top-1/2 -right-4 z-20 pointer-events-none drop-shadow-lg -translate-y-1/2">
        <DaisyFlower size={68} />
      </div>

      {/* Bottom-Left Daisy Cluster */}
      <div className="absolute -bottom-4 -left-4 z-20 pointer-events-none drop-shadow-xl">
        <DaisyFlower size={84} />
      </div>

      {/* Bottom Center Purple Bell */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-md">
        <PurpleBellFlower size={52} />
      </div>

      {/* Bottom-Right Oak Leaf & Daisy */}
      <div className="absolute -bottom-3 -right-3 z-20 pointer-events-none drop-shadow-lg">
        <OakLeaf size={62} color="#15803d" flip />
      </div>

      {/* Scattered White Star Blossoms */}
      <div className="absolute top-8 left-16 z-20 pointer-events-none drop-shadow">
        <WhiteBlossom size={18} />
      </div>
      <div className="absolute top-12 right-14 z-20 pointer-events-none drop-shadow">
        <WhiteBlossom size={20} />
      </div>
      <div className="absolute bottom-12 left-20 z-20 pointer-events-none drop-shadow">
        <WhiteBlossom size={16} />
      </div>
      <div className="absolute bottom-16 right-16 z-20 pointer-events-none drop-shadow">
        <WhiteBlossom size={18} />
      </div>
      <div className="absolute top-1/2 left-2 z-20 pointer-events-none drop-shadow">
        <WhiteBlossom size={14} />
      </div>

      {/* Sparkling Stars */}
      <div className="absolute top-4 right-8 z-20 pointer-events-none">
        <SparkleStar size={16} color="#fef08a" className="animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-6 z-20 pointer-events-none">
        <SparkleStar size={14} color="#fef08a" />
      </div>
    </div>
  );
}

/**
 * Illustrated Aquatic Scene from Snapshot 4 (Salmon Pink Canvas)
 * Features stylized whale, octopus, turtle with starfish, stingray, and coral.
 */
export function AquaticArtIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
    >
      <defs>
        {/* Pattern for sand & stipple */}
        <pattern id="stipple" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="4" r="0.75" fill="#ca5a45" opacity="0.4" />
          <circle cx="12" cy="8" r="0.75" fill="#ca5a45" opacity="0.4" />
          <circle cx="17" cy="15" r="0.75" fill="#ca5a45" opacity="0.4" />
          <circle cx="7" cy="18" r="0.75" fill="#ca5a45" opacity="0.4" />
        </pattern>
      </defs>

      {/* Background texture overlay */}
      <rect width="600" height="520" fill="url(#stipple)" />

      {/* Coral mounds at bottom */}
      <path
        d="M -20,540 L -20,440 Q 60,380 180,410 Q 240,430 320,470 Q 360,490 400,470 Q 480,430 620,480 L 620,540 Z"
        fill="#dc4a32"
      />
      {/* Coral cross-hatch strokes */}
      <path
        d="M 20,440 L 160,430 M 40,460 L 140,450 M 60,420 L 100,480 M 110,415 L 140,475"
        stroke="#991b1b"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Undulating Seaweed Fronds */}
      {/* Frond 1 (left) */}
      <path
        d="M 50,480 Q 20,420 40,360 Q 60,300 35,240 Q 15,180 35,130"
        stroke="#065f46"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 2 */}
      <path
        d="M 85,500 Q 115,440 95,380 Q 75,320 100,260 Q 120,200 95,150"
        stroke="#047857"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 3 (center-right) */}
      <path
        d="M 330,520 Q 300,440 330,360 Q 355,300 325,230"
        stroke="#065f46"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      {/* Frond 4 */}
      <path
        d="M 365,520 Q 395,450 375,380 Q 355,310 380,240"
        stroke="#047857"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* 1. Big Green Whale (Top) */}
      <g className="hover:translate-x-1 transition-transform duration-500">
        {/* Whale body */}
        <path
          d="M 120,70 Q 260,60 420,70 Q 440,75 435,95 Q 400,140 260,145 Q 160,145 130,110 Z"
          fill="#064e3b"
        />
        {/* Whale ribbed belly */}
        <path
          d="M 140,85 Q 240,85 380,95 Q 395,125 280,140 Q 180,140 145,105 Z"
          fill="#fbf5ee"
        />
        {/* Belly grooves */}
        <path
          d="M 170,95 Q 260,98 350,110 M 180,108 Q 260,112 330,122 M 200,122 Q 260,125 300,132"
          stroke="#064e3b"
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Eye */}
        <circle cx="270" cy="82" r="4.5" fill="#0f172a" />
      </g>

      {/* 2. Orange Eel / Sea Snake */}
      <g>
        <path
          d="M 80,140 Q 110,130 130,145 Q 160,170 200,165 Q 235,160 260,175"
          stroke="#ea580c"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 80,140 Q 110,130 130,145 Q 160,170 200,165 Q 235,160 260,175"
          stroke="#064e3b"
          strokeWidth="6"
          strokeDasharray="14 12"
          strokeLinecap="round"
          fill="none"
        />
        {/* Head */}
        <ellipse cx="80" cy="140" rx="9" ry="8" fill="#ea580c" />
        <circle cx="76" cy="138" r="2" fill="#ffffff" />
        <circle cx="75" cy="138" r="1" fill="#000000" />
      </g>

      {/* 3. Striped Reef Fish */}
      <g transform="translate(90, 210)">
        <path d="M 0,25 Q 35,0 65,25 Q 35,50 0,25 Z" fill="#ffffff" />
        <path d="M 15,10 Q 30,10 32,40 Q 18,40 15,10 Z" fill="#dc2626" />
        <path d="M 38,12 Q 50,15 48,38 Q 38,36 38,12 Z" fill="#064e3b" />
        <polygon points="65,25 80,10 75,25 80,40" fill="#064e3b" />
        <circle cx="10" cy="22" r="2.5" fill="#0f172a" />
      </g>

      {/* 4. Sea Turtle with Starfish */}
      <g transform="translate(160, 260)">
        {/* Head */}
        <ellipse cx="25" cy="25" rx="16" ry="12" fill="#fbf5ee" />
        <circle cx="18" cy="22" r="2.5" fill="#064e3b" />
        {/* Flippers */}
        <path d="M 30,10 Q 60,-15 80,-5 Q 60,15 45,18 Z" fill="#064e3b" />
        <path d="M 40,40 Q 70,65 90,55 Q 70,35 55,32 Z" fill="#064e3b" />
        {/* Shell */}
        <ellipse cx="65" cy="28" rx="42" ry="28" fill="#064e3b" stroke="#042f2e" strokeWidth="2" />
        {/* Shell plates */}
        <ellipse cx="65" cy="28" rx="32" ry="20" fill="#0f766e" opacity="0.6" />
        {/* Red Starfish on Turtle Shell */}
        <g transform="translate(68, 20)">
          <path
            d="M 0,-8 L 2,-2 L 8,-2 L 3,2 L 5,8 L 0,4 L -5,8 L -3,2 L -8,-2 L -2,-2 Z"
            fill="#e11d48"
          />
        </g>
        <g transform="translate(82, 34)">
          <path
            d="M 0,-7 L 2,-2 L 7,-2 L 3,1 L 4,7 L 0,3 L -4,7 L -3,1 L -7,-2 L -2,-2 Z"
            fill="#e11d48"
          />
        </g>
      </g>

      {/* 5. Spotted Stingray */}
      <g transform="translate(320, 180)">
        {/* Body Diamond */}
        <path
          d="M 35,0 Q 65,40 60,80 Q 35,65 30,110 Q 25,65 0,80 Q -5,40 35,0 Z"
          fill="#064e3b"
        />
        {/* Spots */}
        <circle cx="28" cy="40" r="1.5" fill="#fbf5ee" />
        <circle cx="36" cy="35" r="1.5" fill="#fbf5ee" />
        <circle cx="32" cy="55" r="1.5" fill="#fbf5ee" />
        <circle cx="22" cy="50" r="1.5" fill="#fbf5ee" />
        <circle cx="44" cy="48" r="1.5" fill="#fbf5ee" />
        <circle cx="30" cy="70" r="1.2" fill="#fbf5ee" />
        {/* Tail */}
        <path d="M 30,110 Q 40,150 55,180" stroke="#064e3b" strokeWidth="2.5" fill="none" />
      </g>

      {/* 6. Orange Octopus (Bottom Left) */}
      <g transform="translate(70, 310)">
        {/* Tentacles */}
        <path
          d="M 40,80 Q -30,95 -60,95 Q -65,85 -50,85 Q 0,85 30,70"
          fill="#ea580c"
        />
        <path
          d="M 45,85 Q 10,120 -20,125 Q -25,115 -10,110 Q 20,100 40,75"
          fill="#ea580c"
        />
        <path
          d="M 70,85 Q 90,125 140,120 Q 145,110 120,105 Q 85,95 70,75"
          fill="#ea580c"
        />
        {/* Suction cups */}
        <circle cx="-40" cy="90" r="2.5" fill="#fbf5ee" />
        <circle cx="-25" cy="90" r="2.5" fill="#fbf5ee" />
        <circle cx="-10" cy="90" r="2.5" fill="#fbf5ee" />
        <circle cx="5" cy="90" r="2.5" fill="#fbf5ee" />
        <circle cx="105" cy="115" r="2.5" fill="#fbf5ee" />
        <circle cx="120" cy="115" r="2.5" fill="#fbf5ee" />

        {/* Head */}
        <ellipse cx="55" cy="55" rx="38" ry="42" fill="#ea580c" />
        {/* Shadow blush */}
        <ellipse cx="70" cy="45" rx="10" ry="12" fill="#c2410c" opacity="0.4" />
        {/* Cute Eyes */}
        <circle cx="44" cy="62" r="3" fill="#0f172a" />
        <circle cx="58" cy="62" r="3" fill="#0f172a" />
      </g>
    </svg>
  );
}

/**
 * 3D Book Mockup from Snapshot 6 (Hardcover laying angled with white pages)
 */
export function BookMockup3D({ className = '' }: { className?: string }) {
  return (
    <div className={`relative perspective-1000 ${className}`}>
      {/* Isometric/Angled Book */}
      <div className="relative w-56 sm:w-64 aspect-[3/4] mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
        {/* Book Spine & Back Depth */}
        <div className="absolute inset-y-1 -left-3 w-4 bg-[#0a2318] rounded-l-md shadow-2xl transform -skew-y-6" />
        
        {/* White Page Edges (bottom & right) */}
        <div className="absolute inset-y-1 right-[-6px] w-3 bg-[#f5f5f4] border-r border-t border-b border-stone-300 shadow-inner rounded-r-sm transform skew-y-3">
          <div className="w-full h-full bg-[repeating-linear-gradient(to_bottom,#f5f5f4_0px,#f5f5f4_2px,#e7e5e4_2px,#e7e5e4_3px)]" />
        </div>
        <div className="absolute -bottom-2 inset-x-2 h-3 bg-[#e7e5e4] border-b border-stone-300 shadow-sm transform skew-x-12">
          <div className="w-full h-full bg-[repeating-linear-gradient(to_right,#f5f5f4_0px,#f5f5f4_2px,#d6d3d1_2px,#d6d3d1_3px)]" />
        </div>

        {/* Front Cover (Deep Green with Scattered Stars and Title) */}
        <div className="relative w-full h-full rounded-md bg-[#0d3b26] border-2 border-[#165a3b] p-6 text-white flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Subtle cover sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Scattered Stars on Cover */}
          <div className="absolute top-4 left-6 text-white/40">
            <SparkleStar size={10} color="#ffffff" />
          </div>
          <div className="absolute top-8 right-6 text-white/40">
            <SparkleStar size={12} color="#f4d38c" />
          </div>
          <div className="absolute bottom-12 left-8 text-white/30">
            <SparkleStar size={8} color="#ffffff" />
          </div>
          <div className="absolute bottom-6 right-10 text-white/40">
            <SparkleStar size={10} color="#f4d38c" />
          </div>

          {/* Cover Top Monogram */}
          <div className="text-center pt-2">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#f4d38c] uppercase">
              YA &bull; EDITION 2026
            </span>
          </div>

          {/* Book Title */}
          <div className="text-center my-auto px-2">
            <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
              Aesthetic &bull; Core
            </div>
            <div className="h-[1px] w-12 bg-[#f4d38c] mx-auto my-2 opacity-60" />
            <div className="font-sans text-[10px] text-white/80 font-medium">
              The Classical Soul
            </div>
          </div>

          {/* Cover Bottom Author */}
          <div className="text-center pb-2">
            <span className="font-serif italic text-[11px] text-white/90">
              Youssef Ali Ahmed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
