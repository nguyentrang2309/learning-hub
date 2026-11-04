"""Lấy các bài phổ biến nhất trên Substack và ghi ra posts.json.
Chạy tự động mỗi ngày bằng GitHub Actions. Link Substack đọc từ data.js (HUB_PROFILE.substack)."""
import json, re, sys, urllib.request
import xml.etree.ElementTree as ET
from html import unescape

ROOT = __file__.rsplit("/scripts/", 1)[0] if "/scripts/" in __file__ else "."
UA = {"User-Agent": "Mozilla/5.0 (learning-hub posts fetcher)"}
LIMIT = 6


def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def from_api(base):
    data = json.loads(get(f"{base}/api/v1/archive?sort=top&search=&offset=0&limit={LIMIT * 2}"))
    out = []
    for p in data:
        if p.get("type") not in (None, "newsletter", "thread", "podcast"):
            continue
        likes = p.get("reaction_count")
        if likes is None and isinstance(p.get("reactions"), dict):
            likes = sum(v for v in p["reactions"].values() if isinstance(v, int))
        out.append({
            "title": p.get("title") or "",
            "subtitle": p.get("subtitle") or p.get("description") or "",
            "url": p.get("canonical_url") or f"{base}/p/{p.get('slug', '')}",
            "date": p.get("post_date") or "",
            "image": p.get("cover_image") or "",
            "likes": likes or 0,
            "comments": p.get("comment_count") or 0,
        })
    return out[:LIMIT]


def from_rss(base):
    root = ET.fromstring(get(f"{base}/feed"))
    out = []
    for it in root.iter("item"):
        enc = it.find("enclosure")
        desc = re.sub(r"<[^>]+>", "", unescape(it.findtext("description") or "")).strip()
        out.append({
            "title": it.findtext("title") or "",
            "subtitle": desc[:180],
            "url": it.findtext("link") or "",
            "date": it.findtext("pubDate") or "",
            "image": enc.get("url") if enc is not None else "",
            "likes": 0, "comments": 0,
        })
    return out[:LIMIT]


def main():
    src = open(f"{ROOT}/data.js", encoding="utf-8").read()
    m = re.search(r'substack:\s*"([^"]*)"', src)
    base = (m.group(1) if m else "").strip().rstrip("/")
    if not base:
        print("Chưa điền link Substack trong data.js, bỏ qua.")
        return
    if not base.startswith("http"):
        base = "https://" + base
    posts = []
    for fn in (from_api, from_rss):
        try:
            posts = fn(base)
            if posts:
                print(f"Lấy được {len(posts)} bài bằng {fn.__name__}")
                break
        except Exception as e:  # thử cách tiếp theo
            print(f"{fn.__name__} lỗi: {e}", file=sys.stderr)
    if not posts:
        print("Không lấy được bài nào, giữ nguyên posts.json cũ.")
        return
    with open(f"{ROOT}/posts.json", "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
