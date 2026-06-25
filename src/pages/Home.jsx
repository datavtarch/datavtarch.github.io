import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { IMAGES, INSIGHTS, PROJECTS_DATA } from '../data/constants';

const selectedProjects = [PROJECTS_DATA[0], PROJECTS_DATA[3], PROJECTS_DATA[4], PROJECTS_DATA[2]];

const services = [
  ['Diễn họa kiến trúc', 'Ngoại thất, nội thất, concept không gian và bộ ảnh trình bày dự án.'],
  ['D5 Render', 'Dựng hình, ánh sáng, vật liệu và hậu kỳ để tạo bộ visual có chiều sâu.'],
  ['AI CGI', 'Thử mood, tạo concept và tăng tốc quy trình phát triển hình ảnh.'],
];

const stats = [
  ['100+', 'hình ảnh / hồ sơ visual'],
  ['5 năm', 'kinh nghiệm thiết kế và diễn họa'],
  ['D5 + AI', 'workflow sản xuất hình ảnh'],
];

const Home = ({ setSelectedProject }) => {
  return (
    <main className="profile-home">
      <section className="profile-hero section-shell">
        <div className="profile-hero-copy">
          <p className="profile-kicker">VTARCH / Diễn họa kiến trúc</p>
          <h1>Diễn họa kiến trúc & nội thất.</h1>
          <p>
            Hồ sơ của Nguyễn Văn Thanh, kiến trúc sư phát triển hình ảnh kiến trúc, nội thất và concept
            không gian bằng nền tảng thiết kế, D5 Render và workflow AI.
          </p>
          <div className="profile-actions">
            <Link to="/portfolio">Xem dự án <ArrowUpRight size={16} /></Link>
            <Link to="/about">Giới thiệu</Link>
          </div>
        </div>

        <button
          type="button"
          className="profile-featured-image"
          onClick={() => setSelectedProject(selectedProjects[1])}
        >
          <img src={selectedProjects[1].image} alt={selectedProjects[1].title} loading="eager" />
          <span>
            <small>{selectedProjects[1].year} / {selectedProjects[1].type}</small>
            <strong>{selectedProjects[1].title}</strong>
          </span>
        </button>
      </section>

      <section className="profile-strip section-shell">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="profile-section section-shell">
        <div className="profile-section-head">
          <span>Dự án chọn lọc</span>
          <h2>Hình ảnh dự án là phần chính của hồ sơ.</h2>
        </div>
        <div className="profile-project-grid">
          {selectedProjects.map((project, index) => (
            <button key={project.id} type="button" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.title}</strong>
              <em>{project.type}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="profile-about section-shell">
        <div>
          <p className="profile-kicker">Giới thiệu</p>
          <h2>Kiến trúc sư, visual artist và người thử nghiệm workflow AI cho diễn họa.</h2>
        </div>
        <div>
          <p>
            Nguyễn Văn Thanh tốt nghiệp Đại học Kiến Trúc TP.HCM, phát triển VTARCH như một hồ sơ cá nhân
            giao thoa giữa kiến trúc, hình ảnh và công nghệ. Trọng tâm là tạo hình ảnh rõ ý đồ thiết kế,
            có chất liệu, ánh sáng và đủ sức thuyết phục khi trình bày dự án.
          </p>
          <Link to="/about">Xem hồ sơ <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="profile-section section-shell">
        <div className="profile-section-head">
          <span>Dịch vụ</span>
          <h2>Gọn, rõ và đúng nhu cầu trình bày kiến trúc.</h2>
        </div>
        <div className="profile-service-list">
          {services.map(([title, desc], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-lab">
        <div className="section-shell profile-lab-inner">
          <div>
            <p className="profile-kicker">AI Lab</p>
            <h2>AI là công cụ hỗ trợ tư duy hình ảnh, không thay thế nền tảng kiến trúc.</h2>
          </div>
          <img src={IMAGES.projectAIJapandiModern} alt="AI CGI concept by VTARCH" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="profile-section section-shell">
        <div className="profile-section-head">
          <span>Góc nhìn</span>
          <h2>Ghi chú ngắn về D5 Render, AI CGI và workflow thiết kế.</h2>
        </div>
        <div className="profile-journal">
          {INSIGHTS.slice(0, 3).map((post) => (
            <Link to="/journal" key={post.title}>
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="profile-contact section-shell">
        <div>
          <p className="profile-kicker">Liên hệ</p>
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
