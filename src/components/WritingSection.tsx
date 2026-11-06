import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';

export default function WritingSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 05</span>
            <span>{t.sectionWriting}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge-retro">
              <span className="badge-retro-key">DIAGRAMS</span>
              <span className="badge-retro-val">INCLUDED</span>
            </span>
            <span className="badge-retro">
              <span className="badge-retro-key">FEED</span>
              <span className="badge-retro-val">RSS 2.0</span>
            </span>
          </div>
        </div>

        <div className="panel-body">
          <p className="text-xs text-[var(--text-sub)] font-mono mb-4 pb-2 border-b border-[var(--border-light)]">
            // {t.writingTitle}
          </p>

          {latestArticles.length === 0 ? (
            <p className="prose-body text-xs text-[var(--text-sub)]">{t.writingEmpty}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latestArticles.map((article) => (
                <div
                  key={article.slug}
                  className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 hover:border-[var(--accent-blue)] transition-colors shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Visual schematic cover if available */}
                    {article.cover && (
                      <Link
                        to={`/writing/${article.slug}`}
                        className="block mb-3 border border-[var(--border-strong)] bg-slate-900 overflow-hidden relative group"
                      >
                        <img
                          src={article.cover}
                          alt={article.title}
                          className="w-full h-36 object-cover object-top group-hover:scale-[1.02] transition-transform duration-200"
                        />
                        <div className="absolute top-2 right-2 bg-black/80 text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 border border-cyan-800">
                          SCHEMATIC
                        </div>
                      </Link>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="text-sm md:text-base font-bold text-[var(--text-main)] leading-snug">
                        <Link
                          to={`/writing/${article.slug}`}
                          className="text-inherit hover:text-[var(--link-hover)] no-underline hover:underline"
                        >
                          {article.title}
                        </Link>
                      </h3>
                    </div>

                    <div className="font-mono text-[11px] text-[var(--text-faint)] mb-2">
                      Published: {formatDate(article.date, article.lang)} • {article.readingMinutes} {t.minRead}
                    </div>

                    {article.description && (
                      <p className="prose-body text-xs text-[var(--text-sub)] leading-relaxed mb-3">
                        {article.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border-light)] mt-2">
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
                      className="btn-retro text-[11px]"
                    >
                      <span>Read Article →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-[var(--border-light)] flex justify-between items-center text-xs">
            <span className="text-[var(--text-faint)] font-mono">
              Total Published: {articles.length} posts // All with schematics & benchmarks
            </span>
            <Link
              to="/writing"
              className="btn-retro"
            >
              <span>{t.writingAll} →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
