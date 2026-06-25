import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { BrandMark } from '../components/Brand';
import { IMAGES, INSIGHTS, PROJECTS_DATA } from '../data/constants';

const featuredIndexes = [3, 4, 0, 2];

const practice = [
  ['Visual', 'Diễn họa kiến trúc, nội thất, ngoại thất và bộ ảnh trình bày dự án.'],
  ['Design', 'Visual direction, mood vật liệu, ánh sáng và câu chuyện không gian.'],
  ['Technology', 'AI CGI, D5 Render, GPT architecture và workflow tự động hóa.'],
];

const labItems = ['AI CGI', 'D5 Render', 'GPT cho kiến trúc', 'Workflow AI', 'Automation'];

const facts = [
  ['100+', 'visual projects'],
  ['5+', 'years practice'],
  ['D5 + AI', 'production workflow'],
];

const getProject = (index) => PROJECTS_DATA[index];

const Home = ({ setSelectedProject }) => {
  const projects = useMemo(() => featuredIndexes.map(getProject), []);
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <main className="atelier-home">
      <section className="atelier-intro" aria-hidden="true">
        <span>VTARCH</span>
        <strong>Architecture Visualization</strong>
        <em>AI CGI / D5 Render / Design Technology</em>
      </section>

      <section className="atelier-hero" id="home">
        <nav className="atelier-nav section-shell" aria-label="VTARCH home navigation">
          <a href="#home" className="atelier-nav-brand">
            <BrandMark />
            <span>VTARCH</span>
          </a>
          <div>
            <a href="#works">Projects</a>
            <a href="#practice">Services</a>
            <a href="#lab">AI Lab</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="atelier-hero-inner section-shell">
          <div className="atelier-hero-copy">
            <span className="atelier-kicker">Available for selected architecture briefs</span>
            <h1>
              <span>Architecture</span>
              <span>Visual Studio</span>
            </h1>
            <p>
              VTARCH phát triển hình ảnh kiến trúc, nội thất và concept không gian bằng tư duy thiết kế,
              D5 Render và workflow AI. Hình ảnh là trung tâm, công nghệ là lớp tăng tốc phía sau.
            </p>
            <div className="atelier-actions">
              <Link to="/portfolio">Xem dự án <ArrowUpRight size={15} /></Link>
              <Link to="/contact">Liên hệ</Link>
            </div>
          </div>

          <button
            type="button"
            className="atelier-hanging-frame"
            onClick={() => setSelectedProject(activeProject)}
          >
            <span className="atelier-frame-strap">selected work</span>
            <img src={activeProject.image} alt={activeProject.title} loading="eager" />
            <span className="atelier-frame-caption">
              <em>{activeProject.year} / {activeProject.type}</em>
              <strong>{activeProject.title}</strong>
            </span>
          </button>
        </div>
      </section>

      <section className="atelier-works section-shell" id="works">
        <div className="atelier-section-head">
          <span>Selected Works</span>
          <h2>Dự án được kể bằng ánh sáng, vật liệu và nhịp nhìn kiến trúc.</h2>
        </div>

        <div className="atelier-work-grid">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={activeProject.id === project.id ? 'is-active' : ''}
              onMouseEnter={() => setActiveProject(project)}
              onFocus={() => setActiveProject(project)}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.title}</strong>
              <em>{project.type}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="atelier-about section-shell">
        <div>
          <span className="atelier-kicker">About VTARCH</span>
          <h2>Studio diễn họa và công nghệ kiến trúc, bắt đầu từ nền tảng thiết kế.</h2>
        </div>
        <div>
          <p>
            Nguyễn Văn Thanh, kiến trúc sư Đại học Kiến Trúc TP.HCM, xây dựng VTARCH như một giao điểm
            giữa kiến trúc, hình ảnh và công nghệ. Mỗi hình ảnh cần đủ đẹp để thu hút, đủ rõ để truyền đạt,
            và đủ đúng để phục vụ quyết định thiết kế.
          </p>
          <div className="atelier-facts">
            {facts.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atelier-practice section-shell" id="practice">
        <div className="atelier-section-head">
          <span>Practice</span>
          <h2>Ba lớp năng lực cho một workflow hình ảnh kiến trúc hiện đại.</h2>
        </div>
        <div className="atelier-practice-lines">
          {practice.map(([title, desc], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="atelier-lab" id="lab">
        <div className="section-shell atelier-lab-inner">
          <div>
            <span className="atelier-kicker">AI Lab</span>
            <h2>Motion và AI chỉ xuất hiện khi chúng làm hình ảnh kiến trúc tốt hơn.</h2>
          </div>
          <div className="atelier-lab-board">
            <img src={IMAGES.projectAIJapandiModern} alt="AI CGI architecture workflow" loading="lazy" decoding="async" />
            <div>
              {labItems.map((item) => (
                <span key={item}><Sparkles size={13} /> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-journal section-shell">
        <div className="atelier-section-head">
          <span>Journal</span>
          <h2>Ghi chú ngắn về diễn họa, D5 Render và AI trong kiến trúc.</h2>
        </div>
        <div className="atelier-journal-grid">
          {INSIGHTS.slice(0, 3).map((post) => (
            <Link to="/journal" key={post.title}>
              <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="atelier-contact section-shell" id="contact">
        <div>
          <span className="atelier-kicker">Contact</span>
          <h2>Let’s build a visual story for your next project.</h2>
        </div>
        <div className="atelier-contact-panel">
          <a href="mailto:vtarch99@gmail.com"><Mail size={16} /> vtarch99@gmail.com</a>
          <a href="tel:0385550506">038.555.0506</a>
          <Link to="/contact">Gửi brief dự án <ArrowUpRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
