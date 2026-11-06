import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticle, formatDate, articles } from '../lib/articles';
import { ui, contact } from '../data/site';

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
      document.title = 'Youssef Ali Ahmed — Systems Engineer';
    };
  }, [article]);

  if (!article) {
    return (
      <div className="portal-frame">
        <SiteHeader />
        <main className="p-6">
          <div className="panel-card">
            <div className="panel-card-header">
              <span className="panel-title text-[var(--accent-red)]">Error 404 // Article Missing</span>
            </div>
            <div className="panel-body">
              <h1 className="heading mb-4">{t.articleMissing}</h1>
              <Link to="/writing" className="btn-retro">
                ← {t.sectionWriting}
              </Link>
            </div>
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
    <div className="portal-frame">
      <SiteHeader />

      <main className="p-4 md:p-6" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-[var(--text-sub)] pb-2 border-b border-[var(--border-light)] flex items-center gap-2 mb-4">
          <Link to="/" className="text-[var(--link-color)] hover:underline">
            Portal Index
          </Link>
          <span>/</span>
          <Link to="/writing" className="text-[var(--link-color)] hover:underline">
            Blog Archive
          </Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{article.slug}.md</span>
        </div>

        <article className="panel-card">
          <div className="panel-card-header">
            <div className="panel-title">
              <span className="text-[var(--accent-red)]">§</span>
              <span>TECHNICAL NOTEBOOK // {article.slug}.md</span>
            </div>
            <span className="badge-retro">
              <span className="badge-retro-key">READ</span>
              <span className="badge-retro-val">{article.readingMinutes} min</span>
            </span>
          </div>

          <div className="panel-body">
            <header className="pb-4 mb-6 border-b border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono">
                <span className="text-[var(--text-faint)]">
                  Published: {formatDate(article.date, article.lang)} • Author: {contact.name}
                </span>
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-light)] text-[var(--text-sub)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <h1 className="text-xl md:text-3xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                {article.title}
              </h1>

              {article.description && (
                <p className="text-sm md:text-base text-[var(--text-sub)] font-serif italic mb-4">
                  {article.description}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--border-light)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-faint)]">
                  <span className="status-dot-online" />
                  <span>Technical Peer Review: ScienceWerx Verified</span>
                </div>

                <button
                  type="button"
                  onClick={share}
                  className="btn-retro text-xs"
                >
                  <span>🔗</span>
                  <span>{copied ? t.shareCopied : t.share}</span>
                </button>
              </div>
            </header>

            {/* Markdown rendered body */}
            <div
              className="article-body prose max-w-none text-xs md:text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Author Box */}
            <div className="mt-10 p-4 bg-[var(--bg-subtle)] border border-[var(--border-main)] flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 border-2 border-[var(--border-strong)] bg-black overflow-hidden">
                <img
                  src="/LinkedInPic.jpeg"
                  alt={contact.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-xs flex-1 text-center sm:text-start">
                <div className="font-bold text-[var(--text-main)] text-sm">{contact.name}</div>
                <div className="text-[var(--accent-blue)] font-semibold mb-1.5">{contact.title}</div>
                <p className="text-[var(--text-sub)] leading-relaxed mb-2">
                  Back-end and systems engineer based in Cairo. Open-source contributor in C to the PostgreSQL ecosystem, builder of SoldierDB, and first author of the PeerTrust citation-forensics benchmark paper at ScienceWerx.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 font-mono text-[11px]">
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--link-color)] hover:underline">
                    GitHub ↗
                  </a>
                  <span className="text-[var(--text-faint)]">•</span>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--link-color)] hover:underline">
                    LinkedIn ↗
                  </a>
                  <span className="text-[var(--text-faint)]">•</span>
                  <a href={`mailto:${contact.email}`} className="text-[var(--link-color)] hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {otherArticles.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-main)] mb-3">
                  // More Technical Treatises:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherArticles.slice(0, 2).map((other) => (
                    <Link
                      key={other.slug}
                      to={`/writing/${other.slug}`}
                      className="p-3 border border-[var(--border-light)] bg-[var(--bg-panel)] hover:border-[var(--accent-blue)] block no-underline text-inherit"
                    >
                      <div className="text-xs font-bold text-[var(--text-main)] hover:underline mb-1">
                        {other.title}
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-faint)]">
                        {formatDate(other.date, other.lang)} • {other.readingMinutes} min
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <footer className="mt-8 pt-4 border-t border-[var(--border-light)] flex justify-between items-center text-xs">
              <Link to="/writing" className="btn-retro">
                ← {language === 'en' ? 'Back to Blog Archive' : 'العودة لأرشيف المقالات'}
              </Link>
              <Link to="/" className="text-[var(--text-faint)] hover:underline font-mono">
                Portal Root
              </Link>
            </footer>
          </div>
        </article>
      </main>
    </div>
  );
}
