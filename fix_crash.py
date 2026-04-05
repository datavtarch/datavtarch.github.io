import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

wrong_audio_block = """
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

# Replace all occurrences of wrong_audio_block with standard return EXCEPT the last one!
# Actually, I'll just change ALL of them to `</div>\n  );\n}`, and then manually add it back to the very end.

content = content.replace(wrong_audio_block, """    </div>
  );
}""")

# Now add the audio block specifically at the end of the file.
# The file ends with:
#     </div>
#   );
# }

if content.endswith("""    </div>
  );
}"""):
    content = content[:-17] + wrong_audio_block

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fix applied!")
