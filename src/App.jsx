import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import Layout from './components/Layout';
import { ProjectModal } from './components/UI';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Store = lazy(() => import('./pages/Store'));
const GraduationProject = lazy(() => import('./pages/GraduationProject'));

const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
    <div className="neo-card w-full max-w-sm p-7">
      <div className="text-[10px] font-mono tracking-[0.24em] text-[var(--accent)] uppercase font-bold">
        Loading workspace
      </div>
      <div className="mt-5 h-1.5 theme-surface overflow-hidden rounded-sm">
        <div className="h-full w-2/3 bg-[var(--accent)] animate-pulse" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 28) + 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 120);
      }
      setLoadingProgress(progress);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(id);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[var(--bg-color)] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-36 h-36 border border-[var(--border-color)] bg-[var(--panel-color)] flex items-center justify-center mb-8 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
            <img
              src="logo/logo.jpg"
              alt="VTARCH"
              className="w-24 h-24 object-contain logo-icon"
            />
          </div>
          <div className="w-64 h-[3px] theme-surface overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-[var(--accent)] transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-5 font-mono text-[10px] text-[var(--text-muted)] tracking-[0.24em] uppercase">
            VTARCH Visual Lab <span className="text-[var(--accent)] font-bold">{loadingProgress}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout isLightMode={isLightMode} setIsLightMode={setIsLightMode}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home setSelectedProject={setSelectedProject} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio setSelectedProject={setSelectedProject} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/store" element={<Store />} />
            <Route path="/graduation-project" element={<GraduationProject />} />
          </Routes>
        </Suspense>
      </Layout>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Router>
  );
}
