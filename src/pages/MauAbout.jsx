< !DOCTYPE html >
  <html lang="vi">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CV Nguyễn Văn Thanh | Tech-Architect</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
              <style>
                body {
                  background - color: #0A0807;
                color: white;
                font-family: 'Inter', sans-serif;
                -webkit-font-smoothing: antialiased;
        }
                .font-mono {font - family: 'Space Mono', monospace; }
                .font-heading {font - family: 'Montserrat', sans-serif; }

                /* ĐỒNG BỘ: Card tĩnh (Bên trái Avatar) */
                .cv-card {
                  background: #15110E;
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 1.5rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

                /* ĐỒNG BỘ: Mọi ô vuông (Box) tương tác */
                .cv-box {
                  background: #110E0B;
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 1rem;
                transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                position: relative;
                overflow: hidden;
        }
                .cv-box:hover {
                  border - color: rgba(217, 90, 43, 0.5); /* Màu cam #D95A2B */
                background: #15110E;
                box-shadow: 0 15px 35px rgba(0,0,0,0.6), inset 0 0 20px rgba(217, 90, 43, 0.05);
                transform: translateY(-4px);
        }
                /* Gradient nhẹ bên trong box khi hover */
                .cv-box::after {
                  content: ''; position: absolute; inset: 0;
                background: radial-gradient(circle at top right, rgba(217, 90, 43, 0.1), transparent 70%);
                opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
                .cv-box:hover::after {opacity: 1; }

                /* ĐỒNG BỘ: Nút Liên Kết (Link Hub) */
                .link-btn {
                  display: flex; align-items: center; justify-content: space-between;
                width: 100%; padding: 0.75rem 1rem;
                background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 0.5rem; color: #9ca3af; font-size: 0.75rem;
                font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: 0.05em;
                transition: all 0.3s ease; position: relative; z-index: 10;
        }
                .link-btn:hover {
                  background: rgba(217, 90, 43, 0.1); border-color: rgba(217, 90, 43, 0.5);
                color: #fff; transform: translateX(6px); box-shadow: 0 0 15px rgba(217, 90, 43, 0.1);
        }
                .link-btn i {color: #D95A2B; transition: transform 0.3s ease; }
                .link-btn:hover i {transform: rotate(-45deg); }

                /* ĐỒNG BỘ: Thanh Tiến Độ (Progress Bar) */
                .progress-bar {
                  height: 4px; background: #2A201A; border-radius: 4px;
                overflow: hidden; width: 100%;
        }
                @keyframes fillBar {from {width: 0; } }
                .progress-fill {
                  height: 100%; background: #D95A2B; border-radius: 4px;
                box-shadow: 0 0 10px rgba(217, 90, 43, 0.6);
                animation: fillBar 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }

                /* Hiệu ứng Nút Download */
                @keyframes shimmer {100 % { transform: translateX(100 %); }}
                .btn-shimmer {
                  position: relative; overflow: hidden;
                background: #D95A2B; color: white;
                transition: all 0.3s ease;
        }
                .btn-shimmer::before {
                  content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
                background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
                transform: skewX(-20deg); animation: shimmer 2.5s infinite;
        }
                .btn-shimmer:hover {background: #e86b3e; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(217, 90, 43, 0.4); }

                /* Custom scrollbar */
                ::-webkit-scrollbar {width: 6px; }
                ::-webkit-scrollbar-track {background: #0A0807; }
                ::-webkit-scrollbar-thumb {background: #332A25; border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover {background: #D95A2B; }
              </style>
            </head>
            <body class="py-12 md:py-20 px-4 md:px-8">

              <div class="max-w-6xl mx-auto space-y-24 md:space-y-32 relative z-10">

                <!-- SECTION 1: HERO & ABOUT -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

                  <!-- Avatar Card (Left) -->
                  <div class="lg:col-span-4 cv-card p-6 md:p-8 flex flex-col items-center text-center lg:sticky lg:top-8 z-20">
                    <div class="w-48 h-48 rounded-3xl overflow-hidden mb-6 border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=800" alt="Nguyễn Văn Thanh" class="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <h2 class="text-2xl font-black font-heading uppercase tracking-wide mb-1 text-white">Nguyễn<br />Văn Thanh</h2>
                    <div class="bg-white text-black text-[10px] font-bold px-4 py-1.5 tracking-widest uppercase mb-8 rounded-sm font-mono">
                      Architecture
                    </div>

                    <!-- Đồng bộ List Contact -->
                    <div class="w-full space-y-3 text-left border-t border-white/10 pt-6">
                      <h3 class="text-[#D95A2B] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 font-mono">&gt; Thông tin liên hệ</h3>

                      <div class="flex items-center gap-4 text-xs text-gray-400 group cursor-default">
                        <div class="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors"><i class="fa-regular fa-calendar"></i></div>
                        <span class="font-mono">01-04-1999</span>
                      </div>
                      <a href="tel:0385550506" class="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
                        <div class="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors"><i class="fa-solid fa-phone"></i></div>
                        <span class="font-mono">038.555.0506</span>
                      </a>
                      <a href="mailto:vtarch99@gmail.com" class="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
                        <div class="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors"><i class="fa-regular fa-envelope"></i></div>
                        <span class="font-mono truncate">vtarch99@gmail.com</span>
                      </a>
                      <a href="https://instagram.com/vtarch99" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-xs text-gray-400 hover:text-white transition-colors group cursor-pointer">
                        <div class="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors"><i class="fa-brands fa-instagram"></i></div>
                        <span class="font-mono">@vtarch99</span>
                      </a>
                      <div class="flex items-center gap-4 text-xs text-gray-400 group cursor-default">
                        <div class="w-8 h-8 rounded-lg bg-white/5 text-[#D95A2B] flex items-center justify-center group-hover:bg-[#D95A2B] group-hover:text-black transition-colors shrink-0"><i class="fa-solid fa-location-dot"></i></div>
                        <span class="font-mono leading-relaxed">204 QL13, Bình Thạnh, TPHCM</span>
                      </div>
                    </div>
                  </div>

                  <!-- Content (Right) -->
                  <div class="lg:col-span-8 flex flex-col justify-center">
                    <div class="flex items-center gap-4 mb-4">
                      <div class="h-[2px] w-12 bg-[#D95A2B]"></div>
                      <span class="text-[#D95A2B] text-[10px] font-bold tracking-[0.3em] font-mono uppercase">Profile.Exe</span>
                    </div>

                    <h1 class="text-5xl md:text-[5.5rem] font-black leading-[0.95] font-heading uppercase mb-10 tracking-tighter text-white">
                      Nguyễn<br />Văn<br /><span class="text-[#D95A2B]">Thanh</span>
                    </h1>

                    <!-- Đồng bộ Text Nội dung -->
                    <div class="space-y-6 text-sm text-gray-400 leading-relaxed font-light mb-10">
                      <p>
                        Là một Kiến trúc sư tốt nghiệp từ Đại học Kiến trúc TP.HCM, tôi mang trong mình sự kiên trì, khả năng thích nghi cao và tư duy nhạy bén bên trong việc tìm tòi, học hỏi những xu hướng mới. Trong mọi dự án, tôi luôn đề cao sự trung thực, tinh thần trách nhiệm và cam kết mang lại giá trị thực tiễn.
                      </p>
                      <p>
                        Điểm khác biệt cốt lõi của tôi là khả năng tự nghiên cứu và tích hợp <strong class="text-white font-medium">Trí tuệ Nhân tạo (AI)</strong> vào quy trình diễn họa 3D. Tôi xây dựng các hệ thống Custom GPTs để tự động hóa khâu xử lý hình ảnh, giúp kiểm soát hoàn toàn chất lượng ảnh Render và xử lý mượt mà hàng loạt hình ảnh sản phẩm nội thất phục vụ Thương mại điện tử (E-commerce) với tốc độ siêu tốc.
                      </p>
                    </div>

                    <button class="btn-shimmer font-bold text-xs font-mono uppercase tracking-widest px-8 py-4 rounded-lg flex items-center justify-center w-max gap-3 shadow-lg">
                      <i class="fa-solid fa-download"></i> Tải Profile Đầy Đủ
                    </button>
                  </div>
                </div>

                <!-- SECTION 2: AI & AUTOMATION -->
                <section>
                  <!-- ĐỒNG BỘ: Cấu trúc Tiêu đề Section -->
                  <div class="mb-10 flex flex-col gap-2">
                    <span class="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Core Mindset</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">AI & <span class="text-[#D95A2B]">Automation</span></h2>
                    <div class="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Card 1 -->
                    <div class="cv-box p-8 flex flex-col items-start group">
                      <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
                        <i class="fa-solid fa-microchip text-xl"></i>
                      </div>
                      <h3 class="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">Custom GPTs</h3>
                      <p class="text-xs text-gray-400 font-mono leading-relaxed relative z-10">Huấn luyện mô hình AI tự động hóa việc xử lý hình ảnh, loại bỏ thao tác nhập prompt lặp lại rườm rà.</p>
                    </div>
                    <!-- Card 2 -->
                    <div class="cv-box p-8 flex flex-col items-start group">
                      <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
                        <i class="fa-solid fa-flask text-xl"></i>
                      </div>
                      <h3 class="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">R&D Lab</h3>
                      <p class="text-xs text-gray-400 font-mono leading-relaxed relative z-10">Liên tục nghiên cứu AI phục vụ Render & chỉnh sửa sản phẩm nội thất chuyên biệt cho E-Commerce.</p>
                    </div>
                    <!-- Card 3 -->
                    <div class="cv-box p-8 flex flex-col items-start group">
                      <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D95A2B] mb-6 group-hover:scale-110 group-hover:bg-[#D95A2B]/10 group-hover:border-[#D95A2B]/50 transition-all duration-300">
                        <i class="fa-solid fa-layer-group text-xl"></i>
                      </div>
                      <h3 class="text-lg font-bold text-white font-heading uppercase mb-3 relative z-10">Hybrid Workflow</h3>
                      <p class="text-xs text-gray-400 font-mono leading-relaxed relative z-10">Kết hợp sức mạnh của 3D truyền thống (CGI) và AI để kiểm soát 100% sự chính xác và chất lượng ảnh.</p>
                    </div>
                  </div>
                </section>

                <!-- SECTION 3: KHO DỮ LIỆU & CÔNG CỤ (LINK HUB) -->
                <section>
                  <!-- ĐỒNG BỘ: Cấu trúc Tiêu đề Section -->
                  <div class="mb-10 flex flex-col gap-2">
                    <span class="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Data Arsenal</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Kho Dữ Liệu <span class="text-[#D95A2B]">& Công Cụ</span></h2>
                    <div class="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Box 1 -->
                    <div class="cv-box p-8 flex flex-col">
                      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10">
                        <i class="fa-solid fa-robot text-[#D95A2B] text-xl"></i>
                        <h4 class="text-base font-bold text-white uppercase font-heading">Hệ Sinh Thái GPT</h4>
                      </div>
                      <div class="space-y-3 relative z-10">
                        <a href="#" target="_blank" class="link-btn">
                          <span>[ Trợ Lý Nội Thất ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" target="_blank" class="link-btn">
                          <span>[ Xử Lý Ảnh E-Commerce ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    <!-- Box 2 -->
                    <div class="cv-box p-8 flex flex-col">
                      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10">
                        <i class="fa-solid fa-cube text-[#D95A2B] text-xl"></i>
                        <h4 class="text-base font-bold text-white uppercase font-heading">Thư Viện D5 Render</h4>
                      </div>
                      <div class="space-y-3 relative z-10">
                        <a href="#" target="_blank" class="link-btn">
                          <span>[ Kho Ảnh Render Tĩnh ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" target="_blank" class="link-btn">
                          <span>[ Video 3D Animation ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    <!-- Box 3 -->
                    <div class="cv-box p-8 flex flex-col">
                      <div class="absolute top-4 right-4 bg-[#D95A2B] text-white text-[8px] font-bold px-2 py-1 rounded-sm tracking-widest font-mono uppercase z-20">MỚI</div>
                      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 relative z-10">
                        <i class="fa-solid fa-wand-magic-sparkles text-[#D95A2B] text-xl"></i>
                        <h4 class="text-base font-bold text-white uppercase font-heading">AI Generation</h4>
                      </div>
                      <div class="space-y-3 relative z-10">
                        <a href="#" target="_blank" class="link-btn">
                          <span>[ Concept Đồng Nhất ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#" target="_blank" class="link-btn" style="border-color: rgba(217,90,43,0.3); background: rgba(217,90,43,0.05); color: #fff;">
                          <span>[ Hậu Kỳ Siêu Thực ]</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- SECTION 4: NĂNG LỰC & HỌC VẤN (SPLIT LAYOUT) -->
                <section>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <!-- Cột Kỹ Năng -->
                    <div>
                      <!-- ĐỒNG BỘ: Cấu trúc Tiêu đề Section -->
                      <div class="mb-10 flex flex-col gap-2">
                        <span class="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Software & Tools</span>
                        <h2 class="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Năng Lực <span class="text-[#D95A2B]">Kỹ Thuật</span></h2>
                        <div class="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
                      </div>

                      <div class="grid grid-cols-2 gap-x-8 gap-y-6">
                        <!-- Đồng bộ chữ text-xs font-mono cho nhãn kỹ năng -->
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Sketchup</span> <span class="text-[#D95A2B]">90%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 90%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Vray Sketchup</span> <span class="text-[#D95A2B]">85%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 85%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>AutoCAD</span> <span class="text-[#D95A2B]">80%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 80%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Microsoft Office</span> <span class="text-[#D95A2B]">95%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 95%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Photoshop</span> <span class="text-[#D95A2B]">70%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 70%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Chụp Ảnh</span> <span class="text-[#D95A2B]">90%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 90%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>Revit</span> <span class="text-[#D95A2B]">60%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 60%"></div></div>
                        </div>
                        <div>
                          <div class="flex justify-between text-[11px] font-bold text-white uppercase mb-2 font-mono"><span>WordPress</span> <span class="text-[#D95A2B]">55%</span></div>
                          <div class="progress-bar"><div class="progress-fill" style="width: 55%"></div></div>
                        </div>
                      </div>
                    </div>

                    <!-- Cột Học Vấn -->
                    <div>
                      <!-- ĐỒNG BỘ: Cấu trúc Tiêu đề Section -->
                      <div class="mb-10 flex flex-col gap-2">
                        <span class="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Timeline & Milestones</span>
                        <h2 class="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Học Vấn <span class="text-[#D95A2B]">& Giải Thưởng</span></h2>
                        <div class="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
                      </div>

                      <div class="space-y-6 relative border-l border-white/10 ml-3 py-2">
                        <!-- Timeline Items đồng bộ Text -->
                        <div class="relative pl-8 group">
                          <div class="absolute w-2 h-2 bg-[#D95A2B] rounded-full -left-[4px] top-1.5 shadow-[0_0_8px_#D95A2B] transition-transform group-hover:scale-150"></div>
                          <h4 class="text-sm font-bold text-white uppercase mb-1">Tốt nghiệp ĐH Kiến trúc TP.HCM</h4>
                          <p class="text-xs text-gray-500 font-mono">Cử nhân Kiến trúc</p>
                        </div>
                        <div class="relative pl-8 group">
                          <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4px] top-1.5 transition-colors group-hover:bg-[#D95A2B]"></div>
                          <h4 class="text-sm font-bold text-white uppercase mb-1">Giải Nhì "Đánh thức di sản Đà Lạt"</h4>
                          <p class="text-xs text-gray-500 font-mono">Cuộc thi Thiết kế nhanh - Bảo tàng ý niệm (2020)</p>
                        </div>
                        <div class="relative pl-8 group">
                          <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4px] top-1.5 transition-colors group-hover:bg-[#D95A2B]"></div>
                          <h4 class="text-sm font-bold text-white uppercase mb-1">Ý tưởng thiết kế nhanh & hay nhất</h4>
                          <p class="text-xs text-gray-500 font-mono">Khóa học trải nghiệm Đà Lạt - ĐH Văn Lang</p>
                        </div>
                        <div class="relative pl-8 group">
                          <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4px] top-1.5 transition-colors group-hover:bg-[#D95A2B]"></div>
                          <h4 class="text-sm font-bold text-white uppercase mb-1">Tham gia Sáng tạo Không gian (2019)</h4>
                          <p class="text-xs text-gray-500 font-mono">Thiết kế Thư viện Mini</p>
                        </div>
                        <div class="relative pl-8 group">
                          <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4px] top-1.5 transition-colors group-hover:bg-[#D95A2B]"></div>
                          <h4 class="text-sm font-bold text-white uppercase mb-1">Tham gia Kí họa</h4>
                          <p class="text-xs text-gray-500 font-mono">Phố Bên Đồi 2018</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>

                <!-- SECTION 5: HOẠT ĐỘNG XÃ HỘI -->
                <section>
                  <!-- ĐỒNG BỘ: Cấu trúc Tiêu đề Section -->
                  <div class="mb-10 flex flex-col gap-2">
                    <span class="text-[#D95A2B] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">Leadership & Soft Skills</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white font-heading uppercase tracking-tight">Hoạt Động <span class="text-[#D95A2B]">Xã Hội</span></h2>
                    <div class="h-[2px] w-16 bg-[#D95A2B] mt-2 rounded-full"></div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Sử dụng cv-box để đồng bộ hiệu ứng Hover, Font size đồng bộ text-[11px] -->
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-users"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Ban thiết kế "Truyền thống kiến trúc 2018" CS Đà Lạt</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-user-tie"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Bí thư Liên chi Đoàn ĐH Kiến trúc TPHCM - CS Đà Lạt 2019</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-sitemap"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Trưởng BTC "Truyền thống kiến trúc 2019" CS Đà Lạt</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-coins"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Trưởng Ban tài chính "Truyền thống kiến trúc 2019"</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-medal"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Chủ nhiệm CLB Võ Kiến Đà Lạt</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-leaf"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Chủ nhiệm CLB Tương lai xanh Đà Lạt</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-hands-holding-child"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Chủ nhiệm CLB Khiếm thính Đà Lạt</p>
                    </div>
                    <div class="cv-box p-6 flex flex-col justify-center min-h-[140px] group">
                      <div class="text-[#D95A2B] text-xl mb-4 group-hover:-translate-y-1 transition-transform relative z-10"><i class="fa-solid fa-hand-holding-heart"></i></div>
                      <p class="text-[11px] text-gray-400 font-mono uppercase leading-relaxed group-hover:text-white transition-colors relative z-10">Trưởng BTC các chương trình thiện nguyện</p>
                    </div>
                  </div>
                </section>

                <!-- SECTION 6: QUOTE KẾT MÀN -->
                <section>
                  <div class="cv-box p-12 md:p-24 text-center flex flex-col items-center justify-center bg-[#0C0908] border-white/5 relative overflow-hidden group">
                    <!-- Ánh sáng nền tinh tế -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#D95A2B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div class="text-[#D95A2B] text-4xl md:text-5xl mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(217,90,43,0.4)]"><i class="fa-solid fa-brain"></i></div>

                    <h2 class="text-2xl md:text-4xl lg:text-[2.75rem] font-black text-white font-heading uppercase leading-[1.3] md:leading-[1.4] mb-12 italic relative z-10 tracking-tighter max-w-4xl mx-auto drop-shadow-lg">
                      "Luôn chủ động nghiên cứu, <br class="hidden md:block" />công bằng - sáng tạo để phục vụ công việc <span class="text-[#D95A2B]">tốt nhất</span>"
                    </h2>

                    <div class="flex flex-wrap justify-center items-center text-[#A48F82] text-[9px] md:text-[11px] font-mono font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase relative z-10 w-full">
                      <span>Adaptability</span>
                      <span class="mx-3 md:mx-6 text-[#D95A2B]">•</span>
                      <span>Innovation</span>
                      <span class="mx-3 md:mx-6 text-[#D95A2B]">•</span>
                      <span>Integrity</span>
                    </div>
                  </div>
                </section>

              </div>

            </body>
          </html>