import { useLanguage } from '../contexts/LanguageContext';
import { publications, ui } from '../data/site';

export default function PublicationsSection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="publications" className="p-4 md:p-6 border-b border-[var(--border-main)]">
      <div className="panel-card">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 04</span>
            <span>{t.sectionPublications}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            FORENSIC BENCHMARKS
          </span>
        </div>

        <div className="panel-body">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="border border-[var(--border-light)] bg-[var(--bg-panel)] p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[var(--border-light)]">
                <span className="badge-retro">
                  <span className="badge-retro-key">AUTHOR</span>
                  <span className="badge-retro-val">First Author</span>
                </span>
                <span className="font-mono text-xs text-[var(--text-faint)]">
                  Year: {pub.year}
                </span>
              </div>

              <h3 className="text-sm md:text-base font-bold text-[var(--text-main)] mb-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs text-[var(--text-sub)] mb-3">
                <strong className="text-[var(--text-main)]">Authors:</strong> {pub.authors}
              </p>

              <div className="p-3 bg-[var(--bg-subtle)] border border-[var(--border-light)] text-xs mb-3 space-y-1">
                <div>
                  <strong>Institutional Affiliation:</strong> {pub.venue}
                </div>
                <div>
                  <strong>Dataset & Zenodo Identifier:</strong>{' '}
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[var(--link-color)] hover:underline"
                  >
                    doi:{pub.doi}
                  </a>
                </div>
              </div>

              <p className="prose-body text-xs text-[var(--text-sub)] leading-relaxed mb-4">
                {language === 'en'
                  ? 'Contributed to PeerTrust, a public researcher-level citation-integrity screening tool, and first-authored its benchmark paper with ScienceWerx and KNOWDYN LTD (validation, investigation, data curation, software). The benchmark evaluated 268 ORCID-resolved researchers; the production engine and an independent Python reimplementation agreed on the verdict for all 260 evaluable researchers, with exact numerical match for 99.2%.'
                  : 'المساهمة في أداة PeerTrust لفحص نزاهة الاستشهادات على مستوى الباحثين، وتأليف ورقتها المرجعية كباحث أول بالتعاون مع ScienceWerx و KNOWDYN LTD (التحقق، والتحقيق، وتنسيق البيانات، والبرمجيات). قيّم الاختبار 268 باحثاً معرّفاً بـ ORCID؛ واتفق محرك الإنتاج مع تطبيق مستقل بـ Python على الحكم لجميع الباحثين الـ 260 مع تطابق رقمي دقيق بنسبة 99.2%.'}
              </p>

              <div className="flex justify-end">
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-retro text-xs"
                >
                  <span>↗</span>
                  <span>{language === 'en' ? 'Access Zenodo Dataset & Paper' : 'الوصول لبيانات زنودو والورقة'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

