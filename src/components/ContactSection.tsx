import { useLanguage } from '../contexts/LanguageContext';
import { contact, ui, hero } from '../data/site';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = ui[language];
  const h = hero[language];

  const contactRows = [
    { label: t.emailLabel, value: contact.email, href: `mailto:${contact.email}`, type: 'mailto' },
    { label: t.phoneLabel, value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}`, type: 'tel' },
    { label: t.locationLabel, value: contact.location, href: '#', type: 'text' },
    { label: 'LinkedIn', value: 'linkedin.com/in/youssef-ali-7792b21b3', href: contact.linkedin, type: 'external' },
    { label: 'GitHub', value: 'github.com/youssef-joe', href: contact.github, type: 'external' },
    { label: 'Official Portal', value: 'youssef-ali.vercel.app', href: contact.website, type: 'external' },
  ];

  return (
    <section id="contact" className="p-4 md:p-6">
      <div className="panel-card mb-0">
        <div className="panel-card-header">
          <div className="panel-title">
            <span className="text-[var(--accent-red)]">§ 09</span>
            <span>{t.sectionContact}</span>
          </div>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            TRANSMISSION TERMINAL
          </span>
        </div>

        <div className="panel-body">
          <p className="prose-body text-sm text-[var(--text-main)] mb-4 font-semibold">
            {t.contactLead}
          </p>

          {/* Contact directory table */}
          <table className="table-retro">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>CHANNEL</th>
                <th>COORDINATE / ACCESS POINT</th>
                <th style={{ width: '15%' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {contactRows.map((row, idx) => (
                <tr key={idx}>
                  <td className="font-mono font-bold text-[var(--text-main)]">
                    {row.label}
                  </td>
                  <td className="font-mono text-[var(--text-sub)]">
                    {row.value}
                  </td>
                  <td>
                    {row.type !== 'text' ? (
                      <a
                        href={row.href}
                        {...(row.type === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="btn-retro text-[10px]"
                      >
                        Connect ↗
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-[var(--text-faint)]">Resident</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 2005 Retro Web Footer */}
          <div className="mt-8 pt-6 border-t border-[var(--border-light)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-retro">
                <span className="badge-retro-key">HOST</span>
                <span className="badge-retro-val">VERCEL</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">CODE</span>
                <span className="badge-retro-val">REACT 18</span>
              </span>
              <span className="badge-retro">
                <span className="badge-retro-key">SPEC</span>
                <span className="badge-retro-val">XHTML 1.0</span>
              </span>
            </div>

            <div className="text-[var(--text-faint)] font-mono text-center md:text-end">
              <div>© 2005—2026 {contact.name}. All Rights Reserved.</div>
              <a href="#top" className="text-[var(--link-color)] hover:underline mt-1 inline-block">
                ↑ {t.backToTop}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
