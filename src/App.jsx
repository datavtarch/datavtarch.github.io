import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Layout from './components/Layout';
import { ProjectModal } from './components/UI';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Store = lazy(() => import('./pages/Store'));
const GraduationProject = lazy(() => import('./pages/GraduationProject'));

const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
    <div className="relative w-44 h-44 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-4 rounded-full border border-[#D95A2B]/30 animate-pulse" />
      <div className="absolute w-32 h-32 bg-[#D95A2B]/20 blur-3xl" />
      <span className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-[#D95A2B] uppercase">Loading</span>
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
      progress += Math.floor(Math.random() * 22) + 18;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 280);
      }
      setLoadingProgress(progress);
    }, 55);
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
    return () => { lenis.destroy(); cancelAnimationFrame(id); };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[#080604] flex flex-col items-center justify-center transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,90,43,0.18),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-44 h-44 rounded-full border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(217,90,43,0.18)]">
            <div className="absolute inset-3 rounded-full border border-[#D95A2B]/30" />
            <img
              src="logo/logo.jpg"
              alt="VTARCH"
              className="w-28 h-28 object-contain filter invert brightness-200 opacity-90"
            />
          </div>
          <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D95A2B] to-[#F3A06D] transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-5 font-mono text-[10px] text-[#9A8F87] tracking-[0.28em] uppercase">
            Initializing VTARCH <span className="text-[#D95A2B] font-bold">{loadingProgress}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-color: #080604;
          --panel-color: #120E0B;
          --text-main: #F8F4EF;
          --text-muted: #9A8F87;
          --accent: #D95A2B;
          --accent-soft: rgba(217, 90, 43, 0.14);
          --border-color: rgba(255, 255, 255, 0.09);
          --glass-bg: rgba(18, 14, 11, 0.64);
        }
        [data-theme="light"] {
          --bg-color: #F4F1ED;
          --panel-color: #FFFFFF;
          --text-main: #1C1917;
          --text-muted: #6B625D;
          --accent: #D95A2B;
          --accent-soft: rgba(217, 90, 43, 0.10);
          --border-color: rgba(28, 25, 23, 0.10);
          --glass-bg: rgba(255, 255, 255, 0.72);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: auto; }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background:
            radial-gradient(circle at 18% 8%, rgba(217,90,43,0.18), transparent 28%),
            radial-gradient(circle at 82% 18%, rgba(255,255,255,0.06), transparent 24%),
            linear-gradient(180deg, #080604 0%, var(--bg-color) 42%, #0D0907 100%);
          color: var(--text-main);
          transition: background-color 0.5s ease, color 0.5s ease;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.05;
          background-image:
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }
        ::selection { background: var(--accent); color: #fff; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .section-shell { max-width: 1180px; margin: 0 auto; padding-left: 20px; padding-right: 20px; }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent);
          border: 1px solid rgba(217,90,43,0.24);
          background: rgba(217,90,43,0.08);
          border-radius: 999px;
          padding: 8px 14px;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .22em;
          text-transform: uppercase;
        }
        .eyebrow::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 18px var(--accent);
        }
        .neo-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018));
          backdrop-filter: blur(18px);
          box-shadow: 0 26px 80px rgba(0,0,0,0.36);
        }
        .neo-card::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 42%, transparent 62%);
          opacity: 0;
          transform: translateX(-30%);
          transition: opacity .45s ease, transform .7s ease;
        }
        .neo-card:hover::after { opacity: 1; transform: translateX(30%); }
        .tag-accent {
          background: rgba(217,90,43,0.15);
          color: #F3A06D;
          border: 1px solid rgba(217,90,43,0.24);
          padding: 5px 10px;
          border-radius: 999px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-family: 'Space Mono', monospace;
        }
        .btn-accent {
          background: linear-gradient(135deg, #D95A2B, #F08A56);
          color: #fff;
          border-radius: 999px;
          font-weight: 900;
          transition: transform .3s ease, box-shadow .3s ease, filter .3s ease;
          box-shadow: 0 16px 40px rgba(217,90,43,0.24);
        }
        .btn-accent:hover { transform: translateY(-3px); filter: brightness(1.06); box-shadow: 0 22px 54px rgba(217,90,43,0.36); }
        .btn-outline-luxury {
          background: rgba(255,255,255,0.035);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          color: var(--text-main);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease;
          backdrop-filter: blur(14px);
        }
        .btn-outline-luxury:hover { border-color: rgba(217,90,43,0.55); color: var(--accent); transform: translateY(-3px); }
        .luxury-card {
          border-radius: 1.45rem;
          overflow: hidden;
          position: relative;
          background: var(--glass-bg);
          backdrop-filter: blur(18px);
          border: 1px solid var(--border-color);
          transition: transform .45s cubic-bezier(0.4, 0, 0.2, 1), border-color .45s ease, box-shadow .45s ease;
          box-shadow: 0 20px 60px rgba(0,0,0,.24);
        }
        .luxury-card:hover { border-color: rgba(217,90,43,0.55); transform: translateY(-8px); box-shadow: 0 28px 80px rgba(0,0,0,.42); }
        .gradient-title {
          background: linear-gradient(135deg, var(--text-main) 0%, #F3A06D 52%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .soft-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 38px 38px;
        }
      ` }} />
      
      <Layout isLightMode={isLightMode} setIsLightMode={setIsLightMode}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home setSelectedProject={setSelectedProject} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio setSelectedProject={setSelectedProject} />} />
            <Route path="/store" element={<Store />} />
            <Route path="/graduation-project" element={<GraduationProject />} />
          </Routes>
        </Suspense>
      </Layout>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Router>
  );
}
