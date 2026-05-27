import { useState, useEffect } from 'react';

export const TiltCard = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick}>{children}</div>
);

export const Typewriter = ({ phrases }) => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    const typeSpeed = isDeleting ? 30 : 60;
    const delay =
      isDeleting && text === ""
        ? 500
        : !isDeleting && text === currentPhrase
        ? 2500
        : typeSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
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

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[92vh] neo-card rounded-[2rem] overflow-hidden grid md:grid-cols-[1.25fr_.75fr]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-11 h-11 bg-black/55 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D95A2B] transition-colors"
          aria-label="Close project modal"
        >
          ✕
        </button>

        <div className="relative h-[42vh] md:h-[82vh] min-h-[300px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent md:hidden" />
        </div>

        <div className="relative p-7 md:p-10 flex flex-col justify-center overflow-y-auto bg-[#0B0806]/88">
          <div className="absolute inset-0 soft-grid opacity-10" />
          <div className="relative z-10">
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tags.map((t) => <span key={t} className="tag-accent">{t}</span>)}
            </div>
            <div className="eyebrow mb-5">Project detail</div>
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase mb-6 leading-[0.95] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed mb-8">
              &gt; {project.desc}
            </p>
            <div className="space-y-5 mb-9 bg-white/[0.035] p-5 border border-white/10 rounded-2xl">
              <div>
                <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-2">Challenge</h4>
                <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed">
                  Nghiên cứu ánh sáng tự nhiên, thiết lập vật liệu PBR và tạo cảm xúc hình ảnh cho không gian nội/ngoại thất.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-2">Workflow</h4>
                <p className="text-xs text-white font-mono uppercase tracking-widest font-bold">Sketchup + D5 Render + AI Post-Production</p>
              </div>
            </div>
            {project.pdfLink && (
              <a
                href={normalizeUrl(project.pdfLink)}
                target="_blank"
                rel="noreferrer"
                className="btn-accent px-7 py-4 text-xs font-mono font-bold tracking-widest uppercase inline-flex items-center gap-2"
              >
                Xem PDF dự án ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
