import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace cursor hook logic
old_hook = "  const [isHovering, setIsHovering] = useState(false);\n"
new_hook = "  const cursorInnerRef = useRef(null);\n"
content = content.replace(old_hook, new_hook)

old_cursor_handlers = """  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);"""

new_cursor_handlers = """  const handleMouseEnter = () => {
    if (cursorOuterRef.current) {
      cursorOuterRef.current.classList.add('scale-150', 'border-[#D95A2B]', 'bg-[#D95A2B]/10');
      cursorOuterRef.current.classList.remove('border-white/30', 'scale-100');
    }
    if (cursorInnerRef.current) {
      cursorInnerRef.current.classList.add('opacity-0');
      cursorInnerRef.current.classList.remove('opacity-100');
    }
  };

  const handleMouseLeave = () => {
    if (cursorOuterRef.current) {
      cursorOuterRef.current.classList.remove('scale-150', 'border-[#D95A2B]', 'bg-[#D95A2B]/10');
      cursorOuterRef.current.classList.add('border-white/30', 'scale-100');
    }
    if (cursorInnerRef.current) {
      cursorInnerRef.current.classList.remove('opacity-0');
      cursorInnerRef.current.classList.add('opacity-100');
    }
  };"""
content = content.replace(old_cursor_handlers, new_cursor_handlers)


old_cursor_dom = """      {/* --- CUSTOM CURSOR --- */}
      <div 
        ref={cursorOuterRef}
        className={`hidden lg:flex fixed top-0 left-0 w-8 h-8 border-[1.5px] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out items-center justify-center mix-blend-screen ${isHovering ? 'scale-150 border-[#D95A2B] bg-[#D95A2B]/10' : 'border-white/30 scale-100'}`}
      >
        <div className={`w-1 h-1 bg-white rounded-full transition-opacity ${isHovering ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>"""

new_cursor_dom = """      {/* --- CUSTOM CURSOR --- */}
      <div 
        ref={cursorOuterRef}
        className="hidden lg:flex fixed top-0 left-0 w-8 h-8 border-[1.5px] rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out items-center justify-center mix-blend-screen border-white/30 scale-100"
      >
        <div ref={cursorInnerRef} className="w-1 h-1 bg-white rounded-full transition-opacity duration-300 opacity-100"></div>
      </div>"""
content = content.replace(old_cursor_dom, new_cursor_dom)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patch successful!")
