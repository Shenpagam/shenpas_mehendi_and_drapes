import re
import json

with open("dist/index.html", "r", encoding="utf-8") as f:
    html = f.read()

print("=== Homepage SEO Validation ===")
title = re.search(r"<title>(.*?)</title>", html)
print("Title:", title.group(1) if title else "MISSING")
desc = re.search(r'<meta name="description" content="(.*?)"', html)
print("Description:", desc.group(1) if desc else "MISSING")
canon = re.search(r'<link rel="canonical" href="(.*?)"', html)
print("Canonical:", canon.group(1) if canon else "MISSING")
og_title = re.search(r'<meta property="og:title" content="(.*?)"', html)
print("OG Title:", og_title.group(1) if og_title else "MISSING")

h1_matches = re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.DOTALL)
print("H1 Tags:", [re.sub(r"<[^>]+>", "", h).strip() for h in h1_matches])

scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
print("JSON-LD Count:", len(scripts))
for i, s in enumerate(scripts):
    data = json.loads(s)
    t = data.get("@type")
    if t == "FAQPage":
        print(f"  Schema {i+1} @type: FAQPage (Questions count: {len(data.get('mainEntity', []))})")
    else:
        print(f"  Schema {i+1} @type:", t)

with open("dist/gallery.html", "r", encoding="utf-8") as f:
    html_g = f.read()

print("\n=== Gallery Page SEO Validation ===")
title_g = re.search(r"<title>(.*?)</title>", html_g)
print("Gallery Title:", title_g.group(1) if title_g else "MISSING")
desc_g = re.search(r'<meta name="description" content="(.*?)"', html_g)
print("Gallery Description:", desc_g.group(1) if desc_g else "MISSING")
canon_g = re.search(r'<link rel="canonical" href="(.*?)"', html_g)
print("Gallery Canonical:", canon_g.group(1) if canon_g else "MISSING")
h1_g_matches = re.findall(r"<h1[^>]*>(.*?)</h1>", html_g, re.DOTALL)
print("Gallery H1 Tags:", [re.sub(r"<[^>]+>", "", h).strip() for h in h1_g_matches])
scripts_g = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html_g, re.DOTALL)
print("Gallery JSON-LD Count:", len(scripts_g))
for i, s in enumerate(scripts_g):
    data = json.loads(s)
    print(f"  Gallery Schema {i+1} @type:", data.get("@type"))

with open("dist/robots.txt", "r", encoding="utf-8") as f:
    print("\n=== robots.txt ===")
    print(f.read().strip())

with open("dist/sitemap.xml", "r", encoding="utf-8") as f:
    print("\n=== sitemap.xml ===")
    print(f.read().strip())
