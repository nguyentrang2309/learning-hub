# Thùy Trang Learning Hubs

Trang web: **https://nguyentrang2309.github.io/learning-hub/**

Có **2 cách** cập nhật nội dung:

- **Cách 1 (khuyên dùng): Trang quản trị** tại **https://nguyentrang2309.github.io/learning-hub/admin.html**. Có form thêm / sửa / xóa, không đụng vào code. Xem mục 0 ngay dưới.
- **Cách 2: Sửa tay file `data.js`** trên GitHub. Xem từ mục 1 trở đi.

---

## 0. Trang quản trị (chỉ admin)

**Đăng nhập lần đầu** (chỉ làm 1 lần trên mỗi máy):

1. Tạo mã khóa GitHub (token): mở https://github.com/settings/personal-access-tokens/new
   - **Token name:** learning-hub-admin · **Expiration:** 90 days hoặc 1 year
   - **Repository access:** Only select repositories → chọn **learning-hub**
   - **Permissions → Repository permissions → Contents:** Read and write (không cần quyền nào khác)
   - Bấm **Generate token**, copy mã `github_pat_...`
2. Mở trang quản trị, dán mã vào ô, giữ tích **"Ghi nhớ trên máy này"**, bấm **Đăng nhập**.

**Sửa nội dung:**

- 5 tab: **Tài nguyên · 3 mảng chính · Bài Substack ghim · Công cụ · Thông tin cá nhân**.
- Nút **+ Thêm**, biểu tượng **✎** để sửa, **🗑** để xóa, **↑ ↓** để đổi thứ tự.
- Sửa xong bấm **Lưu & xuất bản** (góc trên phải). Khoảng 1-2 phút sau web cập nhật.
- Đổi tên một mảng thì các tài nguyên thuộc mảng đó tự đổi theo.
- Ngày "Cập nhật lần cuối" ở chân trang tự điền khi lưu.

**Theo dõi tiến độ học (tab "Tiến độ học 🔒", chỉ admin thấy):**

- Bấm **+ Theo dõi khóa** → chọn tài nguyên có sẵn trong thư viện (khóa chưa có thì thêm ở tab Tài nguyên trước) → chọn trạng thái.
- Mỗi khóa có: **trạng thái** (Muốn học / Đang học / Đã xong), **thanh % hoàn thành** (kéo để chỉnh), **ngày bắt đầu**, **ngày hoàn thành**.
- Tự động: kéo % lên trên 0 → chuyển "Đang học" và điền ngày bắt đầu; kéo tới 100% → chuyển "Đã xong" và điền ngày hoàn thành.
- Đầu tab có tổng quan: số khóa đang học, tiến độ trung bình, số khóa đã xong, muốn học. Lọc theo trạng thái ở ô bên dưới.
- Bấm **Lưu & xuất bản** để lưu. Trang công khai **không** hiển thị phần này.
- Dữ liệu lưu ở file `progress.json`. Repo đang công khai nên người cố tình tìm trong repo vẫn đọc được, chỉ là không hiện trên trang web.

**Vì sao chỉ admin sửa được?** Trang quản trị ai cũng mở được, nhưng muốn lưu phải có mã khóa với quyền ghi vào repo. Chỉ tài khoản GitHub của bạn tạo được mã đó.

**Bảo mật mã khóa:**
- Không gửi mã cho ai, không dán vào chat.
- Dùng máy chung / máy người khác: bỏ tích "Ghi nhớ", xong bấm **Thoát**.
- Nghi lộ mã: vào https://github.com/settings/personal-access-tokens → xóa mã đó → tạo mã mới.
- Mã hết hạn: trang báo "Mã khóa không đúng hoặc đã hết hạn" → tạo mã mới và đăng nhập lại.

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

**Bước 2.** Dán vào ngay **dưới** dòng `window.HUB_RESOURCES = [` (mục mới sẽ hiện đầu danh sách).

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
Nội dung (`data.js`) luôn được tải mới. Nếu là thay đổi về giao diện (`style.css`, `app.js`), nhờ Claude tăng số phiên bản `?v=` trong `index.html`.

**Muốn đổi màu, bố cục, thêm mục mới?**
Phần này nằm trong `style.css` / `app.js`, nhờ Claude sửa sẽ an toàn hơn.

---

## Cấu trúc file

| File | Vai trò | Có cần sửa? |
|---|---|---|
| `admin.html` | Trang quản trị | Không |
| `progress.json` | Tiến độ học (trang quản trị tự tạo và ghi) | Không |
| `data.js` | Toàn bộ nội dung (trang quản trị tự ghi vào file này) | Chỉ khi sửa tay |
| `index.html` | Khung trang | Hiếm khi |
| `style.css` | Màu sắc, font, bố cục (tự đổi nền tối theo máy) | Không |
| `app.js` | Tìm kiếm, bộ lọc, lấy bài Substack | Không |
| `posts.json`, `scripts/`, `.github/` | Bộ lấy bài dự phòng (hiện bị Substack chặn) | Không |
