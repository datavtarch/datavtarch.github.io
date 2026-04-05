import urllib.request as r
url = 'https://www.picuki.com/profile/vtarch99'
req = r.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = r.urlopen(req).read().decode('utf-8')
with open('picuki.html', 'w', encoding='utf-8') as f:
    f.write(html)
