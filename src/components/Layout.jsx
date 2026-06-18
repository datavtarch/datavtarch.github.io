import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';

function NavLink({ to, children, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 text-[10px] font-bold font-mono tracking-[0.22em] uppercase transition-colors ${
        isActive ? 'text-[#F3A06D]' : 'text-[var(--text-muted)] hover:text-[#F3A06D]'
      }`}
    >
      {children}
      <span className={`absolute left-1 right-1 -bottom-0.5 h-px bg-[#D95A2B] transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-4xl font-black hover:text-[#D95A2B] uppercase tracking-tight font-heading transition-colors ${
        isActive ? 'text-[#D95A2B]' : 'text-[var(--text-main)]'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Layout({ children, isLightMode, setIsLightMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[#D95A2B] selection:text-white relative overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-40 px-3 md:px-5 pt-3 transition-all duration-500">
        <div
          className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? 'bg-[var(--glass-bg)]/90 border-[var(--border-color)] backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.32)]'
              : 'bg-black/10 border-white/5 backdrop-blur-md'
          }`}
        >
          <div className="px-4 md:px-5 py-3 flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3 group min-w-0">
              <div className="relative w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden flex items-center justify-center shadow-[0_0_28px_rgba(217,90,43,.14)]">
                <img src="logo/logo.jpg" alt="VTARCH" className="w-8 h-8 object-contain logo-icon" />
                <span className="absolute inset-0 bg-[#D95A2B]/0 group-hover:bg-[#D95A2B]/10 transition-colors" />
              </div>
              <div className="flex flex-col justify-center leading-none min-w-0">
                <span className="text-lg md:text-xl font-black tracking-[0.16em] font-heading text-[var(--text-main)] uppercase">
                  VTARCH
                </span>
                <span className="text-[var(--text-muted)] text-[7px] font-mono tracking-[0.18em] uppercase font-bold truncate">
                  Visualization · D5 · AI CGI
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 px-7 py-2 rounded-lg border border-white/5 bg-white/[0.025]">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">Profile</NavLink>
              <NavLink to="/portfolio">Projects</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/store">Resources</NavLink>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <a
                href="mailto:vtarch99@gmail.com"
                className="hidden md:inline-flex items-center gap-2 btn-accent px-5 py-3 text-[10px] uppercase font-mono tracking-widest"
              >
                Gửi brief <ArrowUpRight size={13} />
              </a>
              <button
                onClick={() => setIsLightMode(!isLightMode)}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all bg-white/[0.035] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md"
              >
                {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="w-10 h-10 rounded-lg flex items-center justify-center lg:hidden bg-white/[0.035] border border-[var(--border-color)] hover:text-[#D95A2B] backdrop-blur-md"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-[#080604]/96 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 soft-grid opacity-20" />
        <nav className="relative z-10 flex flex-col items-center space-y-7 text-center">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>Profile</MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/store" onClick={() => setMobileMenuOpen(false)}>Resources</MobileNavLink>
          <a href="mailto:vtarch99@gmail.com" className="btn-accent px-8 py-4 text-xs font-mono uppercase tracking-widest mt-6">
            Gửi brief dự án
          </a>
        </nav>
      </div>

      <main className="relative z-10">{children}</main>

      <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
        <a href="mailto:vtarch99@gmail.com" aria-label="Email VTARCH" className="w-12 h-12 rounded-lg btn-accent flex items-center justify-center shadow-2xl">
          <Mail size={18} />
        </a>
        <a href="tel:0385550506" aria-label="Call VTARCH" className="w-12 h-12 rounded-lg btn-outline-luxury bg-[var(--glass-bg)] flex items-center justify-center shadow-2xl">
          <Phone size={18} />
        </a>
      </div>

      <footer className="relative z-10 section-shell py-24 border-t border-[var(--border-color)] text-center">
        <div className="neo-card rounded-[2rem] p-8 md:p-12">
          <p className="eyebrow mb-6">VTARCH Visual Lab</p>
          <h3 className="text-4xl md:text-6xl font-black font-heading uppercase mb-8 tracking-tight">
            Cần hình ảnh <span className="gradient-title">ấn tượng</span> cho dự án?
          </h3>
          <p className="text-[var(--text-muted)] font-mono text-sm leading-relaxed max-w-2xl mx-auto mb-9">
            Gửi brief kiến trúc, nội thất hoặc sản phẩm. VTARCH hỗ trợ định hướng visual, render, AI concept và hậu kỳ để hình ảnh có tính thương mại hơn.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-mono text-sm">
            <a href="mailto:vtarch99@gmail.com" className="btn-outline-luxury px-7 py-4">
              vtarch99@gmail.com
            </a>
            <a href="tel:0385550506" className="btn-accent px-7 py-4">
              038.555.0506
            </a>
          </div>
          <p className="mt-10 text-[10px] font-mono text-[var(--text-muted)] tracking-[0.24em] uppercase">
            &copy; {new Date().getFullYear()} VTARCH · Architecture Visualization & AI CGI
          </p>
        </div>
      </footer>
    </div>
  );
}
