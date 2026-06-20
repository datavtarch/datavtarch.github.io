import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { AI_LAB_ITEMS, IMAGES, INSIGHTS, PROJECTS_DATA, SERVICE_GROUPS } from '../data/constants';

const stats = [
  ['100+', 'Dự án hình ảnh'],
  ['05', 'Năm kinh nghiệm'],
  ['D5', 'Render workflow'],
  ['AI', 'Visual lab'],
];

const Home = ({ setSelectedProject }) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 4);

  return (
    <div>
      <section className="home-hero">
        <div className="section-shell">
          <div className="hero-editorial-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">VTARCH / Architecture Visualization</p>
              <h1 className="hero-title-stack">
                <span>Kiến tạo hình ảnh kiến trúc</span>
                <span>bằng tư duy thiết kế</span>
                <span>và công nghệ AI</span>
              </h1>
              <p className="hero-lead">
                VTARCH phát triển hình ảnh kiến trúc, nội thất, sản phẩm và concept không gian giúp kiến trúc sư,
                studio thiết kế và chủ đầu tư truyền tải ý tưởng nhanh hơn, chân thật hơn và hiệu quả hơn.
              </p>
              <div className="hero-actions">
                <Link to="/portfolio" className="text-link-large">Xem dự án</Link>
                <Link to="/contact" className="text-link-large">Liên hệ</Link>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={120} variant="scale">
              <img src={featuredProjects[0].image} alt={featuredProjects[0].title} loading="eager" fetchPriority="high" />
              <div className="hero-caption">
                <span>{featuredProjects[0].year}</span>
                <strong>{featuredProjects[0].title}</strong>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell portfolio-strip section-space">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">Dự án nổi bật</p>
            <h2>Selected Works</h2>
          </div>
          <Link to="/portfolio" className="text-link-small">Xem toàn bộ</Link>
        </Reveal>

        <div className="featured-grid">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80}>
              <button className="editorial-project" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} loading={idx < 2 ? 'eager' : 'lazy'} decoding="async" />
                <span>{project.year} / {project.location}</span>
                <strong>{project.title}</strong>
                <small>{project.type}</small>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell studio-intro section-space">
        <Reveal className="intro-image">
          <img src={IMAGES.portrait} alt="Nguyễn Văn Thanh - VTARCH" loading="lazy" decoding="async" />
        </Reveal>
        <Reveal className="intro-copy" delay={100}>
          <p className="eyebrow">Giới thiệu</p>
          <h2>VTARCH là studio diễn họa và công nghệ kiến trúc do Nguyễn Văn Thanh phát triển.</h2>
          <p>
            Nền tảng kiến trúc giúp mỗi hình ảnh được nhìn như một phần của thiết kế, không chỉ là ảnh render.
            Trọng tâm của studio là giao thoa giữa kiến trúc, hình ảnh, D5 Render và AI workflow.
          </p>
          <Link to="/about" className="text-link-small">Xem hồ sơ</Link>
        </Reveal>
      </section>

      <section className="section-shell section-space">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">Dịch vụ</p>
            <h2>Visual / Design / Technology</h2>
          </div>
          <Link to="/services" className="text-link-small">Chi tiết dịch vụ</Link>
        </Reveal>
        <div className="service-lines">
          {SERVICE_GROUPS.map((group, idx) => (
            <Reveal key={group.title} className="service-line" delay={idx * 80}>
              <span>0{idx + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <ul>
                {group.items.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell ai-lab-band section-space">
        <Reveal>
          <p className="eyebrow">AI Lab</p>
          <h2>Không chạy theo hiệu ứng AI. Dùng AI để tăng tốc tư duy, thử nghiệm và bàn giao.</h2>
        </Reveal>
        <div className="ai-lab-list ai-lab-editorial">
          {AI_LAB_ITEMS.map((item, idx) => (
            <Reveal key={item} delay={idx * 55}>
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="stats-row">
          {stats.map(([number, label], idx) => (
            <Reveal key={label} delay={idx * 60}>
              <strong>{number}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-space">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">Góc nhìn</p>
            <h2>Notes on visual workflow</h2>
          </div>
          <Link to="/insights" className="text-link-small">Đọc thêm</Link>
        </Reveal>
        <div className="insight-preview-grid">
          {INSIGHTS.slice(0, 3).map((post, idx) => (
            <Reveal key={post.title} delay={idx * 70}>
              <Link to="/insights" className="insight-preview">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
                <span>{post.category}</span>
                <strong>{post.title}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-space contact-band">
        <Reveal>
          <p className="eyebrow">Liên hệ</p>
          <h2>Trao đổi một bộ hình ảnh cho dự án kiến trúc, nội thất hoặc AI Lab.</h2>
          <Link to="/contact" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center gap-2">
            Bắt đầu trao đổi <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
