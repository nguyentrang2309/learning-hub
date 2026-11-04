# Thùy Trang Learning Hubs

Learning Hub (trang tổng hợp tài liệu học tập) về Growth Marketing, AI, Content và Insurtech.

## Cập nhật nội dung (không cần biết code)

Mọi nội dung nằm trong **một file duy nhất: `data.js`**.

1. Trên GitHub, mở file `data.js` → bấm biểu tượng cây bút (Edit).
2. Sửa chữ trong dấu nháy `"..."`. Muốn thêm tài nguyên: copy nguyên một khối `{ ... },` rồi dán ngay bên dưới và sửa.
3. Bấm **Commit changes** (lưu thay đổi). Khoảng 1 phút sau trang web tự cập nhật.

Các phần trong `data.js`:

| Phần | Dùng để |
|---|---|
| `HUB_PROFILE` | Tên, giới thiệu, link Substack/Facebook/LinkedIn/Email, ngày cập nhật |
| `HUB_CATEGORIES` | Mục "Mình đang học gì": 3 mảng chính, bấm vào sẽ lọc tài nguyên đúng mảng |
| `HUB_POSTS_FALLBACK` | Bài viết dự phòng, chỉ dùng khi chưa lấy được bài tự động từ Substack |
| `HUB_RESOURCES` | Kho tài nguyên có bộ lọc Chủ đề / Loại / Cấp độ / Truy cập |
| `HUB_TOOLS` | Công cụ mình dùng |

Mẹo: chủ đề, loại, cấp độ mới sẽ tự xuất hiện trong bộ lọc, không cần sửa chỗ nào khác.

## Bài viết nổi bật từ Substack (tự động)

Điền link Substack vào `substack: "..."` trong `data.js`. Mỗi sáng (khoảng 6h) GitHub tự lấy 6 bài được thả tim nhiều nhất và cập nhật vào `posts.json`. Muốn cập nhật ngay: tab **Actions** → **Cập nhật bài Substack** → **Run workflow**. Khi chưa có bài, phần này tự ẩn.

## Cấu trúc

- `index.html` khung trang
- `style.css` màu sắc, font, bố cục (tự đổi sang nền tối khi máy để chế độ Dark)
- `app.js` tìm kiếm, bộ lọc, hiển thị
- `data.js` nội dung
- `posts.json` bài Substack (máy tự ghi, không cần sửa)
- `scripts/fetch_posts.py` + `.github/workflows/update-posts.yml` bộ lấy bài tự động
