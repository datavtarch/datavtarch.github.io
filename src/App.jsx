import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

// Components & Pages
import Layout from './components/Layout';
import { ProjectModal } from './components/UI';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Store from './pages/Store';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // ── LOADING SEQUENCE ──
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 400);
      }
      setLoadingProgress(progress);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // ── SMOOTH SCROLL & THEME ──
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, [isLightMode]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[#100D0B] flex flex-col items-center justify-center transition-all duration-700">
        <img
          src="logo/logo.jpg"
          alt="VTARCH"
          className="w-40 h-40 mb-6 object-contain filter invert brightness-200"
        />
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#D95A2B] transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <div className="mt-4 font-mono text-[10px] text-gray-500 tracking-[0.2em]">
          BOOTING_VTARCH_SYSTEM{' '}
          <span className="text-[#D95A2B] font-bold">{loadingProgress}%</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-color: #100D0B;
          --text-main: #ffffff;
          --text-muted: #9ca3af;
          --border-color: rgba(255, 255, 255, 0.1);
          --glass-bg: rgba(20, 16, 14, 0.4);
        }
        [data-theme="light"] {
          --bg-color: #F4F1ED;
          --text-main: #1C1917;
          --text-muted: #57534E;
          --border-color: rgba(0, 0, 0, 0.08);
          --glass-bg: rgba(255, 255, 255, 0.5);
        }
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-main);
          transition: background-color 0.5s ease;
        }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        
        .tag-accent {
          background: #D95A2B;
          color: #fff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          font-family: 'Space Mono';
        }
        
        .btn-accent {
          background: #D95A2B;
          color: #FFF;
          border-radius: 8px;
          font-weight: 800;
          transition: all 0.3s ease;
        }
        .btn-accent:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(217, 90, 43, 0.4);
        }
        
        .btn-outline-luxury {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-main);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .btn-outline-luxury:hover {
          border-color: #D95A2B;
          color: #D95A2B;
        }
        
        .luxury-card {
          border-radius: 1.25rem;
          overflow: hidden;
          position: relative;
          background: var(--glass-bg);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-color);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .luxury-card:hover {
          border-color: rgba(217, 90, 43, 0.5);
          transform: translateY(-5px);
        }
      ` }} />
      
      <Layout isLightMode={isLightMode} setIsLightMode={setIsLightMode}>
        <Routes>
          <Route path="/" element={<Home setSelectedProject={setSelectedProject} />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio setSelectedProject={setSelectedProject} />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Layout>

      {/* Shared Components */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Router>
  );
}
