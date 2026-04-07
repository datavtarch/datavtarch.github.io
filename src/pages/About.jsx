import React, { useEffect, useState } from 'react';
import { IMAGES } from '../data/constants';
import { CV_DATA } from '../data/cvData';

const CVBox = ({ children, className = "" }) => (
  <div className={`p-8 bg-[#110E0B] border border-white/5 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-[#D95A2B]/50 hover:bg-[#15110E] hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(217,90,43,0.05)] hover:-translate-y-1 group ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,90,43,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    {children}
  </div>
);

const LinkBtn = ({ label, href, isSpecial = false }) => {
  const handleClick = (e) => {
    if (!href || href === "#") {
      e.preventDefault();
      alert("Vui lòng liên hệ để được sử dụng công cụ này!");
    }
  };

  return (
    <a 
      href={href || "#"} 
      onClick={handleClick}
      target={href && href !== "#" ? "_blank" : "_self"}
      rel="noopener noreferrer" 
      className={`flex items-center justify-between w-full p-3 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-300 group/btn relative z-10 ${
        isSpecial 
          ? "bg-[#D95A2B]/5 border border-[#D95A2B]/30 text-white hover:bg-[#D95A2B]/20 hover:border-[#D95A2B]/80 hover:translate-x-1.5 hover:shadow-[0_0_15px_rgba(217,90,43,0.2)]" 
          : "bg-black/40 border border-white/10 text-[#9ca3af] hover:bg-[#D95A2B]/10 hover:border-[#D95A2B]/50 hover:text-white hover:translate-x-1.5 hover:shadow-[0_0_15px_rgba(217,90,43,0.1)]"
      }`}
    >
      <span>[ {label} ]</span>
      <i className="fa-solid fa-arrow-right text-[#D95A2B] group-hover/btn:-rotate-45 transition-transform duration-300"></i>
    </a>
  );
};

const ProgressBar = ({ name, level }) => (
  <div className="w-full">
    <div className="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono">
      <span>{name}</span> 
      <span className="text-[#D95A2B]">{level}%</span>
    </div>
    <div className="h-1 bg-[#2A201A] rounded-full overflow-hidden w-full">
      <div 
        className="h-full bg-[#D95A2B] shadow-[0_0_10px_rgba(217,90,43,0.6)] transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`pt-32 pb-32 px-4 md:px-8 max-w-6xl mx-auto space-y-24 md:space-y-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* ── SECTION 1: HERO & ABOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* Avatar Card */}
        <div className="lg:col-span-4 bg-[#15110E] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center lg:sticky lg:top-32 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="w-48 h-48 rounded-3xl overflow-hidden mb-6 border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <img 
              src={IMAGES.portrait} 
              alt={CV_DATA.fullName} 
              className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <h2 className="text-2xl font-black font-heading uppercase tracking-wide mb-1 text-white">
            {CV_DATA.fullName.split(' ').slice(0, 2).join(' ')}<br />
            {CV_DATA.fullName.split(' ').slice(2).join(' ')}
          </h2>
          <div className="bg-white text-black text-[10px] font-bold px-4 py-1.5 tracking-widest uppercase mb-8 rounded-sm font-mono">
            {CV_DATA.title}
          </div>

          <div className="w-full space-y-3 text-left border-t border-white/10 pt-6">
            <h3 className="text-[#D95A2B] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 font-mono">&gt; Thông tin liên hệ</h3>
            
            <div className="flex items-center gap-4 text-xs text-gray-400 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <span className="font-mono">{CV_DATA.birthDate}</span>
            </div>
            
            <a href={`tel:${CV_DATA.phone.replace(/\./g, '')}`} className="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors">
                <i className="fa-solid fa-phone"></i>
              </div>
              <span className="font-mono">{CV_DATA.phone}</span>
            </a>
            
            <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <span className="font-mono truncate">{CV_DATA.email}</span>
            </a>
            
            <a href={`https://${CV_DATA.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <span className="font-mono">@vtarch99</span>
            </a>
            
            <div className="flex items-center gap-4 text-xs text-gray-400 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="font-mono leading-relaxed">{CV_DATA.address}</span>
            </div>
          </div>
        </div>

        {/* Content Right */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#D95A2B]"></div>
            <span className="text-[#D95A2B] text-[10px] font-bold tracking-[0.3em] font-mono uppercase">Profile.Exe</span>
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-black leading-[0.95] font-heading uppercase mb-10 tracking-tighter text-white">
            NGUYỄN<br />VĂN<br />
            <span className="text-[#D95A2B]">THANH</span>
          </h1>

          <div className="space-y-6 text-sm text-gray-400 leading-relaxed font-light mb-10 text-justify">
            {CV_DATA.summary.split('\n\n').map((p, i) => (
              <p key={i}>
                {p.includes("Trí tuệ Nhân tạo (AI)") ? (
                  <>
                    {p.split("Trí tuệ Nhân tạo (AI)")[0]}
                    <strong className="text-white font-medium">Trí tuệ Nhân tạo (AI)</strong>
                    {p.split("Trí tuệ Nhân tạo (AI)")[1]}
                  </>
                ) : p}
              </p>
            ))}
          </div>

          <a 
            href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" 
            target="_blank" 
            className="bg-[#D95A2B] hover:bg-[#e86b3e] text-white font-bold text-xs font-mono uppercase tracking-widest px-8 py-4 rounded-lg flex items-center justify-center w-max gap-3 shadow-[0_10px_25px_rgba(217,90,43,0.4)] transition-all hover:-translate-y-1"
          >
            <i className="fa-solid fa-download"></i> Tải Profile Đầy Đủ
          </a>
        </div>
      </div>

      {/* ── SECTION 2: AI & AUTOMATION ── */}
      <section>
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Core Mindset</span>
          <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">AI & <span className="text-[#D95A2B]">Automation</span></h2>
          <div className="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CVBox>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
              <i className="fa-solid fa-microchip text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">Custom GPTs</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed relative z-10">{CV_DATA.aiSkills.automation}</p>
          </CVBox>
          <CVBox>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
              <i className="fa-solid fa-flask text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">R&D Lab</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed relative z-10">{CV_DATA.aiSkills.research}</p>
          </CVBox>
          <CVBox>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
              <i className="fa-solid fa-layer-group text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">Hybrid Workflow</h3>
            <p className="text-xs text-gray-400 font-mono leading-relaxed relative z-10">{CV_DATA.aiSkills.workflow}</p>
          </CVBox>
        </div>
      </section>

      {/* ── SECTION 3: KHO DỮ LIỆU & CÔNG CỤ (LINK HUB) ── */}
      <section>
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Data Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Kho Dữ Liệu <span className="text-[#D95A2B]">& Công Cụ</span></h2>
          <div className="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CVBox>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10 w-full text-[#D95A2B]">
              <i className="fa-solid fa-robot text-xl"></i>
              <h4 className="text-base font-bold text-white uppercase font-heading">Hệ Sinh Thái GPT</h4>
            </div>
            <div className="space-y-3 relative z-10 w-full">
              <LinkBtn label="Trợ Lý Nội Thất" href={CV_DATA.linkHub.gptNoiThat} />
              <LinkBtn label="Xử Lý Ảnh E-Commerce" href={CV_DATA.linkHub.gptEcommerce} />
            </div>
          </CVBox>

          <CVBox>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10 w-full text-[#D95A2B]">
              <i className="fa-solid fa-cube text-xl"></i>
              <h4 className="text-base font-bold text-white uppercase font-heading">Thư Viện D5 Render</h4>
            </div>
            <div className="space-y-3 relative z-10 w-full">
              <LinkBtn label="Kho Ảnh Render Tĩnh" href={CV_DATA.linkHub.khoAnhRender} />
              <LinkBtn label="Video 3D Animation" href={CV_DATA.linkHub.videoAnimation} />
            </div>
          </CVBox>

          <CVBox>
            <div className="absolute top-4 right-4 bg-[#D95A2B] text-white text-[8px] font-bold px-2 py-1 rounded-sm tracking-widest font-mono uppercase z-20">MỚI</div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10 w-full text-[#D95A2B]">
              <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              <h4 className="text-base font-bold text-white uppercase font-heading">AI Generation</h4>
            </div>
            <div className="space-y-3 relative z-10 w-full">
              <LinkBtn label="Concept Đồng Nhất" href={CV_DATA.linkHub.aiConcept} />
              <LinkBtn label="Hậu Kỳ Siêu Thực" href={CV_DATA.linkHub.aiPostProduction} isSpecial={true} />
            </div>
          </CVBox>
        </div>
      </section>

      {/* ── SECTION 4: NĂNG LỰC & HỌC VẤN ── */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="mb-10 flex flex-col gap-2">
              <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Software & Tools</span>
              <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Năng Lực <span className="text-[#D95A2B]">Kỹ Thuật</span></h2>
              <div className="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {CV_DATA.softwareSkills.map((skill, idx) => (
                <ProgressBar key={idx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 flex flex-col gap-2">
              <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Timeline & Milestones</span>
              <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Học Vấn <span className="text-[#D95A2B]">& Giải Thưởng</span></h2>
              <div className="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
            </div>
            <div className="space-y-6 relative border-l border-white/10 ml-3 py-2">
              {CV_DATA.education.map((edu, idx) => (
                <div key={`edu-${idx}`} className="relative pl-8 group">
                  <div className="absolute w-2 h-2 bg-[#D95A2B] rounded-full -left-[4px] top-1.5 shadow-[0_0_8px_#D95A2B] transition-transform group-hover:scale-150"></div>
                  <h4 className="text-sm font-bold text-white uppercase mb-1">{edu}</h4>
                  <p className="text-xs text-gray-500 font-mono">Cơ sở đào tạo chính quy</p>
                </div>
              ))}
              {CV_DATA.achievements.map((ach, idx) => (
                <div key={`ach-${idx}`} className="relative pl-8 group">
                  <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[4px] top-1.5 transition-colors group-hover:bg-[#D95A2B]"></div>
                  <h4 className="text-sm font-bold text-white uppercase mb-1">{ach.title}</h4>
                  <p className="text-xs text-gray-500 font-mono">{ach.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOẠT ĐỘNG XÃ HỘI ── */}
      <section>
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Leadership & Soft Skills</span>
          <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Hoạt Động <span className="text-[#D95A2B]">Xã Hội</span></h2>
          <div className="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CV_DATA.activities.map((act, idx) => (
            <CVBox key={idx} className="!p-6 justify-center min-h-[140px]">
              <div className="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10">
                <i className={`fa-solid ${
                  idx === 0 ? 'fa-users' : 
                  idx === 1 ? 'fa-user-tie' : 
                  idx === 2 ? 'fa-sitemap' : 
                  idx === 3 ? 'fa-coins' : 
                  idx === 4 ? 'fa-medal' : 
                  idx === 5 ? 'fa-leaf' : 
                  idx === 6 ? 'fa-hands-holding-child' : 
                  'fa-hand-holding-heart'
                }`}></i>
              </div>
              <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">
                {act}
              </p>
            </CVBox>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: FINAL QUOTE ── */}
      <section>
        <div className="cv-box p-12 md:p-24 text-center flex flex-col items-center justify-center bg-[#0C0908] border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(217,90,43,0.05))] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="text-[#D95A2B] text-4xl md:text-5xl mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(217,90,43,0.4)]">
            <i className="fa-solid fa-brain"></i>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-black text-white font-heading uppercase leading-[1.3] md:leading-[1.4] mb-12 italic relative z-10 tracking-tighter max-w-4xl mx-auto drop-shadow-lg text-center">
            "Luôn chủ động nghiên cứu, <br className="hidden md:block" /><span className="text-[#D95A2B]">công bằng - sáng tạo</span> để phục vụ công việc <span className="text-[#D95A2B]">tốt nhất</span>"
          </h2>
          <div className="flex flex-wrap justify-center items-center text-[#A48F82] text-[9px] md:text-[11px] font-mono font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase relative z-10 w-full">
            <span>Adaptability</span>
            <span className="mx-3 md:mx-6 text-[#D95A2B]">•</span>
            <span>Innovation</span>
            <span className="mx-3 md:mx-6 text-[#D95A2B]">•</span>
            <span>Integrity</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
