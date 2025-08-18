import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Set focus management for accessibility
    document.documentElement.lang = 'en';
    
    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }, []);

  return (
    <div className="App">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" role="main" aria-label="Main content">
        <Hero />
        <About />
        <Background />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 text-white py-8" role="contentinfo" aria-label="Site footer">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Diana Wallace. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Technical Documentation Manager • SaaS Strategy • AI-Enhanced Workflows
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;