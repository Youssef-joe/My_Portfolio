import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function WritingSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 06: Technical Journal                        */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#14181a] text-white">
          
          {/* Header Banner */}
          <div className="bg-[#0e1112] p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="chapter-number text-white font-serif">06</span>
                <SparkleStar size={18} color="#34d399" />
                <span className="text-xs font-mono text-[#34d399] tracking-widest uppercase">
                  Technical Journal
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {language === 'ar' ? 'سجل المقالات والتحليلات المعمارية' : 'Technical Notebook & Field Treatises'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <EllipticalTag starColor="#34d399">Architectural Schematics Included</EllipticalTag>
              
              <Link
                to="/editor"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ea5e24] text-white text-xs font-mono border border-white/20 transition-all duration-200 flex items-center gap-1.5"
                title="Open CMS Dispatch Studio"
              >
                <span>✦</span>
                <span>Dispatch Desk</span>
              </Link>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestArticles.map((article) => (
                <div
                  key={article.slug}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#34d399]/60 shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Schematic Cover Image */}
                    {article.cover && (
                      <Link
                        to={`/writing/${article.slug}`}
                        className="block mb-5 rounded-xl overflow-hidden border border-white/15 bg-black/60 relative group"
                      >
                        <img
                          src={article.cover}
                          alt={article.title}
                          className="w-full h-44 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 text-[10px] font-mono text-[#34d399] border border-[#34d399]/40 backdrop-blur-sm">
                          ✦ SCHEMATIC
                        </div>
                      </Link>
                    )}

                    <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                      <span>{formatDate(article.date, article.lang)}</span>
                      <span>&bull;</span>
                      <span>{article.readingMinutes} {t.minRead}</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#34d399] transition-colors leading-snug">
                      <Link to={`/writing/${article.slug}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </h4>

                    {article.description && (
                      <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                        {article.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/writing/${article.slug}`}
                        className="text-xs font-semibold text-[#34d399] hover:underline flex items-center gap-1"
                      >
                        <span>Read Analysis</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/60">
              <span>Total Treatises Published: {articles.length}</span>
              <Link
                to="/writing"
                className="hover:text-white hover:underline flex items-center gap-2 text-[#34d399]"
              >
                <span>Browse Complete Technical Archive</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
