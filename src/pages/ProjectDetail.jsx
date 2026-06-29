import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import {
  PROJECTS_DATA,
  getProjectCover,
  getProjectDetailPath,
  getProjectGallery,
} from '../data/constants';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS_DATA.find((item) => String(item.id) === String(projectId));

  useEffect(() => {
    document.title = project ? `${project.title} | VTARCH` : 'Dự án | VTARCH';

    const description = document.querySelector('meta[name="description"]');
    if (project && description) {
      description.setAttribute('content', project.desc);
    }
  }, [project]);

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
  const coverImage = getProjectCover(project);
  const projectIndex = PROJECTS_DATA.findIndex((item) => item.id === project.id);
  const previousProject = PROJECTS_DATA[(projectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  return (
    <main className="page-wrap project-detail-page project-detail-editorial-v2">
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

        <figure className="project-detail-cover">
          <img
            src={coverImage}
            alt={`${project.title} cover`}
            loading="eager"
            decoding="async"
          />
          <figcaption>
            <span>Ảnh chính</span>
            <strong>Ảnh chuyển trực tiếp từ PDF dự án</strong>
          </figcaption>
        </figure>

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
        <div className="project-detail-gallery-heading">
          <div>
            <p className="eyebrow">Thư viện ảnh</p>
            <h2>Toàn bộ hình ảnh dự án.</h2>
          </div>
          <span>{gallery.length} ảnh từ PDF</span>
        </div>

        {gallery.map((image, index) => {
          const frameClass = index % 6 === 0
            ? 'is-wide'
            : index % 6 === 3
              ? 'is-offset'
              : 'is-pair';

          return (
            <figure key={image} className={`project-detail-frame ${frameClass}`}>
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
          );
        })}
      </section>

      {project.pdfLink && (
        <section className="section-shell project-detail-pdf">
          <a href={project.pdfLink} target="_blank" rel="noreferrer">
            Mở file PDF gốc
            <ExternalLink size={17} />
          </a>
        </section>
      )}

      <section className="section-shell project-detail-next">
        <Link to={getProjectDetailPath(previousProject)}>
          <span>Dự án trước</span>
          <strong>{previousProject.title}</strong>
        </Link>
        <Link to={getProjectDetailPath(nextProject)}>
          <span>Dự án tiếp theo</span>
          <strong>{nextProject.title}</strong>
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
};

export default ProjectDetail;
