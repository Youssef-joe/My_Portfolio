import { useLanguage } from '../contexts/LanguageContext';
import { contact, ui } from '../data/site';
import { HeroCharacterBox, BulletTag } from './ArtMotifs';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tagline */}
        <div className="text-center space-y-2">
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#f4cb38] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
            AVAILABLE FOR CORE SYSTEMS, RESEARCH &amp; BACK-END ARCHITECTURE
          </span>
          <p className="font-grotesk text-sm sm:text-base text-white/80 max-w-xl mx-auto pt-2">
            Open to engineering conversations about database engines, PostgreSQL internals, kernel design, and empirical research.
          </p>
        </div>

        {/* Master "LET'S WORK" Graphic Stack — stacked on small screens, overlapping on md+ */}
        <div className="relative my-6 sm:my-10 md:my-14 md:py-6 flex flex-col items-center justify-center">

          {/* GIGANTIC CONDENSED LETTERS: LET'S WORK */}
          <h2
            dir="ltr"
            className="font-display text-[17vw] md:text-[16vw] 2xl:text-[15rem] font-bold text-white tracking-tighter leading-[0.85] select-none text-center uppercase whitespace-nowrap opacity-95"
          >
            LET'S WORK
          </h2>

          {/* Character box: below the letters on small screens, peeking through them on md+ */}
          <div className="relative mt-5 md:mt-0 md:absolute md:inset-0 flex items-center justify-center pointer-events-none">
            <div className="hover:scale-105 transition-transform duration-300 pointer-events-auto">
              <HeroCharacterBox className="w-36 h-36 sm:w-40 sm:h-40 md:w-[15vw] md:h-[15vw] md:max-w-[11rem] md:max-h-[11rem] shadow-[6px_6px_0px_0px_#f4cb38]" />
            </div>
          </div>

        </div>

        {/* Transmission Coordinates Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="bg-[#121316] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#ff5500] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#f4cb38] transition-all group block"
          >
            <div className="font-mono text-[10px] text-[#ff5500] font-bold uppercase mb-1">
              DIRECT TRANSMISSION
            </div>
            <div className="font-display text-xl uppercase tracking-tight text-white group-hover:text-[#f4cb38] transition-colors truncate">
              Email Desk
            </div>
            <div className="font-grotesk text-xs text-white/70 mt-2 truncate">
              {contact.email}
            </div>
            <div className="mt-4 font-mono text-xs font-bold text-[#ff5500] uppercase">
              Send Message ↗
            </div>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="bg-[#121316] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#f4cb38] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#ff5500] transition-all group block"
          >
            <div className="font-mono text-[10px] text-[#f4cb38] font-bold uppercase mb-1">
              VOICE &bull; WHATSAPP
            </div>
            <div className="font-display text-xl uppercase tracking-tight text-white group-hover:text-[#f4cb38] transition-colors truncate">
              Telephone
            </div>
            <div className="font-grotesk text-xs text-white/70 mt-2 truncate">
              {contact.phone}
            </div>
            <div className="mt-4 font-mono text-xs font-bold text-[#f4cb38] uppercase">
              Connect ↗
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121316] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#00c2ff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#f4cb38] transition-all group block"
          >
            <div className="font-mono text-[10px] text-[#00c2ff] font-bold uppercase mb-1">
              OPEN SOURCE CODE
            </div>
            <div className="font-display text-xl uppercase tracking-tight text-white group-hover:text-[#00c2ff] transition-colors truncate">
              GitHub Repos
            </div>
            <div className="font-grotesk text-xs text-white/70 mt-2 truncate">
              github.com/youssef-joe
            </div>
            <div className="mt-4 font-mono text-xs font-bold text-[#00c2ff] uppercase">
              Inspect Repos ↗
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121316] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#ff4d4d] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#f4cb38] transition-all group block"
          >
            <div className="font-mono text-[10px] text-[#ff4d4d] font-bold uppercase mb-1">
              PROFESSIONAL NETWORK
            </div>
            <div className="font-display text-xl uppercase tracking-tight text-white group-hover:text-[#ff4d4d] transition-colors truncate">
              LinkedIn
            </div>
            <div className="font-grotesk text-xs text-white/70 mt-2 truncate">
              linkedin.com/in/youssef-ali
            </div>
            <div className="mt-4 font-mono text-xs font-bold text-[#ff4d4d] uppercase">
              Connect Profile ↗
            </div>
          </a>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div>
            &copy; 2026 Youssef Ali Ahmed &bull; Systems Architecture &amp; R&amp;D
          </div>
          <div className="flex items-center gap-4">
            <a href="#top" className="text-[#f4cb38] hover:underline uppercase font-bold">
              ↑ Back to Top
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
