import { useLanguage } from '../contexts/LanguageContext';
import { ui, contact } from '../data/site';
import { BulletTag } from './ArtMotifs';

export default function GallerySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="art" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              AESTHETIC CORE &bull; PHILOSOPHICAL REVERENCE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              ART AKA SOUL
            </h2>
          </div>
          <span className="font-mono text-xs text-white/60">
            Oil &bull; Proportion &bull; Mechanical Poetry
          </span>
        </div>

        {/* Master Exhibition Card */}
        <div className="border-4 border-black bg-[#121316] p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#f4cb38]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Museum Framed Classical Portrait */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative max-w-md w-full border-4 border-black shadow-[8px_8px_0px_0px_#ff5500] bg-black p-3 sm:p-4 group">
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-white/20">
                  <img
                    src="/classical_portrait.jpg"
                    alt="The Classical Portrait of Youssef Ali Ahmed"
                    className="w-full h-full object-cover object-top filter contrast-110 saturate-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                </div>

                {/* Brass Plaque */}
                <div className="mt-3 text-center py-2 px-4 bg-[#f4cb38] text-black font-display text-sm tracking-wider uppercase border-2 border-black">
                  Youssef Ali Ahmed &bull; The Classical Soul
                </div>
              </div>

              <div className="mt-3 text-center font-mono text-[11px] text-white/60">
                Archival Oil Painting // Private Collection
              </div>
            </div>

            {/* Right Column: Statement & Philosophical Manifest */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#ff5500] text-white font-mono text-xs font-bold uppercase tracking-wider">
                EXHIBIT 001 // THE AESTHETIC PLEDGE
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                "SOFTWARE ENGINEERING WITHOUT AESTHETIC FEELING IS MERELY BOOKKEEPING."
              </h3>

              <p className="font-grotesk text-sm sm:text-base text-white/80 leading-relaxed">
                Beyond kernel debuggers, B+Tree algorithms, and low-level C resides an enduring commitment to classical beauty, proportion, and balance. The classical portrait embodies this core conviction: to craft software systems not as disposable code, but with the permanence, discipline, and architectural beauty of fine art.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <BulletTag>CLASSICAL OIL PORTRAIT</BulletTag>
                <BulletTag>MECHANICAL POETRY</BulletTag>
                <BulletTag>PERMANENT INTEGRITY</BulletTag>
                <BulletTag>AESTHETIC RIGOR</BulletTag>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>Medium: Oil &amp; Canvas</span>
                <span className="text-[#f4cb38]">Permanent Soul</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
