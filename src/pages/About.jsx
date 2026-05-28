import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, CheckCircle2, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/constants';
import { CV_DATA } from '../data/cvData';

const profileStats = [
  ['D5', 'Render workflow'],
  ['AI', 'Concept & post'],
  ['3D', 'Visualization'],
  ['ECOM', 'Product images'],
];

const strengths = [
  'Kiến trúc sư nền tảng chuyên môn từ Đại học Kiến trúc TP.HCM.',
  'Tư duy hình ảnh thiên về ánh sáng, vật liệu, bố cục và cảm xúc thị giác.',
  'Kết hợp D5 Render, SketchUp, Photoshop và AI workflow để tăng tốc hậu kỳ.',
  'Có khả năng xử lý hình ảnh sản phẩm nội thất cho website, social và bán hàng.',
];

const SkillBar = ({ name, level }) => (
  <div>
    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest mb-2">
      <span className="text-[var(--text-main)]">{name}</span>
      <span className="text-[#F3A06D]">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-[#D95A2B] to-[#F3A06D]" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const ContactRow = ({ icon: Icon, children, href }) => {
  const content = (
    <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] hover:text-[#F3A06D] transition-colors">
      <span className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.035] flex items-center justify-center text-[#F3A06D] shrink-0">
        <Icon size={16} />
      </span>
      <span className="leading-relaxed break-all">{children}</span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
};

const About = () => {
  return (
    <div className="pt-36 md:pt-44 pb-32">
      <section className="section-shell space-y-12 md:space-y-16">
        <div className="relative neo-card rounded-[2rem] p-6 md:p-10 overflow-hidden">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#D95A2B]/18 blur-[100px] rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-[.9fr_1.1fr] gap-9 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-5 bg-[#D95A2B]/18 blur-[70px] rounded-full" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-[0_30px_90px_rgba(0,0,0,.35)]">
                <img src={IMAGES.portrait} alt={CV_DATA.fullName} loading="eager" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent" />
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="eyebrow mb-4">Founder / Visual Artist</div>
                  <h2 className="text-3xl md:text-4xl font-black font-heading uppercase leading-none">
                    Nguyễn Văn <span className="gradient-title">Thanh</span>
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="eyebrow mb-6">VTARCH · Architecture Visualization</div>
              <h1 className="text-5xl md:text-7xl font-black font-heading uppercase tracking-[-0.07em] leading-[0.9] mb-7">
                Visual <br /> <span className="gradient-title">Storyteller</span>
              </h1>
              <div className="space-y-5 text-sm md:text-base text-[var(--text-muted)] font-mono leading-relaxed border-l border-[#D95A2B]/50 pl-5 mb-8">
                <p>
                  VTARCH là studio cá nhân của Nguyễn Văn Thanh, tập trung vào diễn họa kiến trúc, nội thất, D5 Render và AI CGI cho các dự án cần hình ảnh đẹp, rõ vật liệu và có tính thương mại.
                </p>
                <p>
                  Điểm mạnh nằm ở quy trình hybrid: tư duy kiến trúc + dựng hình 3D + ánh sáng render + hậu kỳ AI, giúp hình ảnh cuối cùng vừa có cảm xúc vừa phục vụ được mục tiêu bán hàng hoặc thuyết trình.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`mailto:${CV_DATA.email}`} className="btn-accent px-8 py-4 text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center gap-2">
                  Liên hệ hợp tác <ArrowUpRight size={15} />
                </a>
                <Link to="/services" className="btn-outline-luxury px-8 py-4 text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center">
                  Xem dịch vụ
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {profileStats.map(([num, label]) => (
            <div key={label} className="neo-card rounded-2xl p-6">
              <div className="text-4xl font-black font-heading text-[#F3A06D]">{num}</div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.18em] mt-2">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-6">
          <div className="neo-card rounded-[2rem] p-7 md:p-8">
            <h3 className="text-2xl font-black font-heading uppercase mb-7">Contact</h3>
            <div className="space-y-4">
              <ContactRow icon={Calendar}>{CV_DATA.birthDate}</ContactRow>
              <ContactRow icon={Phone} href={`tel:${CV_DATA.phone.replace(/\./g, '')}`}>{CV_DATA.phone}</ContactRow>
              <ContactRow icon={Mail} href={`mailto:${CV_DATA.email}`}>{CV_DATA.email}</ContactRow>
              <ContactRow icon={MapPin}>{CV_DATA.address}</ContactRow>
            </div>
          </div>

          <div className="neo-card rounded-[2rem] p-7 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-11 h-11 rounded-2xl bg-[#D95A2B]/15 border border-[#D95A2B]/25 flex items-center justify-center text-[#F3A06D]"><Sparkles size={20} /></span>
              <h3 className="text-2xl font-black font-heading uppercase">Điểm mạnh làm việc</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex gap-3">
                  <CheckCircle2 size={17} className="text-[#F3A06D] shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm font-mono text-[var(--text-muted)] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="neo-card rounded-[2rem] p-7 md:p-8 lg:col-span-2">
            <div className="eyebrow mb-5">Skills Matrix</div>
            <h3 className="text-3xl md:text-5xl font-black font-heading uppercase mb-7 tracking-tight">
              Tools <span className="gradient-title">& Software</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {CV_DATA.softwareSkills.slice(0, 8).map((skill) => <SkillBar key={skill.name} {...skill} />)}
            </div>
          </div>

          <div className="neo-card rounded-[2rem] p-7 md:p-8">
            <h3 className="text-2xl font-black font-heading uppercase mb-6">Achievements</h3>
            <div className="space-y-4">
              {CV_DATA.achievements.slice(0, 4).map((item) => (
                <div key={item.title} className="border-l border-[#D95A2B]/50 pl-4">
                  <h4 className="text-sm font-bold text-[var(--text-main)]">{item.title}</h4>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="neo-card rounded-[2rem] p-7 md:p-10">
          <div className="eyebrow mb-5">AI Workflow</div>
          <h3 className="text-3xl md:text-5xl font-black font-heading uppercase mb-7 tracking-tight">
            Hybrid <span className="gradient-title">AI-CGI</span> Pipeline
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(CV_DATA.aiSkills).map(([key, value]) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-[10px] font-mono text-[#F3A06D] uppercase tracking-[0.2em] font-bold mb-3">{key}</h4>
                <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
