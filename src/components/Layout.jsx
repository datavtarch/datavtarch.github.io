import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

const NAV_ITEMS = [
  ['/', 'Home'],
  ['/portfolio', 'Projects'],
  ['/services', 'Services'],
  ['/ai-lab', 'AI Lab'],
  ['/journal', 'Journal'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

function BrandMark({ compact = false }) {
  return (
    <span className={`brand-system ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      <span className="brand-symbol">
        <span className="brand-symbol-bar" />
        <span className="brand-symbol-diagonal" />
        <span className="brand-symbol-line" />
      </span>
      <span className="brand-word">
        <strong>VTARCH</strong>
        {!compact && <small>ARCHITECTURE VISUALIZATION / AI CGI</small>}
      </span>
    </span>
  );
}

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
            <Link to="/" className="brand-lockup" aria-label="VTARCH home">
              <BrandMark />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLightMode(!isLightMode)}
                aria-label="Toggle theme"
                className="icon-button"
              >
                {isLightMode ? <Moon size={17} /> : <Sun size={17} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="icon-button lg:hidden"
              >
                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="section-shell mobile-menu-nav">
          {NAV_ITEMS.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setMobileMenuOpen(false)}>{label}</NavLink>
          ))}
        </nav>
      </div>

      <main className="relative z-10">{children}</main>

      <footer className="site-footer section-shell">
        <div className="footer-grid">
          <div>
            <div className="mb-6"><BrandMark /></div>
            <h2 className="footer-title">Architecture Visualization. AI CGI. Design Technology.</h2>
          </div>
          <div className="footer-contact">
            <a href="mailto:vtarch99@gmail.com">vtarch99@gmail.com</a>
            <a href="tel:0385550506">038.555.0506</a>
            <span>Ho Chi Minh City / Vietnam</span>
          </div>
          <div className="footer-note">
            <Link to="/portfolio">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/ai-lab">AI Lab</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} VTARCH</span>
          <span>Architecture Visualization / D5 / AI CGI</span>
        </div>
      </footer>
    </div>
  );
}
