import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { about, ui, contact } from '../data/site';
import { CircularSeal, SparkleStar, EllipticalTag, BotanicalFrame } from './ArtMotifs';

export default function AboutSection() {
  const { language } = useLanguage();
  const a = about[language];
  const t = ui[language];
  const [showClassical, setShowClassical] = useState(false);

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
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Master Split Card — Snapshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-black/10">
          
          {/* Left Column: Botanical Illustrated Framed Portrait */}
          <div className="lg:col-span-5 bg-[#08291b] p-6 sm:p-10 flex flex-col justify-between items-center relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 bg-radial from-[#124d35]/40 via-transparent to-transparent pointer-events-none" />

            <div className="w-full flex justify-between items-center z-10 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#f4d38c] uppercase flex items-center gap-1.5">
                <SparkleStar size={12} color="#f4d38c" />
                <span>MONOGRAPH // 01</span>
              </span>

              {/* Toggle Portrait / Classical Art */}
              <button
                type="button"
                onClick={() => setShowClassical(!showClassical)}
                className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 transition-all duration-200 flex items-center gap-1.5"
                title="Toggle Portrait View"
              >
                <span>{showClassical ? 'View Portrait' : 'View Classical Soul'}</span>
                <span>✦</span>
              </button>
            </div>

            {/* Botanical Cutout Frame from Snapshot 2 */}
            <div className="my-auto w-full max-w-sm">
              <BotanicalFrame>
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img
                    src={showClassical ? '/classical_portrait.jpg' : '/LinkedInPic.jpeg'}
                    alt="Youssef Ali Ahmed"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-center">
                    <div className="font-serif text-white font-bold text-base tracking-wide">
                      {showClassical ? 'The Classical Soul' : 'Youssef Ali Ahmed'}
                    </div>
                    <div className="text-[11px] font-mono text-[#f4d38c] mt-0.5">
                      {showClassical ? 'Oil on Canvas // Aesthetic Core' : 'Systems Engineer & R&D Analyst'}
                    </div>
                  </div>
                </div>
              </BotanicalFrame>
            </div>

            {/* Bottom Caption */}
            <div className="w-full text-center z-10 mt-4 text-xs font-sans text-white/70">
              <span>{language === 'ar' ? 'التوافق بين الصرامة الرياضية والحس الفني' : 'Where mathematical rigor meets artistic sensitivity'}</span>
            </div>
          </div>

          {/* Right Column: Warm Terracotta Canvas — Snapshot 2 */}
          <div className="lg:col-span-7 bg-[#ea5e24] p-8 sm:p-12 lg:p-14 text-white relative flex flex-col justify-between">
            
            {/* Top Row: Rotating Circular Seal Badge in Top Right */}
            <div className="flex justify-between items-start gap-4 mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/80 uppercase">
                <SparkleStar size={12} color="#ffffff" />
                <span>Chapter 01 &bull; Personal Narrative</span>
              </div>

              {/* Rotating Circular Stamp from Snapshot 2 */}
              <div className="relative -mt-2 -mr-2 sm:mt-0 sm:mr-0">
                <CircularSeal
                  size={105}
                  text="SYSTEMS ARCHITECT & RESEARCHER • 2026 • "
                />
              </div>
            </div>

            {/* Main Greeting & Narrative */}
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-none">
                Hello,
              </h2>

              <p className="font-serif text-lg sm:text-xl text-white/95 leading-relaxed italic mb-6 border-l-2 border-white/40 pl-4 py-1">
                "{a.lead}"
              </p>

              <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                {a.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Elliptical Skill Badges (from Dribbble style) */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-xs font-mono uppercase tracking-widest text-white/80 mb-3 flex items-center gap-2">
                  <SparkleStar size={11} color="#f4d38c" />
                  <span>Core Architecture & Tooling Competencies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <EllipticalTag key={skill} starColor="#ffffff">
                      {skill}
                    </EllipticalTag>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Footer Row with Icons (Snapshot 2) */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-white/85">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white hover:underline flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{contact.email}</span>
                </a>

                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{contact.location}</span>
                </span>
              </div>

              <div className="font-mono text-white/70 text-[11px]">
                {contact.phone}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
