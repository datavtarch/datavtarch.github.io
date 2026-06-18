import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Mail, PackageCheck } from 'lucide-react';
import { TiltCard } from '../components/UI';
import { STORE_ITEMS } from '../data/constants';

const resourceBenefits = [
  'Dành cho người học D5 Render và diễn họa nội thất.',
  'Tập trung vào vật liệu, ánh sáng và workflow thực chiến.',
  'Có thể dùng như tài liệu tham khảo khi triển khai dự án.',
];

const Store = () => {
  return (
    <div className="pt-36 md:pt-44 pb-32">
      <section className="section-shell">
        <div className="relative neo-card rounded-[2rem] p-7 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="relative z-10 grid lg:grid-cols-[1fr_.75fr] gap-8 items-end">
            <div>
              <div className="eyebrow mb-6">VTARCH Resources</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.9]">
                D5 Assets <span className="gradient-title">& Workflow.</span>
              </h1>
              <p className="max-w-2xl mt-6 text-sm md:text-base font-mono text-[var(--text-muted)] leading-relaxed">
                Khu tài nguyên phụ của VTARCH: vật liệu, setting render và workflow tham khảo cho D5 Render. Phần này hỗ trợ người học và cộng đồng diễn họa, không thay thế phần dịch vụ chính của website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/services" className="btn-accent px-7 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                  Xem dịch vụ VTARCH <ArrowUpRight size={15} />
                </Link>
                <a href="mailto:vtarch99@gmail.com" className="btn-outline-luxury px-7 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                  Hỏi về asset <Mail size={15} />
                </a>
              </div>
            </div>
            <div className="neo-card rounded-3xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/15 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent-2)] mb-5">
                <PackageCheck size={22} />
              </div>
              <div className="space-y-4">
                {resourceBenefits.map((item) => (
                  <div key={item} className="text-xs md:text-sm font-mono text-[var(--text-muted)] leading-relaxed border-l border-[var(--accent)]/40 pl-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/34 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                <span className="tag-accent">{item.tags?.[0] || 'Resource'}</span>
                <span className="w-10 h-10 rounded-full border border-white/10 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="relative z-20 p-6 md:p-7">
                <h3 className="text-2xl font-black font-heading uppercase leading-tight mb-4 group-hover:text-[var(--accent-2)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-mono mb-7 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-end justify-between border-t border-white/10 pt-5 gap-4">
                  <div>
                    <span className="text-[var(--accent-2)] font-black text-4xl block leading-none">{item.price}</span>
                    <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">Digital resource</span>
                  </div>
                  <a href="mailto:vtarch99@gmail.com" className="btn-accent px-5 py-3 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
                    Liên hệ
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-20 md:mt-28 neo-card rounded-[2rem] p-7 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/15 border border-[var(--accent)]/25 mx-auto mb-6 flex items-center justify-center text-[var(--accent-2)]">
              <Download size={26} />
            </div>
            <h3 className="text-3xl md:text-6xl font-black uppercase font-heading mb-5">
              Muốn nhận <br /> <span className="gradient-title">D5 Material Pack?</span>
            </h3>
            <p className="text-sm font-mono text-[var(--text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Gửi email hoặc liên hệ trực tiếp để nhận tài nguyên mẫu, trao đổi workflow D5 Render hoặc đặt dịch vụ hình ảnh dự án.
            </p>
            <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! VTARCH sẽ liên hệ lại qua email.'); }}>
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--accent-2)]" />
                <input 
                  type="email" 
                  required
                  placeholder="Email của bạn..." 
                  className="w-full theme-field border rounded-lg pl-12 pr-6 py-4 text-sm font-mono focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <button type="submit" className="btn-accent px-8 py-4 font-mono font-bold uppercase text-xs tracking-widest">
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
