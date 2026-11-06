import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';

export default function ArticleIndex() {
  const { language } = useLanguage();
  const t = ui[language];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
  const filteredArticles = selectedTag
    ? articles.filter((a) => a.tags.includes(selectedTag))
    : articles;

  return (
    <div className="portal-frame">
      <SiteHeader />

      <main className="p-4 md:p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-[var(--text-sub)] pb-2 border-b border-[var(--border-light)] flex items-center gap-2">
          <Link to="/" className="text-[var(--link-color)] hover:underline">
            Portal Index
          </Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold">technical_notebook.html</span>
        </div>

        <div className="panel-card">
          <div className="panel-card-header">
            <div className="panel-title">
              <span className="text-[var(--accent-red)]">§</span>
              <span>{t.sectionWriting} // ARCHIVE &amp; VISUAL SCHEMATICS</span>
            </div>
            <span className="badge-retro">
              <span className="badge-retro-key">POSTS</span>
              <span className="badge-retro-val">{filteredArticles.length} / {articles.length}</span>
            </span>
          </div>

          <div className="panel-body">
            <h1 className="text-xl md:text-2xl font-bold text-[var(--text-main)] mb-2">
              {t.writingTitle}
            </h1>
            <p className="text-xs text-[var(--text-sub)] mb-4 font-mono">
              // In-depth engineering treatises on database engines, kernel subsystems, and empirical research benchmarks.
            </p>

            {/* Tag filter toolbar */}
            <div className="p-3 bg-[var(--bg-subtle)] border border-[var(--border-light)] mb-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-[var(--text-faint)] me-1">Filter by Topic:</span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`btn-retro text-[11px] ${!selectedTag ? 'border-[var(--accent-blue)] font-bold' : ''}`}
              >
                All Topics ({articles.length})
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`btn-retro text-[11px] ${selectedTag === tag ? 'border-[var(--accent-blue)] font-bold bg-white text-[var(--accent-blue)]' : ''}`}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {filteredArticles.length === 0 ? (
              <p className="prose-body text-xs text-[var(--text-sub)]">{t.writingEmpty}</p>
            ) : (
              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-5 hover:border-[var(--accent-blue)] transition-colors shadow-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      {/* Schematic cover if present */}
                      {article.cover && (
                        <div className="md:col-span-5 border border-[var(--border-strong)] bg-slate-950 overflow-hidden">
                          <Link to={`/writing/${article.slug}`}>
                            <img
                              src={article.cover}
                              alt={article.title}
                              className="w-full h-44 object-cover object-top hover:scale-[1.02] transition-transform duration-200"
                            />
                          </Link>
                        </div>
                      )}

                      <div className={article.cover ? 'md:col-span-7 flex flex-col justify-between' : 'md:col-span-12'}>
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5 text-xs font-mono text-[var(--text-faint)]">
                            <span>Published: {formatDate(article.date, article.lang)}</span>
                            <span>{article.readingMinutes} {t.minRead}</span>
                          </div>

                          <h2 className="text-base md:text-lg font-bold text-[var(--text-main)] mb-2 leading-snug">
                            <Link
                              to={`/writing/${article.slug}`}
                              className="text-inherit hover:text-[var(--link-hover)] no-underline hover:underline"
                            >
                              {article.title}
                            </Link>
                          </h2>

                          {article.description && (
                            <p className="prose-body text-xs md:text-sm text-[var(--text-sub)] leading-relaxed mb-3">
                              {article.description}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border-light)] mt-2">
                          <div className="flex flex-wrap items-center gap-1">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-light)] text-[var(--text-sub)]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={`/writing/${article.slug}`}
                            className="btn-retro text-xs"
                          >
                            Read Full Article →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[var(--border-light)] flex justify-between items-center text-xs">
              <Link to="/" className="btn-retro">
                ← {t.backHome}
              </Link>
              <a href="#top" className="text-[var(--text-faint)] hover:underline font-mono">
                ↑ {t.backToTop}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
