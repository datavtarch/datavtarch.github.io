import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, ExternalLink } from 'lucide-react';
import { TiltCard, Typewriter } from '../components/UI';
import { InstagramIcon } from '../components/Icons';
import { PROJECTS_DATA, STORE_ITEMS, IG_POSTS } from '../data/constants';

const Home = ({ setSelectedProject }) => {
  const [igModal, setIgModal] = useState(null);

  return (
    <div className="pt-32 space-y-32 px-4 md:px-6 relative">
      {/* ── HERO SECTION ── */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D95A2B] animate-pulse"></span>
          <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">
            Architect & 3D Visualizer
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-heading mb-4 drop-shadow-xl">
          Kiến Tạo Không Gian. <br />
          <span className="text-[#D95A2B]">Vượt Qua Giới Hạn.</span>
        </h1>
        <div className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[70px] flex flex-col justify-center">
          <span>
            &gt; ROLE:{' '}
            <Typewriter
              phrases={[
                'Chuyên gia diễn họa kiến trúc 3D.',
                'AI Workflow & D5 Render.',
                'Cá nhân hóa thiết kế dự án cao cấp.',
              ]}
            />
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:vtarch99@gmail.com"
            className="btn-accent px-8 py-4 text-xs uppercase font-mono flex items-center gap-2"
          >
            Hợp Tác Cùng Tôi <MoveRight size={14} />
          </a>
          <Link
            to="/portfolio"
            className="btn-outline-luxury px-8 py-4 text-xs uppercase font-mono"
          >
            Khám phá dự án
          </Link>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B]">
              &gt; FEATURED
            </h2>
            <h3 className="text-4xl font-black font-heading uppercase">
              Dự Án <span className="text-[#D95A2B]">Nổi Bật</span>
            </h3>
          </div>
          <Link
            to="/portfolio"
            className="text-[#D95A2B] font-mono text-xs hover:underline flex items-center gap-2"
          >
            XEM TẤT CẢ <ExternalLink size={14} />
          </Link>
        </div>
        <div className="flex flex-col gap-12">
          {PROJECTS_DATA.slice(0, 3).map((proj, idx) => (
            <div
              key={proj.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center group cursor-pointer`}
              onClick={() => setSelectedProject(proj)}
            >
              <div className="w-full md:w-2/3 overflow-hidden rounded-xl border border-[var(--border-color)]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className="w-full aspect-[16/9] md:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-[#D95A2B] uppercase mb-4 tracking-widest font-bold">
                  &gt; {proj.category?.[0] || 'Dự án'}
                </span>
                <h4 className="text-3xl font-black font-heading uppercase mb-4 group-hover:text-[#D95A2B] transition-colors">
                  {proj.title}
                </h4>
                <p className="text-[var(--text-muted)] font-mono text-sm mb-6 line-clamp-3 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase hover:text-[#D95A2B] transition-colors">
                  Xem chi tiết dự án <MoveRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED STORE ── */}
      <section className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2 text-[#D95A2B]">
              &gt; PREMIUM ASSETS
            </h2>
            <h3 className="text-4xl font-black font-heading uppercase">
              Premium <span className="text-[#D95A2B]">D5 Assets</span>
            </h3>
            <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.2em] mt-2 font-bold max-w-sm">
              Giải pháp tối ưu thời gian diễn họa với bộ thư viện cao cấp
            </p>
          </div>
          <Link
            to="/store"
            className="text-[#D95A2B] font-mono text-xs hover:underline flex items-center gap-2"
          >
            XEM TẤT CẢ <ExternalLink size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORE_ITEMS.slice(0, 3).map((item, idx) => (
            <TiltCard
              key={idx}
              className="luxury-card aspect-[4/3] cursor-pointer group flex flex-col justify-end"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] to-transparent opacity-90"></div>
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-black font-heading uppercase">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-4 border-t border-[var(--border-color)] pt-4">
                  <span className="text-[#D95A2B] font-bold text-xl">
                    {item.price}
                  </span>
                  <button className="btn-accent px-4 py-2 text-[10px] font-mono uppercase">
                    Chi Tiết
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── SOCIAL FEED ── */}
      <section className="max-w-6xl mx-auto border-t border-[var(--border-color)] pt-32 text-center">
        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
          <InstagramIcon size={24} />
        </div>
        <h3 className="text-4xl font-black font-heading uppercase">Social Feed</h3>
        <a
          href="https://www.instagram.com/vtarch99/"
          className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors"
        >
          &gt; @vtarch99
        </a>
        
        {/* Grid cố định 3 cột cho mọi thiết bị */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-16 px-2 md:px-0">
          {IG_POSTS.slice(0, 9).map((post, idx) => {
            const prefix = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;
            return (
              <div
                key={idx}
                onClick={() => setIgModal(post)}
                className="aspect-square luxury-card overflow-hidden group border-[0.5px] md:border cursor-pointer relative"
              >
                <img
                  src={`${prefix}instagram/${post.image}`.replace(/\/+/g, '/')}
                  alt="Instagram Post"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Subtle on Mobile */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-black/80 text-white text-xs font-mono px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    Xem ảnh
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── IG MODAL ── */}
      {igModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity" onClick={() => setIgModal(null)}>
          <div className="bg-[var(--bg-color)] border border-[var(--border-color)] p-4 rounded-xl max-w-lg w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white bg-black/50 w-8 h-8 rounded-full flex items-center justify-center" onClick={() => setIgModal(null)}>
               ✕
            </button>
            <img 
              src={`${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}instagram/${igModal.image}`.replace(/\/+/g, '/')} 
              alt="IG Post" 
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover rounded-lg mb-6 border border-[var(--border-color)]" 
            />
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)] font-mono text-sm px-2">
                ❤️ {igModal.likes} | 💬 {igModal.comments}
              </span>
              <a href={igModal.link} target="_blank" rel="noreferrer" className="btn-accent px-4 py-2 text-[10px] uppercase font-mono font-bold tracking-widest">
                Follow @vtarch99
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
