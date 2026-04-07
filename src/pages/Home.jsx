import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, ExternalLink } from 'lucide-react';
import { TiltCard, Typewriter } from '../components/UI';
import { InstagramIcon } from '../components/Icons';
import { PROJECTS_DATA, STORE_ITEMS, IG_POSTS } from '../data/constants';

const Home = ({ setSelectedProject }) => {
  return (
    <div className="pt-32 space-y-32 px-4 md:px-6">
      {/* ── HERO SECTION ── */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D95A2B] animate-pulse"></span>
          <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">
            Architect & 3D Visualizer
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-heading mb-6 drop-shadow-xl">
          Nguyễn Văn <br />
          <span className="text-[#D95A2B]">Thanh.</span>
        </h1>
        <div className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[50px] flex flex-col justify-center">
          <span>
            &gt; SYSTEM:{' '}
            <Typewriter
              phrases={[
                'Loading D5 Render Environment...',
                'Ready: Kiến tạo không gian siêu thực.',
              ]}
            />
          </span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/portfolio"
            className="btn-accent px-8 py-4 text-xs uppercase font-mono flex items-center gap-2"
          >
            Dự án <MoveRight size={14} />
          </Link>
          <Link
            to="/store"
            className="btn-outline-luxury px-8 py-4 text-xs uppercase font-mono"
          >
            Cửa hàng
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map((proj) => (
            <TiltCard
              key={proj.id}
              className="luxury-card aspect-[4/3] cursor-pointer group"
              onClick={() => setSelectedProject(proj)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#D95A2B] uppercase mb-2">
                  {proj.category}
                </span>
                <h4 className="text-xl font-black font-heading uppercase">
                  {proj.title}
                </h4>
              </div>
            </TiltCard>
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
              Cửa Hàng <span className="text-[#D95A2B]">D5 Render</span>
            </h3>
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
              <a
                key={idx}
                href={post.link}
                className="aspect-square luxury-card overflow-hidden group border-[0.5px] md:border"
              >
                <img
                  src={`${prefix}instagram/${post.image}`.replace(/\/+/g, '/')}
                  alt="Instagram Post"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Subtle on Mobile */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
