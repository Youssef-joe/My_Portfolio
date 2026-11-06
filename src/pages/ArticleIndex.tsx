import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { articles, formatDate } from '../lib/articles';
import { ui } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

export default function ArticleIndex() {
  const { language } = useLanguage();
  const t = ui[language];
  const isRTL = language === 'ar';

  const containerRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Parallax artwork and title fade
    gsap.to(artworkRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(titleRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Staggered reveal for chapter cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.chapters-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

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
          <span className="text-[var(--text-main)] font-semibold">blog_archive.html</span>
        </div>

        <div className="panel-card">
          <div className="panel-card-header">
            <div className="panel-title">
              <span className="text-[var(--accent-red)]">§</span>
              <span>{t.sectionWriting} // ARCHIVE</span>
            </div>
            <span className="badge-retro">
              <span className="badge-retro-key">COUNT</span>
              <span className="badge-retro-val">{articles.length} Posts</span>
            </span>
          </div>

          <div className="panel-body">
            <h1 className="text-xl md:text-2xl font-bold text-[var(--text-main)] mb-2">
              {t.writingTitle}
            </h1>
            <p className="text-xs text-[var(--text-sub)] mb-6 font-mono">
              // Technical essays on database internals, storage layouts, citation forensics, and systems engineering.
            </p>

            {articles.length === 0 ? (
              <p className="prose-body text-xs text-[var(--text-sub)]">{t.writingEmpty}</p>
            ) : (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div
                    key={article.slug}
                    className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 hover:border-[var(--accent-blue)] transition-colors shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h2 className="text-base font-bold text-[var(--text-main)]">
                        <Link
                          to={`/writing/${article.slug}`}
                          className="text-inherit hover:text-[var(--link-hover)] no-underline hover:underline"
                        >
                          {article.title}
                        </Link>
                      </h2>
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
                        <span className="text-[10px] font-mono text-[var(--text-faint)]">
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
                        className="btn-retro text-xs"
                      >
                        Read Full Article →
                      </Link>
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
