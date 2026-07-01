import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import ProjectsTeaser from './components/ProjectsTeaser';
import Consulting from './components/Consulting';
import Contact from './components/Contact';
import ResumePage from './pages/ResumePage';
import ServicesPage from './pages/ServicesPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ApkudoProductBrief from './pages/apkudo/ApkudoProductBrief';
import ApkudoCurrentState from './pages/apkudo/ApkudoCurrentState';
import ApkudoFutureState from './pages/apkudo/ApkudoFutureState';
import ApkudoDiscovery from './pages/apkudo/ApkudoDiscovery';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Background />
      <ProjectsTeaser />
      <Consulting />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <Navigation />

        <main id="main-content" role="main" aria-label="Main content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects/apkudo" element={<ProjectDetailPage projectId="apkudo" />} />
            <Route path="/projects/apkudo/product-brief" element={<ApkudoProductBrief />} />
            <Route path="/projects/apkudo/current-state" element={<ApkudoCurrentState />} />
            <Route path="/projects/apkudo/future-state" element={<ApkudoFutureState />} />
            <Route path="/projects/apkudo/discovery-questionnaire" element={<ApkudoDiscovery />} />
            <Route path="/projects/84-51" element={<ProjectDetailPage projectId="84-51" />} />
            <Route path="/projects/blackbaud" element={<ProjectDetailPage projectId="blackbaud" />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-8" role="contentinfo" aria-label="Site footer">
          <div className="container">
            <div className="text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Diana Wallace. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Customer Education &amp; Technical Enablement Leader • Fortune 500 Enterprise Experience
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
