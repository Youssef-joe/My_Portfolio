import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';
import { SparkleStar, EllipticalTag } from '../components/ArtMotifs';

export default function ArticleIndex() {
  const { language } = useLanguage();
  const t = ui[language];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  const filteredArticles = selectedTag
    ? articles.filter((a) => a.tags.includes(selectedTag))
    : articles;

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Breadcrumb with technical_notebook.html */}
        <div className="text-xs font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-main)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[var(--link-color)] hover:underline">
              Portal Index
            </Link>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold">technical_notebook.html</span>
          </div>

          <Link
            to="/editor"
            className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#ea5e24] text-white hover:bg-[#c94b15] transition-colors flex items-center gap-1.5"
          >
            <span>✦</span>
            <span>Dispatch Desk</span>
          </Link>
        </div>

        {/* Master Monograph Card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-main)] bg-[var(--bg-surface)]">
          {/* Header Banner */}
          <div className="bg-[#0b3323] p-8 sm:p-12 text-white border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <SparkleStar size={18} color="#f4d38c" />
                <span className="text-xs font-mono text-[#f4d38c] tracking-widest uppercase">
                  Technical Archive
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.writingTitle}
              </h1>
              <p className="font-sans text-sm text-white/80 mt-2 max-w-2xl leading-relaxed">
                In-depth engineering treatises on database engines, kernel subsystems, and empirical research benchmarks.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <EllipticalTag starColor="#f4d38c">
                <span>{filteredArticles.length} / {articles.length} Treatises</span>
              </EllipticalTag>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Tag filter toolbar */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] mb-8 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-[var(--text-muted)] me-2">Filter Topic:</span>
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 rounded-full font-sans transition-all ${
                  !selectedTag
                    ? 'bg-[#ea5e24] text-white font-semibold'
                    : 'bg-[var(--bg-surface)] text-[var(--text-sub)] border border-[var(--border-main)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                All Topics ({articles.length})
              </button>
              {allTags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-full font-mono text-[11px] transition-all ${
                    selectedTag === tag
                      ? 'bg-[#ea5e24] text-white font-semibold'
                      : 'bg-[var(--bg-surface)] text-[var(--text-sub)] border border-[var(--border-main)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {filteredArticles.length === 0 ? (
              <p className="text-sm text-[var(--text-muted)] py-12 text-center">{t.writingEmpty}</p>
            ) : (
              <div className="space-y-8">
                {filteredArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-[#ea5e24] shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Schematic cover if present */}
                      {article.cover && (
                        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-black/20 bg-slate-950">
                          <Link to={`/writing/${article.slug}`}>
                            <img
                              src={article.cover}
                              alt={article.title}
                              className="w-full h-48 object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                            />
                          </Link>
                        </div>
                      )}

                      <div className={article.cover ? 'lg:col-span-7 flex flex-col justify-between' : 'lg:col-span-12'}>
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-1 mb-2 text-xs font-mono text-[var(--text-muted)]">
                            <span>Published: {formatDate(article.date, article.lang)}</span>
                            <span>&bull;</span>
                            <span>{article.readingMinutes} {t.minRead}</span>
                          </div>

                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                            <Link
                              to={`/writing/${article.slug}`}
                              className="hover:text-[#ea5e24] transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h2>

                          {article.description && (
                            <p className="font-sans text-sm text-[var(--text-sub)] leading-relaxed mb-4">
                              {article.description}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border-light)]">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-subtle)] text-[var(--text-sub)] border border-[var(--border-light)]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={`/writing/${article.slug}`}
                            className="px-4 py-1.5 rounded-full bg-[#ea5e24] text-white text-xs font-semibold hover:bg-[#d04b14] transition-colors flex items-center gap-1"
                          >
                            <span>Read Treatise</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 pt-6 border-t border-[var(--border-main)] flex justify-between items-center text-xs font-mono">
              <Link to="/" className="text-[#ea5e24] hover:underline flex items-center gap-1">
                <span>←</span>
                <span>{t.backHome}</span>
              </Link>
              <a href="#top" className="text-[var(--text-muted)] hover:underline">
                ↑ {t.backToTop}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
