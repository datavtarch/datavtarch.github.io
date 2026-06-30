import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import {
  PROJECTS_DATA,
  getProjectCover,
  getProjectDetailPath,
  getProjectGallery,
} from '../data/constants';
import { projectSchema, setPageSeo } from '../utils/seo';

const galleryCopy = {
  ai: {
    sections: [
      ['Mood chính', 'Những khung hình mở đầu để xác định tinh thần phong cách và hướng ánh sáng.'],
      ['Phương án concept', 'Các biến thể giúp kiểm tra bố cục, vật liệu và cảm giác không gian.'],
      ['Ngôn ngữ vật liệu', 'Những ảnh tập trung vào chất liệu, sắc độ và khả năng phát triển thành render chính.'],
      ['Bàn giao', 'Các trang còn lại từ PDF, giữ lại để xem đầy đủ quá trình thử nghiệm.'],
    ],
    captions: ['Mood AI CGI', 'Phương án concept', 'Ngôn ngữ vật liệu', 'Ánh sáng không gian', 'Biến thể phong cách', 'Trang moodboard'],
  },
  interior: {
    sections: [
      ['Tổng quan', 'Ảnh mở đầu cho thấy tinh thần không gian, ánh sáng và chất liệu chính.'],
      ['Góc chính', 'Các góc nhìn dùng để trình bày bố cục nội thất và nhịp sinh hoạt.'],
      ['Chi tiết', 'Những khung hình nhấn vào vật liệu, ánh sáng, đồ rời và độ hoàn thiện.'],
      ['Bàn giao', 'Các trang bổ sung từ PDF để xem đủ bộ hình ảnh dự án.'],
    ],
    captions: ['Không gian chính', 'Góc sinh hoạt', 'Vật liệu và ánh sáng', 'Chi tiết nội thất', 'Nhịp không gian', 'Trang hồ sơ'],
  },
  architecture: {
    sections: [
      ['Tổng quan', 'Ảnh mở đầu giúp đọc nhanh bối cảnh, khối tích và tinh thần công trình.'],
      ['Góc chính', 'Các góc nhìn thể hiện mặt đứng, tỷ lệ công trình và quan hệ với cảnh quan.'],
      ['Chi tiết', 'Những khung hình nhấn vào vật liệu, ánh sáng, lối tiếp cận và lớp không gian.'],
      ['Bàn giao', 'Các trang còn lại từ PDF để giữ nguyên tính đầy đủ của hồ sơ.'],
    ],
    captions: ['Tổng quan công trình', 'Góc nhìn chính', 'Mặt đứng và bối cảnh', 'Ánh sáng và vật liệu', 'Chi tiết trình bày', 'Trang hồ sơ'],
  },
  mixed: {
    sections: [
      ['Tổng quan', 'Ảnh mở đầu giúp đọc nhanh tinh thần dự án, bối cảnh và hướng trình bày chính.'],
      ['Góc chính', 'Các khung hình chính thể hiện không gian, ánh sáng và cách dự án được sử dụng.'],
      ['Chi tiết', 'Những ảnh nhấn vào vật liệu, tỷ lệ, nội thất và độ hoàn thiện của hồ sơ.'],
      ['Bàn giao', 'Các trang bổ sung từ PDF để xem đầy đủ bộ hình ảnh dự án.'],
    ],
    captions: ['Tổng quan dự án', 'Góc nhìn chính', 'Không gian và vật liệu', 'Ánh sáng sử dụng', 'Chi tiết trình bày', 'Trang hồ sơ'],
  },
};

const getGalleryMode = (project) => {
  if (project.id === 2) return 'mixed';

  const searchable = [
    project.type,
    project.desc,
    ...(project.category || []),
    ...(project.services || []),
    ...(project.tags || []),
  ].join(' ').toLowerCase();

  if (searchable.includes('ai')) return 'ai';
  if (searchable.includes('nội thất') || searchable.includes('interior')) return 'interior';
  return 'architecture';
};

const getPdfPageLabel = (image) => {
  const match = image.match(/page-(\d+)\.webp/i);
  return match ? `Trang PDF ${match[1]}` : 'Ảnh dự án';
};

const splitGallery = (project, gallery) => {
  const mode = getGalleryMode(project);
  const copy = galleryCopy[mode];
  const total = gallery.length;

  if (total <= 1) {
    return [{
      title: copy.sections[0][0],
      desc: copy.sections[0][1],
      images: gallery,
      startIndex: 0,
      captions: copy.captions,
    }];
  }

  const overviewCount = 1;
  const deliveryCount = total >= 8 ? Math.min(3, Math.max(1, Math.floor(total * 0.16))) : 1;
  const mainCount = Math.min(5, Math.max(2, Math.ceil((total - overviewCount - deliveryCount) * 0.44)));
  const detailCount = Math.max(0, total - overviewCount - mainCount - deliveryCount);
  const counts = [overviewCount, mainCount, detailCount, deliveryCount];

  let cursor = 0;
  return copy.sections
    .map(([title, desc], index) => {
      const images = gallery.slice(cursor, cursor + counts[index]);
      const startIndex = cursor;
      cursor += counts[index];
      return { title, desc, images, startIndex, captions: copy.captions };
    })
    .filter((section) => section.images.length);
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = PROJECTS_DATA.find((item) => String(item.id) === String(projectId));

  useEffect(() => {
    if (!project) {
      setPageSeo({
        title: 'Dự án | VTARCH',
        description: 'Không tìm thấy dự án trong thư viện VTARCH.',
        path: '/portfolio',
      });
      return;
    }

    const coverImage = getProjectCover(project);
    setPageSeo({
      title: `${project.title} | VTARCH`,
      description: project.story?.overview || project.desc,
      path: `/portfolio/${project.id}`,
      image: coverImage,
      type: 'article',
      schema: projectSchema(project, coverImage),
    });
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
  const gallerySections = splitGallery(project, gallery);
  const storyBlocks = [
    ['Tổng quan', project.story?.overview || project.desc],
    ['Vai trò', project.story?.role || project.services.join(' / ')],
    ['Hướng hình ảnh', project.story?.direction || project.desc],
  ];
  const deliverables = project.story?.deliverables?.length ? project.story.deliverables : project.services;

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
            fetchPriority="high"
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

      <section className="section-shell project-story-grid">
        <div className="project-story-heading">
          <p className="eyebrow">Hồ sơ dự án</p>
          <h2>Từ bối cảnh đến bộ ảnh hoàn chỉnh.</h2>
        </div>

        <div className="project-story-content">
          <div className="project-story-list">
            {storyBlocks.map(([label, value]) => (
              <article key={label} className="project-story-item">
                <span>{label}</span>
                <p>{value}</p>
              </article>
            ))}
          </div>

          <div className="project-deliverables">
            <span>Bàn giao</span>
            <div>
              {deliverables.map((item) => (
                <em key={item}>{item}</em>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell project-detail-gallery">
        <div className="project-detail-gallery-heading">
          <div>
            <p className="eyebrow">Thư viện ảnh</p>
            <h2>Thư viện ảnh kể theo nhịp dự án.</h2>
          </div>
          <span>{gallery.length} ảnh từ PDF</span>
        </div>

        {gallerySections.map((section, sectionIndex) => (
          <div className="project-gallery-section" key={section.title}>
            <div className="project-gallery-section-heading">
              <span>{String(sectionIndex + 1).padStart(2, '0')}</span>
              <div>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>
            </div>

            {section.images.map((image, index) => {
              const globalIndex = section.startIndex + index;
              const frameClass = globalIndex % 6 === 0
                ? 'is-wide'
                : globalIndex % 6 === 3
                  ? 'is-offset'
                  : 'is-pair';
              const caption = section.captions[globalIndex % section.captions.length];

              return (
                <figure key={image} className={`project-detail-frame ${frameClass}`}>
                  <img
                    src={image}
                    alt={`${project.title} - ${caption.toLowerCase()}`}
                    loading="eager"
                    decoding="async"
                    fetchPriority={globalIndex < 4 ? 'high' : 'low'}
                  />
                  <figcaption>
                    <span>{String(globalIndex + 1).padStart(2, '0')}</span>
                    <strong>{caption}</strong>
                    <em>{getPdfPageLabel(image)}</em>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        ))}
      </section>

      <section className="section-shell project-detail-closeout">
        <div className="project-closeout-copy">
          <p className="eyebrow">Sau khi xem dự án</p>
          <h2>Cần một bộ hình ảnh có cấu trúc cho dự án tiếp theo?</h2>
          <p>
            VTARCH có thể hỗ trợ từ định hướng hình ảnh, dựng mood, render D5, AI CGI đến bộ ảnh trình bày
            để dự án dễ được đọc, dễ được nhớ và dễ thuyết phục hơn.
          </p>
          <div>
            <a href="mailto:vtarch99@gmail.com">vtarch99@gmail.com</a>
            <a href="tel:0385550506">038.555.0506</a>
          </div>
        </div>

        <div className="project-closeout-actions">
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noreferrer" className="project-detail-pdf-link">
              <span>PDF gốc</span>
              <strong>Mở hồ sơ đầy đủ</strong>
              <ExternalLink size={17} />
            </a>
          )}

          <div className="project-detail-next">
            <Link to={getProjectDetailPath(previousProject)}>
              <span>Dự án trước</span>
              <strong>{previousProject.title}</strong>
            </Link>
            <Link to={getProjectDetailPath(nextProject)}>
              <span>Dự án tiếp theo</span>
              <strong>{nextProject.title}</strong>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
