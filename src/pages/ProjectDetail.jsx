import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, getProjectGallery } from '../data/constants';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS_DATA.find((item) => String(item.id) === String(projectId));

  if (!project) {
    return (
      <main className="page-wrap project-detail-page">
        <section className="section-shell project-detail-not-found">
          <Link to="/portfolio" className="project-detail-back">
            <ArrowLeft size={17} />
            Dự án
          </Link>
          <h1>Không tìm thấy dự án.</h1>
        </section>
      </main>
    );
  }

  const gallery = getProjectGallery(project);

  return (
    <main className="page-wrap project-detail-page">
      <section className="section-shell project-detail-hero">
        <Link to="/portfolio" className="project-detail-back">
          <ArrowLeft size={17} />
          Dự án
        </Link>

        <div className="project-detail-title">
          <p className="eyebrow">{project.year} / {project.location}</p>
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
        </div>

        <dl className="project-detail-meta">
          <div>
            <dt>Loại hình</dt>
            <dd>{project.type}</dd>
          </div>
          <div>
            <dt>Dịch vụ</dt>
            <dd>{project.services.join(' / ')}</dd>
          </div>
          <div>
            <dt>Nguồn ảnh</dt>
            <dd>Render trực tiếp từ PDF dự án</dd>
          </div>
        </dl>
      </section>

      <section className="section-shell project-detail-gallery">
        {gallery.map((image, index) => (
          <figure key={image} className="project-detail-frame">
            <img
              src={image}
              alt={`${project.title} - trang ${index + 1}`}
              loading="eager"
              decoding="async"
            />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.title}</strong>
            </figcaption>
          </figure>
        ))}
      </section>

      {project.pdfLink && (
        <section className="section-shell project-detail-pdf">
          <a href={project.pdfLink} target="_blank" rel="noreferrer">
            Mở file PDF gốc
            <ExternalLink size={17} />
          </a>
        </section>
      )}
    </main>
  );
};

export default ProjectDetail;
