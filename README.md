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
| `HUB_POSTS_GHIM` | Bài Substack bạn muốn ghim lên đầu mục "Bài viết nổi bật" |
| `HUB_RESOURCES` | Kho tài nguyên có bộ lọc Chủ đề / Loại / Cấp độ / Truy cập |
| `HUB_TOOLS` | Công cụ mình dùng |

Mẹo: chủ đề, loại, cấp độ mới sẽ tự xuất hiện trong bộ lọc, không cần sửa chỗ nào khác.

## Bài viết nổi bật từ Substack

- Bài bạn ghim trong `HUB_POSTS_GHIM` (file `data.js`) luôn hiện đầu, nhãn "Nổi bật".
- Chỗ còn trống web tự điền bài mới nhất từ Substack (qua RSS, dịch vụ rss2json.com), tối đa 6 bài.
- Chưa có bài nào thì mục này tự ẩn.

## Cấu trúc

- `index.html` khung trang
- `style.css` màu sắc, font, bố cục (tự đổi sang nền tối khi máy để chế độ Dark)
- `app.js` tìm kiếm, bộ lọc, hiển thị
- `data.js` nội dung
- `posts.json`, `scripts/`, `.github/workflows/` bộ lấy bài dự phòng (hiện bị Substack chặn, không cần đụng)
