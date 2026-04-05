import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add lucide imports Volume2, VolumeX
content = content.replace(
    "} from 'lucide-react';",
    ", Volume2, VolumeX } from 'lucide-react';"
)

# 2. Add Typewriter Component right above `export default function App()`
typewriter_code = """/* ========================================================
   COMPONENT: TYPEWRITER (HIỆU ỨNG GÕ CHỮ AI)
======================================================== */
const Typewriter = ({ phrases }) => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    const typeSpeed = isDeleting ? 30 : 60;
    const delay = isDeleting && text === "" ? 500 : (!isDeleting && text === currentPhrase ? 2500 : typeSpeed);

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx, phrases]);

  return (
    <span className="text-[#D95A2B] font-bold">
      {text}<span className="inline-block w-1.5 h-4 bg-[#D95A2B] ml-1 animate-pulse align-middle"></span>
    </span>
  );
};

export default function App() {"""

content = content.replace("export default function App() {", typewriter_code)


# 3. Inject Audio state and Flashlight ref
state_code = """  const [selectedProject, setSelectedProject] = useState(null);
  
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const flashlightRef = useRef(null);
  
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };"""

content = content.replace("""  const [selectedProject, setSelectedProject] = useState(null);
  
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);""", state_code)


# 4. Inject flashlight handleMouseMove
mousemove_target = """    const handleMouseMove = (e) => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.translate = `${e.clientX - 16}px ${e.clientY - 16}px`;
      }
    };"""

mousemove_replacement = """    const handleMouseMove = (e) => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.translate = `${e.clientX - 16}px ${e.clientY - 16}px`;
      }
      if (flashlightRef.current) {
        flashlightRef.current.style.translate = `${e.clientX - 350}px ${e.clientY - 350}px`;
      }
    };"""
content = content.replace(mousemove_target, mousemove_replacement)


# 5. Inject flashlight div into ambient background
bg_target = """      {/* --- AMBIENT LIGHTS (ÁNH SÁNG NỀN TẠO HIỆU ỨNG GLASSMORPHISM) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Khối sáng cam góc trái trên */}"""

bg_replacement = """      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}
        <div ref={flashlightRef} className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-[#D95A2B]/10 via-[#D95A2B]/5 to-transparent rounded-full blur-[30px] pointer-events-none z-10 hidden lg:block opacity-60"></div>
        {/* Khối sáng cam góc trái trên */}"""
content = content.replace(bg_target, bg_replacement)

# Oh wait, bg-gradient-radial requires Tailwind classes, Tailwind v4 supports `bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]`.
# Let's fix that string
bg_replacement = """      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}
        <div ref={flashlightRef} className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D95A2B]/10 rounded-full blur-[80px] pointer-events-none z-10 hidden lg:block opacity-80 mix-blend-screen"></div>
        {/* Khối sáng cam góc trái trên */}"""
content = content.replace("""      {/* --- ÁNH SÁNG NỀN VÀ FLASHLIGHT CON TRỎ --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Đèn pin theo chuột */}
        <div ref={flashlightRef} className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-[#D95A2B]/10 via-[#D95A2B]/5 to-transparent rounded-full blur-[30px] pointer-events-none z-10 hidden lg:block opacity-60"></div>
        {/* Khối sáng cam góc trái trên */}""", bg_replacement)


# 6. Inject the audio tag at the end, and the hero content string
hero_target = """            <p className="text-sm md:text-base text-gray-400 font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left">
               &gt; Định tuyến không gian kiến trúc.<br/>
               &gt; Khai thác sức mạnh D5 Render & AI để kiến tạo những hình ảnh siêu thực.
            </p>"""

hero_replacement = """            <div className="text-sm md:text-base text-gray-400 font-mono max-w-lg mx-auto leading-relaxed mb-10 border-l-2 border-[#D95A2B] pl-4 text-left h-[50px] flex flex-col justify-center">
               <span>&gt; SYSTEM: <Typewriter phrases={["Loading D5 Render Environment...", "Khởi tạo thuật toán AI Upscale...", "Đang tính toán Global Illumination...", "Ready: Kiến tạo không gian siêu thực."]} /></span>
               <span>&gt; Định tuyến không gian kiến trúc 3D.</span>
            </div>"""
content = content.replace(hero_target, hero_replacement)


audio_target = """    </div>
  );
}"""

audio_replacement = """
      {/* NÚT BẬT/TẮT NHẠC THIỀN LOFI */}
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=lofi-study-122696.mp3" />
      <div 
        onClick={toggleAudio}
        className={`fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer group ${isAudioPlaying ? 'bg-[#D95A2B]/20 text-[#D95A2B] border-[#D95A2B]' : 'bg-black/50 text-gray-400 hover:text-white hover:border-white/50'}`}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <span className="absolute right-14 bg-black border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white">
           {isAudioPlaying ? 'Tắt nhạc Không gian' : 'Bật nhạc Không gian'}
        </span>
        {isAudioPlaying ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
      </div>

    </div>
  );
}"""
content = content.replace(audio_target, audio_replacement)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Super premium features added!")
