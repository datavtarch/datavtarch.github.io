import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/constants';
import { ArrowLeft, ArrowUpRight, Calendar, FileText, Layers, MapPin, Mountain, Sun, Wind } from 'lucide-react';

const facts = [
  { icon: MapPin, label: 'Vị trí', value: 'Đà Lạt, Lâm Đồng' },
  { icon: Layers, label: 'Quy mô', value: '5.2 Hecta' },
  { icon: Calendar, label: 'Thời gian', value: '6 tháng nghiên cứu' },
];

const ideas = [
  ['01', 'Hòa hợp thiên nhiên', 'Tôn trọng địa hình hiện trạng, nương tựa vào dốc núi và giữ tinh thần tĩnh lặng của Đà Lạt.'],
  ['02', 'Vật liệu địa phương', 'Ưu tiên gỗ, đá và vật liệu thô mộc để tạo cảm giác gần gũi, ấm áp và bền vững.'],
  ['03', 'Hành trình thiền hành', 'Tổ chức không gian theo nhịp chuyển tiếp từ ồn ào đến tĩnh lặng, từ bên ngoài vào nội tâm.'],
];

const solutions = [
  { icon: Wind, title: 'Thông gió tự nhiên', desc: 'Tận dụng hướng gió thung lũng để làm mát thụ động cho không gian thiền.' },
  { icon: Sun, title: 'Chiếu sáng tỉnh thức', desc: 'Ánh sáng đi qua khe hẹp, khoảng mở và bóng đổ để tạo chiều sâu trầm mặc.' },
  { icon: Mountain, title: 'Phân bậc địa hình', desc: 'Các lớp không gian đi theo cao độ tự nhiên, tạo nhiều hướng nhìn mềm hơn.' },
];

const GraduationProject = () => {
  useEffect(() => {
    document.title = 'Trung tâm Thiền Làng Mai Đà Lạt | VTARCH';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-24 transition-all duration-700 opacity-100">
      <section className="section-shell">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Trở về dự án
          </Link>
          <span className="tag-accent w-max">Đồ án tốt nghiệp</span>
        </div>

        <div className="page-hero-card relative neo-card rounded-[2rem] p-6 md:p-10 overflow-hidden mb-8">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="relative z-10 grid lg:grid-cols-[1fr_.9fr] gap-8 md:gap-12 items-center">
            <div>
              <div className="eyebrow mb-6">Hồ sơ kiến trúc</div>
              <h1 className="text-4xl md:text-7xl lg:text-[5.2rem] font-black font-heading leading-[0.98] mb-7">
                Trung tâm Thiền <br />
                <span className="gradient-title">Làng Mai Đà Lạt</span>
              </h1>
              <p className="max-w-2xl text-sm md:text-base font-mono text-[var(--text-muted)] leading-relaxed border-l border-[#D95A2B]/50 pl-5">
                Đồ án tốt nghiệp kiến trúc sư, khai thác tinh thần tỉnh thức, thiền hành và sự hòa hợp giữa
                công trình với địa hình tự nhiên Đà Lạt.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mt-8">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl border theme-surface p-4">
                    {React.createElement(Icon, { size: 18, className: 'text-[#F3A06D] mb-3' })}
                    <div className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">{label}</div>
                    <div className="text-xs font-bold text-[var(--text-main)] uppercase font-mono">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative visual-frame mobile-wide-visual aspect-[4/5] md:aspect-[16/12]">
              <img src={IMAGES.projectDoAn} alt="Trung tâm Thiền Làng Mai Đà Lạt" className="w-full h-full object-cover" loading="eager" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-6 md:gap-8 mb-14 md:mb-18">
          <div className="neo-card rounded-[2rem] p-7 md:p-8 h-max lg:sticky lg:top-32">
            <div className="eyebrow mb-5">Ý tưởng</div>
            <h2 className="text-3xl md:text-5xl font-black font-heading leading-[1.02] mb-6">
              Sự tỉnh thức trong <span className="gradient-title">kiến trúc</span>
            </h2>
            <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed">
              Không gian được tổ chức như một hành trình trải nghiệm: từ ồn ào đến tĩnh lặng, từ bên ngoài đi vào nội tâm.
            </p>
          </div>

          <div className="space-y-4">
            {ideas.map(([number, title, desc]) => (
              <div key={number} className="luxury-card p-6 md:p-7 grid sm:grid-cols-[90px_1fr] gap-5 items-start">
                <div className="text-5xl font-black font-heading text-[#F3A06D] leading-none">{number}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black font-heading leading-tight mb-3">{title}</h3>
                  <p className="text-sm font-mono text-[var(--text-muted)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="neo-card rounded-[2rem] p-6 md:p-9 mb-14 md:mb-18">
          <div className="eyebrow mb-5">Mặt bằng kiến trúc</div>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-[0.98] mb-8">
            Tổng mặt bằng <span className="gradient-title">& giải pháp</span>
          </h2>
          <div className="visual-frame mb-6">
            <img src={IMAGES.projectDoAn} alt="Mặt bằng tổng thể Trung tâm Thiền Làng Mai" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border theme-surface p-6 hover:border-[#D95A2B]/40 transition-colors">
                {React.createElement(Icon, { className: 'text-[#F3A06D] mb-5', size: 24 })}
                <h4 className="font-heading font-black text-lg leading-tight mb-3">{title}</h4>
                <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="compact-cta neo-card rounded-[2rem] p-8 md:p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#D95A2B]/15 border border-[#D95A2B]/25 mx-auto mb-6 flex items-center justify-center text-[#F3A06D]">
            <FileText size={24} />
          </div>
          <h3 className="text-3xl md:text-5xl font-black font-heading leading-[0.98] mb-5">
            Xem thêm <span className="gradient-title">dự án khác</span>
          </h3>
          <p className="text-sm font-mono text-[var(--text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Khám phá thêm các dự án D5 Render, nội thất, công trình thực tế và AI concept trong thư viện dự án.
          </p>
          <Link to="/portfolio" className="btn-accent inline-flex items-center gap-3 px-9 py-4 text-xs font-mono uppercase tracking-widest">
            Trở về dự án
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GraduationProject;
