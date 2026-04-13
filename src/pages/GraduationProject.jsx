import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/constants';
import { ArrowLeft, MapPin, Calendar, Layers, Wind, Sun, FileText, Download } from 'lucide-react';

const GraduationProject = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const documents = [
    {
      title: "Thuyết minh tốt nghiệp",
      description: "Tài liệu chi tiết về quá trình nghiên cứu, ý tưởng thiết kế và giải pháp kiến trúc của dự án.",
      file: "/documents/THUYET MINH TOT NGHIEP.pdf",
      type: "PDF"
    },
    {
      title: "Báo cáo NCKH",
      description: "Nghiên cứu khoa học về 'Sự tỉnh thức trong Kiến trúc' - cơ sở lý luận cho đồ án.",
      file: "/documents/NCKH - NGUYEN VAN THANH.pdf",
      type: "PDF"
    }
  ];

  return (
    <div className={`pt-24 pb-32 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* ── HEADER NAVIGATION ── */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <Link 
          to="/portfolio" 
          className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Trở về Portfolio
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D95A2B] font-bold">
          Graduation Project 2024
        </span>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-4xl md:text-7xl lg:text-[6rem] font-black font-heading leading-[0.9] tracking-tighter uppercase text-white">
            Trung tâm Thiền <br />
            <span className="text-[#D95A2B]">Làng Mai Đà Lạt</span>
          </h1>
          <div className="flex flex-wrap gap-8 items-center mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D95A2B]/10 border border-[#D95A2B]/20 flex items-center justify-center text-[#D95A2B]">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Vị trí</span>
                <span className="text-xs font-bold text-white uppercase font-mono">Đà Lạt, Lâm Đồng</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D95A2B]/10 border border-[#D95A2B]/20 flex items-center justify-center text-[#D95A2B]">
                <Layers size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Quy mô</span>
                <span className="text-xs font-bold text-white uppercase font-mono">5.2 Hecta</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D95A2B]/10 border border-[#D95A2B]/20 flex items-center justify-center text-[#D95A2B]">
                <Calendar size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Thời gian</span>
                <span className="text-xs font-bold text-white uppercase font-mono">6 Tháng nghiên cứu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[16/9] md:aspect-[21/9]">
          <img 
            src={IMAGES.projectDoAn} 
            alt="Layout toàn bài" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100D0B] via-transparent to-transparent opacity-60"></div>
        </div>
      </section>

      {/* ── CONTENT SECTION 1: PHILOSOPHY ── */}
      <section className="max-w-5xl mx-auto px-6 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 sticky top-32">
            <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4 block">Concept & Inspiration</span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading uppercase leading-tight tracking-tight">
              Sự tỉnh thức <br /> trong <span className="text-[#D95A2B]">Kiến trúc</span>
            </h2>
            <div className="h-[2px] w-16 bg-[#D95A2B] mt-6 rounded-full"></div>
          </div>
          <div className="md:col-span-7 space-y-8 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Đồ án được hình thành từ mong muốn tạo dựng một không gian vật chất có khả năng nuôi dưỡng tâm hồn. 
              Dựa trên tinh thần của <strong className="text-white font-medium italic">Làng Mai</strong>, kiến trúc ở đây không chỉ là những bức tường 
              hay mái nhà, mà là một thực thể sống động, hòa nhịp cùng hơi thở của đất trời Đà Lạt.
            </p>
            <p>
              Mỗi bước đi trong dự án được thiết kế để trở thành một bước đi thiền hành. Các không gian được tổ chức 
              theo một hành trình trải nghiệm từ <span className="text-white font-medium">Ồn ào</span> đến <span className="text-white font-medium">Tĩnh lặng</span>, 
              giúp hành giả dần rũ bỏ những muộn phiền để quay về với chính mình.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-2">
                <span className="text-[#D95A2B] font-black text-4xl font-heading">01.</span>
                <span className="text-white font-bold uppercase text-xs tracking-widest font-mono">Hòa hợp thiên nhiên</span>
                <p className="text-xs">Tôn trọng tối đa địa hình hiện trạng, nương tựa vào dốc núi.</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#D95A2B] font-black text-4xl font-heading">02.</span>
                <span className="text-white font-bold uppercase text-xs tracking-widest font-mono">Vật liệu địa phương</span>
                <p className="text-xs">Sử dụng gỗ, đá và vật liệu thô mộc để tạo sự gần gũi, ấm áp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISUAL GALLERY (Layout Detailed View) ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-[#15110E] rounded-3xl p-6 md:p-12 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,90,43,0.05),transparent_70%)] opacity-100 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4">Architecture Layout</span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading uppercase tracking-tight mb-6">Tổng mặt bằng & Giải pháp</h2>
            <p className="max-w-2xl text-gray-400 text-sm font-light leading-relaxed font-mono">
              [ Xem chi tiết bố cục không gian và sự tương tác giữa các phân khu chức năng ]
            </p>
          </div>

          <div className="space-y-12 relative z-10">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-3xl bg-black">
              <img 
                src={IMAGES.projectDoAn} 
                alt="Detailed Layout" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-[#1C1815] rounded-2xl border border-white/5 hover:border-[#D95A2B]/30 transition-all group/box">
                <Wind className="text-[#D95A2B] mb-6 transition-transform group-hover/box:rotate-12" size={24} />
                <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-widest font-heading">Thông gió tự nhiên</h4>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">Tận dụng hướng gió đặc trưng của thung lũng để làm mát toàn bộ không gian nội thất một cách thụ động.</p>
              </div>
              <div className="p-8 bg-[#1C1815] rounded-2xl border border-white/5 hover:border-[#D95A2B]/30 transition-all group/box">
                <Sun className="text-[#D95A2B] mb-6 transition-transform group-hover/box:scale-110" size={24} />
                <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-widest font-heading">Chiếu sáng tỉnh thức</h4>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">Ánh sáng được xử lý qua các khe hẹp và khoảng thông tầng, tạo hiệu ứng bóng đổ trầm mặc phù hợp với không gian thiền.</p>
              </div>
              <div className="p-8 bg-[#1C1815] rounded-2xl border border-white/5 hover:border-[#D95A2B]/30 transition-all group/box">
                <Layers className="text-[#D95A2B] mb-6 transition-transform group-hover/box:-translate-y-1" size={24} />
                <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-widest font-heading">Phân bậc không gian</h4>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">Sự chuyển tiếp cao độ nhịp nhàng theo địa hình đồi dốc, tạo nên các khoảng nhìn (view) đa dạng từ mọi phía.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH DOCUMENTS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4 block">Research & Documentation</span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading uppercase tracking-tight mb-6">Tài liệu <br /> nghiên cứu</h2>
            <p className="text-gray-400 font-light leading-relaxed text-sm font-mono">
              Tổng hợp các văn bản thuyết minh và báo cáo khoa học đi kèm để hiểu rõ hơn về chiều sâu lý luận của đồ án.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="group/doc bg-[#15110E] border border-white/5 p-8 rounded-2xl hover:border-[#D95A2B]/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/doc:opacity-20 transition-opacity">
                  <FileText size={80} className="text-[#D95A2B]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-2 py-1 bg-[#D95A2B]/20 border border-[#D95A2B]/30 rounded text-[#D95A2B] text-[10px] font-mono font-bold">
                      {doc.type}
                    </div>
                    <div className="h-[1px] flex-grow bg-white/5"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover/doc:text-[#D95A2B] transition-colors font-heading uppercase tracking-wide">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs mb-8 leading-relaxed font-mono italic">
                    {doc.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={doc.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-[#D95A2B] text-white text-[10px] font-mono uppercase tracking-widest py-3 rounded-lg transition-all group/btn"
                    >
                      <FileText size={14} />
                      Xem tài liệu
                    </a>
                    <a 
                      href={doc.file} 
                      download
                      className="w-12 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all"
                      title="Tải xuống"
                    >
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="h-[1px] w-32 bg-white/10 mx-auto mb-16"></div>
        <h3 className="text-2xl font-bold text-gray-500 uppercase tracking-[0.3em] font-mono mb-8 italic">"Kiến trúc là hơi thở, là sự trở về."</h3>
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-4 bg-[#D95A2B] hover:bg-[#e86b3e] text-white font-bold text-xs font-mono uppercase tracking-[0.2em] px-10 py-5 rounded-xl transition-all hover:-translate-y-1 shadow-[0_15px_30px_rgba(217,90,43,0.3)]"
        >
          Khám phá các dự án khác
          <ArrowLeft size={16} className="rotate-180" />
        </Link>
      </section>
    </div>
  );
};

export default GraduationProject;
