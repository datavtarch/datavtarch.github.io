import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const SITE_URL = 'https://datavtarch.github.io';
const DEFAULT_TITLE = 'VTARCH | Diễn họa kiến trúc, D5 Render & AI CGI';
const DEFAULT_DESCRIPTION = 'VTARCH là portfolio của Nguyễn Văn Thanh, kiến trúc sư phát triển hình ảnh kiến trúc, diễn họa nội thất, D5 Render và AI CGI cho studio thiết kế, kiến trúc sư và chủ đầu tư.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

const routeSeo = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/about': {
    title: 'Giới thiệu VTARCH | Nguyễn Văn Thanh',
    description: 'Thông tin về VTARCH, Nguyễn Văn Thanh và định hướng diễn họa kiến trúc, D5 Render, AI CGI trong thiết kế kiến trúc.',
  },
  '/portfolio': {
    title: 'Portfolio diễn họa kiến trúc | VTARCH',
    description: 'Tổng hợp dự án diễn họa kiến trúc, diễn họa nội thất, ngoại thất, concept visual, D5 Render và AI CGI của VTARCH.',
  },
  '/services': {
    title: 'Dịch vụ diễn họa kiến trúc | VTARCH',
    description: 'Dịch vụ diễn họa kiến trúc, dựng hình, render nội thất, ngoại thất, visual concept, D5 Render và AI CGI cho kiến trúc sư, studio và chủ đầu tư.',
  },
  '/store': {
    title: 'VTARCH Store | Tài nguyên kiến trúc và AI CGI',
    description: 'Không gian tài nguyên, template, workflow và công cụ hỗ trợ diễn họa kiến trúc, D5 Render và AI CGI của VTARCH.',
  },
  '/insights': {
    title: 'Insights kiến trúc, D5 Render và AI CGI | VTARCH',
    description: 'Bài viết, ghi chú và quan điểm về diễn họa kiến trúc, workflow D5 Render, AI CGI và công nghệ thiết kế.',
  },
  '/journal': {
    title: 'Journal kiến trúc và AI CGI | VTARCH',
    description: 'Nhật ký nghề nghiệp, ghi chú học tập và quan sát về kiến trúc, diễn họa, D5 Render và AI CGI.',
  },
  '/ai-lab': {
    title: 'AI Lab kiến trúc | VTARCH',
    description: 'Thử nghiệm AI CGI, workflow AI cho kiến trúc, hình ảnh ý tưởng và các ứng dụng trí tuệ nhân tạo trong thiết kế.',
  },
  '/contact': {
    title: 'Liên hệ VTARCH | Diễn họa kiến trúc và AI CGI',
    description: 'Liên hệ VTARCH để trao đổi dự án diễn họa kiến trúc, diễn họa nội thất, ngoại thất, D5 Render và AI CGI.',
  },
  '/graduation-project': {
    title: 'Đồ án tốt nghiệp kiến trúc | VTARCH',
    description: 'Trang giới thiệu đồ án tốt nghiệp kiến trúc và quá trình phát triển hình ảnh, concept, không gian và diễn họa của VTARCH.',
  },
};

const prefersReducedMotion = () => (
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const updateMetaTag = (selector, attribute, value) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    if (selector.includes('property=')) {
      tag.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
    } else {
      tag.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
    const seo = routeSeo[pathname] || (pathname.startsWith('/portfolio/')
      ? {
        title: 'Chi tiết dự án diễn họa kiến trúc | VTARCH',
        description: 'Chi tiết dự án diễn họa kiến trúc, hình ảnh nội thất, ngoại thất, concept visual, D5 Render và AI CGI của VTARCH.',
      }
      : routeSeo['/']);
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = seo.title;

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    updateMetaTag('meta[name="description"]', 'content', seo.description);
    updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    updateMetaTag('meta[property="og:title"]', 'content', seo.title);
    updateMetaTag('meta[property="og:description"]', 'content', seo.description);
    updateMetaTag('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
    updateMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
    updateMetaTag('meta[name="twitter:title"]', 'content', seo.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', seo.description);
    updateMetaTag('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);
  }, [location.pathname]);

  return null;
};

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
      <SeoManager />
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
