import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { eras, ui } from '../data/site';
import { BulletTag } from './ArtMotifs';

export default function StorySection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="story" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              BIOGRAPHICAL MEMOIR &bull; AUTHENTIC RECORD
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              {language === 'en' ? 'CHRONICLE OF THREE ERAS' : 'سجل العصور الثلاثة'}
            </h2>
          </div>

          <Link
            to="/story"
            className="px-5 py-2.5 bg-[#f4cb38] hover:bg-[#e0b828] text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff] transition-all"
          >
            Read Full Memoir Book →
          </Link>
        </div>

        {/* Three Eras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eras.map((era, idx) => {
            const e = era[language];
            const borderColors = ['border-[#ff4d4d]', 'border-[#00c2ff]', 'border-[#f4cb38]'];
            const accentBg = ['bg-[#ff4d4d]', 'bg-[#00c2ff]', 'bg-[#f4cb38]'];
            const accentText = ['text-white', 'text-black', 'text-black'];

            return (
              <div
                key={era.id}
                className="bg-[#121316] border-4 border-black shadow-[6px_6px_0px_0px_#f4cb38] flex flex-col justify-between overflow-hidden group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#ff5500] transition-all"
              >
                {/* Real Photographic Artifact */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black border-b-4 border-black">
                  <img
                    src={era.image}
                    alt={e.chapter}
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-0.5 font-mono text-[10px] font-bold uppercase rounded-sm ${accentBg[idx]} ${accentText[idx]}`}>
                      ERA {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#f4cb38] uppercase">
                      {era.title} &bull; {era.subtitle}
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white mt-1">
                      {e.chapter}
                    </h4>

                    <p className="font-grotesk text-xs sm:text-sm text-white/70 leading-relaxed mt-2">
                      {e.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-white/50">
                    Photo Record: {era.image.split('/').pop()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
