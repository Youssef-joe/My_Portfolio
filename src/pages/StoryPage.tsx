import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui, hero } from '../data/site';
import { BulletTag } from '../components/ArtMotifs';

export default function StoryPage() {
  const { language } = useLanguage();
  const t = ui[language];
  const h = hero[language];

  return (
    <div className="bg-[#f4cb38] p-2 sm:p-4 md:p-6 lg:p-8 min-h-screen selection:bg-[#ff5500] selection:text-white transition-colors duration-300">
      
      {/* Outer Black Poster Frame */}
      <div className="bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
        <SiteHeader />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          
          {/* Story Breadcrumbs */}
          <div className="text-xs font-mono font-bold text-white/70 pb-4 border-b-2 border-white/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#f4cb38] hover:underline uppercase">
                INDEX
              </Link>
              <span>&gt;</span>
              <span className="text-white uppercase font-bold">chronicles.html</span>
            </div>

            <span className="px-3 py-1 bg-[#ff5500] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#f4cb38]">
              Biographical Monograph
            </span>
          </div>

          {/* Master Memoir Cover Card */}
          <div className="border-4 border-black bg-[#121316] shadow-[8px_8px_0px_0px_#f4cb38] overflow-hidden">
            {/* Header Banner */}
            <div className="bg-black p-6 sm:p-12 lg:p-16 border-b-4 border-black space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#ff5500] inline-block"></span>
                <span className="text-xs font-mono font-bold text-[#f4cb38] tracking-widest uppercase">
                  THE MEMOIR &bull; THREE ERAS OF CRAFT
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                {language === 'en'
                  ? 'FROM FIRST CURIOSITY TO DATABASE ENGINE CRAFT'
                  : 'من أول شرارة فضول إلى هندسة أنوية وقواعد البيانات'}
              </h1>

              <div className="border-l-4 border-[#ff5500] pl-4 sm:pl-6 py-2">
                <p className="font-grotesk text-lg sm:text-xl text-white/90 italic leading-relaxed">
                  "{h.statement}"
                </p>
              </div>
            </div>

            {/* Three Eras Detailed Progression */}
            <div className="p-6 sm:p-10 lg:p-12 space-y-12">
              {eras.map((era, index) => {
                const e = era[language];
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={era.id}
                    className="border-4 border-black bg-black p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_0px_#ffffff] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Real Photo Artifact */}
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative border-4 border-black bg-neutral-900 shadow-[6px_6px_0px_0px_#ff5500] overflow-hidden group">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={era.image}
                              alt={e.chapter}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                            />
                          </div>
                          <div className="p-3 bg-black border-t-2 border-white/20 text-center">
                            <span className="font-mono text-[11px] font-bold text-[#f4cb38] tracking-widest uppercase">
                              AUTHENTIC ARCHIVE // {era.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Narrative Prose */}
                      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-mono font-bold text-black uppercase px-3 py-1 bg-[#f4cb38] border-2 border-black">
                            {era.title}
                          </span>
                          <span className="font-mono text-xs text-white/60 uppercase">
                            {era.subtitle}
                          </span>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                          {e.chapter}
                        </h2>

                        <p className="font-grotesk text-sm sm:text-base text-white/80 leading-relaxed">
                          {e.description}
                        </p>

                        <div className="p-3 bg-[#18191c] border-2 border-white/10 text-xs font-mono flex items-center justify-between">
                          <span className="text-white/50 font-bold uppercase">Archival Plate:</span>
                          <span className="text-[#ff5500] font-bold">{era.image.split('/').pop()}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* Bottom Nav */}
              <div className="pt-8 border-t-2 border-white/10 flex justify-between items-center text-xs font-mono font-bold">
                <Link to="/" className="text-[#f4cb38] hover:underline uppercase flex items-center gap-1">
                  <span>←</span>
                  <span>Return to Index</span>
                </Link>
                <a href="#top" className="text-white/60 hover:text-white uppercase">
                  ↑ Back to Top
                </a>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
