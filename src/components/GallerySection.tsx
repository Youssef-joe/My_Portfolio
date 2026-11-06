import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/site';

export default function GallerySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="art" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 06</span>
            <span>{t.sectionArt}</span>
          </div>
          <span className="badge-retro">
            <span className="badge-retro-key">GALLERY</span>
            <span className="badge-retro-val">ART AKA SOUL</span>
          </span>
        </div>

        <div className="panel-body">
          {/* Main 2005 Exhibition Salon Frame */}
          <div className="art-salon-plate rounded-sm">
            
            {/* Salon Header Strip */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-[#3a3015] mb-6 gap-2">
              <div className="font-serif tracking-widest text-[#d4af37] text-xs uppercase">
                EXHIBITION 001 // CLASSICAL SALON PLATE
              </div>
              <div className="font-mono text-[11px] text-[#a3946c]">
                YOUSSEF ALI AHMED // PRIVATE COLLECTION
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: The Classical Portrait in Ornate Golden Bevel Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-3 bg-gradient-to-b from-[#2a220e] via-[#1a1405] to-[#2a220e] border-4 border-[#9c7c38] shadow-2xl max-w-sm w-full">
                  {/* Inner golden trim */}
                  <div className="border border-[#e6ca65] p-1 bg-black">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src="/classical_portrait.jpg"
                        alt="The Classical Portrait"
                        className="w-full h-full object-cover object-top filter contrast-110 saturate-105"
                      />
                      <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                    </div>
                  </div>

                  {/* Brass Engraved Plaque */}
                  <div className="mt-2 text-center py-1 bg-gradient-to-r from-[#8a6828] via-[#e2c16e] to-[#8a6828] text-[#1c1404] font-serif font-bold text-[11px] tracking-widest uppercase shadow-md border border-[#f3da88]">
                    YOUSSEF ALI — CLASSICAL PORTRAIT
                  </div>
                </div>
              </div>

              {/* Right: Typography, Curatorial Note & Exhibition Pass */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="font-serif text-[#d4af37] text-xs tracking-widest uppercase mb-1">
                    MOTTO & PHILOSOPHY
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-[#f3f4f6] font-bold tracking-tight uppercase leading-none mb-3">
                    {t.artTitle}
                  </h2>

                  <div className="h-0.5 w-16 bg-[#d4af37] mb-4" />

                  <p className="font-serif italic text-sm md:text-base text-[#d1d5db] leading-relaxed mb-4">
                    "{t.artDescription}"
                  </p>

                  {/* Era thumbnails preview */}
                  <div className="mt-4 pt-4 border-t border-[#3a3015]">
                    <div className="text-[11px] font-mono text-[#a3946c] uppercase tracking-wider mb-2">
                      Companion Exhibition Eras:
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border border-[#5c4a1e] p-1 bg-[#15130b] text-center">
                        <img src="/classical_portrait.jpg" alt="Renaissance" className="h-16 w-full object-cover mb-1" />
                        <span className="text-[10px] font-mono text-[#d4af37] block">I. Renaissance</span>
                      </div>
                      <div className="border border-[#5c4a1e] p-1 bg-[#15130b] text-center">
                        <img src="/era_2_victorian.jpg" alt="Victorian" className="h-16 w-full object-cover mb-1" />
                        <span className="text-[10px] font-mono text-[#d4af37] block">II. Industrial</span>
                      </div>
                      <div className="border border-[#5c4a1e] p-1 bg-[#15130b] text-center">
                        <img src="/era_3_rococo.jpg" alt="Rococo" className="h-16 w-full object-cover mb-1" />
                        <span className="text-[10px] font-mono text-[#d4af37] block">III. Frontier</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exhibition Ticket Link to Story */}
                <div className="pt-4 border-t border-[#3a3015] flex flex-wrap items-center justify-between gap-3">
                  <div className="font-mono text-xs text-[#a3946c]">
                    [ EXHIBITION PASS ID: #YA-2026-ART ]
                  </div>
                  <Link
                    to="/story"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9c7c38] to-[#c4a661] text-[#111] font-sans font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg no-underline transition-all"
                  >
                    <span>{t.checkStory}</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
