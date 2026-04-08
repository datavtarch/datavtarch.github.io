import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

// ========================================================
//  HEADER / NAV (Active link highlighting)
// ========================================================
function NavLink({ to, children, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-[10px] font-bold font-mono tracking-widest uppercase transition-colors ${
        isActive
          ? 'text-[#D95A2B]'
          : 'text-[var(--text-muted)] hover:text-[#D95A2B]'
      }`}
    >
      {children}
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
      className={`text-3xl font-black hover:text-[#D95A2B] uppercase tracking-widest font-heading transition-colors ${
        isActive ? 'text-[#D95A2B]' : ''
      }`}
    >
      {children}
    </Link>
  );
}

// ========================================================
//  LAYOUT WRAPPER
// ========================================================
export default function Layout({ children, isLightMode, setIsLightMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change & close mobile menu
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Scroll listener for header style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[#D95A2B] selection:text-[var(--text-main)] relative overflow-x-hidden">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--bg-color)]/80 border-b border-[var(--border-color)] backdrop-blur-xl py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="logo/logo.jpg"
              alt="VTARCH"
              className="w-12 h-12 object-contain logo-icon"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-widest font-heading text-[var(--text-main)] uppercase">
                VTARCH
              </span>
              <span className="text-[var(--text-muted)] text-[7px] font-mono tracking-[0.15em] uppercase font-bold">
                Architecture &amp; Design
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-6 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">
              <NavLink to="/">Trang Chủ</NavLink>
              <NavLink to="/about">Giới thiệu</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/store">Cửa Hàng</NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center lg:hidden bg-[var(--glass-bg)] border border-[var(--border-color)] hover:text-[#D95A2B] backdrop-blur-md"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg-color)]/95 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-400 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-center">
          <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Trang Chủ
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            Giới thiệu
          </MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </MobileNavLink>
          <MobileNavLink to="/store" onClick={() => setMobileMenuOpen(false)}>
            Cửa Hàng
          </MobileNavLink>
        </nav>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer className="max-w-6xl mx-auto px-4 py-20 border-t border-[var(--border-color)] text-center">
        <h3 className="text-3xl font-black font-heading uppercase mb-8">
          Cổng <span className="text-[#D95A2B]">Giao Tiếp</span>
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-mono text-sm">
          <a
            href="mailto:vtarch99@gmail.com"
            className="px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all"
          >
            vtarch99@gmail.com
          </a>
          <a
            href="tel:0385550506"
            className="px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 font-bold hover:bg-[#D95A2B] hover:text-black transition-all"
          >
            038.555.0506
          </a>
        </div>
        <div className="mt-20 border-t border-[var(--border-color)] pt-8">
          <p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} VTARCH. SYSTEM ONLINE.
          </p>
        </div>
      </footer>
    </div>
  );
}
