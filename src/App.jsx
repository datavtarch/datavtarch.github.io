import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import { Mail, Phone, MapPin, Menu, X, ExternalLink, MoveRight, Maximize2, Layers, ArrowLeftRight, Calculator, Check, Cpu, Terminal, Command, MonitorPlay, Cuboid, Sparkles , Volume2, VolumeX, Sun, Moon, Play, Pause, Heart, MessageCircle } from 'lucide-react';

const IMAGES = {
  portrait: "projects/PROFILE_NGUYỄN_VĂN_THANH.webp", 
  projectDaLatHouse: "projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.webp", 
  projectWabi: "projects/D5_RENDER_-_WABI.webp", 
  projectWabiTrung: "projects/D5_RENDER_-_WABI_TRUNG.webp", 
  projectChungCu: "projects/SKETCHUP__D5_RENDER_-__CHUNG_CƯ_DỰNG.webp", 
  projectVinhomes: "projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.webp", 
  projectCaledon: "projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.webp", 
  storeJapandi: "projects/AI_-_Phong_cách_Japandi.webp", 
  storeIndochine: "projects/AI_-_Phong_cách_Indochine.webp", 
  compareRender: "projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.webp"
};

const IG_POSTS = Array.from({ length: 53 }, (_, i) => {
  const id = (i + 1).toString().padStart(2, '0');
  // Bỏ qua các ảnh không tồn tại nếu có (ví dụ 16, 17 như đã thấy ở bước trước)
  if (id === '16' || id === '17') return null;
  return {
    image: `${id}.webp`,
    likes: `${(Math.random() * 5 + 0.5).toFixed(1)}k`,
    comments: Math.floor(Math.random() * 100),
    link: "https://www.instagram.com/vtarch99/"
  };
}).filter(Boolean);

/* ========================================================
   COMPONENT: TILT CARD (Simplified)
======================================================== */
const TiltCard = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

/* ========================================================
   COMPONENT: MAGNETIC BUTTON (Simplified)
======================================================== */
const MagneticButton = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

/* ========================================================
   COMPONENT: TYPEWRITER
======================================================== */
const Typewriter = ({ phrases }) => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    const typeSpeed = isDeleting ? 30 : 60;
    const delay = isDeleting && text === "" ? 500 : (!isDeleting && text === currentPhrase ? 2500 : typeSpeed);
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) { setIsDeleting(true); }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx, phrases]);
  return (
    <span className="text-[#D95A2B] font-bold">
      {text}<span className="inline-block w-1.5 h-4 bg-[#D95A2B] ml-1 animate-pulse align-middle"></span>
    </span>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isLightMode, setIsLightMode] = useState(false);
  const [viewsCount, setViewsCount] = useState(3);
  const [needModeling, setNeedModeling] = useState(false);
  const [needAI, setNeedAI] = useState(true);
  const [needAnimation, setNeedAnimation] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    let basePricePerView = 800000; 
    let total = viewsCount * basePricePerView;
    if (needModeling) total += 2000000; 
    if (needAI) total += (viewsCount * 200000); 
    if (needAnimation) total += 5000000; 
    setEstimatedPrice(total);
  }, [viewsCount, needModeling, needAI, needAnimation]);

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 400); 
      }
      setLoadingProgress(progress);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    if (isLoading) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'auto';
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isLoading, isLightMode]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else if (!isLoading) document.body.style.overflow = 'auto';
  }, [selectedProject, isLoading]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[#D95A2B] selection:text-[var(--text-main)] relative overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        :root { --bg-color: #100D0B; --text-main: #ffffff; --text-muted: #9ca3af; --border-color: rgba(255, 255, 255, 0.1); --glass-bg: rgba(20, 16, 14, 0.4); }
        [data-theme="light"] { --bg-color: #F4F1ED; --text-main: #1C1917; --text-muted: #57534E; --border-color: rgba(0, 0, 0, 0.08); --glass-bg: rgba(255, 255, 255, 0.5); }
        body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; background-color: var(--bg-color); color: var(--text-main); }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .bg-grid-subtle { background-size: 80px 80px; background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg-color); }
        ::-webkit-scrollbar-thumb { background: #332A25; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #D95A2B; }
        .text-gradient { background: linear-gradient(135deg, #ffffff 30%, #D95A2B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .luxury-card { border-radius: 1.25rem; overflow: hidden; position: relative; background: var(--glass-bg); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border: 1px solid var(--border-color); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transition: border-color 0.3s ease; }
        .luxury-card:hover { border-color: rgba(217, 90, 43, 0.5); }
        .static-luxury-card { border-radius: 1.25rem; overflow: hidden; position: relative; background: var(--glass-bg); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border: 1px solid var(--border-color); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); }
        .reveal-on-scroll { opacity: 0; transform: translate3d(0, 20px, 0); transition: all 0.5s ease-out; }
        .reveal-on-scroll.revealed { opacity: 1; transform: translate3d(0, 0, 0); }
        .btn-outline-luxury { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; color: #fff; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .btn-outline-luxury:hover { border-color: #D95A2B; color: #D95A2B; }
        .btn-accent { background: #D95A2B; color: #FFF; border-radius: 8px; font-weight: 800; transition: all 0.3s ease; }
        input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 24px; width: 16px; border-radius: 4px; background: #D95A2B; cursor: ew-resize; margin-top: -10px; }
        input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 4px; cursor: pointer; background: rgba(255,255,255,0.1); }
        .animate-marquee { display: inline-flex; white-space: nowrap; animation: marquee 35s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .logo-icon { transition: transform 0.3s ease; mix-blend-mode: screen; }
        .logo-icon-orange { filter: sepia(1) saturate(3) hue-rotate(340deg) brightness(0.95); mix-blend-mode: screen; }
        [data-theme="light"] .logo-icon, [data-theme="light"] .logo-icon-orange { mix-blend-mode: multiply; }
      ` }} />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#D95A2B]/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] bg-[var(--glass-bg)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[30vw] h-[30vw] bg-[#D95A2B]/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none z-0 opacity-30"></div>

      <div className={`fixed inset-0 z-[99999] bg-[var(--bg-color)] flex flex-col items-center justify-center transition-all duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <img src="logo/logo.jpg" alt="VTARCH Logo" className="w-40 h-40 mb-6 object-contain logo-icon-orange" />
        <div className="w-48 h-1 bg-[var(--glass-bg)] rounded-full overflow-hidden relative"><div className="absolute top-0 left-0 h-full bg-[#D95A2B] transition-all duration-300" style={{ width: `${loadingProgress}%` }}></div></div>
        <div className="mt-4 font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em]">LOADING_CORE <span className="text-[#D95A2B] font-bold">{loadingProgress}%</span></div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-color)]/80 border-b border-[var(--border-color)] backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <img src="logo/logo.jpg" alt="VTARCH" className="w-12 h-12 object-contain logo-icon" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-widest font-heading text-[var(--text-main)] uppercase">VTARCH</span>
              <span className="text-[var(--text-muted)] text-[7px] font-mono tracking-[0.15em] uppercase font-bold">Architecture & Design</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLightMode(!isLightMode)} className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md">{isLightMode ? <Moon size={16} /> : <Sun size={16} />}</button>
            <nav className="hidden lg:flex items-center space-x-6 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">
              {['Dự án', 'Dịch vụ', 'Báo Giá', 'Cửa hàng'].map((item, idx) => (
                <button key={idx} onClick={() => scrollToSection(['projects', 'services', 'estimator', 'store'][idx])} className="text-[10px] font-bold font-mono text-[var(--text-muted)] hover:text-[#D95A2B] tracking-widest uppercase transition-colors">{item}</button>
              ))}
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 rounded-lg flex items-center justify-center lg:hidden bg-[var(--glass-bg)] border border-[var(--border-color)] hover:text-[#D95A2B] backdrop-blur-md">{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
            <MagneticButton onClick={() => scrollToSection('contact')} className="hidden lg:flex btn-accent px-6 py-2.5 text-[10px] uppercase tracking-widest font-mono">Hợp Tác Ngay</MagneticButton>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[var(--bg-color)]/95 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-8 text-center">
          {['Trang chủ', 'Dự án', 'Dịch vụ', 'Báo giá', 'Cửa hàng', 'Liên hệ'].map((item, idx) => (
            <button key={idx} onClick={() => scrollToSection(['home', 'projects', 'services', 'estimator', 'store', 'contact'][idx])} className="text-3xl font-black hover:text-[#D95A2B] uppercase tracking-widest font-heading">{item}</button>
          ))}
        </nav>
      </div>

      <main className="pt-32 pb-32 max-w-6xl mx-auto px-4 md:px-6 space-y-32 relative z-10">
        <section id="home" className="flex flex-col items-center text-center pt-10 pb-16 reveal-on-scroll max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D95A2B] animate-pulse"></span>
            <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">Architect & 3D Visualizer</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-heading mb-6 drop-shadow-xl">Nguyễn Văn <br/><span className="text-[#D95A2B]">Thanh.</span></h1>
          <div className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[50px] flex flex-col justify-center">
            <span>&gt; SYSTEM: <Typewriter phrases={["Loading D5 Render Environment...", "Khởi tạo thuật toán AI Upscale...", "Đang tính toán Global Illumination...", "Ready: Kiến tạo không gian siêu thực."]} /></span>
            <span>&gt; Định tuyến không gian kiến trúc 3D.</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <MagneticButton onClick={() => scrollToSection('projects')} className="btn-accent w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2">Khám phá Portfolio <MoveRight size={14} /></MagneticButton>
            <MagneticButton onClick={() => scrollToSection('store')} className="btn-outline-luxury w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-mono gap-2"><Command size={14}/> Thư viện D5</MagneticButton>
          </div>
        </section>

        <section id="projects" className="reveal-on-scroll">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-md">&gt; DATABASE: PORTFOLIO</h2>
            <h3 className="text-4xl font-black tracking-tight font-heading uppercase">Dự Án <span className="text-[#D95A2B]">Tiêu Biểu</span></h3>
          </div>
          <div className="space-y-12">
            <TiltCard className="focus-item luxury-card aspect-[16/9] cursor-pointer group" onClick={() => setSelectedProject({ title: "Căn Hộ Vinhomes Japandi", tags: ["NỘI THẤT", "120M2", "D5 RENDER"], image: IMAGES.projectVinhomes, pdfLink: "documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf", desc: "Thiết kế nội thất căn hộ Japandi. Áp dụng D5 Render mô phỏng ánh sáng thực." })}>
              <img src={IMAGES.projectVinhomes} alt="Vinhomes" loading="lazy" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 flex justify-between items-end">
                <div className="max-w-md"><div className="flex gap-2 mb-4"><span className="tag-accent">NỘI THẤT P.JAPANDI</span></div><h3 className="text-4xl font-black font-heading uppercase drop-shadow-md">Căn Hộ Vinhomes</h3></div>
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] flex items-center justify-center group-hover:bg-[#D95A2B] transition-colors"><Maximize2 size={18} /></div>
              </div>
            </TiltCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 focus-container">
              <TiltCard className="focus-item luxury-card aspect-[4/3] cursor-pointer group" onClick={() => setSelectedProject({ title: "Đà Lạt House", tags: ["KIẾN TRÚC", "NGHỈ DƯỠNG"], image: IMAGES.projectDaLatHouse, pdfLink: "documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf", desc: "Kiến trúc khu nghỉ dưỡng Đà Lạt." })}>
                <img src={IMAGES.projectDaLatHouse} alt="Đà Lạt" loading="lazy" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-2xl font-black font-heading uppercase">Đà Lạt House</h3></div>
              </TiltCard>
              <TiltCard className="focus-item luxury-card aspect-[4/3] cursor-pointer group" onClick={() => setSelectedProject({ title: "Căn Hộ Caledon", tags: ["NỘI THẤT"], image: IMAGES.projectCaledon, pdfLink: "documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf", desc: "Nội thất chung cư cao cấp Caledon." })}>
                <img src={IMAGES.projectCaledon} alt="Caledon" loading="lazy" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 p-8 z-20"><h3 className="text-2xl font-black font-heading uppercase">Căn Hộ Caledon</h3></div>
              </TiltCard>
            </div>
          </div>
        </section>

        <section id="services" className="reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-md w-max">&gt; CORE_EXPERTISE</h2>
              <h3 className="text-4xl font-black font-heading uppercase">Dịch Vụ <br/><span className="text-[#D95A2B]">Kỹ Thuật</span></h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 luxury-card"><MonitorPlay className="text-[#D95A2B]" /><div><h4 className="font-bold uppercase text-sm">Diễn họa 3D Kiến trúc</h4><p className="text-xs text-[var(--text-muted)] font-mono">kết xuất Still Image & Video Animation bằng D5 Render.</p></div></div>
                <div className="flex gap-4 p-5 luxury-card"><Cuboid className="text-[#D95A2B]" /><div><h4 className="font-bold uppercase text-sm">Dựng Hình Sketchup</h4><p className="text-xs text-[var(--text-muted)] font-mono">Xây dựng Model 3D chuẩn xác, tối ưu hóa Wireframe.</p></div></div>
                <div className="flex gap-4 p-5 luxury-card border-[#D95A2B]/50"><Cpu className="text-[#D95A2B]" /><div><h4 className="font-bold uppercase text-sm">Hệ Sinh Thái AI</h4><p className="text-xs text-[var(--text-muted)] font-mono">Nâng cấp ảnh 4K & Hậu kỳ bằng Custom GPT.</p></div></div>
              </div>
            </div>
            <div className="lg:col-span-7 luxury-card p-10 flex flex-col justify-center">
              <h3 className="text-xl font-black font-heading uppercase mb-8">Tiến Trình Thực Thi</h3>
              <div className="border-l-2 border-[#332A25] ml-3 space-y-8">
                <div className="relative pl-8"><div className="absolute w-6 h-6 bg-[#D95A2B] rounded-md -left-[13px] flex items-center justify-center text-black font-bold text-[10px]">01</div><h4 className="font-bold uppercase text-sm">Briefing</h4><p className="text-xs text-[var(--text-muted)] font-mono">Nghiên cứu bản vẽ CAD & Moodboard.</p></div>
                <div className="relative pl-8"><div className="absolute w-6 h-6 bg-[var(--glass-bg)] border border-[#554D47] rounded-md -left-[13px] flex items-center justify-center text-[10px]">02</div><h4 className="font-bold uppercase text-sm">Clay Model</h4><p className="text-xs text-[var(--text-muted)] font-mono">Dựng hình thô & chốt tỉ lệ khối.</p></div>
                <div className="relative pl-8"><div className="absolute w-6 h-6 bg-[#D95A2B]/20 border border-[#D95A2B] rounded-md -left-[13px] flex items-center justify-center text-[#D95A2B] text-[10px]">03</div><h4 className="font-bold uppercase text-sm text-[#D95A2B]">Final Render</h4><p className="text-xs text-[var(--text-muted)] font-mono">kết xuất 4K & AI Enhancement.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="estimator" className="reveal-on-scroll">
          <div className="static-luxury-card p-12 border border-[#D95A2B]/30">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2 space-y-8">
                <div><div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D95A2B]/10 text-[#D95A2B] text-[10px] font-mono font-bold mb-3"><Calculator size={12}/> AUTO_QUOTE_SYSTEM</div><h3 className="text-3xl font-black font-heading uppercase">Dự Toán <span className="text-[#D95A2B]">Hệ Thống</span></h3></div>
                <div className="space-y-6">
                  <div className="space-y-3"><div className="flex justify-between font-bold font-mono"><span>&gt; SỐ VIEWS</span><span className="text-[#D95A2B] text-2xl">{viewsCount}</span></div><input type="range" min="1" max="15" value={viewsCount} onChange={(e) => setViewsCount(parseInt(e.target.value))} /></div>
                  <div className="space-y-3">
                    <div className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer ${needModeling ? 'bg-[#D95A2B]/10 border-[#D95A2B]' : 'bg-[var(--glass-bg)]'}`} onClick={() => setNeedModeling(!needModeling)}><div className="flex items-center gap-4"><div className={`w-5 h-5 rounded border ${needModeling ? 'bg-[#D95A2B]' : ''}`}>{needModeling && <Check size={14} className="text-black" />}</div><span className="text-sm font-bold uppercase">Dựng 3D Model</span></div><span className="text-xs font-mono">+2TR</span></div>
                    <div className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer ${needAI ? 'bg-[#D95A2B]/10 border-[#D95A2B]' : 'bg-[var(--glass-bg)]'}`} onClick={() => setNeedAI(!needAI)}><div className="flex items-center gap-4"><div className={`w-5 h-5 rounded border ${needAI ? 'bg-[#D95A2B]' : ''}`}>{needAI && <Check size={14} className="text-black" />}</div><span className="text-sm font-bold uppercase">AI Enhancement</span></div><span className="text-xs font-mono">+200K/V</span></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-[var(--bg-color)] p-10 rounded-2xl border border-[#D95A2B]/20">
                <h4 className="text-xs text-[var(--text-muted)] font-mono uppercase mb-6">&gt; KẾT QUẢ TRUY XUẤT</h4>
                <div className="text-5xl font-black text-[#D95A2B] font-mono mb-8">{formatVND(estimatedPrice)}</div>
                <button onClick={() => window.location.href = `mailto:vtarch99@gmail.com?subject=Dự toán: ${formatVND(estimatedPrice)}`} className="w-full btn-accent py-5 uppercase font-mono flex items-center justify-center gap-2">KHỞI ĐỘNG DỰ ÁN <MoveRight size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="store" className="reveal-on-scroll">
          <div className="mb-10 text-center">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-md w-max mx-auto">&gt; ASSET_MODULE</h2>
            <h3 className="text-4xl font-black font-heading uppercase mt-2">Thư Viện <span className="text-[#D95A2B]">D5 Render</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 focus-container">
            {[ { img: IMAGES.storeIndochine, title: "Indochine Hoài cổ", price: "$18" }, { img: IMAGES.storeJapandi, title: "Japandi Hiện đại", price: "$15" } ].map((item, idx) => (
              <TiltCard key={idx} className="focus-item luxury-card aspect-[4/3] cursor-pointer group flex flex-col justify-end">
                <img src={item.img} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] to-transparent opacity-90"></div>
                <div className="relative z-20 p-8"><h3 className="text-2xl font-black font-heading uppercase">{item.title}</h3><div className="flex items-center justify-between mt-4 border-t border-[var(--border-color)] pt-4"><span className="text-[#D95A2B] font-bold text-2xl">{item.price}</span><button className="btn-outline-luxury w-10 h-10"><ExternalLink size={16}/></button></div></div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="instagram" className="reveal-on-scroll border-t border-[var(--border-color)] pt-32 text-center">
          <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6"><InstagramIcon size={24} /></div>
          <h3 className="text-4xl font-black font-heading uppercase">Social Feed</h3>
          <a href="https://www.instagram.com/vtarch99/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B]">&gt; @vtarch99</a>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-16 px-4">
            {IG_POSTS.map((post, idx) => {
              const prefix = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;
              const fullSrc = `${prefix}instagram/${post.image}`.replace(/\/+/g, '/');
              return (
                <a key={idx} href={post.link} className="aspect-square luxury-card overflow-hidden group">
                  <img src={fullSrc} alt="IG" loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-mono font-bold">
                    <div className="flex items-center gap-2"><Heart size={20} /> {post.likes}</div>
                    <div className="flex items-center gap-2"><MessageCircle size={20} /> {post.comments}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="contact" className="reveal-on-scroll text-center py-20">
          <h3 className="text-3xl font-black font-heading uppercase mb-8">Cổng <span className="text-[#D95A2B]">Giao Tiếp</span></h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-mono text-sm">
            <a href="mailto:vtarch99@gmail.com" className="px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all">vtarch99@gmail.com</a>
            <a href="tel:0385550506" className="px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 font-bold hover:bg-[#D95A2B] hover:text-black transition-all">038.555.0506</a>
          </div>
          <div className="mt-20 border-t border-[var(--border-color)] pt-8"><p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase">&copy; {new Date().getFullYear()} VTARCH. SYSTEM ONLINE.</p></div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 transition-all duration-500">
          <div className="absolute inset-0 bg-[var(--bg-color)]/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--glass-bg)] rounded-2xl overflow-hidden border border-[#D95A2B]/30 flex flex-col md:flex-row">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center text-white hover:bg-[#D95A2B] transition-colors"><X size={18} /></button>
            <div className="w-full md:w-3/5 h-[40vh] md:h-full"><img src={selectedProject.image} alt={selectedProject.title} loading="lazy" className="w-full h-full object-cover" /></div>
            <div className="w-full md:w-2/5 p-12 flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <div className="flex gap-2 mb-6">{selectedProject.tags.map(tag => <span key={tag} className="tag-accent">{tag}</span>)}</div>
              <h2 className="text-3xl font-black font-heading uppercase mb-6">{selectedProject.title}</h2>
              <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed mb-10">&gt; {selectedProject.desc}</p>
              <div className="flex gap-3">
                <a 
                  href={`${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}${selectedProject.pdfLink}`.replace(/\/+/g, '/')} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-outline-luxury px-8 py-4 text-xs font-mono"
                >
                  XEM PDF
                </a>
                <button onClick={() => {setSelectedProject(null); scrollToSection('estimator');}} className="btn-accent px-8 py-4 text-xs font-mono">TƯ VẤN</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
