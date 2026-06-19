import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness, FileText, Layers3, Sparkles, Target, X } from 'lucide-react';

export const TiltCard = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick}>{children}</div>
);

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
    <span className="text-[#F3A06D] font-bold">
      {text}
      <span className="inline-block w-1.5 h-4 bg-[#D95A2B] ml-1 animate-pulse align-middle" />
    </span>
  );
};

const normalizeUrl = (url) => {
  if (!url) return '#';
  if (url.startsWith('http')) return url;
  return url.replace(/\/+/g, '/');
};

const getProjectRole = (project) => {
  const tags = project.tags.join(' ').toLowerCase();
  if (tags.includes('ai')) return 'AI Concept / Post-production';
  if (tags.includes('model')) return 'Modeling + D5 Render';
  if (tags.includes('thực tế')) return 'Architecture Visualization';
  return '3D Visualization';
};

const getProjectTools = (project) => {
  const tags = project.tags.join(' ').toLowerCase();
  if (tags.includes('ai')) return 'AI · D5 Render · Photoshop';
  if (tags.includes('model')) return 'SketchUp · D5 Render · Photoshop';
  return 'D5 Render · Photoshop';
};

const getProjectGoal = (project) => {
  const tags = project.tags.join(' ').toLowerCase();
  if (tags.includes('ai')) return 'Phát triển mood hình ảnh nhanh, thử nghiệm phong cách và nâng cấp cảm xúc thị giác bằng AI workflow.';
  if (tags.includes('nội thất')) return 'Tạo bộ ảnh nội thất rõ vật liệu, đẹp ánh sáng và đủ thuyết phục cho portfolio, bán hàng hoặc hồ sơ trình bày.';
  if (tags.includes('thực tế')) return 'Trình bày ý tưởng kiến trúc, bối cảnh và trải nghiệm không gian theo hướng dễ hiểu, dễ thuyết phục khách hàng.';
  return 'Xây dựng hình ảnh 3D có chiều sâu, đúng tinh thần thiết kế và có giá trị truyền thông cho dự án.';
};

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[92vh] neo-card rounded-[2rem] overflow-hidden grid md:grid-cols-[1.18fr_.82fr]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-11 h-11 bg-black/55 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D95A2B] transition-colors"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        <div className="relative h-[42vh] md:h-[82vh] min-h-[300px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-8 md:bottom-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tags.map((t) => <span key={t} className="tag-accent">{t}</span>)}
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-heading leading-[1.02] text-white max-w-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="relative p-6 md:p-9 overflow-y-auto bg-[var(--panel-color)]/95 max-h-[50vh] md:max-h-[92vh]">
          <div className="absolute inset-0 soft-grid opacity-10" />
          <div className="relative z-10">
            <div className="eyebrow mb-5">Case study detail</div>
            <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed mb-7">
              {project.desc}
            </p>

            <div className="grid gap-3 mb-7">
              <div className="rounded-2xl border theme-surface p-4 flex gap-3">
                <Sparkles size={17} className="text-[#F3A06D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-2">Role</h4>
                  <p className="text-xs text-[var(--text-main)] font-mono uppercase tracking-widest font-bold">{getProjectRole(project)}</p>
                </div>
              </div>
              <div className="rounded-2xl border theme-surface p-4 flex gap-3">
                <Layers3 size={17} className="text-[#F3A06D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-2">Tools</h4>
                  <p className="text-xs text-[var(--text-main)] font-mono uppercase tracking-widest font-bold">{getProjectTools(project)}</p>
                </div>
              </div>
              <div className="rounded-2xl border theme-surface p-4 flex gap-3">
                <Target size={17} className="text-[#F3A06D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-2">Visual goal</h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed">{getProjectGoal(project)}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
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
                Gửi brief tương tự <ArrowUpRight size={14} />
              </a>
              <Link
                to="/services"
                onClick={onClose}
                className="btn-outline-luxury px-6 py-4 text-[10px] font-mono font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2"
              >
                Dịch vụ <BriefcaseBusiness size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
