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
    <div className="portal-frame">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-white focus:text-black focus:border"
      >
        {t.skipToContent}
      </a>

      <SiteHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <PublicationsSection />
        <WritingSection />
        <GallerySection />
        <StorySection />
        <CVSection />
        <ContactSection />
      </main>
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
