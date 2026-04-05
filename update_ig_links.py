import os

file_path = r'f:\PROFILE VTARCH\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update generic links
content = content.replace('href="https://instagram.com/"', 'href="https://www.instagram.com/vtarch99/"')
content = content.replace("window.open('https://instagram.com'", "window.open('https://www.instagram.com/vtarch99/'")
content = content.replace('link: "https://instagram.com"', 'link: "https://www.instagram.com/vtarch99/"')
content = content.replace('@VT.Architecture', '@vtarch99')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
