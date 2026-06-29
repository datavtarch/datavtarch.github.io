import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandMark } from '../components/Brand';
import { Reveal } from '../components/UI';
import {
  AI_LAB_ITEMS,
  IMAGES,
  INSIGHTS,
  PROJECTS_DATA,
  SERVICE_GROUPS,
  getProjectCover,
  getProjectDetailPath,
} from '../data/constants';
import { personSchema, setPageSeo } from '../utils/seo';

const timeline = [
  ['2017', 'Đại học Kiến Trúc TP.HCM'],
  ['2021', 'Thiết kế & Diễn họa'],
  ['2023', 'Ứng dụng AI vào quy trình diễn họa'],
  ['2025', 'Xây dựng VTARCH'],
  ['2026', 'Kiến trúc + Công nghệ AI'],
];

const featuredProjects = PROJECTS_DATA.slice(0, 4);
const latestInsights = INSIGHTS.slice(0, 3);

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setPageSeo({
      title: 'VTARCH | Nguyễn Văn Thanh - Diễn họa kiến trúc & AI CGI',
      description:
        'Portfolio của Nguyễn Văn Thanh về diễn họa kiến trúc, diễn họa nội thất, D5 Render, AI CGI và công nghệ thiết kế cho studio kiến trúc.',
      path: '/',
      schema: personSchema,
    });
  }, []);

  return (
    <div className="site-redesign cinematic-home">
      <section className="home-hero-v2">
        <img src={IMAGES.projectCaledon} alt="VTARCH visual" loading="eager" fetchPriority="high" />
        <div className="home-hero-v2-overlay" aria-hidden="true" />

        <div className="section-shell home-hero-v2-content">
          <Reveal>
            <div className="hero-brand-system">
              <span className="hero-brand-symbol">
                <BrandMark />
              </span>
              <span className="hero-brand-word brand-word">
                <strong>VTARCH</strong>
                <small>Architecture Visualization • AI CGI • Design Technology</small>
              </span>
            </div>

            <h1 className="hero-title-locked">
              <span>Kiến tạo hình ảnh kiến trúc bằng tư duy</span>
              <span>thiết kế và công nghệ AI</span>
            </h1>
            <p>Architecture Visualization • AI CGI • Design Technology</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/portfolio" className="primary-minimal-link">
                Xem dự án
              </Link>
              <Link to="/contact" className="primary-minimal-link">
                Liên hệ
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell portfolio-section">
        <Reveal>
          <div className="minimal-section-heading">
            <span className="section-kicker">Selected Works</span>
            <h2>Dự án nổi bật</h2>
            <Link to="/portfolio" className="primary-minimal-link">
              Xem tất cả
            </Link>
          </div>
        </Reveal>

        <div className="selected-works-grid">
          {featuredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="work-tile"
              onClick={() => navigate(getProjectDetailPath(project))}
            >
              <img
                src={getProjectCover(project)}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
              <span>
                {project.year} / {project.location}
              </span>
              <strong>{project.title}</strong>
              <em>{project.type}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell about-v2">
        <Reveal className="about-v2-image" delay={120}>
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="lazy" decoding="async" />
        </Reveal>

        <Reveal className="about-v2-copy" delay={80}>
          <span className="section-kicker">Giới thiệu</span>
          <h2>Nhà sáng tạo hình ảnh kiến trúc với nền tảng công nghệ hiện đại.</h2>
          <p>
            VTARCH phát triển tại giao điểm giữa kiến trúc, diễn họa và AI để giúp studio chuyển từ brief
            sang hình ảnh có chiều sâu trực quan, truyền tải đúng ý đồ thiết kế và nhịp thẩm mỹ của không gian.
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
        <Reveal>
          <div className="minimal-section-heading">
            <span className="section-kicker">Dịch vụ</span>
            <h2>Ba nhóm năng lực trọng tâm của studio.</h2>
          </div>
        </Reveal>

        <div className="service-groups-v2">
          {SERVICE_GROUPS.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 70}>
              <article>
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ai-lab-v2">
        <div className="section-shell">
          <Reveal className="ai-lab-v2-heading">
            <span>AI Lab</span>
            <h2>AI Lab</h2>
          </Reveal>
          <div className="ai-lab-v2-list">
            {AI_LAB_ITEMS.map((item, idx) => (
              <Reveal key={item} delay={idx * 60}>
                <div>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell journal-page">
        <Reveal className="minimal-section-heading">
          <span className="section-kicker">Góc nhìn</span>
          <h2>Những ghi chú ngắn về kiến trúc và AI.</h2>
        </Reveal>

        <div className="journal-grid-v2">
          {latestInsights.map((post, idx) => (
            <Reveal key={post.title} delay={idx * 60}>
              <Link to="/journal">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                <span>{post.category}</span>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell contact-v2">
        <Reveal className="contact-v2-grid">
          <h2>Bắt đầu một brief mới.</h2>
          <a href="mailto:vtarch99@gmail.com">Email</a>
          <a href="https://www.instagram.com/vtarch99/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <Link to="/contact">Gửi brief chi tiết</Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;

