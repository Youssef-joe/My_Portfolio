import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';
import { BulletTag } from '../components/ArtMotifs';

export default function ArticleIndex() {
  const { language } = useLanguage();
  const t = ui[language];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  const filteredArticles = selectedTag
    ? articles.filter((a) => a.tags.includes(selectedTag))
    : articles;

  return (
    <div className="bg-[#f4cb38] p-2 sm:p-4 md:p-6 lg:p-8 min-h-screen selection:bg-[#ff5500] selection:text-white transition-colors duration-300">
      
      {/* Outer Black Poster Frame */}
      <div className="bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
        <SiteHeader />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          
          {/* Breadcrumb with technical_notebook.html */}
          <div className="text-xs font-mono font-bold text-white/70 pb-4 border-b-2 border-white/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#f4cb38] hover:underline uppercase">
                INDEX
              </Link>
              <span>&gt;</span>
              <span className="text-white uppercase font-bold">technical_notebook.html</span>
            </div>

            <Link
              to="/editor"
              className="px-3.5 py-1.5 bg-[#ff5500] hover:bg-[#d04400] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#f4cb38] transition-all flex items-center gap-1.5"
            >
              <span>●</span>
              <span>Dispatch Desk</span>
            </Link>
          </div>

          {/* Master Archive Box */}
          <div className="border-4 border-black bg-[#121316] shadow-[8px_8px_0px_0px_#f4cb38] overflow-hidden">
            
            {/* Header Banner */}
            <div className="p-6 sm:p-10 lg:p-12 border-b-4 border-black bg-black space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-[#f4cb38] text-black font-mono font-bold text-xs uppercase">
                  TECHNICAL ARCHIVE
                </span>
                <span className="font-mono text-xs text-white/60">
                  {filteredArticles.length} / {articles.length} Treatises
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
                {t.writingTitle}
              </h1>

              <p className="font-grotesk text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                In-depth engineering treatises on database engines, kernel subsystems, and empirical research benchmarks.
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-12 space-y-8">
              {/* Tag filter toolbar */}
              <div className="p-4 bg-black border-2 border-white/20 flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-white/60 font-bold uppercase me-2">FILTER TOPIC:</span>
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 font-bold uppercase transition-all ${
                    !selectedTag
                      ? 'bg-[#f4cb38] text-black shadow-[2px_2px_0px_0px_#fff]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  ALL TOPICS ({articles.length})
                </button>
                {allTags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-3 py-1 font-bold uppercase transition-all ${
                      selectedTag === tag
                        ? 'bg-[#ff5500] text-white shadow-[2px_2px_0px_0px_#fff]'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="bg-black border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#f4cb38] hover:shadow-[8px_8px_0px_0px_#ff5500] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Visual Schematic Cover */}
                      {article.coverImage && (
                        <div className="mb-4 rounded border-2 border-white/10 overflow-hidden bg-[#0a0a0a] p-2 flex items-center justify-center">
                          <img
                            src={article.coverImage}
                            alt={article.title}
                            className="w-full h-auto max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs font-mono text-[#f4cb38] font-bold uppercase mb-2">
                        <span>{formatDate(article.date, article.lang)}</span>
                        <span>{article.readingMinutes} MIN READ</span>
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
                        <span>Read Full Treatise</span>
                        <span>→</span>
                      </Link>
                      <span className="font-mono text-[10px] text-white/40">TREATISE</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  );
}
