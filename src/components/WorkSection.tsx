import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { work, ui, contact } from '../data/site';
import { CharacterAwe, CharacterScream, BulletTag } from './ArtMotifs';

export default function WorkSection() {
  const { language } = useLanguage();
  const t = ui[language];

  const soldierDb = work.find((w) => w.id === 'soldierdb') || work[0];
  const joesOs = work.find((w) => w.id === 'joes-os') || work[1];
  const otherProjects = work.filter((w) => w.id !== 'soldierdb' && w.id !== 'joes-os');

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              FEATURED ENGINEERING SYSTEMS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              SELECTED WORKS
            </h2>
          </div>
          <span className="font-mono text-xs text-white/60">
            C &bull; Go &bull; RISC-V &bull; PostgreSQL
          </span>
        </div>

        {/* Master Two-Card Pop-Art Grid (Directly from Bottom-Left of Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* ============================================================ */}
          {/* CARD 1: SOLDIERDB ON CORAL RED (#ff4d4d)                     */}
          {/* ============================================================ */}
          <div className="relative bg-[#ff4d4d] border-4 border-black shadow-[8px_8px_0px_0px_#f4cb38] overflow-hidden flex flex-col justify-between group">
            
            {/* Top Corner "NEW PROJECT" Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span className="px-2.5 py-1 bg-black/80 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-sm border border-white/20">
                NEW PROJECT
              </span>
            </div>

            {/* Character Graphic Area (Upward Gazing Character) */}
            <div className="relative p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-sm group-hover:scale-105 transition-transform duration-500">
                <CharacterAwe />
              </div>
            </div>

            {/* Information Plate at Bottom */}
            <div className="bg-black text-white p-6 sm:p-8 border-t-4 border-black space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  01 / SOLDIERDB STORAGE ENGINE
                </span>
                <span className="font-mono text-xs text-[#f4cb38] font-bold">GO &bull; C ABI</span>
              </div>

              <p className="font-grotesk text-xs sm:text-sm text-white/80 leading-relaxed">
                {soldierDb[language].summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <BulletTag>B+TREE INDEXING</BulletTag>
                <BulletTag>DISK PAGER 4KB</BulletTag>
                <BulletTag>VECTOR SEARCH</BulletTag>
                <BulletTag>ACID CRASH-SAFE</BulletTag>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={soldierDb.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#ff5500] hover:bg-[#d04400] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff] transition-all"
                >
                  Inspect Source Code ↗
                </a>

                <a
                  href="/writing/02-soldierdb-architecture"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/20 transition-all"
                >
                  Read Engine Treatise →
                </a>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* CARD 2: JOE'S OS KERNEL ON ELECTRIC SKY BLUE (#00c2ff)        */}
          {/* ============================================================ */}
          <div id="kernel" className="relative bg-[#00c2ff] border-4 border-black shadow-[8px_8px_0px_0px_#ff5500] overflow-hidden flex flex-col justify-between group scroll-mt-24">
            
            {/* Bottom Corner "NEW PROJECT" Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span className="px-2.5 py-1 bg-black/80 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-sm border border-white/20">
                NEW PROJECT
              </span>
            </div>

            {/* Character Graphic Area (Screaming Character with Sunglasses) */}
            <div className="relative p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-sm group-hover:scale-105 transition-transform duration-500">
                <CharacterScream />
              </div>
            </div>

            {/* Information Plate at Bottom */}
            <div className="bg-black text-white p-6 sm:p-8 border-t-4 border-black space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  02 / JOE'S OS KERNEL
                </span>
                <span className="font-mono text-xs text-[#00c2ff] font-bold">C &bull; ASM</span>
              </div>

              <p className="font-grotesk text-xs sm:text-sm text-white/80 leading-relaxed">
                {joesOs[language].summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <BulletTag>RISC-V SV32 PAGING</BulletTag>
                <BulletTag>X86 PROTECTED MODE</BulletTag>
                <BulletTag>PREEMPTIVE SCHEDULER</BulletTag>
                <BulletTag>SBI FIRMWARE</BulletTag>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={joesOs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#00c2ff] hover:bg-[#009ecc] text-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff] transition-all"
                >
                  Explore Kernel Repo ↗
                </a>

                <span className="font-mono text-xs text-white/60">
                  Target: QEMU-virt &amp; Bare Metal
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Additional Selected Repositories Grid */}
        <div className="pt-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/20">
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
              ADDITIONAL ARCHITECTURAL REPOSITORIES
            </h3>
            <span className="font-mono text-xs text-[#f4cb38]">
              {otherProjects.length} Repositories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => {
              const c = p[language];
              return (
                <div
                  key={p.id}
                  className="bg-[#121316] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#f4cb38] transition-all group"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-[#f4cb38] uppercase mb-1">
                      {p.stack.slice(0, 2).join(' • ')}
                    </div>
                    <h4 className="font-display text-xl uppercase tracking-tight text-white mb-2 group-hover:text-[#ff5500] transition-colors">
                      {c.title}
                    </h4>
                    <p className="font-grotesk text-xs text-white/70 leading-relaxed mb-4">
                      {c.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold text-[#f4cb38] hover:underline uppercase flex items-center gap-1"
                    >
                      <span>Inspect Code</span>
                      <span>↗</span>
                    </a>
                    <span className="font-mono text-[10px] text-white/50">OPEN SOURCE</span>
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
