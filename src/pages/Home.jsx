import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, MoveRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TiltCard, Typewriter } from '../components/UI';
import { InstagramIcon } from '../components/Icons';
import { PROJECTS_DATA, STORE_ITEMS, IG_POSTS } from '../data/constants';

const stats = [
  ['50+', 'Visual projects'],
  ['D5', 'Render workflow'],
  ['AI', 'Concept & post'],
  ['1:1', 'Brief to final image'],
];

const serviceHighlights = [
  {
    title: 'Interior CGI',
    desc: 'Diễn họa nội thất bằng D5 Render, ánh sáng điện ảnh, vật liệu rõ và bố cục dễ bán hàng.',
  },
  {
    title: 'Architecture Render',
    desc: 'Hình ảnh ngoại thất, công trình thực tế, không gian kiến trúc có bối cảnh và chiều sâu thị giác.',
  },
  {
    title: 'AI Concept',
    desc: 'Phát triển concept, mood visual và hậu kỳ AI để tạo nhiều phương án nhanh, đẹp, có tính thương mại.',
  },
  {
    title: 'Product Visual',
    desc: 'Tối ưu hình ảnh sản phẩm nội thất cho website, catalog, social, quảng cáo và e-commerce.',
  },
];

const narrativeSteps = [
  ['01', 'Brief', 'Chốt mục tiêu hình ảnh, phong cách, vật liệu, deadline và kênh sử dụng.'],
  ['02', 'Visual direction', 'Dựng mood ánh sáng, góc nhìn, câu chuyện không gian và tiêu chuẩn đầu ra.'],
  ['03', 'Render craft', 'Triển khai D5 Render, hậu kỳ màu, AI concept và tối ưu hình ảnh thương mại.'],
];

const Home = ({ setSelectedProject }) => {
  const [igModal, setIgModal] = useState(null);
  const heroProject = PROJECTS_DATA.find((project) => project.id === 3) || PROJECTS_DATA[0];

  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[820px] md:min-h-screen flex items-center pt-24 md:pt-32 pb-10 md:pb-20 px-4 md:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 hero-stage" />
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="hero-ruler hidden md:block" />
        </div>

        <div className="section-shell relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-6 md:gap-12 lg:gap-16 items-center">
            <div>
              <div className="eyebrow mb-5 md:mb-7">VTARCH · Visualization · D5 · AI CGI</div>
              <h1 className="text-[13vw] sm:text-7xl lg:text-[6.5rem] leading-[0.94] font-black font-heading mb-6 md:mb-8">
                Diễn họa <br />
                <span className="gradient-title">kiến trúc</span><br />
                có cảm xúc.
              </h1>
              <div className="story-card max-w-2xl text-[var(--text-muted)] font-mono text-sm md:text-base leading-relaxed mb-7 md:mb-9">
                <p className="mb-3">
                  &gt; SERVICE:{' '}
                  <span className="hidden sm:inline">
                    <Typewriter
                      phrases={[
                        'Architecture CGI & D5 Render.',
                        'Interior visualization for brands.',
                        'AI concept & post-production workflow.',
                      ]}
                    />
                  </span>
                  <span className="sm:hidden text-[var(--text-main)] font-bold">Architecture CGI.</span>
                </p>
                <p>
                  VTARCH tạo hình ảnh kiến trúc, nội thất và sản phẩm nội thất bằng D5 Render kết hợp AI workflow — giúp dự án nhìn rõ vật liệu, đẹp ánh sáng và thuyết phục khách hàng hơn.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:vtarch99@gmail.com" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                  Gửi brief dự án <ArrowUpRight size={15} />
                </a>
                <Link to="/portfolio" className="btn-outline-luxury px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                  Xem dự án <MoveRight size={15} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="hero-image-shell visual-frame relative max-w-[292px] sm:max-w-none mx-auto">
                <div className="relative overflow-hidden rounded-md aspect-[16/10] sm:aspect-[4/5]">
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/10 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {heroProject.tags.map((tag) => <span key={tag} className="tag-accent">{tag}</span>)}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black font-heading uppercase leading-tight">
                      {heroProject.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 neo-card p-5 max-w-[270px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2 text-[#F3A06D]">
                  <Sparkles size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Project-ready visual</span>
                </div>
                <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed">
                  Render, AI concept và hậu kỳ để hình ảnh dùng được cho bán hàng, portfolio và hồ sơ thuyết trình.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-16">
            {stats.map(([number, label]) => (
              <div key={label} className="neo-card p-5">
                <div className="text-3xl md:text-4xl font-black font-heading text-[#F3A06D]">{number}</div>
                <div className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY PATH */}
      <section className="section-shell py-12 md:py-18 section-rule">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-8 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow mb-5">Studio method</div>
            <h2 className="text-4xl md:text-6xl font-black font-heading leading-[0.96]">
              Một hình ảnh đẹp phải <span className="gradient-title">bán được câu chuyện.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {narrativeSteps.map(([number, title, desc]) => (
              <div key={number} className="story-card min-h-[220px]">
                <div className="story-kicker mb-5">Chapter {number}</div>
                <h3 className="text-2xl font-black font-heading uppercase mb-4">{title}</h3>
                <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-shell py-14 md:py-20 section-rule">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9">
          <div>
            <div className="eyebrow mb-5">Core services</div>
            <h2 className="text-4xl md:text-6xl font-black font-heading leading-[0.98]">
              VTARCH làm <span className="gradient-title">dịch vụ gì?</span>
            </h2>
          </div>
          <Link to="/services" className="text-[#F3A06D] font-mono text-xs hover:underline flex items-center gap-2 uppercase tracking-widest">
            Xem chi tiết <ExternalLink size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {serviceHighlights.map((service, idx) => (
            <div key={service.title} className="luxury-card p-6 min-h-[250px] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="tag-accent">0{idx + 1}</span>
                <CheckCircle2 size={18} className="text-[#F3A06D]" />
              </div>
              <h3 className="text-2xl font-black font-heading uppercase leading-tight mb-4">
                {service.title}
              </h3>
              <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed mt-auto">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-shell py-14 md:py-20 section-rule">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9">
          <div>
            <div className="eyebrow mb-5">Featured works</div>
            <h2 className="text-4xl md:text-6xl font-black font-heading leading-[0.98]">
              Dự án <span className="gradient-title">nổi bật</span>
            </h2>
          </div>
          <Link to="/portfolio" className="text-[#F3A06D] font-mono text-xs hover:underline flex items-center gap-2 uppercase tracking-widest">
            Xem tất cả <ExternalLink size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS_DATA.slice(0, 5).map((proj, idx) => (
            <TiltCard
              key={proj.id}
              className="project-card aspect-[4/5] group"
              onClick={() => setSelectedProject(proj)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading={idx < 2 ? 'eager' : 'lazy'}
                fetchPriority={idx < 2 ? 'high' : 'auto'}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3">
                <span className="tag-accent">0{idx + 1}</span>
                <span className="w-9 h-9 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D95A2B] transition-colors">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="project-card-content">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {proj.tags.slice(0, 3).map((t) => <span key={t} className="tag-accent">{t}</span>)}
                </div>
                <h3 className="text-xl md:text-2xl font-black font-heading leading-tight group-hover:text-[#F3A06D] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-gray-300 mt-3 line-clamp-2">
                  {proj.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section className="section-shell py-14 md:py-20 section-rule">
        <div className="neo-card p-6 md:p-10">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start">
            <div>
              <div className="eyebrow mb-5">Resources</div>
              <h2 className="text-4xl md:text-5xl font-black font-heading uppercase">
                D5 Assets <span className="gradient-title">& workflow</span>
              </h2>
              <p className="text-[var(--text-muted)] font-mono text-sm mt-4 max-w-xl leading-relaxed">
                Khu tài nguyên phụ dành cho D5 Render, vật liệu và workflow. Phần chính của website vẫn là portfolio và dịch vụ hình ảnh dự án.
              </p>
              <Link to="/store" className="btn-outline-luxury px-7 py-4 text-xs uppercase font-mono tracking-widest mt-7 inline-flex">
                Xem Resources
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STORE_ITEMS.slice(0, 3).map((item, idx) => (
                <TiltCard key={idx} className="project-card aspect-[4/3] group flex flex-col justify-end">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent" />
                  <div className="relative z-20 p-5">
                    <h3 className="text-lg font-black font-heading uppercase leading-tight">{item.title}</h3>
                    <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4">
                      <span className="text-[#F3A06D] font-black text-xl">{item.price}</span>
                      <span className="tag-accent">Detail</span>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL FEED */}
      <section className="section-shell py-14 md:py-20 text-center section-rule">
        <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
          <InstagramIcon size={26} />
        </div>
        <h3 className="text-4xl md:text-5xl font-black font-heading uppercase">Social Feed</h3>
        <a href="https://www.instagram.com/vtarch99/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors">
          &gt; @vtarch99
        </a>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mt-12">
          {IG_POSTS.slice(0, 12).map((post, idx) => {
            const prefix = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;
            return (
              <div key={idx} onClick={() => setIgModal(post)} className="aspect-square luxury-card overflow-hidden group border-[0.5px] md:border cursor-pointer relative rounded-xl md:rounded-2xl">
                <img src={`${prefix}instagram/${post.image}`.replace(/\/+/g, '/')} alt="Instagram Post" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            );
          })}
        </div>
      </section>

      {igModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setIgModal(null)}>
          <div className="bg-[var(--bg-color)] border border-[var(--border-color)] p-4 rounded-2xl max-w-lg w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white bg-black/60 w-9 h-9 rounded-full flex items-center justify-center z-10" onClick={() => setIgModal(null)}>✕</button>
            <img src={`${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}instagram/${igModal.image}`.replace(/\/+/g, '/')} alt="IG Post" loading="lazy" decoding="async" className="w-full aspect-square object-cover rounded-xl mb-5 border border-[var(--border-color)]" />
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-muted)] font-mono text-sm px-2">❤️ {igModal.likes} | 💬 {igModal.comments}</span>
              <a href={igModal.link} target="_blank" rel="noreferrer" className="btn-accent px-4 py-2 text-[10px] uppercase font-mono font-bold tracking-widest">Follow</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
