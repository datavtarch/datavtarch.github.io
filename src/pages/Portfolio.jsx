import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import {
  FILTER_CATEGORIES,
  PROJECTS_DATA,
  getProjectCover,
  getProjectDetailPath,
  getProjectGallery,
} from '../data/constants';

const Portfolio = () => {
  const [filter, setFilter] = useState('Tất cả');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dự án | VTARCH';
  }, []);

  const filteredProjects = filter === 'Tất cả'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category?.includes(filter));

  const handleProjectClick = (project) => {
    navigate(getProjectDetailPath(project));
  };

  return (
    <div className="page-wrap portfolio-page">
      <section className="section-shell page-hero-minimal">
        <Reveal className="portfolio-hero-copy">
          <p className="eyebrow">Dự án</p>
          <h1>Lưu trữ hình ảnh kiến trúc, nội thất, D5 Render và AI CGI.</h1>
          <p>
            Mỗi dự án được trình bày như một hồ sơ hình ảnh ngắn, ưu tiên ảnh lớn, thông tin gọn và cảm giác
            studio chuyên nghiệp.
          </p>
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="filter-bar portfolio-filter-bar">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? 'is-active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell project-archive section-space">
        {filteredProjects.map((project, idx) => {
          const galleryCount = getProjectGallery(project).length;

          return (
            <Reveal key={project.id} delay={idx * 55}>
              <button
                className="project-card"
                onClick={() => handleProjectClick(project)}
                aria-label={`Xem dự án ${project.title}`}
              >
                <span className="project-card-index">{String(idx + 1).padStart(2, '0')}</span>
                <div className="project-card-media">
                  <img
                    src={getProjectCover(project)}
                    alt={project.title}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="project-card-copy">
                  <div className="project-card-meta">
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                    <span>{galleryCount} ảnh PDF</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                  <div className="project-card-tags">
                    <span>{project.type}</span>
                    <span>{project.services[0]}</span>
                  </div>
                </div>
                <ArrowUpRight size={22} className="project-card-icon" />
              </button>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
