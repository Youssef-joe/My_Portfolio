import { useLanguage } from '../contexts/LanguageContext';
import { hero, ui, contact } from '../data/site';

export default function HeroSection() {
  const { language } = useLanguage();
  const h = hero[language];
  const t = ui[language];

  return (
    <section id="top" className="p-4 md:p-6 border-b border-[var(--border-main)] bg-[var(--bg-panel)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Portrait, Specs, Retro Badges */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="border border-[var(--border-main)] bg-[var(--bg-surface)] p-3 shadow-sm">
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden border border-[var(--border-strong)]">
              <img
                src="/classical_portrait.jpg"
                alt="Youssef Ali Portrait"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/75 text-white text-[10px] font-mono px-2 py-1 text-center">
                Youssef Ali Ahmed // Systems & R&D
              </div>
            </div>

            {/* Quick Metrics Table */}
            <table className="table-retro mt-3">
              <tbody>
                {h.metrics.map((m, idx) => (
                  <tr key={idx}>
                    <td className="font-semibold text-[var(--text-sub)]">{m.label}</td>
                    <td className="font-mono text-end font-bold text-[var(--accent-blue)]">{m.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Micro badges list */}
            <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
              <span className="badge-retro">
                <span className="badge-retro-key">LANG</span>
                <span className="badge-retro-val">Go / C</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">DB</span>
                <span className="badge-retro-val">PostgreSQL</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">OS</span>
                <span className="badge-retro-val">RISC-V / x86</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">R&D</span>
                <span className="badge-retro-val">ScienceWerx</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">HOST</span>
                <span className="badge-retro-val">Linux</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Summary & Quick Launchpad */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="panel-card mb-0">
            <div className="panel-card-header">
              <div className="panel-title">
                <span className="text-[var(--accent-red)]">§</span>
                <span>EXECUTIVE OVERVIEW // {h.role}</span>
              </div>
              <span className="font-mono text-[11px] text-[var(--text-faint)]">
                {h.location}
              </span>
            </div>

            <div className="panel-body">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                {h.statement}
              </h2>

              <p className="prose-body text-sm leading-relaxed mb-4 text-[var(--text-sub)]">
                {language === 'en'
                  ? 'Welcome to the systems architecture and engineering portal of Youssef Ali Ahmed. Here you will find research papers in citation integrity screening, open-source database engines built from first principles in Go and C, operating system kernel development for RISC-V and x86, technical writings, and reflections on engineering craft.'
                  : 'مرحباً بكم في البوابة التقنية والبحثية للمهندس يوسف علي أحمد. ستجدون هنا أبحاثاً علمية في فحص نزاهة الاستشهادات الأكاديمية، ومحركات قواعد بيانات ومصادر مفتوحة مبنية من الصفر بلغتي Go و C، وتطوير أنظمة تشغيل عتادية لمعماريتي RISC-V و x86، ومقالات تقنية وصالون الفن والقصة.'}
              </p>

              {/* Status and availability */}
              <div className="p-3 bg-[var(--bg-subtle)] border border-[var(--border-light)] mb-4 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="status-dot-online" />
                  <span className="font-semibold text-[var(--text-main)]">
                    {h.availability}
                  </span>
                </div>
                <span className="font-mono text-[var(--text-sub)]">
                  Contact: <a href={`mailto:${contact.email}`} className="text-[var(--link-color)]">{contact.email}</a>
                </span>
              </div>

              {/* Quick Launch Buttons */}
              <div className="pt-2 border-t border-[var(--border-light)]">
                <span className="text-[11px] font-mono text-[var(--text-faint)] block mb-2 uppercase tracking-wider">
                  Quick Navigation:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a href="#experience" className="btn-retro">
                    💼 Experience
                  </a>
                  <a href="#work" className="btn-retro">
                    ⚙ Projects (SoldierDB, Joe's OS)
                  </a>
                  <a href="#publications" className="btn-retro">
                    📄 PeerTrust Benchmark Paper
                  </a>
                  <a href="#writing" className="btn-retro">
                    ✍ Engineering Blog
                  </a>
                  <a href="#art" className="btn-retro">
                    🎨 Art Salon
                  </a>
                  <a href="#story" className="btn-retro">
                    📜 Story & Chronicles
                  </a>
                  <a href="#cv" className="btn-retro">
                    📋 Full Curriculum Vitae
                  </a>
                  <a href="#contact" className="btn-retro">
                    ✉ Contact Terminal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
