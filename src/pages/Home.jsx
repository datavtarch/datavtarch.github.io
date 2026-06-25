import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Code2,
  Download,
  Globe2,
  Layers3,
  MessageCircle,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { BrandMark } from '../components/Brand';
import { IMAGES, INSIGHTS, PROJECTS_DATA } from '../data/constants';

const featuredIndexes = [3, 0, 2, 4];

const profileStats = [
  ['01', '100+', 'Visual projects'],
  ['02', '5+', 'Years practice'],
  ['03', 'D5 + AI', 'Core workflow'],
];

const capabilityTags = ['D5 Render', 'AI CGI', 'Interior', 'Architecture'];

const techStack = ['AI CGI', 'GPT Architecture', 'D5 Render', 'Workflow AI', 'Automation'];

const contactLinks = [
  ['Email', 'vtarch99@gmail.com', 'mailto:vtarch99@gmail.com'],
  ['Phone', '038.555.0506', 'tel:0385550506'],
  ['Instagram', '@vtarch99', 'https://www.instagram.com/vtarch99/'],
  ['Portfolio', 'datavtarch.github.io', 'https://datavtarch.github.io'],
];

const getFeaturedProject = (sourceIndex) => PROJECTS_DATA[sourceIndex];

const Home = ({ setSelectedProject }) => {
  const projects = useMemo(() => featuredIndexes.map(getFeaturedProject), []);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState('projects');

  const tabContent = {
    projects,
    lab: projects.slice().reverse(),
    stack: techStack,
  };

  return (
    <main className="rho-home">
      <section className="rho-intro" aria-hidden="true">
        <div className="rho-intro-icons">
          <span><Code2 size={15} /></span>
          <span><UserRound size={15} /></span>
          <span><Globe2 size={15} /></span>
        </div>
        <strong>Welcome to VTARCH</strong>
        <em>Architecture Visual Portfolio</em>
      </section>

      <section className="rho-hero section-shell" id="home">
        <div className="rho-brand-pill">
          <span>vtarch.dev</span>
          <nav aria-label="Home quick navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="rho-hero-grid">
          <div className="rho-hero-copy">
            <span className="rho-status">Available for selected projects</span>
            <h1>
              <span>VTARCH Visual</span>
              <span>Studio</span>
            </h1>
            <div className="rho-type-line">
              <span>Architecture visualization</span>
            </div>
            <p>
              Diễn họa kiến trúc, nội thất và concept không gian bằng D5 Render, AI CGI và tư duy thiết kế.
              Tập trung vào hình ảnh sạch, rõ vật liệu, đúng tinh thần studio.
            </p>
            <div className="rho-tags">
              {capabilityTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="rho-notes">
              <span>explore selected works below</span>
              <span>open for studio and investor briefs</span>
            </div>
          </div>

          <div className="rho-lanyard-wrap" aria-label="VTARCH visual identity card">
            <div className="rho-strap">
              <span>visual studio</span>
              <span>vtarch</span>
            </div>
            <button
              className="rho-id-card"
              type="button"
              onClick={() => setSelectedProject(activeProject)}
            >
              <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" />
              <span>Nguyễn Văn Thanh</span>
              <strong>Architecture + AI CGI</strong>
            </button>
          </div>
        </div>

        <div className="rho-scroll-cue">Scroll ↓</div>
      </section>

      <section className="rho-about section-shell" id="about">
        <div className="rho-about-copy">
          <span className="rho-eyebrow">About VTARCH</span>
          <h2>Nguyễn Văn Thanh</h2>
          <p>
            Kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển hình ảnh kiến trúc qua giao thoa giữa thiết kế,
            diễn họa và công nghệ AI. Mục tiêu là giúp ý tưởng không gian được nhìn thấy nhanh hơn, rõ hơn
            và thuyết phục hơn.
          </p>
          <blockquote>
            “Turning architectural ideas into clean, atmospheric and meaningful visual experiences.”
          </blockquote>
          <div className="rho-about-actions">
            <Link to="/about"><Download size={15} /> About studio</Link>
            <Link to="/portfolio"><ArrowUpRight size={15} /> View projects</Link>
          </div>
        </div>

        <div className="rho-profile-orbit">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh portrait" loading="lazy" decoding="async" />
          <span />
          <span />
        </div>
      </section>

      <section className="rho-stats section-shell" aria-label="VTARCH quick facts">
        {profileStats.map(([index, value, label]) => (
          <article key={index}>
            <Code2 size={16} />
            <span>{index}</span>
            <strong>{value}</strong>
            <em>{label}</em>
            <ArrowUpRight size={14} />
          </article>
        ))}
      </section>

      <section className="rho-portfolio section-shell" id="portfolio">
        <div className="rho-section-center">
          <h2>Portfolio Showcase</h2>
          <p>Selected architecture visualization, AI CGI experiments and production workflow studies.</p>
        </div>

        <div className="rho-tabs" role="tablist" aria-label="Portfolio tabs">
          {[
            ['projects', 'Projects'],
            ['lab', 'AI Lab'],
            ['stack', 'Tech Stack'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={activeTab === value}
              className={activeTab === value ? 'is-active' : ''}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'stack' ? (
          <div className="rho-stack-grid">
            {tabContent.stack.map((item) => (
              <article key={item}>
                <Sparkles size={26} />
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        ) : (
          <div className="rho-project-layout">
            <div className="rho-project-card-list">
              {tabContent[activeTab].map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={activeProject.id === project.id ? 'is-active' : ''}
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <span>{project.type}</span>
                  <strong>{project.title}</strong>
                  <em>Details <ArrowUpRight size={12} /></em>
                </button>
              ))}
            </div>

            <aside className="rho-project-detail">
              <img src={activeProject.image} alt={activeProject.title} loading="lazy" decoding="async" />
              <div>
                <span>Project Portfolio</span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.desc}</p>
              </div>
              <ul>
                <li><Layers3 size={14} /> {activeProject.services.slice(0, 2).join(' / ')}</li>
                <li><Globe2 size={14} /> {activeProject.location}</li>
                <li><Sparkles size={14} /> {activeProject.year}</li>
              </ul>
            </aside>
          </div>
        )}
      </section>

      <section className="rho-journal section-shell">
        <div className="rho-section-center">
          <h2>Studio Notes</h2>
          <p>Short notes on D5 Render, AI CGI and architecture workflow.</p>
        </div>
        <div className="rho-journal-grid">
          {INSIGHTS.slice(0, 3).map((post) => (
            <Link to="/journal" key={post.title}>
              <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="rho-contact section-shell" id="contact">
        <div className="rho-contact-card">
          <span className="rho-eyebrow">Contact</span>
          <h2>Tell us about your next visual story.</h2>
          <a href="mailto:vtarch99@gmail.com"><MessageCircle size={16} /> Send brief</a>
        </div>

        <div className="rho-social-card">
          <h3>Connect with VTARCH</h3>
          <div>
            {contactLinks.map(([label, value, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span>{label}</span>
                <strong>{value}</strong>
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
