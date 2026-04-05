import urllib.request as r
import re, json

url = 'https://www.picuki.com/profile/vtarch99'
req = r.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = r.urlopen(req).read().decode('utf-8')

# Regex to find images and post links
# Picuki typically has <ul class="box-photos"> with <li> items.
# Inside:
# <a href="post_link">
# <img src="image_src" alt="foo">
# Likes: <span class="icon-thumbs-up"></span> 123
# Comments: <span class="icon-chat"></span> 10

items = re.findall(r'<div class="photo-wrap">.*?<a href="(.*?)".*?<img.*?src="(.*?)".*?class="icon-thumbs-up"></span>\s*([\d,km]+).*?class="icon-chat"></span>\s*([\d,km]+)', html, re.DOTALL)

# Alternative if structure differs
if not items:
    items = re.findall(r'<li class="box-photo">.*?<a href="(.*?)".*?<img.*?src="(.*?)".*?class="icon-thumbs-up">.*?([\d,km]+).*?class="icon-chat">.*?([\d,km]+)', html, re.DOTALL)

posts = []
for idx, match in enumerate(items[:6]):
    link, img, likes, comments = match
    posts.append({
        'link': link,
        'image': img,
        'likes': likes.strip(),
        'comments': comments.strip()
    })

print(json.dumps(posts, indent=2))
