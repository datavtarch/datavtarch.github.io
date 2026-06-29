import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import Layout from './components/Layout';
import { BrandMark } from './components/Brand';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const Store = lazy(() => import('./pages/Store'));
const Insights = lazy(() => import('./pages/Insights'));
const AiLab = lazy(() => import('./pages/AiLab'));
const Contact = lazy(() => import('./pages/Contact'));
const GraduationProject = lazy(() => import('./pages/GraduationProject'));

const prefersReducedMotion = () => (
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
    <div className="w-full max-w-sm border border-[var(--border-color)] p-7 bg-[var(--panel-color)]">
      <div className="text-[10px] font-mono tracking-[0.24em] text-[var(--accent)] uppercase font-bold">VTARCH</div>
      <div className="mt-5 h-1.5 theme-surface overflow-hidden rounded-sm">
        <div className="h-full w-2/3 bg-[var(--accent)] animate-pulse" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(() => !prefersReducedMotion());
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

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
    if (prefersReducedMotion()) return undefined;

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
          <div className="relative w-36 h-36 border border-[var(--border-color)] bg-[var(--panel-color)] flex items-center justify-center mb-8">
            <BrandMark className="loader-brand-mark" />
          </div>
          <div className="w-64 h-[3px] theme-surface overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-[var(--accent)] transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-5 font-mono text-[10px] text-[var(--text-muted)] tracking-[0.24em] uppercase">
            VTARCH Diễn họa kiến trúc <span className="text-[var(--accent)] font-bold">{loadingProgress}%</span>
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/store" element={<Store />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/journal" element={<Insights />} />
            <Route path="/ai-lab" element={<AiLab />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/graduation-project" element={<GraduationProject />} />
          </Routes>
        </Suspense>
      </Layout>

    </Router>
  );
}
