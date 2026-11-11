import { useLanguage } from '../contexts/LanguageContext';
import { contact, ui } from '../data/site';
import { SparkleStar, EllipticalTag } from './ArtMotifs';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = ui[language];

  const channels = [
    {
      label: 'Email Transmission',
      value: contact.email,
      href: `mailto:${contact.email}`,
      actionText: 'Send Direct Email',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Phone & WhatsApp',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      actionText: 'Call / WhatsApp',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'GitHub Repositories',
      value: 'github.com/youssef-joe',
      href: contact.github,
      actionText: 'Inspect Repos',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'Professional LinkedIn',
      value: 'linkedin.com/in/youssef-ali',
      href: contact.linkedin,
      actionText: 'Connect on LinkedIn',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ============================================================ */}
        {/* MONOGRAPH PLATE 09: Contact & Transmission                   */}
        {/* ============================================================ */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#ea5e24] text-white">
          
          <div className="p-8 sm:p-14 lg:p-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="chapter-number text-white font-serif">09</span>
                <SparkleStar size={20} color="#ffffff" />
                <span className="text-xs font-mono text-white/80 tracking-widest uppercase">
                  Direct Channel
                </span>
              </div>

              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-none">
                {language === 'ar' ? 'لنبنِ برمجيات ذات صلابة رياضية وميكانيكية.' : 'Let’s Build Something With Permanent Integrity.'}
              </h3>

              <p className="font-serif text-lg sm:text-xl text-white/90 italic leading-relaxed mb-10">
                "{t.contactLead}"
              </p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {channels.map((ch, idx) => (
                <a
                  key={idx}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-white/80 mb-3">
                      <span className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                        {ch.icon}
                      </span>
                      <SparkleStar size={12} color="#ffffff" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="font-mono text-xs text-white/70">
                      {ch.label}
                    </div>

                    <div className="font-sans font-bold text-sm text-white mt-1 break-all">
                      {ch.value}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/15 text-xs font-mono text-white/90 group-hover:text-white flex items-center justify-between">
                    <span>{ch.actionText}</span>
                    <span>↗</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer Bottom Bar */}
            <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/75">
              <div className="flex items-center gap-2">
                <span>&copy; 2026 {contact.name}. All Rights Reserved.</span>
              </div>

              <a
                href="#top"
                className="hover:text-white hover:underline flex items-center gap-1.5"
              >
                <span>↑ Top of Monograph</span>
                <SparkleStar size={10} color="#ffffff" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
