import re

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Theme Toggle UI and State
# Find states
state_target = """  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);"""

state_replacement = """  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isLightMode, setIsLightMode] = useState(false);"""
content = content.replace(state_target, state_replacement)


# In Header, add the Theme Toggle Button
header_target = """          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center space-x-6 mr-4 bg-white/5 px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">"""

# wait, bg-white/5 has not been converted yet
header_target = """          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center space-x-6 mr-4 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">"""
# I must do variable replacement FIRST.

# Color Replacements via Python:
# Backgrounds
content = content.replace('bg-[#100D0B]', 'bg-[var(--bg-color)]')
content = content.replace('bg-[#0A0807]', 'bg-[var(--bg-color)]')

# border-white components
content = re.sub(r'border-white/[0-9]+', 'border-[var(--border-color)]', content)

# bg-white components (glass)
content = re.sub(r'bg-white/[0-9]+', 'bg-[var(--glass-bg)]', content)

# text colors
content = content.replace('text-white', 'text-[var(--text-main)]')
content = content.replace('text-gray-200', 'text-[var(--text-main)]')
content = content.replace('text-gray-300', 'text-[var(--text-main)]')
content = content.replace('text-gray-400', 'text-[var(--text-muted)]')
content = content.replace('text-gray-500', 'text-[var(--text-muted)]')

# Specific black backgrounds in cards
content = content.replace('bg-[#1A1410]', 'bg-[var(--glass-bg)]')
content = content.replace('bg-[#120E0B]', 'bg-[var(--glass-bg)]')
content = content.replace('bg-black/50', 'bg-[var(--glass-bg)]')
content = content.replace('bg-black/60', 'bg-[var(--glass-bg)]')
content = content.replace('via-black/60', 'via-[var(--bg-color)]/60')
content = content.replace('from-black', 'from-[var(--bg-color)]')
content = content.replace('bg-black', 'bg-[var(--bg-color)]')


# Now replace the Header (which should have updated glass-bg)
header_target = """          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center space-x-6 mr-4 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">"""

header_replacement = """          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[var(--glass-bg)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[#D95A2B] hover:text-[#D95A2B] backdrop-blur-md shadow-lg"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <nav className="hidden lg:flex items-center space-x-6 mr-4 bg-[var(--glass-bg)] px-6 py-2.5 rounded-lg border border-[var(--border-color)] backdrop-blur-md">"""
content = content.replace(header_target, header_replacement)

# Import Sun, Moon from lucide
content = content.replace(', Volume2, VolumeX', ', Volume2, VolumeX, Sun, Moon, Play, Pause')

# Add real CSS variables into the inline `<style>`
# Oh wait, we already have a <style> block, let's replace `body { ` with root variables.
style_target = """        body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }"""
style_replacement = """        :root {
          --bg-color: #100D0B;
          --text-main: #ffffff;
          --text-muted: #9ca3af;
          --border-color: rgba(255, 255, 255, 0.1);
          --glass-bg: rgba(20, 16, 14, 0.4);
        }
        [data-theme="light"] {
          --bg-color: #F4F1ED;
          --text-main: #1C1917;
          --text-muted: #57534E;
          --border-color: rgba(0, 0, 0, 0.08);
          --glass-bg: rgba(255, 255, 255, 0.5);
        }
        body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; background-color: var(--bg-color); color: var(--text-main); }
"""
content = content.replace(style_target, style_replacement)

# Update DOM dataset on render
effect_target = """    const handleScroll = () => setIsScrolled(window.scrollY > 30);"""
effect_replacement = """    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
    const handleScroll = () => setIsScrolled(window.scrollY > 30);"""
content = content.replace(effect_target, effect_replacement)
# Wait, effect_target is in the empty dependency useEffect `[]`. We need an effect for isLightMode.
# Let's add a new useEffect!
new_effect = """  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

"""
content = content.replace("  useEffect(() => {\n    if (selectedProject)", new_effect + "  useEffect(() => {\n    if (selectedProject)")


# --- Nền Video Cinematic (Video lướt Camera D5) ---
hero_bg_target = """      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}"""

hero_bg_replacement = """      {/* --- CINE BG VIDEO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: isLightMode ? 0.3 : 0.4 }}>
         {/* Placeholder video kiến trúc */}
         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover filter grayscale-[50%]">
             <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587427202_large.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/70 to-transparent"></div>
      </div>

      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}"""
content = content.replace(hero_bg_target, hero_bg_replacement)


# Also we must fix Card backgrounds in light mode: The TiltCard currently has `.luxury-card` CSS
css_card_target = """        .luxury-card {
          border-radius: 1.25rem; /* Góc vuông vức, nam tính hơn (20px thay vì 32px) */
          overflow: hidden; 
          position: relative;
          background: rgba(20, 16, 14, 0.4); /* Nền trong suốt để thấy rõ blur */
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 1px solid rgba(255, 255, 255, 0.15); /* Viền sáng hắt sáng quang học */
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }"""
css_card_replacement = """        .luxury-card {
          border-radius: 1.25rem; 
          overflow: hidden; 
          position: relative;
          background: var(--glass-bg); 
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
          border-left: 1px solid var(--border-color);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }"""
content = content.replace(css_card_target, css_card_replacement)

# And fix gradient overlay
gradient_target = """        .gradient-overlay { background: linear-gradient(to top, rgba(16,13,11,1) 0%, rgba(16,13,11,0.6) 40%, transparent 100%); }"""
gradient_replacement = """        .gradient-overlay { background: linear-gradient(to top, var(--bg-color) 0%, transparent 100%); }"""
content = content.replace(gradient_target, gradient_replacement)


# Also change the preloader bg
preloader_target = """      {/* --- MÀN HÌNH KHỞI ĐỘNG (PRE-LOADER LUXURY) --- */}
      <div className={`fixed inset-0 z-[99999] bg-[var(--bg-color)] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-10'}`}>"""
# Wait, it was `bg-bg-color` or `#100D0B`?
# In origin it was `bg-[#100D0B]`, which we replaced with `bg-[var(--bg-color)]`.
# This is fine.


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Theme and Video patch successful!")
