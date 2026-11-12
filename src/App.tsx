import { Routes, Route, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import PublicationsSection from './components/PublicationsSection';
import WritingSection from './components/WritingSection';
import GallerySection from './components/GallerySection';
import StorySection from './components/StorySection';
import CVSection from './components/CVSection';
import ContactSection from './components/ContactSection';
import { MarqueeTicker } from './components/ArtMotifs';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ui } from './data/site';
import { ErrorBoundary } from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import ArticleIndex from './pages/ArticleIndex';
import ArticleReader from './pages/ArticleReader';
import StoryPage from './pages/StoryPage';
import EditorPage from './pages/EditorPage';

function HomePage() {
  const { language } = useLanguage();
  const t = ui[language];

  return (
    <div className="bg-[#f4cb38] p-2.5 sm:p-4 md:p-6 lg:p-8 min-h-screen selection:bg-[#ff5500] selection:text-white transition-colors duration-300">
      
      {/* Outer Black Poster Frame */}
      <div className="bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] sm:shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-3 focus:bg-[#f4cb38] focus:text-black focus:font-bold focus:border-2 focus:border-black"
        >
          {t.skipToContent}
        </a>

        <SiteHeader />

        <main>
          <HeroSection />
          <MarqueeTicker text="CORE SYSTEMS // SOLDIERDB B+TREE STORAGE // RISC-V SV32 KERNEL // POSTGRESQL IN C // PEERTRUST FORENSICS // SCIENCEWERX R&D //" />
          <AboutSection />
          <WorkSection />
          <PublicationsSection />
          <GallerySection />
          <StorySection />
          <WritingSection />
          <ExperienceSection />
          <CVSection />
          <ContactSection />
        </main>
      </div>

    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="route-enter">
      <ErrorBoundary>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/writing" element={<ArticleIndex />} />
          <Route path="/writing/:slug" element={<ArticleReader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatedRoutes />
      </LanguageProvider>
    </ThemeProvider>
  );
}
