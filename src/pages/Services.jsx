import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, MoveRight } from 'lucide-react';

const services = [
  {
    title: 'Diễn họa nội thất D5 Render',
    desc: 'Render không gian nội thất với ánh sáng điện ảnh, vật liệu rõ nét và bố cục phù hợp hồ sơ bán hàng, portfolio hoặc truyền thông.',
    points: ['Căn hộ, nhà phố, showroom', 'Set ánh sáng & vật liệu', 'Hậu kỳ màu sắc cao cấp'],
  },
  {
    title: 'Diễn họa kiến trúc ngoại thất',
    desc: 'Hình ảnh kiến trúc có chiều sâu bối cảnh, ánh sáng, cây xanh và cảm xúc thị giác để tăng sức thuyết phục cho dự án.',
    points: ['Nhà ở, villa, công trình nhỏ', 'D5 Render + Photoshop', 'Góc nhìn thương mại'],
  },
  {
    title: 'AI Concept & Post-production',
    desc: 'Ứng dụng AI để phát triển ý tưởng nhanh, nâng cấp ảnh render, tạo mood concept và thử nhiều phương án thẩm mỹ.',
    points: ['Moodboard AI', 'Nâng cấp ảnh render', 'Biến thể phong cách nhanh'],
  },
  {
    title: 'Hình ảnh sản phẩm nội thất',
    desc: 'Tạo và tinh chỉnh hình ảnh sản phẩm nội thất cho website, catalog, social, quảng cáo và thương mại điện tử.',
    points: ['Sofa, giường, tủ, decor', 'Bối cảnh lifestyle', 'Tối ưu ảnh bán hàng'],
  },
];

const workflow = [
  ['01', 'Nhận brief', 'Trao đổi phong cách, mục tiêu hình ảnh, mặt bằng/model và deadline.'],
  ['02', 'Định hướng visual', 'Chốt mood ánh sáng, góc camera, vật liệu và cảm xúc chính của bộ ảnh.'],
  ['03', 'Render / AI workflow', 'Dựng hình, set D5 Render, hậu kỳ hoặc AI concept theo nhu cầu dự án.'],
  ['04', 'Bàn giao', 'Xuất ảnh final rõ nét, tối ưu cho portfolio, web, social hoặc hồ sơ thuyết trình.'],
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="section-shell">
        <div className="neo-card rounded-[2.2rem] p-6 md:p-12 overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <div className="eyebrow mb-6">VTARCH Services</div>
            <h1 className="text-5xl md:text-7xl font-black font-heading uppercase leading-[0.92] tracking-tight mb-7">
              Dịch vụ <span className="gradient-title">diễn họa</span><br /> kiến trúc & AI CGI
            </h1>
            <p className="text-[var(--text-muted)] font-mono text-sm md:text-base leading-relaxed max-w-2xl">
              VTARCH tập trung vào hình ảnh kiến trúc, nội thất và sản phẩm có tính thương mại: rõ vật liệu, đẹp ánh sáng, đúng tinh thần thương hiệu và dễ dùng cho bán hàng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <a href="mailto:vtarch99@gmail.com" className="btn-accent px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                Gửi brief dự án <ArrowUpRight size={15} />
              </a>
              <Link to="/portfolio" className="btn-outline-luxury px-8 py-4 text-xs uppercase font-mono tracking-widest inline-flex items-center justify-center gap-2">
                Xem portfolio <MoveRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, idx) => (
            <div key={service.title} className="luxury-card p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-8">
                <span className="tag-accent">Service 0{idx + 1}</span>
                <span className="text-[#F3A06D] font-mono text-xs">VTARCH</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-heading uppercase leading-tight mb-4">
                {service.title}
              </h2>
              <p className="text-[var(--text-muted)] text-sm font-mono leading-relaxed mb-7">
                {service.desc}
              </p>
              <div className="space-y-3">
                {service.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-[var(--text-main)]">
                    <CheckCircle2 size={16} className="text-[#F3A06D] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-6 items-start">
          <div>
            <div className="eyebrow mb-5">Workflow</div>
            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight">
              Quy trình <span className="gradient-title">làm việc</span>
            </h2>
          </div>
          <div className="grid gap-4">
            {workflow.map(([number, title, desc]) => (
              <div key={number} className="neo-card rounded-2xl p-5 md:p-6 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#D95A2B]/15 border border-[#D95A2B]/25 flex items-center justify-center text-[#F3A06D] font-black font-heading">
                  {number}
                </div>
                <div>
                  <h3 className="font-heading font-black uppercase text-xl mb-2">{title}</h3>
                  <p className="text-[var(--text-muted)] text-sm font-mono leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
