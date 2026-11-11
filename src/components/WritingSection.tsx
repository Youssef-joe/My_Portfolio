import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';
import { BulletTag } from './ArtMotifs';

export default function WritingSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              ENGINEERING ESSAYS &bull; ARCHITECTURAL TREATISES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              TECHNICAL JOURNAL
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/editor"
              className="px-4 py-2 bg-[#ff5500] hover:bg-[#d04400] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff] transition-all"
            >
              ● Dispatch Studio
            </Link>
            <Link
              to="/writing"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              All Articles →
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((article) => (
            <div
              key={article.slug}
              className="bg-[#121316] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f4cb38] flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#ff5500] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
            >
              <div>
                {/* Visual Schematic Cover */}
                {article.coverImage && (
                  <div className="mb-4 rounded border-2 border-white/10 overflow-hidden bg-black p-2 flex items-center justify-center">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-auto max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                  <span>{formatDate(article.date, language)}</span>
                  <span>{article.readingTimeMinutes} MIN READ</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-[#f4cb38] transition-colors leading-snug mb-3">
                  <Link to={`/writing/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="font-grotesk text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/5 border border-white/15 text-[10px] font-mono text-[#f4cb38] uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/writing/${article.slug}`}
                  className="font-mono text-xs font-bold text-[#ff5500] group-hover:text-[#f4cb38] uppercase flex items-center gap-1 transition-colors"
                >
                  <span>Read Full Article</span>
                  <span>→</span>
                </Link>
                <span className="font-mono text-[10px] text-white/40">TREATISE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
