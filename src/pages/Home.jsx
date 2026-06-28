import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandMark } from '../components/Brand';
import { Reveal } from '../components/UI';
import { IMAGES, INSIGHTS, PROJECTS_DATA, getProjectCover, getProjectDetailPath } from '../data/constants';

const projectCopy = [
  {
    sourceIndex: 3,
    title: 'Celadon Modern Interior',
    type: 'Interior visualization',
    location: 'Ho Chi Minh City',
    year: '2024',
    note: 'Một khung hình nội thất được xử lý như ảnh tạp chí: ánh sáng mềm, vật liệu rõ, nhịp sống vừa đủ.',
  },
  {
    sourceIndex: 0,
    title: 'Trung tâm Thiền Làng Mai Đà Lạt',
    type: 'Architecture concept',
    location: 'Da Lat',
    year: '2024',
    note: 'Không gian thiền định được kể bằng địa hình, bóng đổ và chuyển tiếp giữa ồn ào và tĩnh lặng.',
  },
  {
    sourceIndex: 2,
    title: 'Da Lat House',
    type: 'Residential visualization',
    location: 'Da Lat',
    year: '2023',
    note: 'Một nghiên cứu về chất liệu ấm, ánh sáng tự nhiên và cảm giác cư trú trong bối cảnh cao nguyên.',
  },
  {
    sourceIndex: 4,
    title: 'Vinhomes Hybrid Interior',
    type: 'Hybrid CGI',
    location: 'Ho Chi Minh City',
    year: '2024',
    note: 'Quy trình hybrid kết hợp D5 Render và AI hậu kỳ để thử mood, vật liệu và chiều sâu hình ảnh.',
  },
];

const timeline = [
  ['2017', 'Đại học Kiến Trúc TP.HCM'],
  ['2021', 'Thiết kế & Diễn họa'],
  ['2023', 'Ứng dụng AI vào visual workflow'],
  ['2025', 'Xây dựng VTARCH'],
  ['2026', 'Architecture + AI Technology'],
];

const labItems = [
  ['AI CGI', 'Tăng tốc thử mood, ánh sáng và vật liệu trước khi đi vào render chính.'],
  ['GPT cho kiến trúc', 'Hỗ trợ phân tích brief, cấu trúc thuyết minh và phát triển hướng trình bày.'],
  ['Workflow Automation', 'Tự động hóa các bước lặp lại trong xử lý hình ảnh và hồ sơ visual.'],
];

const services = [
  ['Visual', 'Diễn họa kiến trúc, nội thất, ngoại thất, animation và hậu kỳ hình ảnh.'],
  ['Design', 'Visual direction, concept không gian, moodboard vật liệu và góc nhìn trình bày.'],
  ['Technology', 'AI CGI, GPT architecture, workflow AI và công cụ tự động hóa riêng.'],
];

const getProject = (entry) => ({
  ...PROJECTS_DATA[entry.sourceIndex],
  ...entry,
});

const Home = () => {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const projects = useMemo(() => projectCopy.map(getProject), []);
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const node = homeRef.current;
    if (!node) return undefined;

    let frame = 0;
    const updateScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        node.style.setProperty('--scroll-ratio', `${Math.min(1, window.scrollY / max)}`);
      });
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <div className="cinematic-home motion-ready" ref={homeRef}>
      <div className="motion-spotlight" aria-hidden="true" />
      <div className="motion-scanline" aria-hidden="true" />
      <section className="cinematic-hero">
        <div className="cinematic-hero-media" aria-hidden="true" />

        <div className="section-shell cinematic-hero-inner">
          <Reveal className="cinematic-hero-copy">
            <div className="reference-hero-chip">
              <BrandMark />
              <span>VTARCH Studio</span>
            </div>
            <span className="cinematic-kicker">Kiến trúc sư / Diễn họa / AI CGI</span>
            <h1 className="motion-title">
              <span>Nguyễn Văn Thanh</span>
              <span>Diễn họa kiến trúc</span>
            </h1>
            <p>
              Kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển hình ảnh kiến trúc, nội thất và concept
              không gian bằng tư duy thiết kế, D5 Render và workflow AI tinh gọn.
            </p>
            <div className="cinematic-hero-actions">
              <Link to="/portfolio">Xem dự án</Link>
              <Link to="/contact">Liên hệ</Link>
            </div>
            <div className="cinematic-hero-stats">
              <article>
                <span>01</span>
                <strong>5+</strong>
                <em>Năm kinh nghiệm</em>
              </article>
              <article>
                <span>02</span>
                <strong>100+</strong>
                <em>Dự án visual</em>
              </article>
              <article>
                <span>03</span>
                <strong>AI</strong>
                <em>CGI workflow</em>
              </article>
            </div>
          </Reveal>

          <Reveal className="reference-hero-visual" delay={120} variant="scale">
            <button className="reference-portrait-card" type="button" onClick={() => navigate('/about')}>
              <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" />
            </button>
            <div className="reference-portrait-caption">
              <span>Profile</span>
              <strong>Nguyễn Văn Thanh</strong>
              <em>Architecture Visualization / AI CGI</em>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cinematic-about section-shell">
        <Reveal className="cinematic-about-image" variant="scale">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="lazy" decoding="async" />
        </Reveal>
        <Reveal className="cinematic-about-copy" delay={100}>
          <span className="cinematic-kicker">Profile</span>
          <h2>Thông tin cá nhân trước, kỹ năng rõ ràng sau đó mới đến dự án.</h2>
          <p>
            VTARCH là portfolio của Nguyễn Văn Thanh, kiến trúc sư định hướng giao thoa giữa thiết kế,
            diễn họa kiến trúc và công nghệ AI. Mục tiêu là tạo ra hình ảnh có chất lượng trình bày,
            rõ ý tưởng không gian và đủ sức thuyết phục trong hồ sơ dự án.
          </p>
          <div className="cinematic-timeline">
            {timeline.map(([year, text]) => (
              <div key={year}>
                <span>{year}</span>
                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell cinematic-works" id="projects">
        <Reveal className="cinematic-section-title">
          <span>Portfolio showcase</span>
          <h2>Dự án được trình bày như một hệ khung hình, tối giản nhưng có chiều sâu chuyển động.</h2>
        </Reveal>

        <div className="cinematic-work-stage">
          <Reveal className="cinematic-work-preview" variant="scale">
            <div className="cinematic-preview-media">
              <img src={getProjectCover(activeProject)} alt={activeProject.title} />
            </div>
            <div>
              <span>{activeProject.year} / {activeProject.location}</span>
              <strong>{activeProject.title}</strong>
            </div>
          </Reveal>

          <div className="cinematic-work-list">
            {projects.map((project, idx) => (
              <Reveal key={project.title} delay={idx * 70}>
                <button
                  type="button"
                  className={activeProject.title === project.title ? 'is-active' : ''}
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  onClick={() => navigate(getProjectDetailPath(project))}
                >
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <strong>{project.title}</strong>
                  <em>{project.type}</em>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-services">
        <div className="section-shell">
          <Reveal className="cinematic-section-title">
            <span>Practice</span>
            <h2>Visual trước, công nghệ sau. Công nghệ chỉ xuất hiện khi nó làm hình ảnh tốt hơn.</h2>
          </Reveal>
          <div className="cinematic-service-grid">
            {services.map(([title, desc], idx) => (
              <Reveal key={title} delay={idx * 80}>
                <article>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-lab">
        <div className="section-shell cinematic-lab-inner">
          <Reveal className="cinematic-lab-heading">
            <span>AI Lab</span>
            <h2>Không phải hiệu ứng phô trương. Là lớp tăng tốc phía sau một workflow kiến trúc.</h2>
          </Reveal>

          <Reveal className="cinematic-lab-visual" delay={80} variant="scale">
            <img src={IMAGES.projectAIJapandiModern} alt="AI CGI visual workflow" loading="eager" decoding="async" />
            <img src={IMAGES.compareRender} alt="D5 Render lighting workflow" loading="eager" decoding="async" />
          </Reveal>

          <div className="cinematic-lab-list">
            {labItems.map(([title, desc], idx) => (
              <Reveal key={title} delay={idx * 70}>
                <article>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell cinematic-journal">
        <Reveal className="cinematic-section-title">
          <span>Journal</span>
          <h2>Ghi chú nghề nghiệp về render, AI và workflow thiết kế.</h2>
        </Reveal>
        <div className="cinematic-journal-grid">
          {INSIGHTS.slice(0, 3).map((post, idx) => (
            <Reveal key={post.title} delay={idx * 70}>
              <Link to="/journal">
                <img src={post.image} alt={post.title} loading="eager" decoding="async" />
                <span>{post.category}</span>
                <strong>{post.title}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell cinematic-contact">
        <Reveal>
          <span className="cinematic-kicker">Contact</span>
          <h2>Let’s build a visual story for your next project.</h2>
          <div>
            <a href="mailto:vtarch99@gmail.com">vtarch99@gmail.com</a>
            <a href="tel:0385550506">038.555.0506</a>
            <Link to="/contact">Gửi brief dự án</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
