import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { IMAGES, INSIGHTS, PROJECTS_DATA } from '../data/constants';

const timeline = [
  ['2017', 'Đại học Kiến Trúc TP.HCM'],
  ['2021', 'Thiết kế & Diễn họa'],
  ['2023', 'Ứng dụng AI'],
  ['2025', 'Xây dựng VTARCH'],
  ['2026', 'Architecture + AI Technology'],
];

const services = [
  ['VISUAL', ['Exterior Visualization', 'Interior Visualization', 'Animation', 'AI CGI']],
  ['DESIGN', ['Architecture Design', 'Interior Design', 'Concept Design']],
  ['TECHNOLOGY', ['GPT Architecture', 'Workflow AI', 'Automation Tools', 'Custom Applications']],
];

const aiLab = [
  'GPT for Architecture',
  'AI CGI',
  'Product Visualization',
  'Interior Concept Generation',
  'Workflow Automation',
];

const process = ['Brief', 'Concept', 'Visualization', 'Refinement', 'Delivery'];

const Home = ({ setSelectedProject }) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 4);
  const heroProject = PROJECTS_DATA[3] || PROJECTS_DATA[0];

  return (
    <div className="site-redesign">
      <section className="home-hero-v2">
        <img src={heroProject.image} alt={heroProject.title} loading="eager" fetchPriority="high" />
        <div className="home-hero-v2-overlay" />
        <div className="section-shell home-hero-v2-content">
          <Reveal>
            <div className="hero-brand-system" aria-label="VTARCH">
              <span className="brand-symbol hero-brand-symbol">
                <span className="brand-symbol-bar" />
                <span className="brand-symbol-diagonal" />
                <span className="brand-symbol-line" />
              </span>
              <span className="hero-brand-word">VTARCH</span>
            </div>
            <h1>Kiến tạo hình ảnh kiến trúc bằng tư duy thiết kế và công nghệ AI</h1>
            <p>Architecture Visualization • AI CGI • Design Technology</p>
            <Link to="/portfolio" className="primary-minimal-link">Xem dự án</Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell portfolio-section">
        <Reveal className="minimal-section-heading">
          <span>01</span>
          <h2>Selected Works</h2>
        </Reveal>
        <div className="selected-works-grid">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80}>
              <button className="work-tile" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} loading={idx < 2 ? 'eager' : 'lazy'} decoding="async" />
                <span>{project.type}</span>
                <strong>{project.title}</strong>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell about-v2">
        <Reveal className="about-v2-image">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="lazy" decoding="async" />
        </Reveal>
        <Reveal className="about-v2-copy" delay={120}>
          <span className="section-kicker">02 / About VTARCH</span>
          <h2>VTARCH is an architecture visualization studio shaped by design thinking and AI technology.</h2>
          <p>
            Studio phát triển hình ảnh kiến trúc, nội thất, sản phẩm và concept không gian với trọng tâm là vật liệu,
            ánh sáng, bối cảnh và khả năng truyền tải ý tưởng.
          </p>
          <div className="timeline-list">
            {timeline.map(([year, text]) => (
              <div key={year}>
                <span>{year}</span>
                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell services-v2">
        <Reveal className="minimal-section-heading">
          <span>03</span>
          <h2>Services</h2>
        </Reveal>
        <div className="service-groups-v2">
          {services.map(([title, items], idx) => (
            <Reveal key={title} delay={idx * 80}>
              <article>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ai-lab-v2">
        <div className="section-shell">
          <Reveal className="ai-lab-v2-heading">
            <span>04</span>
            <h2>AI LAB</h2>
          </Reveal>
          <div className="ai-lab-v2-list">
            {aiLab.map((item, idx) => (
              <Reveal key={item} delay={idx * 60}>
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell process-v2">
        <Reveal className="minimal-section-heading">
          <span>05</span>
          <h2>Process</h2>
        </Reveal>
        <div className="process-line-v2">
          {process.map((item, idx) => (
            <Reveal key={item} delay={idx * 55}>
              <strong>{item}</strong>
              {idx < process.length - 1 && <span>↓</span>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell journal-v2">
        <Reveal className="minimal-section-heading">
          <span>06</span>
          <h2>Journal</h2>
        </Reveal>
        <div className="journal-grid-v2">
          {INSIGHTS.slice(0, 3).map((post, idx) => (
            <Reveal key={post.title} delay={idx * 70}>
              <Link to="/journal">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                <span>{post.category}</span>
                <strong>{post.title}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell contact-v2">
        <Reveal>
          <span className="section-kicker">07 / Contact</span>
          <h2>Let’s Talk</h2>
          <div className="contact-v2-grid">
            <a href="mailto:vtarch99@gmail.com">Email</a>
            <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <form className="contact-v2-form" onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Name" placeholder="Name" />
            <input aria-label="Email" type="email" placeholder="Email" />
            <textarea aria-label="Message" placeholder="Project brief" rows={4} />
            <button type="submit">Send</button>
          </form>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
