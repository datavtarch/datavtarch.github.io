import React, { useEffect, useState } from 'react';
import { IMAGES } from '../data/constants';
import { CV_DATA } from '../data/cvData';
import { 
  Download, Zap, Cpu, Search, Sparkles, Brain, 
  CheckCircle2, MapPin, Mail, Globe, Layers, 
  Terminal, Award, GraduationCap, Users, Calendar
} from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <div className={`pt-32 pb-32 px-4 md:px-6 max-w-6xl mx-auto space-y-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* ── SECTION 1: HEADER & IDENTITY ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-[#D95A2B]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="luxury-card aspect-[4/5] overflow-hidden border-[#D95A2B]/30 relative z-10">
            <img 
              src={IMAGES.portrait} 
              alt={CV_DATA.fullName} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono text-[#D95A2B] uppercase tracking-[0.5em] font-black italic flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D95A2B]"></span> {CV_DATA.title}
            </h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase font-heading tracking-tighter leading-none">
              {CV_DATA.fullName.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-[#D95A2B]">{CV_DATA.fullName.split(' ').slice(-1)}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono border-y border-[var(--border-color)] py-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <MapPin size={16} className="text-[#D95A2B]" /> {CV_DATA.address}
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors cursor-pointer">
                <Mail size={16} className="text-[#D95A2B]" /> {CV_DATA.email}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <Calendar size={16} className="text-[#D95A2B]" /> {CV_DATA.birthDate}
              </div>
              <div className="flex items-center gap-4 text-[var(--text-muted)]">
                <Globe size={16} className="text-[#D95A2B]" /> {CV_DATA.instagram}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {CV_DATA.summary.split('\n\n').map((p, i) => (
              <p key={i} className="text-sm text-[var(--text-muted)] font-mono leading-relaxed text-justify">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" target="_blank" className="btn-accent px-12 py-6 text-xs font-mono uppercase flex items-center gap-3 shadow-2xl shadow-[#D95A2B]/30 hover:-translate-y-1 transition-all">
              <Download size={18} /> Tải Profile Đầy Đủ
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: AI REVOLUTION (THE LAB) ── */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black font-heading uppercase leading-none">AI <span className="text-[#D95A2B]">& Automation</span></h2>
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.3em]">Kiến tạo tương lai của Diễn họa Kiến trúc</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="luxury-card p-10 space-y-6 border-[#D95A2B]/20 bg-gradient-to-br from-[#D95A2B]/5 to-transparent">
            <Cpu size={32} className="text-[#D95A2B]" />
            <h3 className="text-xl font-black font-heading uppercase">Custom GPTs</h3>
            <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed uppercase">{CV_DATA.aiSkills.automation}</p>
          </div>
          <div className="luxury-card p-10 space-y-6 border-[#D95A2B]/20 bg-gradient-to-br from-[#D95A2B]/5 to-transparent">
            <Search size={32} className="text-[#D95A2B]" />
            <h3 className="text-xl font-black font-heading uppercase">R&D Lab</h3>
            <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed uppercase">{CV_DATA.aiSkills.research}</p>
          </div>
          <div className="luxury-card p-10 space-y-6 border-[#D95A2B]/20 bg-gradient-to-br from-[#D95A2B]/5 to-transparent">
            <Terminal size={32} className="text-[#D95A2B]" />
            <h3 className="text-xl font-black font-heading uppercase">Hybrid Workflow</h3>
            <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed uppercase">{CV_DATA.aiSkills.workflow}</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SKILLS & EDUCATION ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-black font-heading uppercase whitespace-nowrap">Năng lực <span className="text-[#D95A2B]">Kỹ thuật</span></h3>
            <div className="h-[1px] bg-[var(--border-color)] w-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {CV_DATA.softwareSkills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-black font-heading uppercase whitespace-nowrap">Học vấn <span className="text-[#D95A2B]">& Giải thưởng</span></h3>
            <div className="h-[1px] bg-[var(--border-color)] w-full"></div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <GraduationCap className="text-[#D95A2B] shrink-0" size={20} />
                  <p className="text-sm font-mono uppercase tracking-tight group-hover:text-white transition-colors">{edu}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 pt-4">
              {CV_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <Award className="text-[#D95A2B] shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm font-black font-heading uppercase text-white group-hover:text-[#D95A2B] transition-colors">{ach.title}</h4>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{ach.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ACTIVITIES ── */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-black font-heading uppercase whitespace-nowrap">Hoạt động <span className="text-[#D95A2B]">Xã hội</span></h3>
          <div className="h-[1px] bg-[var(--border-color)] w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CV_DATA.activities.map((act, idx) => (
            <div key={idx} className="p-6 luxury-card border-dashed hover:border-solid hover:bg-[#D95A2B]/5 transition-all group">
              <Users size={20} className="text-[#D95A2B] mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-mono leading-relaxed uppercase tracking-widest text-[var(--text-muted)] group-hover:text-white transition-colors">
                {act}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER MANTRA ── */}
      <section className="luxury-card p-12 md:p-20 bg-black border-[#D95A2B]/30 text-center space-y-8">
        <Brain size={48} className="mx-auto text-[#D95A2B] animate-pulse" />
        <h3 className="text-3xl md:text-4xl font-black font-heading uppercase max-w-3xl mx-auto leading-tight italic">
          "Luôn chủ động nghiên cứu để phục vụ công việc <span className="text-[#D95A2B]">tốt nhất</span>"
        </h3>
        <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.5em]">Adaptability • Innovation • Integrity</p>
      </section>
    </div>
  );
};

export default About;
