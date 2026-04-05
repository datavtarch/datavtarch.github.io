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
  portrait: "/projects/PROFILE_NGUYỄN_VĂN_THANH.jpg", 
  projectDaLatHouse: "/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.jpg", 
  projectWabi: "/projects/D5_RENDER_-_WABI.jpg", 
  projectWabiTrung: "/projects/D5_RENDER_-_WABI_TRUNG.jpg", 
  projectChungCu: "/projects/SKETCHUP__D5_RENDER_-__CHUNG_CƯ_DỰNG.jpg", 
  projectVinhomes: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  projectCaledon: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  storeJapandi: "/projects/AI_-_Phong_cách_Japandi.jpg", 
  storeIndochine: "/projects/AI_-_Phong_cách_Indochine.jpg", 
  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.jpg"
};

const IG_POSTS = [
  { image: IMAGES.projectCaledon, likes: "1.2k", comments: 34, link: "https://www.instagram.com/vtarch99/" },
  { image: IMAGES.projectVinhomes, likes: "856", comments: 12, link: "https://www.instagram.com/vtarch99/" },
  { image: IMAGES.projectDaLatHouse, likes: "3.4k", comments: 142, link: "https://www.instagram.com/vtarch99/" },
  { image: IMAGES.storeIndochine, likes: "920", comments: 8, link: "https://www.instagram.com/vtarch99/" },
  { image: IMAGES.projectWabi, likes: "2.1k", comments: 56, link: "https://www.instagram.com/vtarch99/" },
  { image: IMAGES.projectChungCu, likes: "542", comments: 5, link: "https://www.instagram.com/vtarch99/" },
];

/* ========================================================
   COMPONENT: TILT CARD (HIỆU ỨNG 3D MẠNH MẼ)
======================================================== */
const TiltCard = ({ children, className, onClick, onMouseEnter, onMouseLeave }) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; 
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeaveInner = () => {
    setStyle({ 
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`, 
      transition: 'transform 0.5s ease-out' 
    });
    if(onMouseLeave) onMouseLeave();
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveInner}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

/* ========================================================
   COMPONENT: MAGNETIC BUTTON (NÚT BẤM TỪ TÍNH)
======================================================== */
const MagneticButton = ({ children, className, onClick, onMouseEnter, onMouseLeave }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    
    // Khôi phục lại offset để không bị 'văng' chuột (vòng lặp feedback do getBoundingClientRect bao gồm transform hiện tại)
    const originalLeft = rect.left - position.x;
    const originalTop = rect.top - position.y;
    
    const x = e.clientX - originalLeft - rect.width / 2;
    const y = e.clientY - originalTop - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeaveInner = () => {
    setPosition({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <button
      ref={btnRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveInner}
      onMouseEnter={onMouseEnter}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
      }}
    >
      {children}
    </button>
  );
};

/* ========================================================
   MAIN APP
======================================================== */
/* ========================================================
   COMPONENT: TYPEWRITER (HIỆU ỨNG GÕ CHỮ AI)
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
        if (text === currentPhrase) {
          setIsDeleting(true);
        }
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
  
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const flashlightRef = useRef(null);
  
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // States cho Công cụ Báo giá
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
      progress += Math.floor(Math.random() * 12) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 600); 
      }
      setLoadingProgress(progress);
    }, 100);
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

    const handleMouseMove = (e) => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.translate = `${e.clientX - 16}px ${e.clientY - 16}px`;
      }
      if (flashlightRef.current) {
        flashlightRef.current.style.translate = `${e.clientX - 350}px ${e.clientY - 350}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [isLoading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

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

  const handleMouseEnter = () => {
    if (cursorOuterRef.current) {
      cursorOuterRef.current.classList.add('scale-150', 'border-[#D95A2B]', 'bg-[#D95A2B]/10');
      cursorOuterRef.current.classList.remove('border-[var(--border-color)]', 'scale-100');
    }
    if (cursorInnerRef.current) {
      cursorInnerRef.current.classList.add('opacity-0');
      cursorInnerRef.current.classList.remove('opacity-100');
    }
  };

  const handleMouseLeave = () => {
    if (cursorOuterRef.current) {
      cursorOuterRef.current.classList.remove('scale-150', 'border-[#D95A2B]', 'bg-[#D95A2B]/10');
      cursorOuterRef.current.classList.add('border-[var(--border-color)]', 'scale-100');
    }
    if (cursorInnerRef.current) {
      cursorInnerRef.current.classList.remove('opacity-0');
      cursorInnerRef.current.classList.add('opacity-100');
    }
  };

  const handleSliderMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div 
      className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[#D95A2B] selection:text-[var(--text-main)] cursor-none relative overflow-x-hidden"
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;800;900&family=Space+Mono:wght@400;700&display=swap');
        
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
        body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; background-color: var(--bg-color); color: var(--text-main); }

        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        @media (min-width: 1024px) { * { cursor: none !important; } }

        /* Lưới kiến trúc chìm */
        .bg-grid-subtle {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        /* KHỐI KÍNH MỜ (GLASSMORPHISM) CỨNG CÁP HƠN */
        .luxury-card {
          border-radius: 1.25rem; 
          overflow: hidden; 
          position: relative;
          background: var(--glass-bg); 
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
          border-left: 1px solid var(--border-color);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .luxury-card:hover {
          transform: translateY(-5px);
          border-color: rgba(217, 90, 43, 0.5);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(217, 90, 43, 0.1);
        }

        /* Gradient mạnh để làm nổi bật Typography */
        .gradient-overlay { background: linear-gradient(to top, var(--bg-color) 0%, transparent 100%); }

        /* TECH TAGS GÓC CẠNH */
        .tag-accent {
          background-color: #D95A2B; color: #fff; font-family: 'Space Mono', monospace; font-weight: 700;
          padding: 6px 12px; border-radius: 4px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .tag-outline {
          background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.15);
          color: #bfaea3; font-family: 'Space Mono', monospace; font-weight: 700;
          padding: 6px 12px; border-radius: 4px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .reveal-on-scroll { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }
        .reveal-on-scroll.revealed { opacity: 1; transform: translateY(0); }
        .delay-100 { transition-delay: 150ms; }
        .delay-200 { transition-delay: 300ms; }

        /* BUTTON CỨNG CÁP NAM TÍNH */
        .btn-outline-luxury {
          background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; /* Góc nhọn */
          color: #fff; display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.3s ease; backdrop-filter: blur(10px);
        }
        .btn-outline-luxury:hover { border-color: #D95A2B; color: #D95A2B; background: rgba(217, 90, 43, 0.05); box-shadow: 0 0 20px rgba(217, 90, 43, 0.2); }

        .btn-accent { 
          background: #D95A2B; color: #FFF; border-radius: 8px; font-weight: 800; transition: all 0.3s ease; 
        }
        .btn-accent:hover { box-shadow: 0 0 20px rgba(217, 90, 43, 0.5); transform: translateY(-2px); }

        /* RANGE SLIDER CÔNG NGHỆ */
        input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; height: 24px; width: 16px; border-radius: 4px; /* Thanh trượt nam tính */
          background: #D95A2B; cursor: ew-resize; margin-top: -10px;
          box-shadow: 0 0 15px rgba(217, 90, 43, 0.5);
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%; height: 4px; cursor: pointer; background: rgba(255,255,255,0.1); border-radius: 0px;
        }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #100D0B; }
        ::-webkit-scrollbar-thumb { background: #332A25; border-radius: 0px; }
        ::-webkit-scrollbar-thumb:hover { background: #D95A2B; }

        .clay-filter { filter: grayscale(100%) contrast(1.1) brightness(1.2) sepia(20%) hue-rotate(5deg); }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; white-space: nowrap; animation: marquee 35s linear infinite; }
        .text-outline { -webkit-text-stroke: 2px var(--text-muted); color: transparent; }
        [data-theme="light"] .text-outline { -webkit-text-stroke: 2px var(--border-color); }

        /* Focus Hover Rule */
        .focus-container:hover .focus-item { opacity: 0.3; filter: grayscale(80%) blur(3px); transform: scale(0.98); }
        .focus-container .focus-item:hover { opacity: 1 !important; filter: grayscale(0%) blur(0px) !important; transform: scale(1.05) translateY(-5px) !important; z-index: 30; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }

      `}} />

      {/* --- CINE BG VIDEO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: isLightMode ? 0.3 : 0.4 }}>
         {/* Placeholder video kiến trúc */}
         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover filter grayscale-[50%]">
             <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587427202_large.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/70 to-transparent"></div>
      </div>

      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}
        <div ref={flashlightRef} className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D95A2B]/10 rounded-full blur-[80px] pointer-events-none z-10 hidden lg:block opacity-80 mix-blend-screen"></div>
        {/* Khối sáng cam góc trái trên */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#D95A2B]/15 rounded-full blur-[120px]"></div>
        {/* Khối sáng trắng góc phải giữa */}
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] bg-[var(--glass-bg)] rounded-full blur-[100px]"></div>
        {/* Khối sáng cam góc trái dưới */}
        <div className="absolute bottom-[-10%] left-[10%] w-[30vw] h-[30vw] bg-[#D95A2B]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="fixed inset-0 bg-grid-subtle pointer-events-none z-0 opacity-30"></div>

      {/* --- MÀN HÌNH KHỞI ĐỘNG (PRE-LOADER LUXURY) --- */}
      <div className={`fixed inset-0 z-[99999] bg-[var(--bg-color)] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="w-16 h-16 bg-[#D95A2B] rounded-lg flex items-center justify-center text-[var(--text-main)] font-black text-2xl font-heading mb-8 shadow-[0_0_30px_rgba(217,90,43,0.4)] animate-pulse">
            VT
        </div>
        <div className="w-48 h-1 bg-[var(--glass-bg)] rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-[#D95A2B] transition-all duration-300" style={{ width: `${loadingProgress}%` }}></div>
        </div>
        <div className="mt-4 font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] flex items-center gap-2">
           <span>LOADING_CORE</span> <span className="text-[#D95A2B] font-bold">{loadingProgress}%</span>
        </div>
      </div>

      {/* --- CUSTOM CURSOR --- */}
      <div 
        ref={cursorOuterRef}
        className="hidden lg:flex fixed top-0 left-0 w-8 h-8 border-[1.5px] rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out items-center justify-center mix-blend-screen border-[var(--border-color)] scale-100"
      >
        <div ref={cursorInnerRef} className="w-1 h-1 bg-white rounded-full transition-opacity duration-300 opacity-100"></div>
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-color)]/80 border-b border-[var(--border-color)] backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between relative z-10">
          
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="w-10 h-10 bg-[#D95A2B] rounded-lg flex items-center justify-center text-[var(--text-main)] font-black text-xl leading-none pt-0.5 group-hover:shadow-[0_0_15px_#D95A2B] transition-all">
              VT
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-widest leading-none font-heading text-[var(--text-main)] transition-all uppercase">Thanh.</span>
              <span className="text-[var(--text-muted)] text-[8px] font-mono tracking-[0.2em] uppercase mt-1.5 font-bold">Architecture</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[var(--glass-bg)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md shadow-lg"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <nav className="hidden lg:flex items-center space-x-6 mr-4 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">
               {['Dịch vụ', 'Kỹ Năng', 'Dự án', 'Cửa hàng', 'Báo Giá'].map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => scrollToSection(['services', 'skills', 'projects', 'store', 'estimator'][idx])} 
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="text-[10px] font-bold font-mono text-[var(--text-muted)] hover:text-[#D95A2B] tracking-widest uppercase transition-colors"
                  >
                     {item}
                  </button>
               ))}
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all bg-[var(--glass-bg)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] lg:hidden backdrop-blur-md">
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <MagneticButton onClick={() => scrollToSection('contact')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hidden lg:flex btn-accent px-6 py-2.5 text-[10px] uppercase tracking-widest font-mono">
               Hợp Tác Ngay
            </MagneticButton>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg-color)]/95 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-24 right-8 font-mono text-[#D95A2B] text-[10px] flex items-center gap-2 font-bold border border-[#D95A2B]/30 bg-[#D95A2B]/10 px-3 py-1.5 rounded-md">
           <span className="w-2 h-2 rounded-full bg-[#D95A2B] animate-pulse"></span> ONLINE_STATUS
        </div>
        <nav className="flex flex-col items-center space-y-8 text-center w-full max-w-xs relative">
          {['Trang chủ', 'Dịch vụ', 'Dự án', 'Cửa hàng', 'Báo giá', 'Liên hệ'].map((item, idx) => (
            <button key={idx} onClick={() => scrollToSection(['home', 'services', 'projects', 'store', 'estimator', 'contact'][idx])} className="text-3xl font-black text-[var(--text-main)] hover:text-[#D95A2B] uppercase tracking-widest transition-colors font-heading">
              {item}
            </button>
          ))}
        </nav>
      </div>

      <main className="pt-32 pb-32 max-w-6xl mx-auto px-4 md:px-6 space-y-32 relative z-10">
        
        {/* 1. HERO SECTION (MẠNH MẼ, CÁ TÍNH NAM TÍNH) */}
        <section id="home" className="flex flex-col items-center text-center pt-10 pb-16 reveal-on-scroll max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10 mb-8 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-[#D95A2B] animate-pulse"></span>
               <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">Architect & 3D Visualizer</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] uppercase tracking-tighter text-[var(--text-main)] font-heading mb-6 drop-shadow-xl">
               Nguyễn Văn <br/>
               <span className="text-[#D95A2B]">Thanh.</span>
            </h1>
            
            <div className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[50px] flex flex-col justify-center">
               <span>&gt; SYSTEM: <Typewriter phrases={["Loading D5 Render Environment...", "Khởi tạo thuật toán AI Upscale...", "Đang tính toán Global Illumination...", "Ready: Kiến tạo không gian siêu thực."]} /></span>
               <span>&gt; Định tuyến không gian kiến trúc 3D.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
               <MagneticButton onClick={() => scrollToSection('projects')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn-accent w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2">
                  Khám phá Portfolio <MoveRight size={14} />
               </MagneticButton>
               <MagneticButton onClick={() => scrollToSection('store')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn-outline-luxury w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-mono gap-2">
                  <Command size={14}/> Thư viện D5
               </MagneticButton>
            </div>
        </section>

        {/* 2. SECTION: DỊCH VỤ VÀ QUY TRÌNH */}
        <section id="services" className="reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                
                <div className="lg:col-span-5 space-y-6">
                    <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D95A2B] bg-[#D95A2B]/10 w-max px-3 py-1 rounded-md">&gt; CORE_EXPERTISE</h2>
                    <h3 className="text-4xl font-black tracking-tight font-heading uppercase text-[var(--text-main)] mb-6">Dịch Vụ <br/><span className="text-[#D95A2B]">Kỹ Thuật</span></h3>
                    
                    <div className="space-y-4">
                        <div 
                          className="flex gap-4 p-5 luxury-card hover:border-[#D95A2B]/50 transition-colors"
                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#D95A2B]/10 border border-[#D95A2B]/30 flex items-center justify-center text-[#D95A2B] shrink-0">
                                <MonitorPlay size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--text-main)] mb-1 text-sm md:text-base uppercase tracking-wide">Diễn họa 3D Kiến trúc (CGI)</h4>
                                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-mono">Kết xuất hình ảnh tĩnh (Still Image) và Video Animation 3D chân thực bằng thuật toán D5 Render.</p>
                            </div>
                        </div>
                        
                        <div 
                          className="flex gap-4 p-5 luxury-card hover:border-[#D95A2B]/50 transition-colors"
                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#D95A2B]/10 border border-[#D95A2B]/30 flex items-center justify-center text-[#D95A2B] shrink-0">
                                <Cuboid size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--text-main)] mb-1 text-sm md:text-base uppercase tracking-wide">Dựng Hình Sketchup</h4>
                                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-mono">Xây dựng Model 3D chuẩn xác. Quản lý file nhẹ, tối ưu lưới (Wireframe) cho quá trình render.</p>
                            </div>
                        </div>

                        <div 
                          className="flex gap-4 p-5 luxury-card border-[#D95A2B]/50 shadow-[0_0_20px_rgba(217,90,43,0.15)] transition-colors relative overflow-hidden group"
                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <div className="absolute top-0 right-0 px-3 py-1 bg-[#D95A2B] text-[var(--text-main)] text-[8px] font-bold tracking-widest font-mono z-10 rounded-bl-md">AI POWERED</div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D95A2B]/0 to-[#D95A2B]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-12 h-12 rounded-lg bg-[#D95A2B]/20 border border-[#D95A2B]/50 flex items-center justify-center text-[#D95A2B] shrink-0 relative z-10 shadow-[0_0_15px_rgba(217,90,43,0.3)]">
                                <Cpu size={20} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-[var(--text-main)] mb-1 text-sm md:text-base uppercase tracking-wide flex items-center gap-2">Hệ Sinh Thái AI <Sparkles size={14} className="text-[#D95A2B]" /></h4>
                                <ul className="text-xs text-[var(--text-muted)] leading-relaxed space-y-1 mt-2 font-mono">
                                    <li>&gt; Nâng cấp ảnh Render (Upscale) đạt chuẩn siêu thực.</li>
                                    <li>&gt; Custom GPT tự động Color Grading & Hậu kỳ.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 luxury-card p-8 md:p-10 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-black text-[var(--text-main)] mb-8 font-heading uppercase tracking-wide">Tiến Trình Thực Thi</h3>
                    
                    <div className="relative border-l-2 border-[#332A25] ml-3 space-y-8">
                        <div className="relative pl-8">
                            <div className="absolute w-6 h-6 bg-[#D95A2B] rounded-md -left-[13px] top-0 flex items-center justify-center text-black font-bold text-[10px] font-mono shadow-[0_0_10px_rgba(217,90,43,0.5)]">01</div>
                            <h4 className="text-[var(--text-main)] font-bold mb-1 uppercase text-sm">Tiếp nhận & Nghiên cứu (Brief)</h4>
                            <p className="text-xs text-[var(--text-muted)] font-mono">Nắm bắt bản vẽ CAD, moodboard và định hướng ánh sáng.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute w-6 h-6 bg-[var(--glass-bg)] border border-[#554D47] rounded-md -left-[13px] top-0 flex items-center justify-center text-[var(--text-main)] font-bold text-[10px] font-mono">02</div>
                            <h4 className="text-[var(--text-main)] font-bold mb-1 uppercase text-sm">Dựng hình thô (Clay Model)</h4>
                            <p className="text-xs text-[var(--text-muted)] font-mono">Lên khối 3D trắng. Chốt tỷ lệ không gian trước khi add vật liệu.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute w-6 h-6 bg-[var(--glass-bg)] border border-[#554D47] rounded-md -left-[13px] top-0 flex items-center justify-center text-[var(--text-main)] font-bold text-[10px] font-mono">03</div>
                            <h4 className="text-[var(--text-main)] font-bold mb-1 uppercase text-sm">Vật liệu & Ánh sáng (PBR)</h4>
                            <p className="text-xs text-[var(--text-muted)] font-mono">Thiết lập thông số vật liệu và tính toán ánh sáng trên D5 Render.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute w-6 h-6 bg-[#D95A2B]/20 border border-[#D95A2B] rounded-md -left-[13px] top-0 flex items-center justify-center text-[#D95A2B] font-bold text-[10px] font-mono">04</div>
                            <h4 className="text-[#D95A2B] font-bold mb-1 uppercase text-sm flex items-center gap-2">Final Render & AI Enhance</h4>
                            <p className="text-xs text-[var(--text-muted)] font-mono">Kết xuất ảnh 4K. Tối ưu chi tiết bằng Trí tuệ Nhân tạo.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* 3. SECTION: KỸ NĂNG SO SÁNH (SLIDER TRƯỚC/SAU) */}
        <section id="skills" className="reveal-on-scroll">
          <div className="mb-10 px-2 flex flex-col items-center text-center">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B] bg-[#D95A2B]/10 w-max px-3 py-1 rounded-md">&gt; INTERACTIVE_MODE</h2>
            <h3 className="text-4xl font-black tracking-tight font-heading uppercase text-[var(--text-main)]">Cấu Trúc <span className="text-[#D95A2B]">Ánh Sáng</span></h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)] mt-4 max-w-md mx-auto font-mono">Trượt dải điều khiển để kiểm tra thuật toán chiếu sáng trên bản dựng thô.</p>
          </div>

          <div 
            className="w-full max-w-5xl mx-auto relative aspect-[4/3] md:aspect-[21/9] luxury-card overflow-hidden cursor-ew-resize select-none border border-[#D95A2B]/20"
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)} onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleSliderMove} onTouchMove={handleSliderMove}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            <img src={IMAGES.compareRender} alt="Final Render" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute top-6 right-6 z-10 tag-accent opacity-90 backdrop-blur-md shadow-lg border border-[#D95A2B]/50">FINAL_RENDER</div>

            <div 
              className="absolute inset-0 pointer-events-none z-10 border-r-2 border-[#D95A2B] shadow-[2px_0_15px_rgba(217,90,43,0.5)]" 
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
                <img src={IMAGES.compareRender} alt="Clay Model" className="absolute inset-0 w-full h-full object-cover clay-filter pointer-events-none" />
                <div className="absolute top-6 left-6 tag-outline bg-[var(--glass-bg)] text-[var(--text-main)] shadow-lg">CLAY_MODEL</div>
            </div>

            <div 
              className="absolute top-0 bottom-0 w-0 z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[var(--glass-bg)] border-2 border-[#D95A2B] rounded-lg flex items-center justify-center text-[#D95A2B] shadow-[0_0_20px_rgba(217,90,43,0.8)] backdrop-blur-md">
                  <ArrowLeftRight size={18} />
               </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION: DỰ ÁN TILT */}
        <section id="projects">
          <div className="mb-12 px-2 flex flex-col items-center text-center reveal-on-scroll">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B] bg-[#D95A2B]/10 w-max px-3 py-1 rounded-md">&gt; DATABASE: PORTFOLIO</h2>
            <h3 className="text-4xl font-black tracking-tight font-heading uppercase text-[var(--text-main)]">Dự Án <span className="text-[#D95A2B]">Tiêu Biểu</span></h3>
          </div>

          <div className="space-y-12">
            <TiltCard 
              className="focus-item luxury-card aspect-[4/5] sm:aspect-square md:aspect-[16/9] cursor-pointer group reveal-on-scroll"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProject({
                title: "Căn Hộ Vinhomes Japandi", tags: ["NỘI THẤT DÂN DỤNG", "120M2", "D5 RENDER"], image: IMAGES.projectVinhomes,
                pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf",
                desc: "Thiết kế nội thất căn hộ 3 phòng ngủ. Áp dụng phong cách Japandi. Tập trung mô phỏng ánh sáng tự nhiên bằng D5 Render."
              })}
            >
              <img src={IMAGES.projectVinhomes} alt="Vinhomes" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 gradient-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                <div className="max-w-md">
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="tag-accent">NỘI THẤT P.JAPANDI</span>
                     <span className="tag-outline border-[var(--border-color)]">PDF NĂNG LỰC</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-[var(--text-main)] uppercase leading-snug font-heading mb-2 drop-shadow-md">Căn Hộ Vinhomes Japandi</h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] group-hover:bg-[#D95A2B] group-hover:border-[#D95A2B] transition-colors backdrop-blur-md">
                   <Maximize2 size={18} />
                </div>
              </div>
            </TiltCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 focus-container">
               <TiltCard 
                 className="focus-item luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-100"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Kiến trúc Đà Lạt House", tags: ["KIẾN TRÚC", "NGHỈ DƯỠNG", "NGOẠI THẤT"], image: IMAGES.projectDaLatHouse,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf",
                    desc: "Thiết kế kiến trúc khu nghỉ dưỡng mộng mơ tại Đà Lạt. Tôn trọng tối đa địa hình tự nhiên, hướng trọn view nhìn núi đồi xung quanh."
                 })}
               >
                 <img src={IMAGES.projectDaLatHouse} alt="Đà Lạt" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex justify-between items-end pointer-events-none">
                   <div>
                     <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-[var(--border-color)] bg-[var(--glass-bg)]">KIẾN TRÚC TỔNG THỂ</span></div>
                     <h3 className="text-2xl font-black text-[var(--text-main)] uppercase font-heading">Đà Lạt House</h3>
                   </div>
                 </div>
               </TiltCard>

               <TiltCard 
                 className="focus-item luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-200"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Căn Hộ Caledon", tags: ["NỘI THẤT", "D5 RENDER"], image: IMAGES.projectCaledon,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf",
                    desc: "Dự án thi công thiết kế và render nội thất chung cư cao cấp. Không gian ấm cúng, sang trọng với các tông màu hiện đại."
                 })}
               >
                 <img src={IMAGES.projectCaledon} alt="Caledon" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 pointer-events-none">
                   <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-[var(--border-color)] bg-[var(--glass-bg)]">NỘI THẤT CĂN HỘ</span></div>
                   <h3 className="text-2xl font-black text-[var(--text-main)] uppercase font-heading">Căn Hộ Caledon</h3>
                 </div>
               </TiltCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 focus-container">
               <TiltCard 
                 className="focus-item luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-100"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Chung Cư Cao Cấp", tags: ["RENDER AI", "DỰNG HÌNH"], image: IMAGES.projectChungCu,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER -  CHUNG CƯ DỰNG.pdf",
                    desc: "Phương án thiết kế đồ họa 3D kiến trúc chung cư và các tiện ích nội khu đỉnh cao."
                 })}
               >
                 <img src={IMAGES.projectChungCu} alt="Chung Cu" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-[var(--text-main)] uppercase font-heading drop-shadow-lg">Dựng Hình Chung Cư</h3>
                 </div>
               </TiltCard>

               <TiltCard 
                 className="focus-item luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-200"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Nội Thất Wabi Sabi", tags: ["NỘI THẤT", "WABI"], image: IMAGES.projectWabi,
                    pdfLink: "/documents/D5 RENDER - WABI.pdf",
                    desc: "Triết lý thiết kế Wabi Sabi đề cao vẻ đẹp mộc mạc ẩn giấu trong sự không hoàn hảo."
                 })}
               >
                 <img src={IMAGES.projectWabi} alt="Wabi Sabi" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-[var(--text-main)] uppercase font-heading drop-shadow-lg">Wabi Sabi</h3>
                 </div>
               </TiltCard>
               
               <TiltCard 
                 className="focus-item luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-300"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Wabi Trung Thấp Tầng", tags: ["NỘI THẤT", "D5 RENDER"], image: IMAGES.projectWabiTrung,
                    pdfLink: "/documents/D5 RENDER - WABI TRUNG.pdf",
                    desc: "Dự án Render Wabi Trung thể hiện tông màu ấm trầm mang dáng vẻ thiền định tĩnh lặng."
                 })}
               >
                 <img src={IMAGES.projectWabiTrung} alt="Wabi Trung" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-[var(--text-main)] uppercase font-heading drop-shadow-lg">Wabi Trung</h3>
                 </div>
               </TiltCard>
            </div>
          </div>
        </section>

        {/* 5. SECTION: CỬA HÀNG 3D */}
        <section id="store" className="reveal-on-scroll">
          <div className="mb-10 px-2 flex flex-col items-center text-center">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B] bg-[#D95A2B]/10 w-max px-3 py-1 rounded-md">&gt; ASSET_MODULE</h2>
            <h3 className="text-4xl font-black tracking-tight font-heading uppercase text-[var(--text-main)]">Thư Viện <span className="text-[#D95A2B]">D5 Render</span></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 focus-container">
            <TiltCard className="focus-item luxury-card aspect-[4/3] cursor-pointer group flex flex-col justify-end" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="absolute top-4 right-4 bg-white text-black text-[9px] font-mono font-bold px-3 py-1 rounded shadow-lg uppercase z-20">HOT</div>
              <img src={IMAGES.storeIndochine} alt="Indochine" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale-[30%] group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/60 to-transparent opacity-90"></div>
              
              <div className="relative z-20 p-6 md:p-8 w-full pointer-events-none">
                <div className="flex gap-1 mb-3">
                    <span className="tag-accent border-none text-[var(--text-main)] shadow-md">SU 2021 + D5 RENDER</span>
                </div>
                <h3 className="text-2xl font-black text-[var(--text-main)] leading-tight mb-2 font-heading">Scene Indochine Hoài cổ</h3>
                <p className="font-mono text-[10px] text-[var(--text-muted)] mb-6">&gt; 3D_Model + D5_Config + Maps</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] pointer-events-auto">
                   <span className="text-[#D95A2B] font-bold text-2xl font-mono">$18</span>
                   <button className="btn-outline-luxury w-10 h-10 hover:border-[#D95A2B] hover:bg-[#D95A2B]/10 rounded-lg"><ExternalLink size={16}/></button>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="focus-item luxury-card aspect-[4/3] cursor-pointer group flex flex-col justify-end" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={IMAGES.storeJapandi} alt="Japandi" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale-[30%] group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/60 to-transparent opacity-90"></div>
              
              <div className="relative z-20 p-6 md:p-8 w-full pointer-events-none">
                <div className="flex gap-1 mb-3">
                    <span className="tag-accent border-none text-[var(--text-main)] shadow-md">SU 2021 + D5 RENDER</span>
                </div>
                <h3 className="text-2xl font-black text-[var(--text-main)] leading-tight mb-2 font-heading">Scene Japandi Hiện đại</h3>
                <p className="font-mono text-[10px] text-[var(--text-muted)] mb-6">&gt; SU_Purge + D5_Day/Night</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] pointer-events-auto">
                   <span className="text-[#D95A2B] font-bold text-2xl font-mono">$15</span>
                   <button className="btn-outline-luxury w-10 h-10 hover:border-[#D95A2B] hover:bg-[#D95A2B]/10 rounded-lg"><ExternalLink size={16}/></button>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* --- SECTION: INSTAGRAM GALLERY --- */}
        <section id="instagram" className="reveal-on-scroll border-t border-[var(--border-color)] pt-32">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                <InstagramIcon size={24} />
             </div>
             <h3 className="text-4xl font-black font-heading uppercase text-[var(--text-main)] mb-2">Social Feed</h3>
             <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer" className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                &gt; @vtarch99
             </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6 focus-container px-2 sm:px-0 max-w-5xl mx-auto">
             {IG_POSTS.map((post, idx) => (
                <a 
                  key={idx} href={post.link} target="_blank" rel="noreferrer" 
                  className="focus-item aspect-square overflow-hidden relative group cursor-pointer lg:rounded-lg bg-[var(--glass-bg)] border border-[var(--border-color)]"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                >
                   <img src={post.image} alt={`IG Post`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold font-mono text-sm md:text-lg z-20 backdrop-blur-[2px]">
                      <div className="flex items-center gap-2"><Heart size={20} className="fill-white" /> {post.likes}</div>
                      <div className="flex items-center gap-2"><MessageCircle size={20} className="fill-white" /> {post.comments}</div>
                   </div>
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 z-20">
                      <InstagramIcon size={16} className="text-white drop-shadow-md" />
                   </div>
                </a>
             ))}
          </div>
          
          <div className="mt-16 flex justify-center">
             <MagneticButton onClick={() => window.open('https://www.instagram.com/vtarch99/', '_blank')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn-outline-luxury px-8 py-4 text-xs uppercase tracking-widest font-mono gap-3 items-center flex">
                 <InstagramIcon size={16}/> Khám phá Instagram
             </MagneticButton>
          </div>
        </section>

        {/* 6. SECTION: HỆ THỐNG BÁO GIÁ TỰ ĐỘNG */}
        <section id="estimator" className="reveal-on-scroll">
           <div className="luxury-card p-8 md:p-12 border border-[#D95A2B]/30 bg-[var(--bg-color)]">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                  
                  <div className="w-full md:w-1/2 space-y-8">
                      <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D95A2B]/10 rounded border border-[#D95A2B]/20 text-[#D95A2B] text-[10px] font-mono font-bold mb-3">
                             <Calculator size={12}/> AUTO_QUOTE_SYSTEM
                          </div>
                          <h3 className="text-3xl font-black text-[var(--text-main)] font-heading uppercase mb-2">Dự Toán <span className="text-[#D95A2B]">Hệ Thống</span></h3>
                          <p className="text-sm text-[var(--text-muted)] font-mono">&gt; Thiết lập thông số để truy xuất báo giá sơ bộ.</p>
                      </div>

                      <div className="space-y-6">
                          <div className="space-y-3">
                              <div className="flex justify-between items-center text-sm font-bold text-[var(--text-main)] font-mono">
                                  <span>&gt; SỐ LƯỢNG VIEWS</span>
                                  <span className="text-[#D95A2B] text-2xl">{viewsCount}</span>
                              </div>
                              <input type="range" min="1" max="15" value={viewsCount} onChange={(e) => setViewsCount(parseInt(e.target.value))} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                              <p className="text-[10px] text-[var(--text-muted)] font-mono text-right border-b border-[var(--border-color)] pb-2">Đơn giá cơ bản: 800.000đ/View</p>
                          </div>

                          <div className="space-y-3">
                              <label className="text-xs font-bold text-[#D95A2B] mb-2 block font-mono">&gt; TÙY CHỌN MỞ RỘNG (ADD-ONS)</label>
                              <div className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${needModeling ? 'bg-[#D95A2B]/10 border-[#D95A2B]' : 'bg-[var(--glass-bg)] border-[var(--border-color)] hover:border-[#D95A2B]/50'}`} onClick={() => setNeedModeling(!needModeling)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                  <div className="flex items-center gap-4">
                                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${needModeling ? 'bg-[#D95A2B] border-[#D95A2B]' : 'border-gray-600'}`}>{needModeling && <Check size={14} className="text-black font-bold" />}</div>
                                      <div>
                                          <p className="text-sm text-[var(--text-main)] font-bold uppercase">Dựng Model 3D</p>
                                          <p className="text-[10px] text-[var(--text-muted)] font-mono mt-0.5">Xây dựng hình khối từ bản vẽ 2D CAD.</p>
                                      </div>
                                  </div>
                                  <span className="text-xs text-[#D95A2B] font-mono font-bold">+2TR</span>
                              </div>

                              <div className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${needAI ? 'bg-[#D95A2B]/10 border-[#D95A2B]' : 'bg-[var(--glass-bg)] border-[var(--border-color)] hover:border-[#D95A2B]/50'}`} onClick={() => setNeedAI(!needAI)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                  <div className="flex items-center gap-4">
                                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${needAI ? 'bg-[#D95A2B] border-[#D95A2B]' : 'border-gray-600'}`}>{needAI && <Check size={14} className="text-black font-bold" />}</div>
                                      <div>
                                          <p className="text-sm text-[var(--text-main)] font-bold uppercase flex items-center gap-2">AI Enhancement <Cpu size={14} className="text-[#D95A2B]"/></p>
                                          <p className="text-[10px] text-[var(--text-muted)] font-mono mt-0.5">Xử lý nhiễu và Upscale 4K.</p>
                                      </div>
                                  </div>
                                  <span className="text-xs text-[#D95A2B] font-mono font-bold">+200K/V</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full md:w-1/2 bg-[var(--bg-color)] p-6 md:p-10 rounded-2xl border border-[#D95A2B]/20 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
                      <h4 className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-widest mb-6 border-b border-[#333] pb-4">&gt; KẾT QUẢ TRUY XUẤT</h4>
                      
                      <div className="flex flex-col mb-8">
                          <span className="text-5xl md:text-6xl font-black text-[#D95A2B] font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(217,90,43,0.3)]">{formatVND(estimatedPrice)}</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-mono mt-2">* Thông số mang tính chất tham khảo khởi điểm.</span>
                      </div>

                      <div className="bg-[#D95A2B]/5 border border-[#D95A2B]/30 p-4 rounded-xl mb-8">
                         <p className="text-xs text-[var(--text-main)] font-mono flex items-start gap-2">
                            <span className="text-[#D95A2B] mt-0.5">★</span> Hệ thống sẽ tặng kèm gói Color Grading tự động hóa bằng Custom GPT cho toàn bộ ảnh.
                         </p>
                      </div>

                      <MagneticButton 
                        onClick={() => { window.location.href = `mailto:vtarch99@gmail.com?subject=Tư vấn Render 3D - Dự toán: ${formatVND(estimatedPrice)}`; }}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                        className="w-full btn-accent py-4 md:py-5 text-sm uppercase tracking-widest font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,90,43,0.3)]"
                      >
                         [ KHỞI ĐỘNG DỰ ÁN ] <MoveRight size={16} />
                      </MagneticButton>
                  </div>

              </div>
           </div>
        </section>

        {/* 7. SECTION: LIÊN HỆ */}
        <section id="contact" className="pb-10 pt-10 reveal-on-scroll">
           <div className="text-center">
              <h3 className="text-3xl font-black text-[var(--text-main)] font-heading uppercase mb-2 tracking-wide">Cổng <span className="text-[#D95A2B]">Giao Tiếp</span></h3>
              <div className="w-12 h-1 bg-[#D95A2B] mx-auto mt-4 mb-8"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-mono text-sm mb-6">
                 <a href="mailto:vtarch99@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all w-full md:w-auto justify-center backdrop-blur-sm"><Mail size={16} className="text-[var(--text-muted)]" /> vtarch99@gmail.com</a>
                 <a href="tel:0385550506" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 text-[var(--text-main)] font-bold hover:bg-[#D95A2B] hover:text-black transition-all w-full md:w-auto justify-center shadow-[0_0_15px_rgba(217,90,43,0.2)]"><Phone size={16} /> 038.555.0506</a>
                 <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] w-full md:w-auto justify-center backdrop-blur-sm"><MapPin size={16} className="text-[var(--text-muted)]" /> Bình Thạnh, HCM</div>
              </div>
              <a href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" target="_blank" rel="noreferrer" className="inline-flex mt-4 group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="btn-accent px-8 py-5 text-sm uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(217,90,43,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-3">
                   <Layers size={18} /> ĐỌC HỒ SƠ NĂNG LỰC (PDF)
                </div>
              </a>

              <div className="mt-20 border-t border-[var(--border-color)] pt-8">
                 <p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase">&copy; {new Date().getFullYear()} V.THANH ARCHITECTURE. SYSTEM ONLINE.</p>
              </div>
           </div>
        </section>

      </main>

      {/* MODAL CHI TIẾT DỰ ÁN */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${selectedProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <div className="absolute inset-0 bg-[var(--bg-color)]/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
         <div className={`relative w-full max-w-5xl max-h-[90vh] bg-[var(--glass-bg)] rounded-2xl overflow-hidden border border-[#D95A2B]/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row transition-transform duration-500 ${selectedProject ? 'scale-100' : 'scale-95'}`}>
            <MagneticButton onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-[var(--bg-color)]/80 backdrop-blur-md rounded-lg border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[#D95A2B] hover:border-[#D95A2B] transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <X size={18} />
            </MagneticButton>
            <div className="w-full md:w-3/5 h-[40vh] md:h-full relative bg-[var(--bg-color)] border-b md:border-b-0 md:border-r border-[#333]">
               {selectedProject && <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />}
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
               {selectedProject && (
                 <>
                   <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, idx) => (<span key={tag} className={idx === 0 ? "tag-accent" : "tag-outline"}>{tag}</span>))}
                   </div>
                   <h2 className="text-3xl font-black text-[var(--text-main)] font-heading uppercase leading-tight mb-6">{selectedProject.title}</h2>
                   <div className="w-12 h-1 bg-[#D95A2B] mb-6"></div>
                   <p className="text-sm text-[var(--text-muted)] leading-relaxed font-mono mb-10">&gt; {selectedProject.desc}</p>
                   <div className="mt-auto flex flex-col sm:flex-row gap-3">
                     {selectedProject.pdfLink && (
                       <a href={selectedProject.pdfLink} target="_blank" rel="noreferrer" className="flex">
                         <div className="btn-outline-luxury px-8 py-4 text-xs uppercase tracking-widest font-mono shadow-[0_0_15px_rgba(217,90,43,0.2)] hover:bg-[#D95A2B]/20 w-full sm:w-auto justify-center flex items-center gap-2 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Layers size={16}/> XEM HỒ SƠ (PDF)
                         </div>
                       </a>
                     )}
                     <MagneticButton onClick={() => {setSelectedProject(null); scrollToSection('estimator');}} className="btn-accent px-8 py-4 text-xs uppercase tracking-widest font-mono justify-center flex shadow-[0_0_15px_rgba(217,90,43,0.4)] w-full sm:w-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        TƯ VẤN DỰ ÁN NÀY
                     </MagneticButton>
                   </div>
                 </>
               )}
            </div>
         </div>
      </div>

    </div>
  );
}
