import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
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
    if (proj.detailsPath) navigate(proj.detailsPath);
    else setSelectedProject(proj);
  };

  return (
    <div className="pt-36 md:pt-44 pb-32">
      <section className="section-shell">
        <div className="relative neo-card rounded-[2rem] p-7 md:p-12 mb-14 overflow-hidden">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#D95A2B]/20 blur-[90px] rounded-full" />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="eyebrow mb-6">Selected archive</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase font-heading tracking-[-0.07em] leading-[0.9]">
                Port<span className="gradient-title">folio.</span>
              </h1>
              <p className="max-w-2xl mt-6 text-sm md:text-base font-mono text-[var(--text-muted)] leading-relaxed">
                Tuyển chọn các dự án kiến trúc, nội thất, D5 Render và AI concept theo ngôn ngữ hình ảnh điện ảnh.
              </p>
            </div>
            <div className="hidden md:flex w-24 h-24 rounded-3xl border border-white/10 bg-white/[0.035] items-center justify-center text-[#F3A06D]">
              <Search size={34} />
            </div>
          </div>
        </div>

        <div className="sticky top-24 z-20 mb-10 -mx-2 px-2 py-2 overflow-x-auto">
          <div className="flex gap-3 min-w-max rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)]/85 backdrop-blur-2xl p-2 w-max mx-auto">
            {FILTER_CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-7 py-3 rounded-full font-mono text-[10px] uppercase tracking-[0.18em] font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#D95A2B] text-white shadow-lg shadow-[#D95A2B]/30' 
                    : 'text-[var(--text-muted)] hover:text-[#F3A06D] hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {filteredProjects.map((proj, idx) => (
            <TiltCard 
              key={proj.id} 
              className={`luxury-card cursor-pointer group ${idx % 7 === 0 ? 'lg:col-span-7 aspect-[16/10]' : idx % 7 === 1 ? 'lg:col-span-5 aspect-[16/10]' : 'lg:col-span-4 aspect-[4/5]'}`}
              onClick={() => handleProjectClick(proj)}
            >
              <img 
                src={proj.image} 
                alt={proj.title} 
                loading={idx < 3 ? 'eager' : 'lazy'}
                fetchPriority={idx < 3 ? 'high' : 'auto'}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-4">
                <span className="tag-accent">{String(idx + 1).padStart(2, '0')}</span>
                <span className="w-10 h-10 rounded-full border border-white/10 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#D95A2B] transition-colors">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {proj.tags.slice(0, 3).map((t, i) => (
                    <span key={i} className="tag-accent">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-heading uppercase leading-tight group-hover:text-[#F3A06D] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-gray-300 mt-3 line-clamp-2 opacity-90">
                  {proj.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-[var(--border-color)] rounded-3xl mt-10">
            <p className="font-mono text-[var(--text-muted)] uppercase tracking-widest">
              Chưa có dự án trong chuyên mục này.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
