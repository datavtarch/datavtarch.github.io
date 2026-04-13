import { useState, useEffect } from 'react';

// ========================================================
//  TILT CARD (wrapper)
// ========================================================
export const TiltCard = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick}>{children}</div>
);

// ========================================================
//  TYPEWRITER EFFECT
// ========================================================
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
    <span className="text-[#D95A2B] font-bold">
      {text}
      <span className="inline-block w-1.5 h-4 bg-[#D95A2B] ml-1 animate-pulse align-middle" />
    </span>
  );
};

// ========================================================
//  PROJECT MODAL
// ========================================================
export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#14100E] rounded-2xl overflow-hidden border border-[#D95A2B]/30 flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center text-white hover:bg-[#D95A2B] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="w-full md:w-3/5 h-[40vh] md:h-full min-h-[280px]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <div className="flex gap-2 mb-6 flex-wrap">
            {project.tags.map((t) => (
              <span key={t} className="tag-accent">{t}</span>
            ))}
          </div>
          <h2 className="text-3xl font-black font-heading uppercase mb-6">
            {project.title}
          </h2>
          <p className="text-sm text-gray-400 font-mono leading-relaxed mb-6">
            &gt; {project.desc}
          </p>
          
          <div className="space-y-5 mb-10 bg-[var(--glass-bg)] p-4 border border-[var(--border-color)] rounded-xl">
             <div>
                <h4 className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-[0.2em] font-bold mb-1">Vấn Đề / Challenge</h4>
                <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed">Nghiên cứu ánh sáng tự nhiên, thiết lập hệ vật liệu PBR kết hợp tạo cảm xúc cho không gian nội/ngoại thất.</p>
             </div>
             <div>
                <h4 className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-[0.2em] font-bold mb-1">Công Cụ / Workflow</h4>
                <p className="text-xs text-white font-mono uppercase tracking-widest font-bold">Sketchup + D5 Render + AI Post-Production</p>
             </div>
          </div>
          
          <div className="flex gap-4 items-center">
            {project.pdfLink && (
              <a
                href={`${import.meta.env.DEV ? "/" : import.meta.env.BASE_URL}${project.pdfLink}`.replace(/\/+/g, "/")}
                target="_blank"
                rel="noreferrer"
                className="btn-accent px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-[0_5px_15px_rgba(217,90,43,0.3)]"
              >
                XEM PDF DỰ ÁN
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
