import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { FILTER_CATEGORIES, PROJECTS_DATA } from '../data/constants';

const Portfolio = ({ setSelectedProject }) => {
  const [filter, setFilter] = useState('Tất cả');
  const navigate = useNavigate();

  const filteredProjects = filter === 'Tất cả'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category?.includes(filter));

  const handleProjectClick = (project) => {
    if (project.detailsPath) navigate(project.detailsPath);
    else setSelectedProject(project);
  };

  return (
    <div className="page-wrap">
      <section className="section-shell page-hero-minimal">
        <Reveal>
          <p className="eyebrow">Dự án</p>
          <h1>Archive hình ảnh kiến trúc, nội thất, D5 Render và AI CGI.</h1>
          <p>
            Mỗi dự án được trình bày như một case study ngắn: bối cảnh, loại hình, dịch vụ thực hiện
            và gallery hình ảnh.
          </p>
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="filter-bar">
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
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 55}>
            <button className="project-row" onClick={() => handleProjectClick(project)}>
              <span className="project-row-index">{String(idx + 1).padStart(2, '0')}</span>
              <img src={project.image} alt={project.title} loading={idx < 3 ? 'eager' : 'lazy'} decoding="async" />
              <div className="project-row-copy">
                <span>{project.year} / {project.location}</span>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <dl>
                  <div><dt>Loại hình</dt><dd>{project.type}</dd></div>
                  <div><dt>Dịch vụ</dt><dd>{project.services.join(', ')}</dd></div>
                </dl>
              </div>
              <ArrowUpRight size={22} className="project-row-icon" />
            </button>
          </Reveal>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
