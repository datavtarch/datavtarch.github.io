import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BrandMark } from '../components/Brand';
import { IMAGES, PROJECTS_DATA } from '../data/constants';

const selectedProjectIds = [3, 4, 0, 2, 5, 17];

const capabilities = [
  {
    number: '01',
    title: 'Tư duy kiến trúc',
    desc: 'Đọc brief, tổ chức câu chuyện không gian, chọn góc nhìn và nhịp hình ảnh dựa trên nền tảng thiết kế.',
    tools: ['Concept', 'Composition', 'Material mood'],
  },
  {
    number: '02',
    title: 'Diễn họa hình ảnh',
    desc: 'Dựng ánh sáng, vật liệu, camera và hậu kỳ để hình ảnh có chiều sâu, rõ ý đồ và đủ sức trình bày.',
    tools: ['D5 Render', 'SketchUp', 'Post-production'],
  },
  {
    number: '03',
    title: 'Workflow AI',
    desc: 'Dùng AI để thử mood, phát triển concept, kiểm tra biến thể và tăng tốc các bước lặp trong quy trình visual.',
    tools: ['AI CGI', 'GPT Architecture', 'Automation'],
  },
];

const pageLinks = [
  ['/about', 'Thông tin cá nhân', 'Nền tảng, kinh nghiệm và hướng phát triển của Nguyễn Văn Thanh.'],
  ['/services', 'Kỹ năng & dịch vụ', 'Diễn họa, D5 Render, visual direction và workflow thiết kế.'],
  ['/portfolio', 'Dự án', 'Các case study hình ảnh kiến trúc, nội thất và AI CGI.'],
  ['/ai-lab', 'AI Lab', 'Thử nghiệm GPT, automation và quy trình hình ảnh bằng AI.'],
];

const Home = ({ setSelectedProject }) => {
  const projects = useMemo(
    () => selectedProjectIds
      .map((id) => PROJECTS_DATA.find((project) => project.id === id))
      .filter(Boolean),
    []
  );
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tilts = Array.from(document.querySelectorAll('.t-tilt'));
    const cleanups = [];
    const MAX = 4;

    tilts.forEach((tilt) => {
      const card = tilt.querySelector('.t-tilt-card');
      if (!card) return;

      const reset = () => {
        tilt.classList.remove('is-hover');
        card.classList.remove('is-tilting');
        card.style.setProperty('--tilt-rx', '0deg');
        card.style.setProperty('--tilt-ry', '0deg');
      };

      const track = (event) => {
        if (reduce.matches || event.pointerType !== 'mouse') return;
        const rect = tilt.getBoundingClientRect();
        const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

        tilt.classList.add('is-hover');
        card.classList.add('is-tilting');
        card.style.setProperty('--tilt-ry', `${((px - 0.5) * MAX).toFixed(2)}deg`);
        card.style.setProperty('--tilt-rx', `${((0.5 - py) * MAX).toFixed(2)}deg`);
        card.style.setProperty('--tilt-gx', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--tilt-gy', `${(py * 100).toFixed(1)}%`);
      };

      tilt.addEventListener('pointermove', track);
      tilt.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        tilt.removeEventListener('pointermove', track);
        tilt.removeEventListener('pointerleave', reset);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <main className="studio-index-home studio-home-split">
      <section className="studio-index-shell">
        <aside className="studio-index-sidebar">
          <div className="studio-index-brand">
            <BrandMark />
            <div>
              <strong>VTARCH</strong>
              <span>Architecture Visualization / AI CGI</span>
            </div>
          </div>

          <div className="studio-index-intro">
            <p>Hồ sơ cá nhân</p>
            <h1>Nguyễn Văn Thanh.</h1>
            <span>
              Kiến trúc sư Đại học Kiến Trúc TP.HCM, phát triển VTARCH như một hồ sơ giao thoa giữa kiến trúc,
              diễn họa hình ảnh và công nghệ AI trong quy trình thiết kế.
            </span>
          </div>

          <button type="button" className="studio-mobile-featured" onClick={() => setSelectedProject(activeProject)}>
            <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" decoding="async" />
            <span>
              <em>Founder / Architect</em>
              <strong>Architecture Visualization / D5 / AI CGI</strong>
            </span>
          </button>

          <div className="studio-mobile-reel" aria-label="Một số khung hình VTARCH">
            {projects.slice(0, 3).map((project) => (
              <img key={project.id} src={project.image} alt="" loading="eager" decoding="async" />
            ))}
          </div>

          <div className="studio-index-tabs" aria-label="Năng lực VTARCH">
            <span>Kiến trúc</span>
            <span>Diễn họa</span>
            <span>Công nghệ AI</span>
          </div>

          <div className="studio-profile-facts" aria-label="Thông tin Nguyễn Văn Thanh">
            <div><span>Nền tảng</span><strong>Kiến trúc sư</strong></div>
            <div><span>Kinh nghiệm</span><strong>5 năm</strong></div>
            <div><span>Định hướng</span><strong>Architecture + Visualization + AI</strong></div>
          </div>
        </aside>

        <section className="studio-preview studio-visual-deck" aria-label="Giới thiệu VTARCH">
          <article className="studio-deck-copy t-stagger is-shown">
            <p className="t-stagger-line t-stagger-line--1">VTARCH profile</p>
            <h2 className="t-stagger-line t-stagger-line--2">Diễn họa kiến trúc, nội thất và workflow hình ảnh bằng D5 Render + AI CGI.</h2>
            <div className="t-stagger-line t-stagger-line--3">
              <Link to="/about">Giới thiệu <ArrowUpRight size={15} /></Link>
              <Link to="/portfolio">Xem dự án <ArrowUpRight size={15} /></Link>
            </div>
          </article>

          <div className="studio-deck-stage">
            <button type="button" className="studio-deck-main t-tilt" onClick={() => setSelectedProject(activeProject)}>
              <span className="t-tilt-card">
                <img src={activeProject.image} alt={activeProject.title} loading="eager" decoding="async" />
                <span className="studio-deck-main-title">{activeProject.title}</span>
                <span className="t-tilt-glare" aria-hidden="true" />
              </span>
            </button>
            <div className="studio-deck-strip" aria-label="Selected visual frames">
              {projects.slice(1, 4).map((project) => (
                <button key={project.id} type="button" onClick={() => setActiveProject(project)}>
                  <img src={project.image} alt={project.title} loading="eager" decoding="async" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="studio-home-nav section-shell" aria-label="Điều hướng nội dung VTARCH">
        {pageLinks.map(([to, title, desc]) => (
          <Link to={to} key={to}>
            <span>{title}</span>
            <p>{desc}</p>
            <ArrowUpRight size={16} />
          </Link>
        ))}
      </section>

      <section className="studio-section studio-home-capabilities section-shell">
        <div className="studio-section-head">
          <span>Kỹ năng</span>
          <h2>Ba năng lực chính, còn phần chi tiết để trang riêng kể tiếp.</h2>
        </div>
        <div className="studio-skill-atelier">
          {capabilities.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <ul>
                {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section studio-home-projects section-shell">
        <div className="studio-section-head">
          <span>Dự án nổi bật</span>
          <h2>Một vài khung hình đại diện. Toàn bộ dự án nằm ở trang Projects.</h2>
        </div>

        <div className="studio-work-grid">
          {projects.slice(0, 4).map((project) => (
            <button key={project.id} type="button" className="t-tilt" onClick={() => setSelectedProject(project)}>
              <span className="t-tilt-card">
                <img src={project.image} alt={project.title} loading="eager" decoding="async" />
                <span className="studio-work-year">{project.year}</span>
                <strong>{project.title}</strong>
                <span className="t-tilt-glare" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <div className="studio-home-more">
          <Link to="/portfolio">Xem toàn bộ dự án <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="studio-contact studio-home-contact section-shell">
        <div>
          <span>Liên hệ</span>
          <h2>Trao đổi hình ảnh cho dự án tiếp theo.</h2>
        </div>
        <div>
          <a href="mailto:vtarch99@gmail.com"><Mail size={16} /> vtarch99@gmail.com</a>
          <a href="tel:0385550506">038.555.0506</a>
          <Link to="/contact">Gửi brief dự án <ArrowUpRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
