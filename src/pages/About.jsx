import React, { useEffect, useState } from 'react';
import { IMAGES } from '../data/constants';
import { 
  Download, Zap, Cpu, Search, Sparkles, Brain, 
  CheckCircle2, MapPin, Mail, Globe, Layers, 
  Compass, Feather, Terminal, MousePointer2, 
  Clock, ShieldCheck, Trophy
} from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, suffix = "" }) => (
  <div className="p-6 luxury-card bg-white/5 border-[#D95A2B]/10 hover:border-[#D95A2B]/40 transition-all text-center group">
    <Icon size={24} className="mx-auto mb-4 text-[#D95A2B] group-hover:scale-110 transition-transform" />
    <div className="text-3xl font-black font-heading text-white mb-1">{value}{suffix}</div>
    <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{label}</div>
  </div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="relative p-8 luxury-card border-dashed hover:border-solid transition-all group">
    <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#D95A2B] text-black font-black flex items-center justify-center rounded-lg rotate-12 group-hover:rotate-0 transition-transform">
      {number}
    </span>
    <h4 className="text-xl font-black font-heading uppercase mb-4 mt-2 text-[#D95A2B]">{title}</h4>
    <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed uppercase tracking-tight">{desc}</p>
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const philosophies = [
    { title: "Sự Chính Xác", desc: "Mọi tỷ lệ, ánh sáng và vật liệu đều được tính toán để mô phỏng thực tế hoàn hảo nhất.", icon: Compass },
    { title: "Tính Cảm Xúc", desc: "Không chỉ là render, đó là việc tạo ra một không gian có hơi thở và linh hồn.", icon: Feather },
    { title: "Sự Tiên Phong", desc: "Luôn là người đầu tiên thử nghiệm và làm chủ các công nghệ AI mới nhất.", icon: Zap },
  ];

  return (
    <div className={`pt-32 pb-32 px-4 md:px-6 max-w-6xl mx-auto space-y-40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* ── SECTION 1: THE MAN BEHIND THE LENS ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-[#D95A2B]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="luxury-card aspect-[4/5] overflow-hidden border-[#D95A2B]/30 relative z-10 shadow-2xl">
            <img 
              src={IMAGES.portrait} 
              alt="NGUYỄN VĂN THANH" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="flex items-center gap-3 text-[#D95A2B] mb-2">
                <div className="w-2 h-2 rounded-full bg-[#D95A2B] animate-pulse"></div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em]">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-[0.5em] font-black italic flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D95A2B]"></span> Creative Director
            </h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase font-heading tracking-tighter leading-none">
              VAN <span className="text-[#D95A2B]">THANH.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono border-y border-[var(--border-color)] py-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <MapPin size={16} className="text-[#D95A2B]" /> VIETNAM BASED (HCMC)
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors cursor-pointer">
                <Mail size={16} className="text-[#D95A2B]" /> VTARCH99@GMAIL.COM
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <Globe size={16} className="text-[#D95A2B]" /> WWW.VTARCH.SITE
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <Terminal size={16} className="text-[#D95A2B]" /> AI & CGI SPECIALIST
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-sm">
            <p className="text-lg text-white font-heading leading-relaxed uppercase italic">
              "Tôi không chỉ vẽ, tôi kiến tạo những trải nghiệm thị giác nơi ranh giới giữa thực và ảo bị xóa nhòa."
            </p>
            <p className="text-[var(--text-muted)] font-mono leading-relaxed mt-6">
              Với hơn 4 năm kinh nghiệm thực chiến trong lĩnh vực Diễn họa Kiến trúc (CGI), tôi đã phát triển một hệ sinh thái làm việc độc bản - nơi sự khắt khe của kỹ thuật truyền thống kết hợp với sức mạnh đột phá của Trí tuệ nhân tạo (AI). 
              Tôi không chỉ cung cấp một tấm hình render, tôi cung cấp một giải pháp truyền thông kiến trúc toàn diện.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" target="_blank" className="btn-accent px-12 py-6 text-xs font-mono uppercase flex items-center gap-3 shadow-2xl shadow-[#D95A2B]/30 hover:-translate-y-1 transition-all">
              <Download size={18} /> Download Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BY THE NUMBERS ── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Clock} label="Năm kinh nghiệm" value="04" suffix="+" />
        <StatCard icon={Layers} label="Dự án hoàn thành" value="150" suffix="+" />
        <StatCard icon={Trophy} label="Độ hài lòng" value="100" suffix="%" />
        <StatCard icon={ShieldCheck} label="AI Workflow" value="Opt" suffix="imized" />
      </section>

      {/* ── SECTION 3: THE AI REVOLUTION (LAB) ── */}
      <section className="space-y-16">
        <div className="relative py-24 px-8 md:px-20 luxury-card bg-gradient-to-br from-[#D95A2B]/20 via-black to-black border-[#D95A2B]/40 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D95A2B]/10 blur-[120px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D95A2B]/50 bg-black text-[#D95A2B] text-[10px] font-mono font-black uppercase tracking-widest">
                <Brain size={14} /> The AI Lab
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-heading uppercase leading-[0.9]">Tái định nghĩa <br /><span className="text-[#D95A2B]">Hiệu suất.</span></h2>
              <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed uppercase tracking-tight">
                Tôi không dùng AI như một công cụ hỗ trợ đơn thuần. Tôi xây dựng **Custom GPTs** và các quy trình tự động hóa độc quyền để:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Xử lý hàng nghìn biến thể vật liệu trong giây lát.",
                  "Tối ưu hóa Prompt để tạo ra concept kiến trúc chuẩn xác 99%.",
                  "Tự động hóa hậu kỳ ánh sáng và màu sắc không cần can thiệp thủ công.",
                  "Nghiên cứu sâu các Model AI mới nhất để áp dụng vào render nội thất."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-xs font-mono text-white group">
                    <CheckCircle2 size={16} className="text-[#D95A2B] mt-0.5 shrink-0" />
                    <span className="group-hover:text-[#D95A2B] transition-colors uppercase">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="luxury-card p-8 bg-white/5 border-[#D95A2B]/20 hover:bg-[#D95A2B]/10 transition-all cursor-crosshair">
                  <Cpu size={32} className="text-[#D95A2B] mb-4" />
                  <h4 className="text-sm font-black font-heading uppercase">GPTs Automation</h4>
                </div>
                <div className="luxury-card p-8 bg-white/5 border-[#D95A2B]/20 hover:bg-[#D95A2B]/10 transition-all cursor-crosshair">
                  <Search size={32} className="text-[#D95A2B] mb-4" />
                  <h4 className="text-sm font-black font-heading uppercase">AI R&D</h4>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="luxury-card p-8 bg-white/5 border-[#D95A2B]/20 hover:bg-[#D95A2B]/10 transition-all cursor-crosshair">
                  <Sparkles size={32} className="text-[#D95A2B] mb-4" />
                  <h4 className="text-sm font-black font-heading uppercase">Concept Gen</h4>
                </div>
                <div className="luxury-card p-8 bg-[#D95A2B] text-black border-none transition-all cursor-crosshair">
                  <Terminal size={32} className="mb-4" />
                  <h4 className="text-sm font-black font-heading uppercase italic">Next-Gen CGI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DESIGN PHILOSOPHY ── */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black font-heading uppercase mb-4">Triết lý <span className="text-[#D95A2B]">Sáng tạo</span></h2>
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.3em]">How I think about Space and Light</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {philosophies.map((philo, idx) => (
            <div key={idx} className="group text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--glass-bg)] border border-[var(--border-color)] flex items-center justify-center text-[#D95A2B] group-hover:bg-[#D95A2B] group-hover:text-black transition-all duration-500">
                <philo.icon size={32} />
              </div>
              <h3 className="text-2xl font-black font-heading uppercase group-hover:text-[#D95A2B] transition-colors">{philo.title}</h3>
              <p className="text-sm text-[var(--text-muted)] font-mono leading-relaxed uppercase tracking-tight px-4 italic">{philo.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: WORK PROCESS ── */}
      <section className="space-y-16">
        <div className="flex items-center gap-6">
          <h3 className="text-3xl font-black font-heading uppercase whitespace-nowrap">Quy trình <span className="text-[#D95A2B]">Thực thi</span></h3>
          <div className="h-[1px] bg-[var(--border-color)] w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Concept" desc="Tiếp nhận ý tưởng và phân tích giải pháp không gian tối ưu." />
          <ProcessStep number="02" title="AI Draft" desc="Ứng dụng AI tạo nhanh các phương án moodboard và ánh sáng điểm." />
          <ProcessStep number="03" title="Production" desc="Dựng hình chi tiết trên SketchUp/3ds Max và diễn họa bằng D5 Render." />
          <ProcessStep number="04" title="Final" desc="Hậu kỳ AI nâng cao độ phân giải và tinh chỉnh chi tiết siêu thực." />
        </div>
      </section>

      {/* ── SECTION 6: CALL TO ACTION ── */}
      <section className="relative py-24 px-10 luxury-card bg-black border-[#D95A2B]/30 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="relative z-10 space-y-10">
          <h3 className="text-4xl md:text-6xl font-black font-heading uppercase max-w-4xl mx-auto leading-[0.9]">
            Bạn đã sẵn sàng để <br /><span className="text-[#D95A2B]">Khác biệt?</span>
          </h3>
          <p className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-[0.5em] max-w-xl mx-auto">Hãy để tôi giúp bạn biến những bản vẽ vô hồn thành tác phẩm nghệ thuật.</p>
          <div className="flex justify-center gap-6">
            <button onClick={() => window.location.href='tel:0385550506'} className="btn-accent px-12 py-6 text-xs font-mono uppercase font-black hover:scale-105 transition-all">Bắt đầu ngay</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
