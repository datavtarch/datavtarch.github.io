import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update IMAGES
old_images_block = """const IMAGES = {
  portrait: "/projects/PROFILE_NGUYỄN_VĂN_THANH.jpg", 
  projectLangMai: "/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.jpg", 
  projectDamRong: "/projects/D5_RENDER_-_WABI.jpg", 
  projectVinhomes: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  projectSpaNail: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  storeJapandi: "/projects/AI_-_Phong_cách_Japandi.jpg", 
  storeIndochine: "/projects/AI_-_Phong_cách_Indochine.jpg", 
  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.jpg"
};"""

new_images_block = """const IMAGES = {
  portrait: "/projects/PROFILE_NGUYỄN_VĂN_THANH.jpg", 
  projectDaLatHouse: "/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.jpg", 
  projectWabi: "/projects/D5_RENDER_-_WABI.jpg", 
  projectWabiTrung: "/projects/D5_RENDER_-_WABI_TRUNG.jpg", 
  projectChungCu: "/projects/SKETCHUP__D5_RENDER_-__CHUNG_CƯ_DỰNG.jpg", 
  projectVinhomes: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  projectCaledon: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.jpg", 
  storeJapandi: "/projects/AI_-_Phong_cách_Japandi.jpg", 
  storeIndochine: "/projects/AI_-_Phong_cách_Indochine.jpg", 
  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.jpg"
};"""

content = content.replace(old_images_block, new_images_block)

# 2. Update the entire PROJECTS section
old_projects = """          <div className="space-y-12">
            <TiltCard 
              className="luxury-card aspect-[4/5] sm:aspect-square md:aspect-[16/9] cursor-pointer group reveal-on-scroll"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProject({
                title: "Căn Hộ Vinhomes Japandi", tags: ["NỘI THẤT DÂN DỤNG", "120M2", "D5 RENDER"], image: IMAGES.projectVinhomes,
                desc: "Thiết kế nội thất căn hộ 3 phòng ngủ. Áp dụng phong cách Japandi. Tập trung mô phỏng ánh sáng tự nhiên bằng D5 Render."
              })}
            >
              <img src={IMAGES.projectVinhomes} alt="Vinhomes" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 gradient-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                <div className="max-w-md">
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="tag-accent">NỘI THẤT</span>
                     <span className="tag-outline border-white/10">120M2</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-snug font-heading mb-2 drop-shadow-md">Căn Hộ Vinhomes Japandi</h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D95A2B] group-hover:border-[#D95A2B] transition-colors backdrop-blur-md">
                   <Maximize2 size={18} />
                </div>
              </div>
            </TiltCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-100"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Kiến trúc Đà Lạt House", tags: ["KIẾN TRÚC", "NGHỈ DƯỠNG", "NGOẠI THẤT"], image: IMAGES.projectLangMai,
                    desc: "Thiết kế kiến trúc khu nghỉ dưỡng mộng mơ tại Đà Lạt. Tôn trọng tối đa địa hình tự nhiên, hướng trọn view nhìn núi đồi xung quanh."
                 })}
               >
                 <img src={IMAGES.projectLangMai} alt="Làng Mai" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex justify-between items-end pointer-events-none">
                   <div>
                     <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-white/10 bg-black/50">KIẾN TRÚC / NGHỈ DƯỠNG</span></div>
                     <h3 className="text-2xl font-black text-white uppercase font-heading">Đà Lạt House</h3>
                   </div>
                 </div>
               </TiltCard>

               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-200"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Căn Hộ Caledon", tags: ["NỘI THẤT", "D5 RENDER"], image: IMAGES.projectSpaNail,
                    desc: "Dự án thi công thiết kế và render nội thất chung cư cao cấp. Không gian ấm cúng, sang trọng với các tông màu hiện đại."
                 })}
               >
                 <img src={IMAGES.projectSpaNail} alt="Spa Nail" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 pointer-events-none">
                   <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-white/10 bg-black/50">NỘI THẤT / CĂN HỘ</span></div>
                   <h3 className="text-2xl font-black text-white uppercase font-heading">Căn Hộ Caledon</h3>
                 </div>
               </TiltCard>
            </div>
          </div>"""

new_projects = """          <div className="space-y-12">
            <TiltCard 
              className="luxury-card aspect-[4/5] sm:aspect-square md:aspect-[16/9] cursor-pointer group reveal-on-scroll"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProject({
                title: "Căn Hộ Vinhomes Japandi", tags: ["NỘI THẤT DÂN DỤNG", "120M2", "D5 RENDER"], image: IMAGES.projectVinhomes,
                pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf",
                desc: "Thiết kế nội thất căn hộ 3 phòng ngủ. Áp dụng phong cách Japandi. Tập trung mô phỏng ánh sáng tự nhiên bằng D5 Render."
              })}
            >
              <img src={IMAGES.projectVinhomes} alt="Vinhomes" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 gradient-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                <div className="max-w-md">
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="tag-accent">NỘI THẤT P.JAPANDI</span>
                     <span className="tag-outline border-white/10">PDF NĂNG LỰC</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-snug font-heading mb-2 drop-shadow-md">Căn Hộ Vinhomes Japandi</h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D95A2B] group-hover:border-[#D95A2B] transition-colors backdrop-blur-md">
                   <Maximize2 size={18} />
                </div>
              </div>
            </TiltCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-100"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Kiến trúc Đà Lạt House", tags: ["KIẾN TRÚC", "NGHỈ DƯỠNG", "NGOẠI THẤT"], image: IMAGES.projectDaLatHouse,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf",
                    desc: "Thiết kế kiến trúc khu nghỉ dưỡng mộng mơ tại Đà Lạt. Tôn trọng tối đa địa hình tự nhiên, hướng trọn view nhìn núi đồi xung quanh."
                 })}
               >
                 <img src={IMAGES.projectDaLatHouse} alt="Đà Lạt" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex justify-between items-end pointer-events-none">
                   <div>
                     <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-white/10 bg-black/50">KIẾN TRÚC TỔNG THỂ</span></div>
                     <h3 className="text-2xl font-black text-white uppercase font-heading">Đà Lạt House</h3>
                   </div>
                 </div>
               </TiltCard>

               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-200"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onClick={() => setSelectedProject({
                    title: "Căn Hộ Caledon", tags: ["NỘI THẤT", "D5 RENDER"], image: IMAGES.projectCaledon,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf",
                    desc: "Dự án thi công thiết kế và render nội thất chung cư cao cấp. Không gian ấm cúng, sang trọng với các tông màu hiện đại."
                 })}
               >
                 <img src={IMAGES.projectCaledon} alt="Caledon" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 pointer-events-none">
                   <div className="flex flex-wrap gap-2 mb-3"><span className="tag-outline border-white/10 bg-black/50">NỘI THẤT CĂN HỘ</span></div>
                   <h3 className="text-2xl font-black text-white uppercase font-heading">Căn Hộ Caledon</h3>
                 </div>
               </TiltCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-100"
                 onClick={() => setSelectedProject({
                    title: "Chung Cư Cao Cấp", tags: ["RENDER AI", "DỰNG HÌNH"], image: IMAGES.projectChungCu,
                    pdfLink: "/documents/SKETCHUP + D5 RENDER -  CHUNG CƯ DỰNG.pdf",
                    desc: "Phương án thiết kế đồ họa 3D kiến trúc chung cư và các tiện ích nội khu đỉnh cao."
                 })}
               >
                 <img src={IMAGES.projectChungCu} alt="Chung Cu" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-white uppercase font-heading drop-shadow-lg">Dựng Hình Chung Cư</h3>
                 </div>
               </TiltCard>

               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-200"
                 onClick={() => setSelectedProject({
                    title: "Nội Thất Wabi Sabi", tags: ["NỘI THẤT", "WABI"], image: IMAGES.projectWabi,
                    pdfLink: "/documents/D5 RENDER - WABI.pdf",
                    desc: "Triết lý thiết kế Wabi Sabi đề cao vẻ đẹp mộc mạc ẩn giấu trong sự không hoàn hảo."
                 })}
               >
                 <img src={IMAGES.projectWabi} alt="Wabi Sabi" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-white uppercase font-heading drop-shadow-lg">Wabi Sabi</h3>
                 </div>
               </TiltCard>
               
               <TiltCard 
                 className="luxury-card aspect-[4/3] cursor-pointer group reveal-on-scroll delay-300"
                 onClick={() => setSelectedProject({
                    title: "Wabi Trung Thấp Tầng", tags: ["NỘI THẤT", "D5 RENDER"], image: IMAGES.projectWabiTrung,
                    pdfLink: "/documents/D5 RENDER - WABI TRUNG.pdf",
                    desc: "Dự án Render Wabi Trung thể hiện tông màu ấm trầm mang dáng vẻ thiền định tĩnh lặng."
                 })}
               >
                 <img src={IMAGES.projectWabiTrung} alt="Wabi Trung" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 gradient-overlay"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                   <h3 className="text-xl font-black text-white uppercase font-heading drop-shadow-lg">Wabi Trung</h3>
                 </div>
               </TiltCard>
            </div>
          </div>"""

content = content.replace(old_projects, new_projects)

# 3. Update Download CV
old_contact = """              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-mono text-sm">
                 <a href="mailto:vtarch99@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all w-full md:w-auto justify-center backdrop-blur-sm"><Mail size={16} className="text-gray-400" /> vtarch99@gmail.com</a>
                 <a href="tel:0385550506" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 text-white font-bold hover:bg-[#D95A2B] hover:text-black transition-all w-full md:w-auto justify-center shadow-[0_0_15px_rgba(217,90,43,0.2)]"><Phone size={16} /> 038.555.0506</a>
                 <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 w-full md:w-auto justify-center backdrop-blur-sm"><MapPin size={16} className="text-gray-400" /> Bình Thạnh, HCM</div>
              </div>"""

new_contact = """              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-mono text-sm mb-6">
                 <a href="mailto:vtarch99@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#D95A2B] hover:text-[#D95A2B] transition-all w-full md:w-auto justify-center backdrop-blur-sm"><Mail size={16} className="text-gray-400" /> vtarch99@gmail.com</a>
                 <a href="tel:0385550506" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#D95A2B] bg-[#D95A2B]/10 text-white font-bold hover:bg-[#D95A2B] hover:text-black transition-all w-full md:w-auto justify-center shadow-[0_0_15px_rgba(217,90,43,0.2)]"><Phone size={16} /> 038.555.0506</a>
                 <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 w-full md:w-auto justify-center backdrop-blur-sm"><MapPin size={16} className="text-gray-400" /> Bình Thạnh, HCM</div>
              </div>
              <a href="/documents/PROFILE NGUYỄN VĂN THANH.pdf" target="_blank" rel="noreferrer" className="inline-flex mt-4 group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="btn-accent px-8 py-5 text-sm uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(217,90,43,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-3">
                   <Layers size={18} /> ĐỌC HỒ SƠ NĂNG LỰC (PDF)
                </div>
              </a>"""

content = content.replace(old_contact, new_contact)

# 4. Update the Modal Button to include PDF link
old_modal = """                   <MagneticButton onClick={() => {setSelectedProject(null); scrollToSection('estimator');}} className="btn-accent w-max px-8 py-4 text-xs uppercase tracking-widest font-mono mt-auto shadow-[0_0_15px_rgba(217,90,43,0.4)]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      TƯ VẤN DỰ ÁN NÀY
                   </MagneticButton>"""

new_modal = """                   <div className="mt-auto flex flex-col sm:flex-row gap-3">
                     {selectedProject.pdfLink && (
                       <a href={selectedProject.pdfLink} target="_blank" rel="noreferrer" className="flex">
                         <div className="btn-outline-luxury px-8 py-4 text-xs uppercase tracking-widest font-mono shadow-[0_0_15px_rgba(217,90,43,0.2)] hover:bg-[#D95A2B]/20 w-full sm:w-auto justify-center flex items-center gap-2 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Layers size={16}/> XEM HỒ SƠ (PDF)
                         </div>
                       </a>
                     )}
                     <MagneticButton onClick={() => {setSelectedProject(null); scrollToSection('estimator');}} className="btn-accent px-8 py-4 text-xs uppercase tracking-widest font-mono justify-center flex shadow-[0_0_15px_rgba(217,90,43,0.4)] w-full sm:w-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        TƯ VẤN DỰ ÁN NÀY
                     </MagneticButton>
                   </div>"""

content = content.replace(old_modal, new_modal)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
