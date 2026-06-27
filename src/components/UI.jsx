import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness, FileText, MapPin, X } from 'lucide-react';
import { getProjectCover, getProjectGallery } from '../data/constants';

export const TiltCard = ({ children, className, onClick, style }) => (
  <div className={className} onClick={onClick} style={style}>{children}</div>
);

export const Reveal = ({ children, className = '', delay = 0, variant = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => (
    typeof window !== 'undefined' &&
    (
      window.matchMedia('(max-width: 640px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  ));

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}
      data-reveal-variant={variant}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Typewriter = ({ phrases }) => {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    const typeSpeed = isDeleting ? 30 : 60;
    const delay =
      isDeleting && text === ''
        ? 500
        : !isDeleting && text === currentPhrase
          ? 2500
          : typeSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) setIsDeleting(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx, phrases]);

  return (
    <span className="text-[var(--accent)] font-medium">
      {text}
      <span className="inline-block w-1 h-4 bg-[var(--accent)] ml-1 animate-pulse align-middle" />
    </span>
  );
};

const normalizeUrl = (url) => {
  if (!url) return '#';
  if (url.startsWith('http')) return url;
  return url.replace(/\/+/g, '/');
};

const MetaRow = ({ label, value }) => (
  <div className="project-meta-row">
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const coverImage = getProjectCover(project);
  const gallery = getProjectGallery(project);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8">
      <div className="absolute inset-0 bg-black/88 backdrop-blur-xl" onClick={onClose} />
      <article className="project-modal-shell relative w-full max-w-7xl max-h-[92vh] overflow-y-auto bg-[var(--bg-color)] border border-[var(--border-color)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-11 h-11 border border-white/15 bg-black/55 flex items-center justify-center text-white hover:bg-[var(--accent)] transition-colors"
          aria-label="Đóng dự án"
        >
          <X size={18} />
        </button>

        <div className="project-modal-hero">
          <div className="relative project-modal-image">
            <img
              src={coverImage}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-[52vh] lg:h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="project-modal-intro p-6 md:p-10 flex flex-col justify-between gap-10">
            <div>
              <div className="eyebrow mb-6">Case study dự án</div>
              <h2 className="text-4xl md:text-6xl font-heading font-semibold leading-[0.96] mb-6">
                {project.title}
              </h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="grid gap-0 border-y border-[var(--border-color)]">
                <MetaRow label="Năm" value={project.year} />
                <MetaRow label="Địa điểm" value={project.location} />
                <MetaRow label="Loại hình" value={project.type} />
                <MetaRow label="Dịch vụ" value={project.services.join(', ')} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              {project.pdfLink && (
                <a
                  href={normalizeUrl(project.pdfLink)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent px-6 py-4 text-[10px] font-mono font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2"
                >
                  Xem PDF <FileText size={14} />
                </a>
              )}
              <a
                href="mailto:vtarch99@gmail.com"
                className="btn-outline-luxury px-6 py-4 text-[10px] font-mono font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2"
              >
                Liên hệ dự án <ArrowUpRight size={14} />
              </a>
              <Link
                to="/services"
                onClick={onClose}
                className="btn-outline-luxury px-6 py-4 text-[10px] font-mono font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2"
              >
                Xem dịch vụ <BriefcaseBusiness size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="project-modal-gallery">
          {gallery.map((image, idx) => (
            <figure key={`${image}-${idx}`} className={idx === 0 ? 'is-large' : ''}>
              <img
                src={image}
                alt={`${project.title} gallery ${idx + 1}`}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 p-6 md:p-8 border-t border-[var(--border-color)]">
          <MapPin size={15} className="text-[var(--accent)]" />
          <span className="text-xs uppercase tracking-[0.18em] font-mono text-[var(--text-muted)]">
            {project.location} / {project.year}
          </span>
          {project.tags.map((tag) => <span key={tag} className="tag-accent">{tag}</span>)}
        </div>
      </article>
    </div>
  );
};
