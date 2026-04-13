import React from 'react';
import { TiltCard } from '../components/UI';
import { STORE_ITEMS } from '../data/constants';

const Store = () => {
  return (
    <div className="pt-40 max-w-6xl mx-auto px-4 md:px-6 pb-32">
      <div className="mb-20 text-center">
        <h2 className="text-6xl md:text-8xl font-black uppercase font-heading mb-6 tracking-tighter">
          Premium <span className="text-[#D95A2B]">Assets.</span>
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm uppercase tracking-[0.3em] font-bold mt-4">
          &gt; Tối ưu thời gian, nâng tầm diễn họa
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

      {/* ── LEAD MAGNET ── */}
      <div className="mt-32 p-12 bg-[#15110E] border border-[#D95A2B]/20 rounded-3xl text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,90,43,0.15),transparent_70%)] group-hover:scale-105 transition-transform duration-1000"></div>
         <h3 className="text-3xl md:text-5xl font-black uppercase font-heading mb-4 relative z-10 text-white">
           Nhận Miễn Phí <br /> <span className="text-[#D95A2B]">D5 Material Pack</span>
         </h3>
         <p className="text-sm font-mono text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed tracking-wider">
           Nhập email để tải xuống thư viện 10 vật liệu PBR nâng cao, tối ưu tuyệt đối cho môi trường ánh sáng nội thất.
         </p>
         <form className="flex flex-col sm:flex-row max-w-md mx-auto relative z-10 gap-2 sm:gap-0" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! Link tải đã được gửi đến email.'); }}>
           <input 
             type="email" 
             required
             placeholder="Email của bạn..." 
             className="flex-1 bg-black/50 border border-white/10 sm:rounded-l-lg sm:rounded-r-none rounded-lg px-6 py-4 text-sm font-mono focus:outline-none focus:border-[#D95A2B] text-white" 
           />
           <button 
             type="submit"
             className="bg-[#D95A2B] text-white px-8 py-4 sm:rounded-r-lg sm:rounded-l-none rounded-lg font-mono font-bold uppercase text-xs hover:bg-white hover:text-[#D95A2B] transition-all"
           >
             Gửi Cho Tôi
           </button>
         </form>
      </div>
    </div>
  );
};

export default Store;
