/* =========================================================
   FILE DỮ LIỆU CỦA LEARNING HUB
   Đây là file DUY NHẤT bạn cần sửa để cập nhật nội dung.
   Mỗi mục nằm trong cặp ngoặc { ... }, cách nhau bằng dấu phẩy.
   Chỉ sửa chữ nằm trong dấu nháy "...". Giữ nguyên dấu phẩy, ngoặc.
   ========================================================= */

/* ---------- 1. THÔNG TIN CỦA BẠN ---------- */
window.HUB_PROFILE = {
  ten: "Thùy Trang",
  tenThuVien: "Thùy Trang Learning Hubs",
  khauHieu: "Cập nhật mỗi khi mình học thêm điều mới",
  gioiThieu:
    "Khóa học mình đang theo, tài liệu mình lưu lại, công cụ mình dùng hằng ngày và những thứ mình vẫn đang học. Tất cả về Growth Marketing, AI, Content và Insurtech, gom về một chỗ.",
  bio:
    "Marketer gần 20 năm trong ngành bảo hiểm phi nhân thọ. Đang học lại Growth Marketing & AI từ con số 0 và chia sẻ công khai hành trình (build-in-public, nghĩa là học tới đâu chia sẻ tới đó).",
  // Dán link thật của bạn vào đây. Để trống "" thì nút sẽ tự ẩn.
  facebook: "",
  linkedin: "",
  // Link Substack, ví dụ: "https://thuytrang.substack.com"
  substack: "https://tranggrowthnotes.substack.com",
  email: "",
  capNhatLanCuoi: "04/11/2026"
};

/* ---------- 2. MÌNH ĐANG HỌC GÌ (3 mảng chính) ----------
   ten: phải trùng với "chuDe" của tài nguyên bên dưới để bấm vào là lọc đúng.
   ------------------------------------------------------ */
window.HUB_CATEGORIES = [
  {
    ten: "Growth Marketing & AI",
    bieuTuong: "📈",
    moTa: "Cách tăng trưởng nhanh bằng thử nghiệm, dữ liệu và AI: từ phễu chuyển đổi tới tự động hóa.",
    noiDung: ["Phễu AARRR", "North Star Metric", "Performance Ads", "GA4 & đo lường", "AI automation"]
  },
  {
    ten: "Content & Social",
    bieuTuong: "✍️",
    moTa: "Làm nội dung khiến người ta dừng lại, tin và hành động. Ứng dụng tâm lý hành vi vào từng câu chữ.",
    noiDung: ["Tâm lý thuyết phục", "Viral content", "Video ngắn", "Storytelling", "Thiết kế social"]
  },
  {
    ten: "Insurtech / Bảo hiểm",
    bieuTuong: "🛡️",
    moTa: "Bảo hiểm phi nhân thọ thời số hóa: xu hướng thị trường, mô hình phân phối mới, case study.",
    noiDung: ["Xu hướng thị trường", "Phân phối số", "Embedded insurance", "Case study insurtech"]
  }
];

/* ---------- 2b. BÀI VIẾT NỔI BẬT TRÊN SUBSTACK ----------
   Cách hoạt động:
   - Bài bạn GHIM dưới đây luôn hiện đầu tiên (nhãn "Nổi bật").
   - Còn chỗ trống thì web tự điền bài MỚI NHẤT từ Substack (nhãn "Mới"), tối đa 6 bài.
   Chỉ cần dán link bài. tieuDe, moTa, anh để trống "" thì web tự lấy từ Substack.
   Ví dụ:
   { link: "https://tranggrowthnotes.substack.com/p/ten-bai", tieuDe: "", moTa: "" },
   ------------------------------------------------------ */
window.HUB_POSTS_GHIM = [

];

/* ---------- 3. TÀI NGUYÊN ĐỀ XUẤT ----------
   chuDe:   "Growth Marketing & AI" | "Content & Social" | "Insurtech / Bảo hiểm"  (trùng tên mảng ở mục 2)
   loai:    "Khóa học" | "Sách" | "Ebook" | "Video" | "Newsletter" | "Báo cáo" | "Case study" | "Template" | "Lộ trình" | "Công cụ học"
   capDo:   "Cơ bản" | "Trung cấp" | "Nâng cao"
   truyCap: "Miễn phí" | "Trả phí" | "Freemium"   (Freemium = có bản free, bản xịn trả phí)
   noiBat:  true để gắn nhãn "Nên xem trước"
   ------------------------------------------ */
window.HUB_RESOURCES = [
  // ===== GROWTH & AI =====
  {
    ten: "AI Fluency: Framework & Foundations",
    nguon: "Anthropic Academy",
    link: "https://anthropic.skilljar.com/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí", noiBat: true,
    moTa: "Khóa nền tảng về cách làm việc cùng AI hiệu quả, an toàn. Không cần biết code."
  },
  {
    ten: "AI For Everyone",
    nguon: "DeepLearning.AI · Andrew Ng (Coursera)",
    link: "https://www.coursera.org/learn/ai-for-everyone",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Freemium",
    moTa: "Hiểu AI làm được gì, không làm được gì, cách đưa AI vào doanh nghiệp. Dành cho người non-tech."
  },
  {
    ten: "Hacking Growth",
    nguon: "Sean Ellis & Morgan Brown",
    link: "https://www.goodreads.com/search?q=Hacking+Growth+Sean+Ellis",
    chuDe: "Growth Marketing & AI", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí", noiBat: true,
    moTa: "Sách gối đầu của growth marketing: quy trình thử nghiệm nhanh, North Star Metric, phễu AARRR."
  },
  {
    ten: "Reforge",
    nguon: "Reforge",
    link: "https://www.reforge.com/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Nâng cao", truyCap: "Trả phí",
    moTa: "Chương trình growth chuyên sâu do người làm thật ở các công ty công nghệ lớn giảng dạy."
  },
  {
    ten: "Lenny's Newsletter",
    nguon: "Lenny Rachitsky",
    link: "https://www.lennysnewsletter.com/",
    chuDe: "Growth Marketing & AI", loai: "Newsletter", capDo: "Trung cấp", truyCap: "Freemium",
    moTa: "Bản tin về product và growth, nhiều bài phân tích cách các công ty tìm khách hàng đầu tiên."
  },
  {
    ten: "Growth.Design Case Studies",
    nguon: "Growth.Design",
    link: "https://growth.design/case-studies",
    chuDe: "Growth Marketing & AI", loai: "Case study", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Case study dạng truyện tranh về tâm lý người dùng và trải nghiệm sản phẩm. Dễ đọc, dễ nhớ."
  },
  {
    ten: "Google Skillshop (Ads & Analytics)",
    nguon: "Google",
    link: "https://skillshop.withgoogle.com/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Khóa và chứng chỉ chính thức về Google Ads, Google Analytics 4."
  },
  {
    ten: "Meta Blueprint",
    nguon: "Meta",
    link: "https://www.facebook.com/business/learn",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Khóa chính thức của Meta về quảng cáo Facebook, Instagram."
  },
  {
    ten: "HubSpot Academy",
    nguon: "HubSpot",
    link: "https://academy.hubspot.com/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Inbound marketing, email marketing, content marketing có chứng chỉ miễn phí."
  },
  {
    ten: "Make Academy",
    nguon: "Make.com",
    link: "https://academy.make.com/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Trung cấp", truyCap: "Miễn phí",
    moTa: "Học tự động hóa quy trình (automation) bằng kéo thả, không cần code."
  },

  {
    ten: "Digital Marketing Roadmap",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/digital-marketing-roadmap",
    chuDe: "Growth Marketing & AI", loai: "Lộ trình", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Bản đồ các kỹ năng digital marketing cần học theo từng chặng, hợp để tự kiểm tra mình đang thiếu gì. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Introduction to Inbound Marketing Metrics (Ebook)",
    nguon: "Tomorrow Marketers Academy",
    link: "https://ebook.tomorrowmarketers.org/introduction-inbound-marketing-metrics",
    chuDe: "Growth Marketing & AI", loai: "Ebook", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Các chỉ số đo hiệu quả inbound marketing (thu hút khách tự tìm đến): traffic, lead, tỷ lệ chuyển đổi. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Data Resource Packs: Metrics & Reporting Guide",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/data-resource-packs",
    chuDe: "Growth Marketing & AI", loai: "Ebook", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Bộ tài liệu về chỉ số và cách làm báo cáo, nền tảng để đọc số liệu phễu bán hàng. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Data to Viz: chọn biểu đồ đúng",
    nguon: "Data to Viz",
    link: "https://www.data-to-viz.com/",
    chuDe: "Growth Marketing & AI", loai: "Công cụ học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Cây quyết định giúp chọn đúng loại biểu đồ cho từng kiểu dữ liệu khi làm báo cáo marketing. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Marketing Dashboard Examples",
    nguon: "Coupler.io",
    link: "https://www.coupler.io/dashboard-examples",
    chuDe: "Growth Marketing & AI", loai: "Template", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Kho mẫu dashboard marketing (ads, SEO, CRM) để tham khảo cách trình bày chỉ số. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "AI Agents & Automation with No Code (playlist)",
    nguon: "Futurepedia",
    link: "https://www.youtube.com/playlist?list=PLXMuq8RQj16bGvBccTrGD2WeDeE4SM4wy",
    chuDe: "Growth Marketing & AI", loai: "Video", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Chuỗi video dựng AI agent và tự động hóa không cần code. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Claude Cowork Full Course: Zero To Working AI Employee",
    nguon: "KJ Rainey (YouTube)",
    link: "https://www.youtube.com/watch?v=C9gKWTzRukM",
    chuDe: "Growth Marketing & AI", loai: "Video", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Khóa video hướng dẫn dùng Claude Cowork như một 'nhân viên AI' làm việc thật. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Self-host n8n cho người mới",
    nguon: "Nate Herk (YouTube)",
    link: "https://www.youtube.com/watch?v=6ZB0zADNaqk",
    chuDe: "Growth Marketing & AI", loai: "Video", capDo: "Trung cấp", truyCap: "Miễn phí",
    moTa: "Cách tự cài n8n (công cụ tự động hóa) với chi phí thấp, bước tiếp theo sau khi quen Make. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Blog series: Learn AI from 0",
    nguon: "Zoe's Data & AI Lens",
    link: "https://zoedatalens.substack.com/t/series-learn-ai-from-0",
    chuDe: "Growth Marketing & AI", loai: "Newsletter", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Chuỗi bài tiếng Việt học AI từ con số 0 dành cho marketer. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Blog series: n8n Automation & AI Agent",
    nguon: "Zoe's Data & AI Lens",
    link: "https://zoedatalens.substack.com/t/n8n-automation-and-ai-agent",
    chuDe: "Growth Marketing & AI", loai: "Newsletter", capDo: "Trung cấp", truyCap: "Miễn phí",
    moTa: "Chuỗi bài tiếng Việt về tự động hóa bằng n8n và AI agent, có ví dụ thực tế. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Khóa AI Marketing",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/ai-marketing-course",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Trung cấp", truyCap: "Trả phí",
    moTa: "Khóa tiếng Việt về ứng dụng AI vào quy trình marketing. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Khóa Digital Performance",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/digital-performance-course",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Trung cấp", truyCap: "Trả phí",
    moTa: "Khóa tiếng Việt về performance marketing (quảng cáo tối ưu theo kết quả đo được). Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "Khóa Marketing Foundation",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/marketing-foundation-course/",
    chuDe: "Growth Marketing & AI", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Trả phí",
    moTa: "Nền tảng tư duy marketing bài bản cho người muốn hệ thống lại kiến thức. Gợi ý từ Zoe's Learning Library."
  },

  // ===== CONTENT & SOCIAL =====
  {
    ten: "Influence: The Psychology of Persuasion",
    nguon: "Robert Cialdini",
    link: "https://www.goodreads.com/search?q=Influence+Cialdini",
    chuDe: "Content & Social", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí", noiBat: true,
    moTa: "6 (bản mới là 7) nguyên tắc thuyết phục: khan hiếm, bằng chứng xã hội, có qua có lại..."
  },
  {
    ten: "Contagious: Why Things Catch On",
    nguon: "Jonah Berger",
    link: "https://www.goodreads.com/search?q=Contagious+Jonah+Berger",
    chuDe: "Content & Social", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí",
    moTa: "Công thức STEPPS giải thích vì sao một nội dung được chia sẻ lan truyền."
  },
  {
    ten: "Made to Stick",
    nguon: "Chip Heath & Dan Heath",
    link: "https://www.goodreads.com/search?q=Made+to+Stick+Heath",
    chuDe: "Content & Social", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí",
    moTa: "Nguyên tắc SUCCESs để thông điệp dễ hiểu, dễ nhớ. Rất hợp với sản phẩm khó như bảo hiểm."
  },
  {
    ten: "Building a StoryBrand",
    nguon: "Donald Miller",
    link: "https://www.goodreads.com/search?q=Building+a+StoryBrand",
    chuDe: "Content & Social", loai: "Sách", capDo: "Cơ bản", truyCap: "Trả phí",
    moTa: "Đặt khách hàng làm nhân vật chính, thương hiệu là người dẫn đường."
  },
  {
    ten: "Canva Design School",
    nguon: "Canva",
    link: "https://www.canva.com/designschool/",
    chuDe: "Content & Social", loai: "Khóa học", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Khóa ngắn về thiết kế, social media, thương hiệu cho người không chuyên thiết kế."
  },

  {
    ten: "Khóa Content Marketing",
    nguon: "Tomorrow Marketers Academy",
    link: "https://www.tomorrowmarketers.org/content-marketing-course",
    chuDe: "Content & Social", loai: "Khóa học", capDo: "Trung cấp", truyCap: "Trả phí",
    moTa: "Khóa tiếng Việt về chiến lược và sản xuất content marketing. Gợi ý từ Zoe's Learning Library."
  },
  {
    ten: "The LinkedIn Growth Playbook",
    nguon: "Chase Dimond (YouTube)",
    link: "https://www.youtube.com/watch?v=dZWYh0l-ysc",
    chuDe: "Content & Social", loai: "Video", capDo: "Cơ bản", truyCap: "Miễn phí",
    moTa: "Cách tăng trưởng kênh LinkedIn cá nhân: định vị, nhịp đăng bài, format nội dung. Gợi ý từ Zoe's Learning Library."
  },

  // ===== INSURTECH =====
  {
    ten: "Swiss Re Institute · sigma",
    nguon: "Swiss Re",
    link: "https://www.swissre.com/institute/",
    chuDe: "Insurtech / Bảo hiểm", loai: "Báo cáo", capDo: "Nâng cao", truyCap: "Miễn phí", noiBat: true,
    moTa: "Báo cáo nghiên cứu thị trường bảo hiểm toàn cầu, có số liệu khu vực châu Á."
  },
  {
    ten: "McKinsey Insights · Insurance",
    nguon: "McKinsey & Company",
    link: "https://www.mckinsey.com/industries/financial-services/our-insights",
    chuDe: "Insurtech / Bảo hiểm", loai: "Báo cáo", capDo: "Trung cấp", truyCap: "Miễn phí",
    moTa: "Phân tích xu hướng tài chính, bảo hiểm, chuyển đổi số và phân phối."
  },
  {
    ten: "The Digital Insurer",
    nguon: "The Digital Insurer",
    link: "https://www.the-digital-insurer.com/",
    chuDe: "Insurtech / Bảo hiểm", loai: "Case study", capDo: "Trung cấp", truyCap: "Freemium",
    moTa: "Kho case study insurtech toàn cầu, nhiều ví dụ thị trường châu Á."
  },
  {
    ten: "Coverager",
    nguon: "Coverager",
    link: "https://coverager.com/",
    chuDe: "Insurtech / Bảo hiểm", loai: "Newsletter", capDo: "Trung cấp", truyCap: "Miễn phí",
    moTa: "Tin tức ngắn, cập nhật hằng ngày về insurtech và mô hình phân phối mới."
  }
];

/* ---------- 4. CÔNG CỤ MÌNH DÙNG ---------- */
window.HUB_TOOLS = [
  { ten: "Claude", link: "https://claude.ai/", nhom: "AI", moTa: "Viết, phân tích, lập kế hoạch, làm web như trang này." },
  { ten: "NotebookLM", link: "https://notebooklm.google.com/", nhom: "AI", moTa: "Nạp tài liệu và hỏi đáp, tóm tắt, tạo podcast học bài." },
  { ten: "Meta Ad Library", link: "https://www.facebook.com/ads/library/", nhom: "Nghiên cứu", moTa: "Xem đối thủ đang chạy quảng cáo gì, miễn phí." },
  { ten: "TikTok Creative Center", link: "https://ads.tiktok.com/business/creativecenter/", nhom: "Nghiên cứu", moTa: "Bắt trend âm thanh, hashtag, quảng cáo top trên TikTok." },
  { ten: "Google Trends", link: "https://trends.google.com/", nhom: "Nghiên cứu", moTa: "Xem mức độ quan tâm theo từ khóa và khu vực." },
  { ten: "Canva", link: "https://www.canva.com/", nhom: "Content", moTa: "Thiết kế ảnh, carousel, slide nhanh." },
  { ten: "CapCut", link: "https://www.capcut.com/", nhom: "Content", moTa: "Dựng video ngắn, phụ đề tự động." },
  { ten: "Make", link: "https://www.make.com/", nhom: "Automation", moTa: "Nối các app lại để tự chạy việc lặp đi lặp lại." },
  { ten: "Obsidian", link: "https://obsidian.md/", nhom: "Quản lý kiến thức", moTa: "Ghi chú, nối các ý tưởng thành 'bộ não thứ hai'." }
];
