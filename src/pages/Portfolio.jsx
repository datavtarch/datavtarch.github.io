import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiltCard } from '../components/UI';
import { PROJECTS_DATA, FILTER_CATEGORIES } from '../data/constants';

const Portfolio = ({ setSelectedProject }) => {
  const [filter, setFilter] = useState("Tất cả");
  const navigate = useNavigate();

  const filteredProjects = filter === "Tất cả" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => 
        Array.isArray(p.category) 
          ? p.category.includes(filter) 
          : p.category === filter
      );

  const handleProjectClick = (proj) => {
    if (proj.detailsPath) {
      navigate(proj.detailsPath);
    } else {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 md:px-6 pb-32">
      {/* ── HEADER & FILTER ── */}
      <div className="mb-20 text-center">
        <h2 className="text-6xl md:text-8xl font-black uppercase font-heading mb-10 tracking-tighter">
          Port<span className="text-[#D95A2B]">folio.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {FILTER_CATEGORIES.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-[#D95A2B] text-white shadow-lg shadow-[#D95A2B]/30 scale-105' 
                  : 'bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#D95A2B] hover:text-[#D95A2B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((proj, idx) => (
          <TiltCard 
            key={proj.id} 
            className="luxury-card aspect-square cursor-pointer group"
            onClick={() => handleProjectClick(proj)}
          >
            <img 
              src={proj.image} 
              alt={proj.title} 
              loading={idx < 3 ? 'eager' : 'lazy'}
              fetchPriority={idx < 3 ? 'high' : 'auto'}
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <div className="flex gap-2 mb-4">
                {proj.tags.map((t, i) => (
                  <span key={i} className="tag-accent text-[8px]">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-black font-heading uppercase leading-tight group-hover:text-[#D95A2B] transition-colors">
                {proj.title}
              </h3>
              <p className="text-[10px] font-mono text-[var(--text-muted)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500 uppercase tracking-widest">
                View Project Detail
              </p>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* ── EMPTY STATE ── */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-[var(--border-color)] rounded-2xl">
          <p className="font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Chưa có dự án trong chuyên mục này.
          </p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
