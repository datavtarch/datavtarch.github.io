import React from 'react';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { TiltCard } from '../components/UI';
import { STORE_ITEMS } from '../data/constants';

const Store = () => {
  return (
    <div className="pt-36 md:pt-44 pb-32">
      <section className="section-shell">
        <div className="relative neo-card rounded-[2rem] p-7 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute -right-12 -top-12 w-96 h-96 bg-[#D95A2B]/20 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-4xl">
            <div className="eyebrow mb-6">Digital render assets</div>
            <h1 className="text-5xl md:text-8xl font-black uppercase font-heading tracking-[-0.07em] leading-[0.9]">
              Premium <span className="gradient-title">Assets.</span>
            </h1>
            <p className="max-w-2xl mt-6 text-sm md:text-base font-mono text-[var(--text-muted)] leading-relaxed">
              Bộ thư viện D5, vật liệu PBR và thiết lập ánh sáng giúp rút ngắn thời gian diễn họa, đồng thời giữ chất lượng hình ảnh cao cấp.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {STORE_ITEMS.map((item, idx) => (
            <TiltCard key={idx} className="luxury-card aspect-[4/5] cursor-pointer group flex flex-col justify-end">
              <img 
                src={item.img} 
                alt={item.title} 
                loading={idx < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/28 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <span className="tag-accent">{item.tags?.[0] || 'Asset'}</span>
                <span className="w-10 h-10 rounded-full border border-white/10 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#D95A2B] transition-colors">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="relative z-20 p-6 md:p-7">
                <h3 className="text-2xl font-black font-heading uppercase leading-tight mb-4 group-hover:text-[#F3A06D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-mono mb-7 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-end justify-between border-t border-white/10 pt-5 gap-4">
                  <div>
                    <span className="text-[#F3A06D] font-black text-4xl block leading-none">{item.price}</span>
                    <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">Digital license</span>
                  </div>
                  <button className="btn-accent px-5 py-3 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
                    Mua
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-20 md:mt-28 neo-card rounded-[2rem] p-7 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,90,43,0.18),transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#D95A2B]/15 border border-[#D95A2B]/25 mx-auto mb-6 flex items-center justify-center text-[#F3A06D]">
              <Download size={26} />
            </div>
            <h3 className="text-3xl md:text-6xl font-black uppercase font-heading mb-5 tracking-tight">
              Nhận miễn phí <br /> <span className="gradient-title">D5 Material Pack</span>
            </h3>
            <p className="text-sm font-mono text-[var(--text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Nhập email để nhận thư viện 10 vật liệu PBR nâng cao, tối ưu cho môi trường ánh sáng nội thất.
            </p>
            <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! Link tải đã được gửi đến email.'); }}>
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#F3A06D]" />
                <input 
                  type="email" 
                  required
                  placeholder="Email của bạn..." 
                  className="w-full bg-black/40 border border-white/10 rounded-full pl-12 pr-6 py-4 text-sm font-mono focus:outline-none focus:border-[#D95A2B] text-white" 
                />
              </div>
              <button type="submit" className="btn-accent px-8 py-4 font-mono font-bold uppercase text-xs tracking-widest">
                Gửi cho tôi
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
