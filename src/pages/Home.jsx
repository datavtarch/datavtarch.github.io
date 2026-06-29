import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandMark } from '../components/Brand';
import { Reveal } from '../components/UI';
import { CV_DATA } from '../data/cvData';
import { IMAGES, INSIGHTS, PROJECTS_DATA, getProjectCover, getProjectDetailPath } from '../data/constants';
import { personSchema, setPageSeo } from '../utils/seo';

const projectCopy = [
  {
    sourceIndex: 3,
    title: 'Celadon Modern Interior',
    type: 'Diễn họa nội thất',
    location: 'TP.HCM',
    year: '2024',
    note: 'Một khung hình nội thất được xử lý như ảnh tạp chí: ánh sáng mềm, vật liệu rõ, nhịp sống vừa đủ.',
  },
  {
    sourceIndex: 0,
    title: 'Trung tâm Thiền Làng Mai Đà Lạt',
    type: 'Concept kiến trúc',
    location: 'Đà Lạt',
    year: '2024',
    note: 'Không gian thiền định được kể bằng địa hình, bóng đổ và chuyển tiếp giữa ồn ào và tĩnh lặng.',
  },
  {
    sourceIndex: 2,
    title: 'Da Lat House',
    type: 'Diễn họa nhà ở',
    location: 'Đà Lạt',
    year: '2023',
    note: 'Một nghiên cứu về chất liệu ấm, ánh sáng tự nhiên và cảm giác cư trú trong bối cảnh cao nguyên.',
  },
  {
    sourceIndex: 4,
    title: 'Vinhomes Hybrid Interior',
    type: 'Diễn họa hybrid',
    location: 'TP.HCM',
    year: '2024',
    note: 'Quy trình hybrid kết hợp D5 Render và AI hậu kỳ để thử mood, vật liệu và chiều sâu hình ảnh.',
  },
];

const timeline = [
  ['2017', 'Đại học Kiến Trúc TP.HCM'],
  ['2021', 'Thiết kế & Diễn họa'],
  ['2023', 'Ứng dụng AI vào quy trình diễn họa'],
  ['2025', 'Xây dựng VTARCH'],
  ['2026', 'Kiến trúc + công nghệ AI'],
];

const labItems = [
  ['AI CGI', 'Tăng tốc thử mood, ánh sáng và vật liệu trước khi đi vào render chính.'],
  ['GPT cho kiến trúc', 'Hỗ trợ phân tích brief, cấu trúc thuyết minh và phát triển hướng trình bày.'],
  ['Tự động hóa quy trình', 'Rút gọn các bước lặp lại trong xử lý hình ảnh và hồ sơ trình bày.'],
];

const profileFacts = [
  ['Đào tạo', 'Kiến trúc sư - Đại học Kiến Trúc TP.HCM'],
  ['Kinh nghiệm', '5+ năm thiết kế, diễn họa và trình bày dự án'],
  ['Trọng tâm', 'Diễn họa kiến trúc / D5 Render / AI CGI'],
];

const capabilityPreview = [
  ['Công cụ', 'D5 Render, SketchUp, V-Ray, AutoCAD, Photoshop và hậu kỳ hình ảnh.'],
  ['Quy trình AI', 'Custom GPT, AI-CGI và các bước tự động hóa phục vụ diễn họa.'],
  ['Dấu mốc', 'Giải thưởng thiết kế nhanh, hoạt động tổ chức và cộng đồng kiến trúc.'],
];

const summaryLead = CV_DATA.summary.split('\n\n')[0];

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
    setPageSeo({
      title: 'VTARCH | Nguyễn Văn Thanh - Diễn họa kiến trúc & AI CGI',
      description:
        'Portfolio của Nguyễn Văn Thanh về diễn họa kiến trúc, diễn họa nội thất, D5 Render, AI CGI và công nghệ thiết kế cho studio kiến trúc.',
      path: '/',
      schema: personSchema,
    });
  }, []);

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
    <div className="cinematic-home editorial-home-v2 motion-ready" ref={homeRef}>
      <div className="motion-spotlight" aria-hidden="true" />
      <div className="motion-scanline" aria-hidden="true" />
      <section className="cinematic-hero">
        <div className="cinematic-hero-media" aria-hidden="true" />

        <div className="section-shell cinematic-hero-inner">
          <Reveal className="cinematic-hero-copy">
            <div className="reference-hero-chip profile-hero-chip">
              <BrandMark />
              <span>Portfolio cá nhân</span>
            </div>
            <span className="cinematic-kicker">Nguyễn Văn Thanh / VTARCH</span>
            <h1 className="motion-title">
              <span>Nguyễn Văn Thanh</span>
              <span>Kiến trúc sư diễn họa.</span>
            </h1>
            <p>
              Portfolio ghi lại quá trình phát triển hình ảnh kiến trúc, nội thất và concept không gian
              bằng nền tảng thiết kế, D5 Render và quy trình AI hỗ trợ.
            </p>
            <div className="profile-hero-facts">
              {profileFacts.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
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
                <em>Dự án hình ảnh</em>
              </article>
              <article>
                <span>03</span>
                <strong>AI</strong>
                <em>Quy trình CGI</em>
              </article>
            </div>
          </Reveal>

          <Reveal className="reference-hero-visual profile-hero-visual" delay={120} variant="scale">
            <button className="reference-portrait-card" type="button" onClick={() => navigate('/about')}>
              <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" fetchPriority="high" />
            </button>
            <div className="reference-portrait-caption">
              <span>Hồ sơ</span>
              <strong>Nguyễn Văn Thanh</strong>
              <em>Diễn họa kiến trúc / AI CGI</em>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cinematic-about section-shell profile-summary">
        <Reveal className="profile-summary-panel" variant="scale">
          <span className="cinematic-kicker">Hồ sơ trước</span>
          <h2>Nền tảng kiến trúc, diễn họa và công nghệ.</h2>
          <div className="profile-education-list">
            {CV_DATA.education.map((item, idx) => (
              <article key={item}>
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal className="cinematic-about-copy" delay={100}>
          <span className="cinematic-kicker">Nguyễn Văn Thanh</span>
          <h2>Hồ sơ năng lực của một kiến trúc sư phát triển hình ảnh.</h2>
          <p>{summaryLead}</p>
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

      <section className="cinematic-services capability-profile">
        <div className="section-shell">
          <div className="home-capability-preview">
            <Reveal className="home-capability-statement">
              <span className="cinematic-kicker">Năng lực</span>
              <h2>Kiến trúc, hình ảnh và công nghệ trong một quy trình.</h2>
              <p>
                Chuyển ý tưởng không gian thành hình ảnh rõ ràng, có chất liệu, có nhịp sáng và được hỗ trợ bởi công cụ AI phù hợp.
              </p>
              <Link to="/about">Xem hồ sơ chi tiết</Link>
            </Reveal>

            <div className="home-capability-cards">
              {capabilityPreview.map(([title, desc], idx) => (
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
        </div>
      </section>

      <section className="section-shell cinematic-works" id="projects">
        <Reveal className="cinematic-section-title">
          <span>Dự án tiêu biểu</span>
          <h2>Cuối cùng là dự án: ảnh lớn, thông tin gọn, mở thẳng vào hồ sơ chi tiết.</h2>
        </Reveal>

        <div className="cinematic-work-stage">
          <Reveal className="cinematic-work-preview" variant="scale">
            <div className="cinematic-preview-media">
              <img src={getProjectCover(activeProject)} alt={activeProject.title} loading="lazy" decoding="async" />
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

      <section className="cinematic-lab">
        <div className="section-shell cinematic-lab-inner">
          <Reveal className="cinematic-lab-heading">
            <span>AI Lab</span>
            <h2>AI Lab phát triển các thử nghiệm giúp quy trình diễn họa nhanh hơn và rõ ý tưởng hơn.</h2>
          </Reveal>

          <Reveal className="cinematic-lab-visual" delay={80} variant="scale">
            <img src={IMAGES.projectAIJapandiModern} alt="Quy trình AI CGI" loading="lazy" decoding="async" />
            <img src={IMAGES.compareRender} alt="Quy trình ánh sáng D5 Render" loading="lazy" decoding="async" />
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
          <span>Góc nhìn</span>
          <h2>Góc nhìn chuyên môn về render, AI và quy trình thiết kế.</h2>
        </Reveal>
        <div className="cinematic-journal-grid">
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

      <section className="section-shell cinematic-contact">
        <Reveal>
          <span className="cinematic-kicker">Liên hệ</span>
          <h2>Bắt đầu câu chuyện hình ảnh cho dự án tiếp theo.</h2>
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
