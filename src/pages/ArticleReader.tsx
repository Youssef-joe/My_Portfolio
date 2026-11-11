import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticle, formatDate, articles } from '../lib/articles';
import { ui, contact } from '../data/site';
import { SparkleStar, EllipticalTag } from '../components/ArtMotifs';

marked.setOptions({ gfm: true, breaks: false });

export default function ArticleReader() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = ui[language];
  const article = slug ? getArticle(slug) : undefined;
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => (article ? (marked.parse(article.body) as string) : ''), [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — Youssef Ali`;
    return () => {
      document.title = 'Youssef Ali Ahmed — Systems Engineer & R&D Analyst';
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)]">
        <SiteHeader />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="rounded-3xl p-12 bg-[var(--bg-surface)] border border-[var(--border-main)] shadow-xl">
            <h1 className="font-serif text-3xl font-bold mb-4">{t.articleMissing}</h1>
            <p className="font-sans text-sm text-[var(--text-muted)] mb-8">
              The requested treatise could not be located in the current edition.
            </p>
            <Link
              to="/writing"
              className="px-6 py-2.5 rounded-full bg-[#ea5e24] text-white text-xs font-semibold hover:bg-[#c94b15] transition-colors"
            >
              ← {t.sectionWriting}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, text: article.description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  };

  const isRTL = article.lang === 'ar';
  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-main)] flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[var(--link-color)] hover:underline">
              Portal Index
            </Link>
            <span>/</span>
            <Link to="/writing" className="text-[var(--link-color)] hover:underline">
              Technical Journal
            </Link>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{article.slug}.md</span>
          </div>

          <button
            type="button"
            onClick={share}
            className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[#ea5e24] transition-colors flex items-center gap-1.5"
          >
            <span>{copied ? '✓ Link Copied' : '🔗 Share'}</span>
          </button>
        </div>

        {/* Master Article Monograph Card */}
        <article className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-main)] bg-[var(--bg-surface)]">
          {/* Article Header */}
          <header className="p-8 sm:p-12 border-b border-[var(--border-light)] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-surface)]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-2">
                <SparkleStar size={12} color="#ea5e24" />
                <span>{formatDate(article.date, article.lang)} &bull; {contact.name}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-light)] text-[var(--text-sub)]">
                {article.readingMinutes} {t.minRead}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight">
              {article.title}
            </h1>

            {article.description && (
              <p className="font-serif text-base sm:text-lg text-[var(--text-sub)] italic leading-relaxed mb-6 border-l-2 border-[#ea5e24] pl-4">
                {article.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border-light)]">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--bg-subtle)] text-[var(--text-sub)] border border-[var(--border-light)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Rendered Markdown Prose */}
          <div className="p-8 sm:p-12 lg:p-14">
            <div
              className="prose prose-lg max-w-none text-[var(--text-main)] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Author Placard */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-[var(--border-strong)] bg-black shadow-md">
                <img
                  src="/LinkedInPic.jpeg"
                  alt={contact.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="font-serif text-xl font-bold text-[var(--text-main)]">
                    {contact.name}
                  </h3>
                  <span className="font-mono text-xs text-[#ea5e24]">
                    Systems Engineer &bull; R&amp;D Analyst
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed mb-3">
                  Back-end and systems engineer focused on database engineering, low-level C contributions to the PostgreSQL tooling ecosystem, and empirical AI citation-integrity research at ScienceWerx.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-mono">
                  <a href={`mailto:${contact.email}`} className="text-[#ea5e24] hover:underline">
                    {contact.email}
                  </a>
                  <span className="text-[var(--text-muted)]">&bull;</span>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#ea5e24] hover:underline">
                    GitHub
                  </a>
                  <span className="text-[var(--text-muted)]">&bull;</span>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#ea5e24] hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Other Treatises Recommendation */}
            {otherArticles.length > 0 && (
              <div className="mt-14 pt-8 border-t border-[var(--border-main)]">
                <h4 className="font-serif text-lg font-bold text-[var(--text-main)] mb-6 flex items-center gap-2">
                  <SparkleStar size={14} color="#ea5e24" />
                  <span>Other Technical Treatises in this Monograph</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherArticles.slice(0, 2).map((other) => (
                    <Link
                      key={other.slug}
                      to={`/writing/${other.slug}`}
                      className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[#ea5e24] transition-colors duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1">
                          {formatDate(other.date, other.lang)} &bull; {other.readingMinutes} min read
                        </div>
                        <h5 className="font-serif text-base font-bold text-[var(--text-main)] group-hover:text-[#ea5e24] transition-colors leading-snug">
                          {other.title}
                        </h5>
                      </div>
                      <span className="text-xs font-semibold text-[#ea5e24] mt-3 flex items-center gap-1">
                        <span>Read Treatise</span>
                        <span>→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Nav */}
            <div className="mt-12 pt-6 border-t border-[var(--border-main)] flex justify-between items-center text-xs font-mono">
              <Link to="/writing" className="text-[#ea5e24] hover:underline flex items-center gap-1">
                <span>←</span>
                <span>Back to Technical Journal</span>
              </Link>
              <a href="#top" className="text-[var(--text-muted)] hover:underline">
                ↑ Top of Page
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
