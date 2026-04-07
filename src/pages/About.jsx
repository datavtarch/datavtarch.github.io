import React from 'react';
import { IMAGES } from '../data/constants';
import { TiltCard } from '../components/UI';
import { Download, Award, Briefcase, Zap, Cpu, Search, Sparkles, Brain } from 'lucide-react';

const SkillBar = ({ name, level, icon: Icon }) => (
  <div className="space-y-3 p-6 luxury-card bg-white/5 hover:bg-[#D95A2B]/5 transition-all group">
    <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em]">
      <div className="flex items-center gap-3">
        {Icon && <Icon size={14} className="text-[#D95A2B]" />}
        <span className="font-bold">{name}</span>
      </div>
      <span className="text-[#D95A2B] font-black">{level}%</span>
    </div>
    <div className="h-1 bg-[var(--border-color)] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#D95A2B] transition-all duration-1000 ease-out group-hover:bg-white" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const coreSkills = [
    { name: "SketchUp & 3ds Max", level: 95, icon: Briefcase },
    { name: "D5 Render (Expert)", level: 98, icon: Zap },
    { name: "CGI Interior Design", level: 92, icon: Award },
  ];

  const aiSkills = [
    { 
      title: "AI Automation & GPTs", 
      desc: "Xây dựng các hệ thống GPT chuyên dụng để tự động hóa quy trình xử lý hình ảnh kiến trúc, giúp tối ưu hóa hiệu suất mà không cần nhập prompt thủ công phức tạp.",
      icon: Cpu 
    },
    { 
      title: "AI Research & Rendering", 
      desc: "Chủ động nghiên cứu và ứng dụng các mô hình AI tiên tiến nhất vào quy trình Rendering và hậu kỳ sản phẩm nội thất, tạo ra độ chân thực vượt trội.",
      icon: Search 
    }
  ];

  return (
    <div className="pt-32 pb-32 px-4 md:px-6 max-w-6xl mx-auto space-y-32">
      {/* ── HERO SECTION (Personal Intro) ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="luxury-card aspect-square overflow-hidden group border-[#D95A2B]/20">
          <img 
            src={IMAGES.portrait} 
            alt="Nguyễn Văn Thanh" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
        </div>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#D95A2B]/30 bg-[#D95A2B]/10">
            <Sparkles size={14} className="text-[#D95A2B]" />
            <span className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-widest font-bold">Innovation Lead</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter leading-none">
            Nguyễn Văn <br /> <span className="text-[#D95A2B]">Thanh.</span>
          </h1>
          <div className="space-y-4">
            <h4 className="text-[#D95A2B] font-mono text-xs uppercase font-bold tracking-widest">&gt; GIỚI THIỆU BẢN THÂN</h4>
            <p className="text-[var(--text-main)] font-mono text-sm leading-relaxed border-l-2 border-[#D95A2B] pl-6">
              Tôi là một kiến trúc sư với niềm đam mê mãnh liệt trong việc kết hợp nghệ thuật diễn họa và công nghệ hiện đại. 
              Thế mạnh lớn nhất của tôi là **khả năng thích nghi linh hoạt, tinh thần tự tìm tòi và học hỏi không ngừng**. 
              Tôi luôn tiên phong ứng dụng các giải pháp công nghệ mới để giải quyết các bài toán phức tạp trong kiến trúc.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/CV_NguyenVanThanh.pdf" target="_blank" className="btn-accent px-8 py-4 text-xs font-mono uppercase flex items-center gap-2">
              <Download size={14} /> Tải CV Đầy Đủ
            </a>
          </div>
        </div>
      </section>

      {/* ── AI & AUTOMATION SECTION ── */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black font-heading uppercase leading-none">AI & <span className="text-[#D95A2B]">Automation</span></h2>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Tiên phong trong giải pháp thiết kế tương lai</p>
          </div>
          <Brain size={40} className="text-[#D95A2B] opacity-50 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiSkills.map((skill, idx) => (
            <div key={idx} className="luxury-card p-10 space-y-6 bg-gradient-to-br from-[#D95A2B]/5 to-transparent border-[#D95A2B]/10 group hover:border-[#D95A2B]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#D95A2B] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <skill.icon size={24} />
              </div>
              <h3 className="text-xl font-black font-heading uppercase group-hover:text-[#D95A2B] transition-colors">{skill.title}</h3>
              <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed uppercase tracking-tight">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE TECHNICAL SKILLS ── */}
      <section className="space-y-12">
        <h3 className="text-2xl font-black font-heading uppercase border-b border-[var(--border-color)] pb-6">Năng lực <span className="text-[#D95A2B]">Kỹ thuật</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreSkills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE MANTRA ── */}
      <section className="luxury-card p-12 md:p-20 bg-[var(--glass-bg)] text-center space-y-8 border-dashed">
        <h3 className="text-2xl font-black font-heading uppercase">"Học hỏi là hành trình <span className="text-[#D95A2B]">không có điểm dừng</span>"</h3>
        <p className="max-w-2xl mx-auto text-sm text-[var(--text-muted)] font-mono uppercase tracking-widest leading-relaxed">
          Tôi không ngừng nghiên cứu các công nghệ mới mỗi ngày để đảm bảo rằng mọi sản phẩm 3D và phương án kiến trúc 
          mà tôi cung cấp luôn dẫn đầu về cả thẩm mỹ lẫn hiệu quả thực thi.
        </p>
      </section>
    </div>
  );
};

export default About;
