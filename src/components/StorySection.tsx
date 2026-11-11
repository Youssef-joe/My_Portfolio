import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function StorySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="story" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 05: The Chronicle of Three Eras              */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#241a15] text-white">
          
          {/* Header Banner */}
          <div className="bg-[#1b130e] p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="chapter-number text-white font-serif">05</span>
                <SparkleStar size={18} color="#ea5e24" />
                <span className="text-xs font-mono text-[#ea5e24] tracking-widest uppercase">
                  Biographical Memoir
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {language === 'en' ? 'The Chronicle of Three Eras' : 'سجل العصور الثلاثة'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <EllipticalTag starColor="#ea5e24">Authentic Photographic Record</EllipticalTag>
              <Link
                to="/story"
                className="px-5 py-2 rounded-full bg-[#ea5e24] hover:bg-[#d04b14] text-white text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <span>Read Full Memoir Book</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Three Eras Grid */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-10">
            {eras.map((era, index) => {
              const e = era[language];
              const isEven = index % 2 === 1;

              return (
                <div
                  key={era.id}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg p-6 sm:p-8 hover:border-[#ea5e24]/60 transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    
                    {/* Real Photographic Artifact */}
                    <div className={`md:col-span-5 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl group bg-black">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={era.image}
                            alt={e.chapter}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                          />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-center">
                          <span className="font-mono text-xs text-[#f4d38c] tracking-widest uppercase">
                            PHOTO RECORD // {era.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Description */}
                    <div className={`md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-[#ea5e24] tracking-wider uppercase">
                          {era.title}
                        </span>
                        <span className="text-white/40">&bull;</span>
                        <span className="text-xs font-mono text-white/60">
                          {era.subtitle}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                        {e.chapter}
                      </h4>

                      <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed mb-6 font-normal">
                        {e.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-[#f4d38c]">
                        <span className="text-white/60">Archival Photo: </span>
                        <span>{era.image.split('/').pop()}</span>
                      </div>
                    </div>

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
