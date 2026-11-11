import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { work, ui, contact } from '../data/site';
import { SparkleStar, EllipticalTag, AquaticArtIllustration } from './ArtMotifs';

export default function WorkSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const [activeProject, setActiveProject] = useState(work[0].id);

  const soldierDb = work.find((w) => w.id === 'soldierdb') || work[0];
  const joesOs = work.find((w) => w.id === 'joes-os') || work[1];
  const otherProjects = work.filter((w) => w.id !== 'soldierdb' && w.id !== 'joes-os');

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 01: SoldierDB Storage Engine (Snapshot 3 Style) */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#092b1e] text-white relative">
          
          {/* Subtle textured noise & light rays */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 60%)`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            {/* Left Header Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/15">
              <div>
                {/* Large 01 + Sparkle */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="chapter-number text-white font-serif">01</span>
                  <div className="flex flex-col gap-1">
                    <SparkleStar size={20} color="#f4d38c" />
                    <span className="text-[10px] font-mono tracking-widest text-[#f4d38c] uppercase">Core Systems</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                  SoldierDB Storage Engine
                </h3>

                <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  {soldierDb[language].summary}
                </p>

                {/* Elliptical Tag Badges (Snapshot 3) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <EllipticalTag starColor="#f4d38c">B+Tree Indexing</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">Custom Disk Pager</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">Go &amp; C Arch</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">Binary Serializer</EllipticalTag>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3">
                <a
                  href={soldierDb.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#ea5e24] hover:bg-[#d04b14] text-white text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <span>Inspect Source Code</span>
                  <span>↗</span>
                </a>
                <a
                  href="/writing/02-soldierdb-architecture"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium tracking-wider border border-white/20 transition-all duration-200"
                >
                  Read Engine Treatise
                </a>
              </div>
            </div>

            {/* Right Schematic Visual Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-black/30 backdrop-blur-sm">
              <div className="border border-white/20 rounded-2xl overflow-hidden bg-[#061912] shadow-2xl p-4 sm:p-6 group">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15 text-xs font-mono text-[#f4d38c]">
                  <span className="flex items-center gap-2">
                    <SparkleStar size={12} color="#f4d38c" />
                    <span>FIG 1.1 // ARCHITECTURAL PIPELINE</span>
                  </span>
                  <span className="text-white/60">B+Tree Page Layout &amp; Disk Frame Buffer</span>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 flex items-center justify-center">
                  <img
                    src="/images/blog/soldierdb-engine.svg"
                    alt="SoldierDB Storage Engine Architecture"
                    className="w-full h-auto max-h-[380px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Micro specs grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-white/15 text-xs font-mono">
                  <div>
                    <div className="text-white/50 text-[10px]">PAGE SIZE</div>
                    <div className="text-white font-bold">4096 Bytes</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[10px]">CONCURRENCY</div>
                    <div className="text-white font-bold">RW Mutex / MVCC</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[10px]">INDEX TYPE</div>
                    <div className="text-white font-bold">B+Tree Balanced</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[10px]">PERSISTENCE</div>
                    <div className="text-white font-bold">WAL Journal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 02: Joe's OS Kernel (Snapshot 4 Style)        */}
        {/* ============================================================ */}
        <div id="kernel" className="rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#e4a194] text-[#161a1d] relative scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Dusty Rose Canvas with Aquatic Art Illustration (Snapshot 4) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden bg-[#e4a194]">
              {/* Aquatic Art Vector Illustration */}
              <div className="relative rounded-2xl overflow-hidden bg-[#e4a194] border border-black/10 shadow-inner p-2 my-auto">
                <AquaticArtIllustration className="max-h-[380px] object-contain mx-auto" />
              </div>

              {/* Story Narrative */}
              <div className="mt-6 pt-4 border-t border-black/15">
                <p className="font-sans text-sm text-[#161a1d]/90 leading-relaxed font-medium mb-4">
                  {joesOs[language].summary}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={joesOs.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#161a1d] hover:bg-black text-white text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg"
                  >
                    <span>Explore Kernel Source</span>
                    <span>↗</span>
                  </a>
                  <span className="font-mono text-xs text-[#161a1d]/70">
                    Dual-Arch Target: x86 &amp; RISC-V SV32
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Matte Obsidian Charcoal Panel (Snapshot 4) */}
            <div className="lg:col-span-5 bg-[#171a1c] p-8 sm:p-12 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                {/* Large 02 + Sparkle Motif */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="chapter-number font-serif text-white">02</span>
                  <div className="flex flex-col gap-1">
                    <SparkleStar size={20} color="#f4d38c" />
                    <span className="text-[10px] font-mono tracking-widest text-[#f4d38c] uppercase">
                      Bare-Metal Systems
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                  Joe's Operating System
                </h3>

                {/* Elliptical Tags (Snapshot 4) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <EllipticalTag starColor="#f4d38c">RISC-V SV32 Paging</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">x86 Bare-Metal C</EllipticalTag>
                  <EllipticalTag starColor="#f4d38c">SBI Firmware</EllipticalTag>
                </div>

                {/* Subsystems Architecture Cards */}
                <div className="space-y-3 font-mono text-xs mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#f4d38c] font-bold mb-0.5">▸ Virtual Memory (SV32)</div>
                    <div className="text-white/80 leading-relaxed text-[11px]">
                      Two-level page table walk, 4MB superpages, physical frame allocator.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#f4d38c] font-bold mb-0.5">▸ Context Switcher</div>
                    <div className="text-white/80 leading-relaxed text-[11px]">
                      Preemptive round-robin scheduler backed by timer interrupts &amp; trap vectors.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#f4d38c] font-bold mb-0.5">▸ SBI Machine Interface</div>
                    <div className="text-white/80 leading-relaxed text-[11px]">
                      OpenSBI firmware calls for hardware timer ticks and console UART I/O.
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Contact Pill Coordinates (Snapshot 4) */}
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

        {/* ============================================================ */}
        {/* Additional Selected Systems Work Grid                        */}
        {/* ============================================================ */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <SparkleStar size={16} color="#ea5e24" />
              <h4 className="font-display text-2xl font-bold tracking-tight text-[var(--text-main)]">
                {language === 'ar' ? 'أعمال ومنظومات أخرى مختارة' : 'Additional Architectural Works'}
              </h4>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {otherProjects.length} Selected Repositories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => {
              const c = p[language];
              return (
                <div
                  key={p.id}
                  className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[#ea5e24] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[#ea5e24] font-semibold">{p.year}</span>
                      <SparkleStar size={12} color="#ea5e24" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h5 className="font-serif text-lg font-bold text-[var(--text-main)] mb-1 group-hover:text-[#ea5e24] transition-colors">
                      {c.title}
                    </h5>

                    <div className="text-xs font-medium text-[var(--text-muted)] mb-3">
                      {c.role}
                    </div>

                    <p className="text-xs text-[var(--text-sub)] leading-relaxed mb-4">
                      {c.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-[var(--border-light)]">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[var(--bg-subtle)] text-[var(--text-sub)] border border-[var(--border-light)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#ea5e24] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Repository</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
