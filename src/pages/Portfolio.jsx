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
import { setPageSeo } from '../utils/seo';

const Portfolio = () => {
  const [filter, setFilter] = useState('Tất cả');
  const navigate = useNavigate();

  useEffect(() => {
    setPageSeo({
      title: 'Dự án diễn họa kiến trúc | VTARCH',
      description:
        'Thư viện dự án VTARCH gồm diễn họa kiến trúc, diễn họa nội thất, D5 Render, AI CGI và ảnh chuyển trực tiếp từ hồ sơ PDF dự án.',
      path: '/#/portfolio',
    });
  }, []);

  const filteredProjects = filter === 'Tất cả'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category?.includes(filter));

  const handleProjectClick = (project) => {
    navigate(getProjectDetailPath(project));
  };

  return (
    <div className="page-wrap portfolio-page editorial-portfolio-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal className="portfolio-hero-copy">
          <p className="eyebrow">Dự án</p>
          <h1>Hồ sơ hình ảnh kiến trúc, nội thất và AI CGI.</h1>
          <p>
            Mỗi dự án được trình bày như một hồ sơ hình ảnh ngắn: ảnh chuyển trực tiếp từ PDF, thông tin rõ và
            mở vào thư viện chi tiết thay vì màn hình nổi.
          </p>
          <div className="portfolio-hero-metrics">
            <article>
              <strong>{PROJECTS_DATA.length}</strong>
              <span>Hồ sơ dự án</span>
            </article>
            <article>
              <strong>PDF</strong>
              <span>Nguồn ảnh gốc</span>
            </article>
            <article>
              <strong>D5 + AI</strong>
              <span>Quy trình hình ảnh</span>
            </article>
          </div>
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
          const isFeatured = idx === 0 || idx === 5;

          return (
            <Reveal key={project.id} delay={idx * 55}>
              <button
                className={`project-card ${isFeatured ? 'is-featured' : ''}`}
                onClick={() => handleProjectClick(project)}
                aria-label={`Xem dự án ${project.title}`}
              >
                <span className="project-card-index">{String(idx + 1).padStart(2, '0')}</span>
                <div className="project-card-media">
                  <img
                    src={getProjectCover(project)}
                    alt={project.title}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                  />
                </div>
                <div className="project-card-copy">
                  <div className="project-card-meta">
                    <span>{project.year}</span>
                    <span>{project.type}</span>
                    <span>{galleryCount} ảnh</span>
                  </div>
                  <h2>{project.title}</h2>
                  <span className="project-card-location">{project.location}</span>
                  <p className="project-card-note">{project.story?.overview || project.desc}</p>
                  <div className="project-card-tags">
                    <span>{project.services[0]}</span>
                    <span>{project.category?.[0] || 'Hồ sơ hình ảnh'}</span>
                  </div>
                  <span className="project-card-action">Xem hồ sơ dự án</span>
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
