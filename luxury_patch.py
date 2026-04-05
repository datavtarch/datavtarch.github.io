import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Lenis Import
if "import Lenis" not in content:
    content = content.replace(
        "import { Mail, Phone, MapPin",
        "import Lenis from '@studio-freight/lenis';\nimport { Mail, Phone, MapPin"
    )

# 2. Add Lenis smooth scroll useEffect
lenis_effect = """  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {"""
if "new Lenis" not in content:
    content = content.replace("  useEffect(() => {\n    document.documentElement", lenis_effect + "\n    document.documentElement")


# 3. Add CSS for Marquee and Curtain Reveal
css_target = """        .clay-filter { filter: grayscale(100%) contrast(1.1) brightness(1.2) sepia(20%) hue-rotate(5deg); }"""
css_replacement = """        .clay-filter { filter: grayscale(100%) contrast(1.1) brightness(1.2) sepia(20%) hue-rotate(5deg); }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-flex; white-space: nowrap; animation: marquee 35s linear infinite; }
        .text-outline { -webkit-text-stroke: 2px var(--text-muted); color: transparent; }
        [data-theme="light"] .text-outline { -webkit-text-stroke: 2px var(--border-color); }

        /* Focus Hover Rule */
        .focus-container:hover .focus-item { opacity: 0.3; filter: grayscale(80%) blur(3px); transform: scale(0.98); }
        .focus-container .focus-item:hover { opacity: 1 !important; filter: grayscale(0%) blur(0px) !important; transform: scale(1.05) translateY(-5px) !important; z-index: 30; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }
"""
if "focus-container" not in content:
    content = content.replace(css_target, css_replacement)


# 4. Insert Marquee visually after Hero 
hero_end_target = """         </section>
 
         {/* 2. SECTION: DỊCH VỤ VÀ QUY TRÌNH */}"""
hero_end_replacement = """         </section>
         
         {/* --- INFINITE MARQUEE --- */}
         <div className="w-full absolute left-0 overflow-hidden py-10 pointer-events-none opacity-20 dark:opacity-30 mix-blend-exclusion z-0 -mt-20">
           <div className="animate-marquee gap-10 opacity-70">
             <span className="text-[14vw] font-heading font-black text-outline uppercase tracking-tighter">
               VT ARCHITECTURE &bull; D5 VISUALIZATION &bull; INTERIOR DESIGN &bull; VT ARCHITECTURE &bull; D5 VISUALIZATION &bull; INTERIOR DESIGN &bull;&nbsp;
             </span>
             <span className="text-[14vw] font-heading font-black text-outline uppercase tracking-tighter">
               VT ARCHITECTURE &bull; D5 VISUALIZATION &bull; INTERIOR DESIGN &bull; VT ARCHITECTURE &bull; D5 VISUALIZATION &bull; INTERIOR DESIGN &bull;&nbsp;
             </span>
           </div>
         </div>
 
         {/* 2. SECTION: DỊCH VỤ VÀ QUY TRÌNH */}"""
if "INFINITE MARQUEE" not in content:
    content = content.replace(hero_end_target, hero_end_replacement)


# 5. Add Curtain Reveal classes `focus-container` to project grids and `focus-item` to TiltCards
# Projects section grid 1:
proj_grid1 = """            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"""
proj_grid1_new = """            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 focus-container">"""
content = content.replace(proj_grid1, proj_grid1_new)

# Projects section grid 2:
proj_grid2 = """            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"""
proj_grid2_new = """            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 focus-container">"""
content = content.replace(proj_grid2, proj_grid2_new)

# Store grid:
store_grid = """          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">"""
store_grid_new = """          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 focus-container">"""
content = content.replace(store_grid, store_grid_new)

# And now inject `focus-item` into ALL TiltCards inside gradients!
# Oh wait, we can just replace `className="luxury-card aspect-[` with `className="focus-item luxury-card aspect-[`
content = content.replace('className="luxury-card aspect-[', 'className="focus-item luxury-card aspect-[')


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Pro features deployed seamlessly!")
