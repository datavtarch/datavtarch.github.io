import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BrandMark } from '../components/Brand';
import { IMAGES, INSIGHTS, PROJECTS_DATA } from '../data/constants';

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

const stats = [
  ['100+', 'hình ảnh / hồ sơ visual'],
  ['5 năm', 'kinh nghiệm thiết kế'],
  ['D5 + AI', 'workflow sản xuất'],
];

const Home = ({ setSelectedProject }) => {
  const projects = useMemo(
    () => selectedProjectIds
      .map((id) => PROJECTS_DATA.find((project) => project.id === id))
      .filter(Boolean),
    []
  );
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <main className="studio-index-home">
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

        <section className="studio-preview" aria-label="Giới thiệu VTARCH">
          <div className="studio-profile-portrait">
            <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="eager" decoding="async" />
          </div>
          <article className="studio-profile-panel">
            <p>VTARCH profile</p>
            <h2>Diễn họa kiến trúc, nội thất và workflow hình ảnh bằng D5 Render + AI CGI.</h2>
            <div>
              <Link to="/about">Giới thiệu <ArrowUpRight size={15} /></Link>
              <Link to="/contact">Liên hệ <ArrowUpRight size={15} /></Link>
            </div>
          </article>
        </section>
      </section>

      <section className="studio-section studio-skill-section section-shell">
        <div className="studio-section-head">
          <span>Kỹ năng</span>
          <h2>Một hồ sơ hình ảnh bắt đầu từ tư duy thiết kế, rồi mới đến công cụ.</h2>
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

      <section className="studio-strip section-shell">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="studio-section studio-project-section section-shell">
        <div className="studio-section-head">
          <span>Dự án</span>
          <h2>Dự án là phần minh chứng cho cách tổ chức hình ảnh và câu chuyện không gian.</h2>
        </div>

        <article className="studio-featured-work">
          <button type="button" onClick={() => setSelectedProject(activeProject)}>
            <img src={activeProject.image} alt={activeProject.title} loading="eager" decoding="async" />
          </button>
          <div>
            <span>{activeProject.year} / {activeProject.location}</span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.desc}</p>
            <dl>
              <div><dt>Loại hình</dt><dd>{activeProject.type}</dd></div>
              <div><dt>Dịch vụ</dt><dd>{activeProject.services.join(', ')}</dd></div>
            </dl>
          </div>
        </article>

        <div className="studio-project-selector" aria-label="Chọn dự án nổi bật">
          {projects.slice(0, 6).map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={activeProject.id === project.id ? 'is-active' : ''}
              onClick={() => setActiveProject(project)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.title}</strong>
              <em>{project.type}</em>
            </button>
          ))}
        </div>

        <div className="studio-work-grid">
          {projects.slice(0, 4).map((project) => (
            <button key={project.id} type="button" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} loading="eager" decoding="async" />
              <span>{project.year}</span>
              <strong>{project.title}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="studio-lab section-shell">
        <div>
          <span>AI Lab</span>
          <h2>Công nghệ là lớp hỗ trợ thầm lặng bên trong tư duy hình ảnh.</h2>
        </div>
        <p>
          AI được dùng để thử mood, kiểm tra hướng vật liệu, phát triển concept và tự động hóa một phần quy trình.
          Điểm neo vẫn là kiến trúc, ánh sáng, tỉ lệ và câu chuyện không gian.
        </p>
      </section>

      <section className="studio-section section-shell">
        <div className="studio-section-head">
          <span>Góc nhìn</span>
          <h2>Ghi chú ngắn về D5 Render, AI CGI và workflow thiết kế.</h2>
        </div>
        <div className="studio-journal-list">
          {INSIGHTS.slice(0, 3).map((post) => (
            <Link to="/journal" key={post.title}>
              <span>{post.category}</span>
              <strong>{post.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="studio-contact section-shell">
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
