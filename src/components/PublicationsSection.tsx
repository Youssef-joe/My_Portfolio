import { useLanguage } from '../contexts/LanguageContext';
import { publications, ui, contact } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function PublicationsSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const pub = publications[0];

  return (
    <section id="publications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 03: Forensic Science (Snapshot 5 Style)       */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#141829] text-white">
          
          {/* Top Banner Bar (Snapshot 5 Header) */}
          <div className="bg-[#0f1322] px-6 sm:px-12 py-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Massive 03 Number */}
              <div className="flex items-center gap-3">
                <span className="chapter-number text-white font-serif">03</span>
                <SparkleStar size={18} color="#818cf8" />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  PeerTrust Citation-Forensics
                </h3>
                <div className="text-xs font-mono text-[#818cf8]">
                  Empirical Science &bull; First-Author Publication &bull; ScienceWerx
                </div>
              </div>
            </div>

            {/* Elliptical Tags + Contact on Right */}
            <div className="flex flex-wrap items-center gap-3">
              <EllipticalTag starColor="#818cf8">Graph Spectral Forensics</EllipticalTag>
              <EllipticalTag starColor="#818cf8">Dual-Engine Python &amp; Go</EllipticalTag>

              <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-white/15 text-xs font-sans text-white/70">
                <span>{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Two-Column Body (Snapshot 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Forensic Signals & Paper Abstract */}
            <div className="lg:col-span-6 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between bg-gradient-to-br from-[#161c33] to-[#111526]">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#818cf8] uppercase mb-3 flex items-center gap-2">
                  <SparkleStar size={11} color="#818cf8" />
                  <span>CITATION FRAUD DETECTION VECTORS</span>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {pub.title}
                </h4>

                <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed mb-6 font-normal">
                  {pub.abstract}
                </p>

                {/* 3 Forensic Signals List */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex gap-3">
                    <span className="font-serif font-bold text-[#818cf8] text-base">01</span>
                    <div>
                      <div className="font-bold text-white mb-0.5">Reciprocal Citation Cartels</div>
                      <div className="text-white/70">Spectral graph clustering pinpoints author cliques trading mutual unmerited citations.</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex gap-3">
                    <span className="font-serif font-bold text-[#818cf8] text-base">02</span>
                    <div>
                      <div className="font-bold text-white mb-0.5">Self-Citation Velocity Spikes</div>
                      <div className="text-white/70">Statistical burst-detection algorithm isolating unnatural surges of self-citations.</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex gap-3">
                    <span className="font-serif font-bold text-[#818cf8] text-base">03</span>
                    <div>
                      <div className="font-bold text-white mb-0.5">Co-Authorship Inflation Rings</div>
                      <div className="text-white/70">Graph degree entropy analysis uncovering fraudulent peer-review citation trades.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action DOI link */}
              <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#818cf8] hover:bg-[#6366f1] text-[#0f1322] font-semibold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <span>Open Zenodo Publication DOI</span>
                  <span>↗</span>
                </a>
                <span className="font-mono text-xs text-white/50">doi: {pub.doi}</span>
              </div>
            </div>

            {/* Right Column: Visual Schematic & Empirical Benchmark Matrix */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#121629] to-[#0a0d18]">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#f4d38c] uppercase mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <SparkleStar size={11} color="#f4d38c" />
                    <span>DUAL-ENGINE AGREEMENT METRICS</span>
                  </span>
                  <span className="text-white/50">N = 268 Profiles</span>
                </div>

                {/* Forensic Schematic Image */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 mb-6 group overflow-hidden">
                  <img
                    src="/images/blog/peertrust-forensics.svg"
                    alt="PeerTrust Spectral Graph Clustering & Citation Forensics"
                    className="w-full h-auto max-h-[260px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="mt-2 text-[10px] font-mono text-center text-white/50">
                    Dual-Engine Architecture: Go Core API + Python Scipy Verification
                  </div>
                </div>

                {/* Validation Benchmark Table */}
                <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
                  <table className="w-full text-xs font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/5 text-[#818cf8]">
                        <th className="p-3">METRIC</th>
                        <th className="p-3">PRODUCTION GO</th>
                        <th className="p-3">BENCHMARK PYTHON</th>
                        <th className="p-3 text-right">CONCORDANCE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/90">
                      <tr>
                        <td className="p-3 font-semibold text-white">Screened Profiles</td>
                        <td className="p-3 text-white/70">268 Profiles</td>
                        <td className="p-3 text-white/70">268 Profiles</td>
                        <td className="p-3 font-bold text-emerald-400 text-right">100%</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Full Scoring Verdict</td>
                        <td className="p-3 text-white/70">260 Verdicts</td>
                        <td className="p-3 text-white/70">260 Verdicts</td>
                        <td className="p-3 font-bold text-emerald-400 text-right">100% Exact</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Numerical Match</td>
                        <td className="p-3 text-white/70">Multi-Decimal</td>
                        <td className="p-3 text-white/70">Multi-Decimal</td>
                        <td className="p-3 font-bold text-emerald-400 text-right">99.2% Match</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-sans text-white/60">
                Institutional Affiliation: <strong>ScienceWerx Inc. &amp; KNOWDYN LTD</strong> &bull; First Author: <strong>Youssef Ali</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
