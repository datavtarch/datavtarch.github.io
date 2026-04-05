import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove Instagram import
content = content.replace("MessageCircle, Instagram }", "MessageCircle }")

# 2. Provide the Instagram SVG component
import_target = """import { Mail, Phone, MapPin"""
ig_svg_code = """const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import { Mail, Phone, MapPin"""

if "InstagramIcon" not in content:
    content = content.replace(import_target, ig_svg_code)

# 3. Replace <Instagram > with <InstagramIcon >
content = content.replace("<Instagram ", "<InstagramIcon ")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Instagram export error fixed!")
