import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../contexts/LanguageContext';
import { getArticle, formatDate, articles } from '../lib/articles';
import { ui, contact } from '../data/site';
import { HeroCharacterBox, BulletTag } from '../components/ArtMotifs';

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
      <div className="bg-[#f4cb38] p-2 sm:p-4 md:p-6 lg:p-8 min-h-screen">
        <div className="bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_#000] overflow-hidden">
          <SiteHeader />
          <main className="max-w-4xl mx-auto px-4 py-20 text-center">
            <div className="border-4 border-white/20 bg-[#121316] p-12 shadow-[8px_8px_0px_0px_#ff5500]">
              <h1 className="font-display text-4xl uppercase tracking-tight text-[#ff5500] mb-4">
                {t.articleMissing}
              </h1>
              <p className="font-mono text-sm text-white/70 mb-8">
                The requested technical treatise could not be located in this archive.
              </p>
              <Link
                to="/writing"
                className="px-6 py-3 bg-[#f4cb38] hover:bg-[#e0b828] text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#fff]"
              >
                ← Return to Journal
              </Link>
            </div>
          </main>
        </div>
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
    <div className="bg-[#f4cb38] p-2 sm:p-4 md:p-6 lg:p-8 min-h-screen selection:bg-[#ff5500] selection:text-white transition-colors duration-300">
      
      {/* Outer Black Poster Frame */}
      <div className="bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
        <SiteHeader />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" dir={isRTL ? 'rtl' : 'ltr'}>
          
          {/* Breadcrumb Navigation Bar */}
          <div className="text-xs font-mono font-bold text-white/70 pb-4 border-b-2 border-white/20 flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#f4cb38] hover:underline uppercase">
                INDEX
              </Link>
              <span>&gt;</span>
              <Link to="/writing" className="text-[#f4cb38] hover:underline uppercase">
                JOURNAL
              </Link>
              <span>&gt;</span>
              <span className="text-white uppercase truncate max-w-xs sm:max-w-md">
                {article.slug}.md
              </span>
            </div>

            <button
              type="button"
              onClick={share}
              className="text-[11px] font-mono font-bold px-3 py-1 bg-white/10 hover:bg-[#ff5500] hover:text-white border border-white/20 transition-all flex items-center gap-1.5 uppercase shadow-[2px_2px_0px_0px_#f4cb38]"
            >
              <span>{copied ? '✓ LINK COPIED' : '🔗 SHARE TREATISE'}</span>
            </button>
          </div>

          {/* Master Article Box */}
          <article className="border-4 border-black bg-[#121316] shadow-[8px_8px_0px_0px_#f4cb38] overflow-hidden">
            
            {/* Header Banner */}
            <header className="p-6 sm:p-10 lg:p-12 border-b-4 border-black bg-black space-y-6">
              
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#f4cb38] text-black font-bold uppercase">
                    TECHNICAL TREATISE
                  </span>
                  <span className="text-white/60">
                    {formatDate(article.date, article.lang)} &bull; {contact.name}
                  </span>
                </div>

                <span className="px-2 py-0.5 bg-white/10 text-[#f4cb38] border border-white/20 uppercase font-bold">
                  {article.readingMinutes} MIN READ
                </span>
              </div>

              {/* Title in Giant Display Condensed Font */}
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
                {article.title}
              </h1>

              {/* Cover Graphic / Architectural Schematic (if available) */}
              {article.coverImage && (
                <div className="my-6 rounded-lg border-2 border-white/20 bg-[#0d0e12] p-4 flex items-center justify-center shadow-inner">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-auto max-h-[360px] object-contain"
                  />
                </div>
              )}

              {/* Description Callout */}
              {article.description && (
                <div className="p-4 sm:p-5 bg-white/5 border-l-4 border-[#ff5500] font-grotesk text-sm sm:text-base text-white/90 leading-relaxed">
                  {article.description}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono font-bold px-2.5 py-1 bg-white/10 text-[#f4cb38] border border-white/20 uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </header>

            {/* Markdown Prose Body */}
            <div className="p-6 sm:p-10 lg:p-14 bg-[#121316]">
              <div
                className="article-body prose-invert font-grotesk text-sm sm:text-base text-white/90 leading-relaxed space-y-6 max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* Author Placard with Pop-Art Character Avatar */}
              <div className="mt-16 p-6 sm:p-8 border-4 border-black bg-black shadow-[6px_6px_0px_0px_#ff5500] flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="shrink-0">
                  <HeroCharacterBox size={100} className="w-24 h-24 shadow-[4px_4px_0px_0px_#f4cb38]" />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                      {contact.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-[#f4cb38] uppercase">
                      Systems Engineer &bull; R&amp;D Analyst
                    </span>
                  </div>

                  <p className="font-grotesk text-xs sm:text-sm text-white/70 leading-relaxed">
                    Back-end and systems engineer focused on database storage engines, PostgreSQL internals in C, and empirical citation-forensics research at ScienceWerx.
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-mono font-bold">
                    <a href={`mailto:${contact.email}`} className="text-[#ff5500] hover:underline uppercase">
                      Email
                    </a>
                    <span className="text-white/30">&bull;</span>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#ff5500] hover:underline uppercase">
                      GitHub
                    </a>
                    <span className="text-white/30">&bull;</span>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#ff5500] hover:underline uppercase">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Treatises Grid */}
              {otherArticles.length > 0 && (
                <div className="mt-14 pt-8 border-t-2 border-white/10 space-y-6">
                  <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white flex items-center gap-2">
                    <span className="text-[#f4cb38]">●</span>
                    <span>MORE TECHNICAL TREATISES</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherArticles.slice(0, 2).map((other) => (
                      <Link
                        key={other.slug}
                        to={`/writing/${other.slug}`}
                        className="p-6 bg-black border-2 border-white/20 hover:border-[#f4cb38] hover:shadow-[4px_4px_0px_0px_#f4cb38] transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-[10px] font-mono text-[#f4cb38] font-bold uppercase mb-1">
                            {formatDate(other.date, other.lang)} &bull; {other.readingMinutes} MIN READ
                          </div>
                          <h5 className="font-display text-lg uppercase tracking-tight text-white group-hover:text-[#f4cb38] transition-colors leading-snug">
                            {other.title}
                          </h5>
                        </div>
                        <div className="font-mono text-xs font-bold text-[#ff5500] mt-4 flex items-center gap-1 uppercase">
                          <span>Read Treatise</span>
                          <span>→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="mt-12 pt-6 border-t-2 border-white/10 flex justify-between items-center text-xs font-mono font-bold">
                <Link to="/writing" className="text-[#f4cb38] hover:underline uppercase flex items-center gap-1">
                  <span>←</span>
                  <span>Back to Technical Journal</span>
                </Link>
                <a href="#top" className="text-white/60 hover:text-white uppercase">
                  ↑ Back to Top
                </a>
              </div>

            </div>

          </article>

        </main>
      </div>

    </div>
  );
}
