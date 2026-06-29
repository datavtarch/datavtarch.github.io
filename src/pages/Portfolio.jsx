import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/UI';
import { FILTER_CATEGORIES, PROJECTS_DATA, getProjectCover, getProjectDetailPath } from '../data/constants';
import { setPageSeo } from '../utils/seo';

const Portfolio = () => {
  const normalizedFilter = useMemo(
    () => FILTER_CATEGORIES.find((category) => category === 'Tất cả') ?? FILTER_CATEGORIES[0],
    []
  );

  const [filter, setFilter] = useState(normalizedFilter);

  useEffect(() => {
    setPageSeo({
      title: 'Dự án diễn họa kiến trúc | VTARCH',
      description:
        'Thư viện dự án VTARCH gồm diễn họa kiến trúc, nội thất, D5 Render và quy trình AI cho studio.',
      path: '/#/portfolio',
    });
  }, []);

  const filteredProjects =
    filter === normalizedFilter
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category?.includes(filter));

  return (
    <div className="page-wrap portfolio-page editorial-portfolio-v2">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <p className="eyebrow">Dự án</p>
          <h1>Hồ sơ hình ảnh diễn họa, nội thất và AI CGI.</h1>
          <p>
            Mỗi công trình được trình bày tối giản với dữ liệu thực tế từ PDF và ảnh đã quy đổi để giữ đúng tư duy
            thị giác của bài vẽ.
          </p>
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="filter-bar portfolio-filter-bar">
          <button
            key={normalizedFilter}
            onClick={() => setFilter(normalizedFilter)}
            className={filter === normalizedFilter ? 'is-active' : ''}
            type="button"
          >
            {normalizedFilter}
          </button>
          {FILTER_CATEGORIES.filter((category) => category !== normalizedFilter).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? 'is-active' : ''}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell project-archive section-space selected-works-grid">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 55}>
            <Link className="work-tile" to={getProjectDetailPath(project)} aria-label={`Xem dự án ${project.title}`}>
              <img
                src={getProjectCover(project)}
                alt={project.title}
                loading={idx < 2 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
              />
              <span>
                {project.year} / {project.location}
              </span>
              <strong>{project.title}</strong>
              <em>{project.type}</em>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;

