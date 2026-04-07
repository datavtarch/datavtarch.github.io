import React from 'react';
import { IMAGES } from '../data/constants';
import { Download, Zap, Cpu, Search, Sparkles, Brain, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';

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
    { name: "SketchUp Pro", level: 98, icon: Zap },
    { name: "D5 Render (CGI)", level: 95, icon: Sparkles },
    { name: "3ds Max / Chaos Corona", level: 85, icon: Brain },
  ];

  const aiExpertise = [
    { 
      title: "AI Image Automation (GPTs)", 
      desc: "Phát triển các mô hình GPT tùy chỉnh giúp tự động hóa quy trình xử lý hình ảnh kiến trúc. Tối ưu hóa hiệu suất làm việc bằng cách loại bỏ việc nhập prompt thủ công lặp lại.",
      icon: Cpu 
    },
    { 
      title: "AI Research & Development", 
      desc: "Nghiên cứu chuyên sâu các thuật toán AI mới nhất để ứng dụng vào việc Render ánh sáng và vật liệu siêu thực, rút ngắn 50% thời gian hậu kỳ.",
      icon: Search 
    }
  ];

  return (
    <div className="pt-32 pb-32 px-4 md:px-6 max-w-6xl mx-auto space-y-32">
      {/* ── PROFILE HEADER (Inspired by CV) ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 luxury-card aspect-[4/5] overflow-hidden group border-[#D95A2B]/20">
          <img 
            src={IMAGES.portrait} 
            alt="NGUYỄN VĂN THANH" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-[0.4em] font-black italic">Architectural Designer & 3D Artist</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase font-heading tracking-tighter leading-none">
              NGUYỄN VĂN <br /> <span className="text-[#D95A2B]">THANH.</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] flex items-center justify-center text-[#D95A2B]"><MapPin size={14}/></div>
              TP. HỒ CHÍ MINH, VIỆT NAM
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] flex items-center justify-center text-[#D95A2B]"><Mail size={14}/></div>
              VTARCH99@GMAIL.COM
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[#D95A2B] font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[#D95A2B]"></div> TỔNG QUAN NĂNG LỰC
            </h4>
            <p className="text-[var(--text-main)] font-mono text-sm leading-relaxed text-justify">
              Với tư duy thiết kế hiện đại và sự am hiểu sâu sắc về công nghệ diễn họa, tôi chuyên cung cấp các giải pháp kiến trúc và nội thất có độ chân thực cao. 
              Đặc điểm nổi bật của tôi là **khả năng thích nghi cực tốt, tinh thần tự tìm tòi và học hỏi nhanh chóng** các xu hướng công nghệ mới nhất để tối ưu hóa quy trình làm việc.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" target="_blank" className="btn-accent px-10 py-5 text-xs font-mono uppercase flex items-center gap-3 shadow-xl shadow-[#D95A2B]/20 hover:scale-105 transition-all">
              <Download size={16} /> Tải Hồ Sơ Năng Lực (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ── AI INNOVATION SECTION ── */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black font-heading uppercase">AI <span className="text-[#D95A2B]">& Automation</span></h2>
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.3em]">The New Era of Architectural Workflow</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiExpertise.map((skill, idx) => (
            <div key={idx} className="luxury-card p-12 space-y-6 bg-gradient-to-br from-[#D95A2B]/10 via-transparent to-transparent border-[#D95A2B]/20 group hover:border-[#D95A2B]/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#D95A2B] flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                <skill.icon size={28} />
              </div>
              <h3 className="text-2xl font-black font-heading uppercase group-hover:text-[#D95A2B] transition-colors">{skill.title}</h3>
              <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed uppercase tracking-wide">
                {skill.desc}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-[10px] font-mono text-[#D95A2B] font-bold">
                  <CheckCircle2 size={12} /> TỰ ĐỘNG HÓA 100% QUY TRÌNH PROMPT
                </li>
                <li className="flex items-center gap-3 text-[10px] font-mono text-[#D95A2B] font-bold">
                  <CheckCircle2 size={12} /> TĂNG TỐC ĐỘ RENDER & CHỈNH SỬA
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL MASTERY ── */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-black font-heading uppercase whitespace-nowrap">Kỹ năng <span className="text-[#D95A2B]">Chuyên môn</span></h3>
          <div className="h-[1px] bg-[var(--border-color)] w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreSkills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="relative py-20 px-10 luxury-card bg-black border-[#D95A2B]/30 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D95A2B] to-transparent"></div>
        <div className="relative z-10 space-y-8">
          <Brain size={48} className="mx-auto text-[#D95A2B] animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-black font-heading uppercase max-w-3xl mx-auto leading-tight">
            "Luôn chủ động nghiên cứu để phục vụ công việc <span className="text-[#D95A2B]">tốt nhất</span>"
          </h3>
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.5em]">Adaptability • Innovation • Quality</p>
        </div>
      </section>
    </div>
  );
};

export default About;
