import { useEffect, useMemo, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import gsap from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticle, formatDate } from '../lib/articles';
import { ui } from '../data/site';

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

  useEffect(() => {
    if (article && titleRef.current && contentRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.6'
      );
    }
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
            Blog
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
                  Published: {formatDate(article.date, article.lang)}
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

              <button
                type="button"
                onClick={share}
                className="btn-retro text-xs"
              >
                <span>🔗</span>
                <span>{copied ? t.shareCopied : t.share}</span>
              </button>
            </header>

            {/* Markdown rendered body */}
            <div
              className="article-body prose max-w-none text-xs md:text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: html }}
            />

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
