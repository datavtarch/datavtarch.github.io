import React from 'react';
import { IMAGES } from '../data/constants';
import { TiltCard } from '../components/UI';
import { Download, Award, Briefcase, Zap } from 'lucide-react';

const SkillBar = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest">
      <span>{name}</span>
      <span className="text-[#D95A2B]">{level}%</span>
    </div>
    <div className="h-1 bg-[var(--border-color)] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#D95A2B] transition-all duration-1000 ease-out" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const skills = [
    { name: "SketchUp Pro", level: 95 },
    { name: "D5 Render (Expert)", level: 98 },
    { name: "3ds Max", level: 85 },
    { name: "AI Architecture Tools", level: 90 },
    { name: "CGI Interior Design", level: 92 },
  ];

  const milestones = [
    { year: "2020", title: "Khởi đầu Đam mê", desc: "Bắt đầu hành trình thiết kế với các công cụ diễn họa cơ bản." },
    { year: "2022", title: "Chuyên gia D5 Render", desc: "Tập trung tối ưu hóa quy trình diễn họa kiến trúc siêu thực." },
    { year: "2024", title: "VTARCH ra đời", desc: "Thành lập thương hiệu cá nhân, kết hợp AI vào thiết kế kiến trúc." },
  ];

  return (
    <div className="pt-32 pb-32 px-4 md:px-6 max-w-6xl mx-auto space-y-32">
      {/* ── HERO SECTION ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="luxury-card aspect-[3/4] md:aspect-square overflow-hidden group">
          <img 
            src={IMAGES.portrait} 
            alt="Nguyễn Văn Thanh" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
        </div>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10">
            <Zap size={14} className="text-[#D95A2B]" />
            <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">The Creator</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter leading-none">
            Nguyễn Văn <br /> <span className="text-[#D95A2B]">Thanh.</span>
          </h1>
          <p className="text-[var(--text-muted)] font-mono text-sm leading-relaxed border-l-2 border-[#D95A2B] pl-6 italic">
            "Tôi không chỉ vẽ nên những bức tường, tôi kiến tạo nên những cảm xúc sống động trong không gian 3D."
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/CV_NguyenVanThanh.pdf" target="_blank" className="btn-accent px-8 py-4 text-xs font-mono uppercase flex items-center gap-2">
              <Download size={14} /> Tải CV
            </a>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[#D95A2B] transition-colors cursor-pointer">
                <Briefcase size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[#D95A2B] transition-colors cursor-pointer">
                <Award size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY & SKILLS ── */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-2xl font-black font-heading uppercase">Tầm nhìn & <br/><span className="text-[#D95A2B]">Sứ mệnh</span></h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Với hơn 4 năm kinh nghiệm trong lĩnh vực kiến trúc và diễn họa 3D, tôi luôn tìm kiếm sự giao thoa hoàn hảo giữa kỹ thuật dựng hình và nghệ thuật ánh sáng. 
            Mỗi dự án tại VTARCH là một lời cam kết về chất lượng và độ chân thực cao nhất.
          </p>
        </div>
        
        <div className="lg:col-span-2 luxury-card p-10 space-y-8">
          <h3 className="text-xl font-black font-heading uppercase text-[#D95A2B]">Năng lực Chuyên môn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-black font-heading uppercase mb-4">Lộ trình <span className="text-[#D95A2B]">Phát triển</span></h2>
          <div className="w-20 h-1 bg-[#D95A2B] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative p-8 luxury-card group hover:bg-[#D95A2B]/5 transition-colors">
              <span className="text-6xl font-black text-[#D95A2B]/10 absolute top-4 right-4 group-hover:text-[#D95A2B]/20 transition-colors uppercase font-heading">
                {item.year}
              </span>
              <h4 className="text-xl font-bold font-heading uppercase mb-4 relative z-10">{item.title}</h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
