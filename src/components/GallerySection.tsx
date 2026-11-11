import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ui, contact } from '../data/site';
import { SparkleStar, EllipticalTag, BookMockup3D } from './ArtMotifs';

export default function GallerySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="art" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 04: Classical Art & Soul (Snapshot 6 Style)  */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#16291a] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Deep Green Canvas with Classical Portrait & Stars */}
            <div
              className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between items-center relative overflow-hidden bg-[#183321]"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)`,
              }}
            >
              {/* Scattered background stars like in Snapshot 6 */}
              <div className="absolute top-8 left-10 text-white/30">
                <SparkleStar size={14} color="#f4d38c" />
              </div>
              <div className="absolute top-16 right-12 text-white/20">
                <SparkleStar size={18} color="#ffffff" />
              </div>
              <div className="absolute bottom-12 left-16 text-white/20">
                <SparkleStar size={12} color="#f4d38c" />
              </div>
              <div className="absolute bottom-20 right-14 text-white/30">
                <SparkleStar size={16} color="#ffffff" />
              </div>

              <div className="w-full flex justify-between items-center z-10 mb-6">
                <span className="text-xs font-mono text-[#f4d38c] tracking-widest uppercase flex items-center gap-2">
                  <SparkleStar size={12} color="#f4d38c" />
                  <span>EXHIBITION 001 // PRIVATE COLLECTION</span>
                </span>
                <span className="text-xs font-mono text-white/60">OIL &bull; PHILOSOPHY</span>
              </div>

              {/* Museum Gold Frame Portrait */}
              <div className="my-auto relative max-w-sm w-full group">
                {/* Golden ambient aura behind portrait */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#d4af37] rounded-2xl opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-700" />
                
                <div className="relative p-3 bg-[#111] rounded-2xl border-2 border-[#d4af37] shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/20">
                    <img
                      src="/classical_portrait.jpg"
                      alt="The Classical Portrait of Youssef Ali Ahmed"
                      className="w-full h-full object-cover object-top filter contrast-110 saturate-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Brass Museum Plaque */}
                  <div className="mt-3 text-center py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#8a6828] via-[#e2c16e] to-[#8a6828] text-[#1c1404] font-serif font-bold text-xs tracking-widest uppercase shadow border border-[#f3da88]">
                    Youssef Ali Ahmed &bull; Classical Soul
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="w-full text-center z-10 mt-6 text-xs font-mono text-white/70">
                <span>The Classical Portrait // Archive Item 001</span>
              </div>
            </div>

            {/* Right Column: Matte Obsidian Charcoal Monograph Panel (Snapshot 6) */}
            <div className="lg:col-span-5 bg-[#171a1c] p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                {/* Large 04 Number + Sparkle */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="chapter-number text-white font-serif">04</span>
                  <div className="flex flex-col gap-1">
                    <SparkleStar size={20} color="#f4d38c" />
                    <span className="text-[10px] font-mono tracking-widest text-[#f4d38c] uppercase">Aesthetic Core</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Art aka Soul
                </h3>

                <p className="font-serif text-base sm:text-lg text-white/90 italic leading-relaxed mb-6 border-l-2 border-[#f4d38c]/50 pl-4">
                  "Software engineering without aesthetic feeling is merely bookkeeping. Real systems craft requires harmony, balance, and mechanical poetry."
                </p>

                <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                  Beyond kernel debuggers and B+Tree algorithms lives an enduring reverence for classical beauty, oil painting, and philosophical balance. The classical portrait embodies this inner commitment: to build software not as ephemeral code, but with the permanence and depth of timeless art.
                </p>

                {/* Elliptical Tags (Snapshot 6) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <EllipticalTag starColor="#f4d38c">Classical Portrait</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">Aesthetic Philosophy</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">Permanent Craft</EllipticalTag>
                </div>

                {/* 3D Book Mockup from Snapshot 6 */}
                <div className="py-4">
                  <BookMockup3D />
                </div>
              </div>

              {/* Bottom Contact Pill Coordinates (Snapshot 6) */}
              <div className="pt-6 border-t border-white/15 space-y-2 text-xs font-sans text-white/70">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                  <span>{contact.website}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
