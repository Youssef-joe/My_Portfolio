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
            <div className="space-y-4">
              {latestArticles.map((article) => (
                <div
                  key={article.slug}
                  className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 hover:border-[var(--accent-blue)] transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-sm md:text-base font-bold text-[var(--text-main)]">
                      <Link
                        to={`/writing/${article.slug}`}
                        className="text-inherit hover:text-[var(--link-hover)] no-underline hover:underline"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <span className="font-mono text-xs text-[var(--text-faint)] whitespace-nowrap">
                      {formatDate(article.date, article.lang)}
                    </span>
                  </div>

                  {article.description && (
                    <p className="prose-body text-xs text-[var(--text-sub)] leading-relaxed mb-3">
                      {article.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border-light)]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[var(--text-faint)] me-1">
                        {article.readingMinutes} {t.minRead}
                      </span>
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
              Total Published: {articles.length} posts
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
