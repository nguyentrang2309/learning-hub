# Thùy Trang Learning Hubs

Trang web: **https://nguyentrang2309.github.io/learning-hub/**

Đây là hướng dẫn tự cập nhật nội dung, **không cần biết code**. Toàn bộ nội dung nằm trong **một file duy nhất: `data.js`**. Các file khác (`index.html`, `style.css`, `app.js`) bạn không cần đụng tới.

---

## 1. Cách sửa file trên GitHub (làm 1 lần là quen)

1. Mở https://github.com/nguyentrang2309/learning-hub và đăng nhập.
2. Bấm vào file **`data.js`**.
3. Bấm biểu tượng **cây bút ✏️** (góc phải phía trên, chữ "Edit this file").
4. Sửa nội dung (xem các mục bên dưới).
5. Bấm nút xanh **Commit changes...** → gõ ghi chú ngắn (ví dụ "Thêm khóa học mới") → bấm **Commit changes** lần nữa.
6. Đợi **1-2 phút**, mở lại trang web và bấm **Ctrl + F5** (Mac: Cmd + Shift + R) để thấy bản mới.

> Lưu ý: bản trên GitHub là **bản chính**. Thư mục `learning-hub` trên máy tính **không tự đồng bộ**. Sửa trên GitHub thì máy không đổi, và ngược lại.

---

## 2. Ba quy tắc vàng để không làm hỏng trang

| Quy tắc | Đúng | Sai |
|---|---|---|
| Chữ luôn nằm trong dấu nháy kép `"..."` | `ten: "Hacking Growth",` | `ten: Hacking Growth,` |
| Mỗi dòng/mỗi khối kết thúc bằng **dấu phẩy** | `},` | `}` (thiếu phẩy khi còn mục phía sau) |
| Trong chữ **không dùng dấu nháy kép** | `"Sách 'gối đầu' của growth"` | `"Sách "gối đầu" của growth"` |

**Nếu trang bị trắng / mất nội dung sau khi sửa:** gần như chắc chắn là thiếu dấu phẩy, thiếu dấu nháy hoặc thừa dấu nháy kép. Cách cứu nhanh nhất: vào file `data.js` → bấm **History** → mở lần sửa trước đó → copy lại đoạn cũ. Hoặc nhắn Claude kiểm tra giúp.

---

## 3. Sửa thông tin cá nhân (`HUB_PROFILE`)

Tìm đoạn `window.HUB_PROFILE = {` ở đầu file.

| Trường | Ý nghĩa |
|---|---|
| `ten` | Tên hiện trên logo, thẻ tổng quan |
| `tenThuVien` | Tiêu đề lớn. Phần sau tên (ví dụ "Learning Hubs") tự in nghiêng màu xanh |
| `khauHieu` | Dòng chữ nhỏ màu cam trên tiêu đề |
| `gioiThieu` | Đoạn mô tả dưới tiêu đề |
| `bio` | Đoạn giới thiệu ở chân trang |
| `substack`, `facebook`, `linkedin`, `email` | Dán link. Để trống `""` thì nút tự ẩn |
| `capNhatLanCuoi` | Ngày cập nhật, hiện ở chân trang, ví dụ `"15/11/2026"` |

---

## 4. Thêm tài nguyên mới (`HUB_RESOURCES`) — việc bạn sẽ làm nhiều nhất

**Bước 1.** Copy mẫu dưới đây:

```js
  {
    ten: "Tên khóa học / sách",
    nguon: "Tác giả hoặc đơn vị",
    link: "https://...",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "1-2 câu: vì sao nên xem, học xong được gì."
  },
```

**Bước 2.** Dán vào ngay **dưới** dòng chú thích của nhóm phù hợp:
- `// ===== GROWTH & AI =====`
- `// ===== CONTENT & SOCIAL =====`
- `// ===== INSURTECH =====`

**Bước 3.** Sửa nội dung. Chọn đúng một trong các giá trị sau:

| Trường | Giá trị được dùng |
|---|---|
| `chuDe` | `"Growth Marketing & AI"` · `"Content & Social"` · `"Insurtech / Bảo hiểm"` (gõ **chính xác**, kể cả dấu cách) |
| `loai` | `"Khóa học"` · `"Sách"` · `"Ebook"` · `"Video"` · `"Newsletter"` · `"Báo cáo"` · `"Case study"` · `"Template"` · `"Lộ trình"` · `"Công cụ học"` |
| `capDo` | `"Cơ bản"` · `"Trung cấp"` · `"Nâng cao"` |
| `truyCap` | `"Miễn phí"` · `"Trả phí"` · `"Freemium"` (có bản free, bản xịn trả phí) |

**Tùy chọn:** thêm `noiBat: true,` vào dòng `chuDe...` để gắn nhãn cam **"Nên xem trước"** và đẩy mục đó lên đầu danh sách.

Ví dụ: `chuDe: "Content & Social", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí", noiBat: true,`

**Mẹo:** loại hoặc cấp độ mới bạn tự đặt (ví dụ `"Podcast"`) sẽ **tự xuất hiện** trong bộ lọc. Riêng `chuDe` mới thì phải thêm cả mảng ở mục 5.

**Xóa tài nguyên:** xóa nguyên khối từ `{` đến `},` của mục đó.

---

## 5. Sửa 3 mảng "Mình đang học gì" (`HUB_CATEGORIES`)

```js
  {
    ten: "Growth Marketing & AI",
    bieuTuong: "📈",
    moTa: "Mô tả ngắn về mảng này.",
    noiDung: ["Chủ đề con 1", "Chủ đề con 2", "Chủ đề con 3"]
  },
```

- `ten` phải **trùng y hệt** `chuDe` của tài nguyên, thì khi bấm vào mảng mới lọc đúng.
- Muốn đổi tên một mảng: đổi ở đây **và** đổi `chuDe` của mọi tài nguyên thuộc mảng đó (dùng Ctrl + F trong trình sửa của GitHub để tìm nhanh).
- `bieuTuong`: một emoji bất kỳ (trên Windows bấm phím **Windows + .** để chọn).

---

## 6. Bài viết Substack (`HUB_POSTS_GHIM`)

Mục **"Bài viết nổi bật"** hoạt động thế này:
- **Bài bạn ghim** hiện đầu tiên, nhãn **"Nổi bật"**.
- Chỗ còn trống (tối đa 6 bài) **tự điền bài mới nhất** từ Substack, nhãn **"Mới"**. Không cần làm gì.
- Chưa có bài nào thì mục này tự ẩn.

**Ghim một bài:** dán link bài vào giữa `[` và `]`:

```js
window.HUB_POSTS_GHIM = [
  { link: "https://tranggrowthnotes.substack.com/p/ten-bai-viet", tieuDe: "", moTa: "" },
];
```

`tieuDe`, `moTa` để trống `""` thì web tự lấy tiêu đề và mô tả từ Substack. Muốn viết lại cho hấp dẫn hơn thì điền vào. Thứ tự trong danh sách = thứ tự hiển thị.

---

## 7. Công cụ mình dùng (`HUB_TOOLS`)

```js
  { ten: "Tên công cụ", link: "https://...", nhom: "AI", moTa: "Dùng để làm gì." },
```

`nhom` là chữ nhỏ màu cam phía trên tên, tự đặt tùy ý (ví dụ `"AI"`, `"Nghiên cứu"`, `"Content"`, `"Automation"`).

---

## 8. Thói quen cập nhật gợi ý

- **Mỗi lần học xong một khóa / đọc xong một cuốn:** sửa `moTa` thành nhận xét thật của bạn (1 câu "học xong mình làm được gì"). Đây là thứ làm thư viện khác biệt so với một danh sách link.
- **Mỗi lần đăng bài Substack hay:** ghim vào `HUB_POSTS_GHIM`.
- **Mỗi tháng:** đổi `capNhatLanCuoi`, gỡ link chết, thêm 2-3 tài nguyên mới.

---

## 9. Câu hỏi thường gặp

**Sửa xong mà trang chưa đổi?**
Đợi 2 phút rồi bấm Ctrl + F5. Vẫn chưa đổi: vào tab **Actions** trên GitHub xem có dòng màu đỏ (lỗi) không.

**Người khác vẫn thấy bản cũ dù mình đã thấy bản mới?**
Do trình duyệt của họ lưu bản cũ. Muốn ép tải mới: mở `index.html` → tìm 3 chỗ `?v=6` → đổi thành `?v=7` (lần sau `?v=8`...).

**Muốn đổi màu, bố cục, thêm mục mới?**
Phần này nằm trong `style.css` / `app.js`, nhờ Claude sửa sẽ an toàn hơn.

---

## Cấu trúc file

| File | Vai trò | Có cần sửa? |
|---|---|---|
| `data.js` | Toàn bộ nội dung | ✅ Có |
| `index.html` | Khung trang | Hiếm khi |
| `style.css` | Màu sắc, font, bố cục (tự đổi nền tối theo máy) | Không |
| `app.js` | Tìm kiếm, bộ lọc, lấy bài Substack | Không |
| `posts.json`, `scripts/`, `.github/` | Bộ lấy bài dự phòng (hiện bị Substack chặn) | Không |
