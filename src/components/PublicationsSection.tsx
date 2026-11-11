import { useLanguage } from '../contexts/LanguageContext';
import { publications, ui, contact } from '../data/site';
import { LaptopMockup, BulletTag } from './ArtMotifs';

export default function PublicationsSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const pub = publications[0];

  return (
    <section id="publications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-white/20 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f4cb38] font-bold">
              EMPIRICAL RESEARCH &bull; FIRST-AUTHOR PUBLICATION
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-1">
              PEERTRUST CITATION FORENSICS
            </h2>
          </div>
          <span className="font-mono text-xs text-white/60">
            ScienceWerx Inc. &bull; KNOWDYN LTD &bull; Zenodo DOI
          </span>
        </div>

        {/* Master Two-Column Grid: Narrative on Left, Laptop Mockup on Right (Snapshot Middle-Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Research Narrative & Detection Vectors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#f4cb38] text-black font-mono font-bold text-xs uppercase">
                FIRST AUTHOR
              </span>
              <span className="font-mono text-xs text-white/70">
                DOI: {pub.doi}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
              {pub.title}
            </h3>

            <p className="font-grotesk text-sm sm:text-base text-white/80 leading-relaxed">
              {pub.abstract}
            </p>

            {/* 3 Fraud Vectors */}
            <div className="space-y-3 font-mono text-xs pt-2">
              <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-display text-lg text-[#f4cb38] leading-none">01</span>
                <div>
                  <div className="font-bold text-white uppercase">Reciprocal Citation Cartels</div>
                  <div className="text-white/70 text-[11px] mt-0.5">
                    Spectral graph clustering isolating author cliques trading mutual unmerited citations.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-display text-lg text-[#f4cb38] leading-none">02</span>
                <div>
                  <div className="font-bold text-white uppercase">Self-Citation Velocity Spikes</div>
                  <div className="text-white/70 text-[11px] mt-0.5">
                    Statistical burst-detection algorithm detecting unnatural surges of self-citations.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-display text-lg text-[#f4cb38] leading-none">03</span>
                <div>
                  <div className="font-bold text-white uppercase">Co-Authorship Inflation Rings</div>
                  <div className="text-white/70 text-[11px] mt-0.5">
                    Graph degree entropy analysis uncovering fraudulent peer-review citation syndicates.
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#f4cb38] hover:bg-[#e0b828] text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#fff] transition-all"
              >
                Open Zenodo Publication DOI ↗
              </a>
              <span className="font-mono text-xs text-white/60">
                N = 268 Profiles Scored
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Laptop Mockup (Snapshot Style: THE MASTER) */}
          <div className="lg:col-span-6">
            <LaptopMockup title="PEERTRUST FORENSICS // ENGINE" badge="ZENODO VERIFIED">
              <div className="w-full h-full flex flex-col justify-between space-y-2">
                {/* Forensic Schematic Image */}
                <div className="relative rounded overflow-hidden bg-[#0d0e12] border border-white/10 p-2 flex items-center justify-center">
                  <img
                    src="/images/blog/peertrust-forensics.svg"
                    alt="PeerTrust Spectral Graph Clustering & Citation Forensics"
                    className="w-full h-auto max-h-[170px] sm:max-h-[200px] object-contain"
                  />
                </div>

                {/* Validation Benchmark Concordance Table */}
                <div className="overflow-x-auto rounded border border-white/10 bg-white/5">
                  <table className="w-full text-[10px] font-mono text-left">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/5 text-[#f4cb38]">
                        <th className="p-2">METRIC</th>
                        <th className="p-2">PRODUCTION GO</th>
                        <th className="p-2">BENCHMARK PY</th>
                        <th className="p-2 text-right">AGREEMENT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80">
                      <tr>
                        <td className="p-2 font-bold text-white">ORCID Profiles</td>
                        <td className="p-2">268</td>
                        <td className="p-2">268</td>
                        <td className="p-2 font-bold text-emerald-400 text-right">100%</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-white">Scoring Verdict</td>
                        <td className="p-2">260</td>
                        <td className="p-2">260</td>
                        <td className="p-2 font-bold text-emerald-400 text-right">100% Exact</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-white">Numeric Match</td>
                        <td className="p-2">Multi-Dec</td>
                        <td className="p-2">Multi-Dec</td>
                        <td className="p-2 font-bold text-emerald-400 text-right">99.2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </LaptopMockup>
          </div>

        </div>

      </div>
    </section>
  );
}
