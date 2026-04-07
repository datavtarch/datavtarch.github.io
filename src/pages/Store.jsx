import React from 'react';
import { TiltCard } from '../components/UI';
import { STORE_ITEMS } from '../data/constants';

const Store = () => {
  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 md:px-6 pb-32">
      {/* ── HEADER ── */}
      <div className="mb-20 text-center">
        <h2 className="text-6xl md:text-8xl font-black uppercase font-heading mb-6 tracking-tighter">
          Store <span className="text-[#D95A2B]">D5.</span>
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm uppercase tracking-[0.3em] font-bold">
          &gt; High-End Architecture Assets
        </p>
      </div>

      {/* ── STORE GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STORE_ITEMS.map((item, idx) => (
          <TiltCard 
            key={idx} 
            className="luxury-card aspect-[4/5] cursor-pointer group flex flex-col justify-end"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              loading="lazy" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-20 p-8">
              <div className="flex gap-2 mb-4">
                {item.tags.map((t, i) => (
                  <span key={i} className="tag-accent text-[8px]">{t}</span>
                ))}
              </div>
              <h3 className="text-3xl font-black font-heading uppercase leading-none mb-4 group-hover:text-[#D95A2B] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono mb-8 line-clamp-2 uppercase tracking-wider">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-6">
                <div>
                  <span className="text-[#D95A2B] font-black text-4xl block leading-none">{item.price}</span>
                  <span className="text-[8px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Digital License</span>
                </div>
                <button className="btn-accent px-8 py-4 text-xs font-mono uppercase tracking-widest shadow-lg shadow-[#D95A2B]/20">
                  Mua Ngay
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default Store;
