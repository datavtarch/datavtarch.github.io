import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { BrandLogo } from './Brand';

const NAV_ITEMS = [
  ['/', 'Trang chủ'],
  ['/portfolio', 'Dự án'],
  ['/services', 'Dịch vụ'],
  ['/ai-lab', 'AI Lab'],
  ['/journal', 'Góc nhìn'],
  ['/about', 'Giới thiệu'],
  ['/contact', 'Liên hệ'],
];

function NavLink({ to, children, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link ${isActive ? 'is-active' : ''}`}
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
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] font-sans selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
      <header className={`site-header fixed top-0 left-0 right-0 z-40 ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="section-shell">
          <div className="site-header-inner">
            <Link to="/" className="brand-lockup" aria-label="VTARCH home" onClick={() => setMobileMenuOpen(false)}>
              <BrandLogo />
            </Link>

            <nav className="site-nav hidden lg:flex items-center">
              {NAV_ITEMS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            </nav>

            <div className="site-actions flex items-center gap-2">
              <button
                onClick={() => setIsLightMode(!isLightMode)}
                aria-label={isLightMode ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng'}
                className="icon-button"
              >
                {isLightMode ? <Moon size={17} /> : <Sun size={17} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
                className="icon-button lg:hidden"
              >
                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="section-shell mobile-menu-shell">
          <div className="mobile-menu-head">
            <span>Menu</span>
            <strong>VTARCH</strong>
          </div>
          <nav className="mobile-menu-nav">
            {NAV_ITEMS.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setMobileMenuOpen(false)}>{label}</NavLink>
            ))}
          </nav>
          <div className="mobile-menu-contact">
            <span>Diễn họa kiến trúc / D5 Render / AI CGI</span>
            <a href="mailto:vtarch99@gmail.com">vtarch99@gmail.com</a>
          </div>
        </div>
      </div>

      <main className="relative z-10">{children}</main>

      <footer className="site-footer section-shell">
        <div className="footer-grid">
          <div>
            <div className="mb-6"><BrandLogo /></div>
            <h2 className="footer-title">Diễn họa kiến trúc. AI CGI. Công nghệ thiết kế.</h2>
          </div>
          <div className="footer-contact">
            <a href="mailto:vtarch99@gmail.com">vtarch99@gmail.com</a>
            <a href="tel:0385550506">038.555.0506</a>
            <span>TP.HCM / Việt Nam</span>
          </div>
          <div className="footer-note">
            <Link to="/portfolio">Dự án</Link>
            <Link to="/services">Dịch vụ</Link>
            <Link to="/ai-lab">AI Lab</Link>
            <Link to="/journal">Góc nhìn</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} VTARCH</span>
          <span>Diễn họa kiến trúc / D5 Render / AI CGI</span>
        </div>
      </footer>
    </div>
  );
}
