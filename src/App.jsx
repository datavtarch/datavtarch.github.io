import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Mail, Phone, MapPin, Menu, X, ExternalLink, MoveRight, Maximize2, Layers, Calculator, Check, Cpu, Terminal, Command, MonitorPlay, Cuboid, Sun, Moon, Heart, MessageCircle } from 'lucide-react';

/* ========================================================
   GLOBAL ICONS & CONSTANTS
======================================================== */
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

const PROJECTS_DATA = [
  { id: 1, title: "Căn Hộ Vinhomes Japandi", tags: ["Nội thất", "120M2"], image: IMAGES.projectVinhomes, pdfLink: "documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf", desc: "Thiết kế nội thất căn hộ Japandi. Áp dụng D5 Render mô phỏng ánh sáng thực.", category: "Nội thất" },
  { id: 2, title: "Đà Lạt House", tags: ["Kiến trúc", "Nghỉ dưỡng"], image: IMAGES.projectDaLatHouse, pdfLink: "documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf", desc: "Kiến trúc khu nghỉ dưỡng Đà Lạt.", category: "Kiến trúc" },
  { id: 3, title: "Căn Hộ Caledon", tags: ["Nội thất"], image: IMAGES.projectCaledon, pdfLink: "documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf", desc: "Nội thất chung cư cao cấp Caledon.", category: "Nội thất" },
  { id: 4, title: "Wabi Sabi Villa", tags: ["Kiến trúc", "Nội thất"], image: IMAGES.projectWabi, pdfLink: "documents/D5 RENDER - WABI.pdf", desc: "Biệt thự phong cách Wabi Sabi.", category: "Kiến trúc" },
  { id: 5, title: "Chung Cư Cao Cấp", tags: ["Kiến trúc", "Cảnh quan"], image: IMAGES.projectChungCu, pdfLink: "documents/SKETCHUP + D5 RENDER -  CHUNG CƯ DỰNG.pdf", desc: "Dự án quy hoạch chung cư hiện đại.", category: "Cảnh quan" },
];

const IG_POSTS = Array.from({ length: 53 }, (_, i) => {
  const id = (i + 1).toString().padStart(2, '0');
  if (id === '16' || id === '17') return null;
  return { image: `${id}.webp`, likes: `${(Math.random() * 5 + 0.5).toFixed(1)}k`, comments: Math.floor(Math.random() * 100), link: "https://www.instagram.com/vtarch99/" };
}).filter(Boolean);

/* ========================================================
   COMPONENTS
======================================================== */
const TiltCard = ({ children, className, onClick }) => <div className={className} onClick={onClick}>{children}</div>;
const MagneticButton = ({ children, className, onClick }) => <button className={className} onClick={onClick}>{children}</button>;

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
        if (text === "") { setIsDeleting(false); setPhraseIdx((prev) => (prev + 1) % phrases.length); }
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) { setIsDeleting(true); }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx, phrases]);
  return <span className="text-[#D95A2B] font-bold">{text}<span className="inline-block w-1.5 h-4 bg-[#D95A2B] ml-1 animate-pulse align-middle"></span></span>;
};

/* ========================================================
   LAYOUT COMPONENTS (Shared)
======================================================== */
function Layout({ children, isLightMode, setIsLightMode, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[#D95A2B] selection:text-[var(--text-main)] relative overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-color)]/80 border-b border-[var(--border-color)] backdrop-blur-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="logo/logo.jpg" alt="VTARCH" className="w-12 h-12 object-contain logo-icon" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-widest font-heading text-[var(--text-main)] uppercase">VTARCH</span>
              <span className="text-[var(--text-muted)] text-[7px] font-mono tracking-[0.15em] uppercase font-bold">Architecture & Design</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLightMode(!isLightMode)} className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md">{isLightMode ? <Moon size={16} /> : <Sun size={16} />}</button>
            <nav className="hidden lg:flex items-center space-x-6 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">
              <Link to="/" className="text-[10px] font-bold font-mono text-[var(--text-muted)] hover:text-[#D95A2B] tracking-widest uppercase transition-colors">Trang Chủ</Link>
              <Link to="/portfolio" className="text-[10px] font-bold font-mono text-[var(--text-muted)] hover:text-[#D95A2B] tracking-widest uppercase transition-colors">Portfolio</Link>
              <Link to="/store" className="text-[10px] font-bold font-mono text-[var(--text-muted)] hover:text-[#D95A2B] tracking-widest uppercase transition-colors">Cửa Hàng</Link>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 rounded-lg flex items-center justify-center lg:hidden bg-[var(--glass-bg)] border border-[var(--border-color)] hover:text-[#D95A2B] backdrop-blur-md">{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[var(--bg-color)]/95 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-8 text-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black hover:text-[#D95A2B] uppercase tracking-widest font-heading">Trang chủ</Link>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black hover:text-[#D95A2B] uppercase tracking-widest font-heading">Dự án</Link>
          <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black hover:text-[#D95A2B] uppercase tracking-widest font-heading">Cửa hàng</Link>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="max-w-6xl mx-auto px-4 py-20 border-t border-[var(--border-color)] text-center">
        <h3 className="text-3xl font-black font-heading uppercase mb-8">Cổng <span className="text-[#D95A2B]">Giao Tiếp</span></h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-mono text-sm">
          <a href="mailto:vtarch99@gmail.com" className="px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all">vtarch99@gmail.com</a>
          <a href="tel:0385550506" className="px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 font-bold hover:bg-[#D95A2B] hover:text-black transition-all">038.555.0506</a>
        </div>
        <div className="mt-20 border-t border-[var(--border-color)] pt-8"><p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase">&copy; {new Date().getFullYear()} VTARCH. SYSTEM ONLINE.</p></div>
      </footer>
    </div>
  );
}

/* ========================================================
   PAGE: HOME
======================================================== */
function Home({ setSelectedProject }) {
  return (
    <div className="pt-32 space-y-32 px-4 md:px-6">
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D95A2B] animate-pulse"></span>
          <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">Architect & 3D Visualizer</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-heading mb-6 drop-shadow-xl">Nguyễn Văn <br/><span className="text-[#D95A2B]">Thanh.</span></h1>
        <div className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[50px] flex flex-col justify-center">
          <span>&gt; SYSTEM: <Typewriter phrases={["Loading D5 Render Environment...", "Ready: Kiến tạo không gian siêu thực."]} /></span>
        </div>
        <div className="flex gap-4">
          <Link to="/portfolio" className="btn-accent px-8 py-4 text-xs uppercase font-mono flex items-center gap-2">Dự án <MoveRight size={14} /></Link>
          <Link to="/store" className="btn-outline-luxury px-8 py-4 text-xs uppercase font-mono">Cửa hàng</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div><h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B]">&gt; FEATURED</h2><h3 className="text-4xl font-black font-heading uppercase">Dự Án <span className="text-[#D95A2B]">Nổi Bật</span></h3></div>
          <Link to="/portfolio" className="text-[#D95A2B] font-mono text-xs hover:underline flex items-center gap-2">XEM TẤT CẢ <ExternalLink size={14}/></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map(proj => (
            <TiltCard key={proj.id} className="luxury-card aspect-[4/3] cursor-pointer group" onClick={() => setSelectedProject(proj)}>
              <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#D95A2B] uppercase mb-2">{proj.category}</span>
                <h4 className="text-xl font-black font-heading uppercase">{proj.title}</h4>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto border-t border-[var(--border-color)] pt-32 text-center">
        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6"><InstagramIcon size={24} /></div>
        <h3 className="text-4xl font-black font-heading uppercase">Social Feed</h3>
        <a href="https://www.instagram.com/vtarch99/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B]">&gt; @vtarch99</a>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {IG_POSTS.slice(0, 6).map((post, idx) => {
            const prefix = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;
            return (
              <a key={idx} href={post.link} className="aspect-square luxury-card overflow-hidden group">
                <img src={`${prefix}instagram/${post.image}`.replace(/\/+/g, '/')} alt="IG" loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ========================================================
   PAGE: PORTFOLIO
======================================================== */
function Portfolio({ setSelectedProject }) {
  const [filter, setFilter] = useState("Tất cả");
  const categories = ["Tất cả", "Nội thất", "Kiến trúc", "Cảnh quan"];
  const filtered = filter === "Tất cả" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 md:px-6 pb-32">
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase font-heading mb-8">Port<span className="text-[#D95A2B]">folio.</span></h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#D95A2B] text-white' : 'bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#D95A2B]'}`}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(proj => (
          <TiltCard key={proj.id} className="luxury-card aspect-square cursor-pointer group" onClick={() => setSelectedProject(proj)}>
            <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <div className="flex gap-2 mb-3">
                {proj.tags.map((t, i) => <span key={i} className="tag-accent text-[8px]">{t}</span>)}
              </div>
              <h3 className="text-2xl font-black font-heading uppercase">{proj.title}</h3>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   PAGE: STORE
======================================================== */
function Store() {
  const items = [
    { img: IMAGES.storeIndochine, title: "Indochine Hoài cổ", price: "$18", tags: ["D5 ASSET"] },
    { img: IMAGES.storeJapandi, title: "Japandi Hiện đại", price: "$15", tags: ["D5 ASSET"] }
  ];
  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 md:px-6 pb-32">
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase font-heading mb-4">Store <span className="text-[#D95A2B]">D5.</span></h2>
        <p className="text-[var(--text-muted)] font-mono text-sm uppercase tracking-widest">&gt; Premium Architecture Assets for D5 Render</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <TiltCard key={idx} className="luxury-card aspect-[4/3] cursor-pointer group flex flex-col justify-end">
            <img src={item.img} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] to-transparent opacity-90"></div>
            <div className="relative z-20 p-8">
              <h3 className="text-3xl font-black font-heading uppercase">{item.title}</h3>
              <div className="flex items-center justify-between mt-6 border-t border-[var(--border-color)] pt-6">
                <span className="text-[#D95A2B] font-bold text-3xl">{item.price}</span>
                <button className="btn-accent px-6 py-3 text-xs font-mono uppercase">Mua Ngay</button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   MAIN APP ROUTER
======================================================== */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) { progress = 100; clearInterval(interval); setTimeout(() => setIsLoading(false), 400); }
      setLoadingProgress(progress);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [isLightMode]);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-[99999] bg-[#100D0B] flex flex-col items-center justify-center transition-all duration-700`}>
        <img src="logo/logo.jpg" alt="VTARCH" className="w-40 h-40 mb-6 object-contain filter invert brightness-200" />
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative"><div className="absolute top-0 left-0 h-full bg-[#D95A2B] transition-all duration-300" style={{ width: `${loadingProgress}%` }}></div></div>
        <div className="mt-4 font-mono text-[10px] text-gray-500 tracking-[0.2em]">BOOTING_VTARCH_SYSTEM <span className="text-[#D95A2B] font-bold">{loadingProgress}%</span></div>
      </div>
    );
  }

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/PROFILE-VTARCH-/'}>
      <style dangerouslySetInnerHTML={{ __html: `
        :root { --bg-color: #100D0B; --text-main: #ffffff; --text-muted: #9ca3af; --border-color: rgba(255, 255, 255, 0.1); --glass-bg: rgba(20, 16, 14, 0.4); }
        [data-theme="light"] { --bg-color: #F4F1ED; --text-main: #1C1917; --text-muted: #57534E; --border-color: rgba(0, 0, 0, 0.08); --glass-bg: rgba(255, 255, 255, 0.5); }
        body { font-family: 'Inter', sans-serif; background-color: var(--bg-color); color: var(--text-main); }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .tag-accent { background: #D95A2B; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 8px; font-weight: 800; text-transform: uppercase; font-family: 'Space Mono'; }
        .btn-accent { background: #D95A2B; color: #FFF; border-radius: 8px; font-weight: 800; transition: all 0.3s ease; }
        .btn-outline-luxury { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; color: #fff; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .luxury-card { border-radius: 1.25rem; overflow: hidden; position: relative; background: var(--glass-bg); backdrop-filter: blur(4px); border: 1px solid var(--border-color); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2); transition: border-color 0.3s ease; }
        .luxury-card:hover { border-color: rgba(217, 90, 43, 0.5); }
      ` }} />
      
      <Layout isLightMode={isLightMode} setIsLightMode={setIsLightMode}>
        <Routes>
          <Route path="/" element={<Home setSelectedProject={setSelectedProject} />} />
          <Route path="/portfolio" element={<Portfolio setSelectedProject={setSelectedProject} />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Layout>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 transition-all duration-500">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#14100E] rounded-2xl overflow-hidden border border-[#D95A2B]/30 flex flex-col md:flex-row">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center text-white hover:bg-[#D95A2B] transition-colors"><X size={18} /></button>
            <div className="w-full md:w-3/5 h-[40vh] md:h-full"><img src={selectedProject.image} alt={selectedProject.title} loading="lazy" className="w-full h-full object-cover" /></div>
            <div className="w-full md:w-2/5 p-12 flex flex-col justify-center">
              <div className="flex gap-2 mb-6">{selectedProject.tags.map(t => <span key={t} className="tag-accent">{t}</span>)}</div>
              <h2 className="text-3xl font-black font-heading uppercase mb-6">{selectedProject.title}</h2>
              <p className="text-sm text-gray-400 font-mono leading-relaxed mb-10">&gt; {selectedProject.desc}</p>
              <div className="flex gap-3">
                <a href={`${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}${selectedProject.pdfLink}`.replace(/\/+/g, '/')} target="_blank" rel="noreferrer" className="btn-outline-luxury px-8 py-4 text-xs font-mono">XEM PDF</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}
