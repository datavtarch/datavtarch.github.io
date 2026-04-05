import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add lucide imports Heart, MessageCircle, Instagram
content = content.replace("VolumeX, Sun, Moon, Play, Pause }", "VolumeX, Sun, Moon, Play, Pause, Heart, MessageCircle, Instagram }")


# 2. Add IG_POSTS map right after IMAGES map
images_block_end = """  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.jpg"
};"""

ig_posts_block = """  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.jpg"
};

const IG_POSTS = [
  { image: IMAGES.projectCaledon, likes: "1.2k", comments: 34, link: "https://instagram.com" },
  { image: IMAGES.projectVinhomes, likes: "856", comments: 12, link: "https://instagram.com" },
  { image: IMAGES.projectDaLatHouse, likes: "3.4k", comments: 142, link: "https://instagram.com" },
  { image: IMAGES.storeIndochine, likes: "920", comments: 8, link: "https://instagram.com" },
  { image: IMAGES.projectWabi, likes: "2.1k", comments: 56, link: "https://instagram.com" },
  { image: IMAGES.projectChungCu, likes: "542", comments: 5, link: "https://instagram.com" },
];"""

content = content.replace(images_block_end, ig_posts_block)


# 3. Add Instagram Gallery Section
estimator_target = """        {/* 6. SECTION: HỆ THỐNG BÁO GIÁ TỰ ĐỘNG */}"""

ig_section_code = """        {/* --- SECTION: INSTAGRAM GALLERY --- */}
        <section id="instagram" className="reveal-on-scroll border-t border-[var(--border-color)] pt-32">
          <div className="flex flex-col items-center text-center mb-16">
             <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                <Instagram size={24} />
             </div>
             <h3 className="text-4xl font-black font-heading uppercase text-[var(--text-main)] mb-2">Social Feed</h3>
             <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-sm font-mono text-[var(--text-muted)] hover:text-[#D95A2B] transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                &gt; @VT.Architecture
             </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 lg:gap-6 focus-container px-2 sm:px-0 max-w-5xl mx-auto">
             {IG_POSTS.map((post, idx) => (
                <a 
                  key={idx} href={post.link} target="_blank" rel="noreferrer" 
                  className="focus-item aspect-square overflow-hidden relative group cursor-pointer lg:rounded-lg bg-[var(--glass-bg)] border border-[var(--border-color)]"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                >
                   <img src={post.image} alt={`IG Post`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-bold font-mono text-sm md:text-lg z-20 backdrop-blur-[2px]">
                      <div className="flex items-center gap-2"><Heart size={20} className="fill-white" /> {post.likes}</div>
                      <div className="flex items-center gap-2"><MessageCircle size={20} className="fill-white" /> {post.comments}</div>
                   </div>
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 z-20">
                      <Instagram size={16} className="text-white drop-shadow-md" />
                   </div>
                </a>
             ))}
          </div>
          
          <div className="mt-16 flex justify-center">
             <MagneticButton onClick={() => window.open('https://instagram.com', '_blank')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn-outline-luxury px-8 py-4 text-xs uppercase tracking-widest font-mono gap-3 items-center flex">
                 <Instagram size={16}/> Khám phá Instagram
             </MagneticButton>
          </div>
        </section>

        {/* 6. SECTION: HỆ THỐNG BÁO GIÁ TỰ ĐỘNG */}"""

content = content.replace(estimator_target, ig_section_code)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Instagram Gallery added.")
