(function () {
  var P = window.HUB_PROFILE || {};
  var CATS = window.HUB_CATEGORIES || [];
  var RES = window.HUB_RESOURCES || [];
  var TOOLS = window.HUB_TOOLS || [];
  var PAGE = 9;

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var norm = function (s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  };
  var uniq = function (arr) { return arr.filter(function (v, i) { return v && arr.indexOf(v) === i; }); };

  /* ---------- Profile ---------- */
  if (P.ten) { $("brandName").textContent = P.ten; $("brandLogo").textContent = P.ten.trim().split(" ").pop().charAt(0); }
  if (P.tenThuVien) {
    document.title = P.tenThuVien;
    var tt = P.tenThuVien, nm = P.ten || "";
    if (nm && tt.indexOf(nm) === 0 && tt.length > nm.length) {
      $("libTitle").innerHTML = esc(nm) + '<span class="h1__accent">' + esc(tt.slice(nm.length).trim()) + "</span>";
    } else { $("libTitle").textContent = tt; }
  }
  if (P.khauHieu) $("tagline").textContent = P.khauHieu;
  $("intro").textContent = P.gioiThieu || "";
  $("bio").textContent = P.bio || "";
  if (P.capNhatLanCuoi) $("updated").textContent = "Cập nhật lần cuối: " + P.capNhatLanCuoi;

  var socials = [
    ["Substack", P.substack], ["Facebook", P.facebook], ["LinkedIn", P.linkedin],
    ["Email", P.email ? "mailto:" + P.email : ""]
  ].filter(function (s) { return s[1]; });
  $("socialLinks").innerHTML = socials.map(function (s) {
    return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + " ↗</a>";
  }).join("");

  /* ---------- Stats ---------- */
  var stats = [
    [RES.length, "tài nguyên"],
    [CATS.length, "mảng chuyên sâu"],
    [TOOLS.length, "công cụ"]
  ];
  $("stats").innerHTML = stats.map(function (s) {
    return "<div><dt>" + s[1] + "</dt><dd>" + s[0] + "</dd></div>";
  }).join("");

  /* ---------- Hero card ---------- */
  if (P.ten) { $("heroName").textContent = P.ten; $("heroAvatar").textContent = $("brandLogo").textContent; }
  $("heroCats").innerHTML = CATS.map(function (c) {
    var n = RES.filter(function (r) { return r.chuDe === c.ten; }).length;
    return '<a href="#library" data-topic="' + esc(c.ten) + '"><span aria-hidden="true">' + esc(c.bieuTuong || "•") + "</span><span>" + esc(c.ten) + "</span><span>" + n + "</span></a>";
  }).join("");

  /* ---------- Categories (Mình đang học gì) ---------- */
  $("catList").innerHTML = CATS.map(function (c) {
    var n = RES.filter(function (r) { return r.chuDe === c.ten; }).length;
    return '<button class="cat" type="button" data-topic="' + esc(c.ten) + '">' +
      '<span class="cat__icon" aria-hidden="true">' + esc(c.bieuTuong || "•") + "</span>" +
      "<h3>" + esc(c.ten) + "</h3>" +
      "<p>" + esc(c.moTa) + "</p>" +
      (c.noiDung && c.noiDung.length ? "<ul>" + c.noiDung.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      '<span class="cat__foot"><span>' + n + " tài nguyên</span><b>Xem →</b></span>" +
      "</button>";
  }).join("");

  /* ---------- Filters ---------- */
  var state = { q: "", topic: "", type: "", level: "", access: "", shown: PAGE };
  var LEVEL_ORDER = ["Cơ bản", "Trung cấp", "Nâng cao"];

  var topics = uniq(RES.map(function (r) { return r.chuDe; }));
  $("topicChips").innerHTML = ['<button class="chip" type="button" data-topic="" aria-pressed="true">Tất cả</button>']
    .concat(topics.map(function (t) {
      return '<button class="chip" type="button" data-topic="' + esc(t) + '" aria-pressed="false">' + esc(t) + "</button>";
    })).join("");

  function fill(sel, values) {
    values.forEach(function (v) {
      var o = document.createElement("option"); o.value = v; o.textContent = v; sel.appendChild(o);
    });
  }
  fill($("fType"), uniq(RES.map(function (r) { return r.loai; })));
  fill($("fLevel"), uniq(RES.map(function (r) { return r.capDo; })).sort(function (a, b) { return LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b); }));
  fill($("fAccess"), uniq(RES.map(function (r) { return r.truyCap; })));

  function matches(r) {
    if (state.topic && r.chuDe !== state.topic) return false;
    if (state.type && r.loai !== state.type) return false;
    if (state.level && r.capDo !== state.level) return false;
    if (state.access && r.truyCap !== state.access) return false;
    if (state.q) {
      var hay = norm([r.ten, r.nguon, r.moTa, r.chuDe, r.loai].join(" "));
      return norm(state.q).split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; });
    }
    return true;
  }

  function card(r) {
    var free = r.truyCap === "Miễn phí";
    return '<article class="card">' +
      '<div class="card__meta"><span class="tag tag--topic">' + esc(r.chuDe) + '</span><span class="tag">' + esc(r.loai) + '</span><span class="tag">' + esc(r.capDo) + "</span>" +
      (r.noiBat ? '<span class="tag tag--star">Nên xem trước</span>' : "") + "</div>" +
      '<h3><a href="' + esc(r.link) + '" target="_blank" rel="noopener">' + esc(r.ten) + "</a></h3>" +
      '<p class="src">' + esc(r.nguon) + "</p>" +
      '<p class="desc">' + esc(r.moTa) + "</p>" +
      '<div class="card__foot"><span class="' + (free ? "access--free" : "") + '">' + esc(r.truyCap) + '</span><span class="go">Mở ↗</span></div>' +
      "</article>";
  }

  function render() {
    var list = RES.filter(matches).sort(function (a, b) { return (b.noiBat ? 1 : 0) - (a.noiBat ? 1 : 0); });
    $("resultCount").textContent = list.length + " tài nguyên";
    $("resourceGrid").innerHTML = list.slice(0, state.shown).map(card).join("");
    $("emptyState").hidden = list.length > 0;
    $("moreBtn").parentNode.hidden = list.length <= state.shown;
  }

  $("topicChips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state.topic = b.getAttribute("data-topic"); state.shown = PAGE;
    Array.prototype.forEach.call(this.children, function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
    render();
  });
  [["fType", "type"], ["fLevel", "level"], ["fAccess", "access"]].forEach(function (p) {
    $(p[0]).addEventListener("change", function () { state[p[1]] = this.value; state.shown = PAGE; render(); });
  });
  var searchEl = $("searchInput");
  searchEl.addEventListener("input", function () {
    state.q = this.value.trim(); state.shown = PAGE; render();
  });
  searchEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); document.getElementById("library").scrollIntoView(); }
  });
  $("resetBtn").addEventListener("click", function () {
    state = { q: "", topic: "", type: "", level: "", access: "", shown: PAGE };
    searchEl.value = ""; $("fType").value = ""; $("fLevel").value = ""; $("fAccess").value = "";
    Array.prototype.forEach.call($("topicChips").children, function (c, i) { c.setAttribute("aria-pressed", i === 0 ? "true" : "false"); });
    render();
  });
  $("moreBtn").addEventListener("click", function () { state.shown += PAGE; render(); });

  $("heroCats").addEventListener("click", function (e) {
    var b = e.target.closest("a"); if (!b) return;
    e.preventDefault();
    var chip = $("topicChips").querySelector('.chip[data-topic="' + b.getAttribute("data-topic") + '"]');
    if (chip) chip.click();
    $("library").scrollIntoView();
  });
  $("catList").addEventListener("click", function (e) {
    var b = e.target.closest(".cat"); if (!b) return;
    var t = b.getAttribute("data-topic");
    var chip = $("topicChips").querySelector('.chip[data-topic="' + t.replace(/"/g, '\\"') + '"]');
    if (chip) chip.click();
    $("library").scrollIntoView();
  });

  render();

  /* ---------- Substack posts ---------- */
  function fmtDate(d) {
    var x = new Date(d); if (isNaN(x)) return "";
    return ("0" + x.getDate()).slice(-2) + "/" + ("0" + (x.getMonth() + 1)).slice(-2) + "/" + x.getFullYear();
  }
  function cleanText(html) {
    var d = document.createElement("div"); d.innerHTML = html || "";
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }
  function cut(t, n) { return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, "") + "…" : t; }
  function normUrl(u) { return String(u || "").split("?")[0].replace(/\/+$/, "").toLowerCase(); }

  function renderPosts(posts) {
    posts = (posts || []).filter(function (p) { return p && p.title && p.url; }).slice(0, 6);
    if (!posts.length) return;
    $("postList").innerHTML = posts.map(function (p) {
      return '<article class="post">' +
        (p.image ? '<div class="post__img" style="background-image:url(\'' + esc(p.image) + '\')"></div>' : "") +
        '<div class="post__body">' + (p.pinned ? '<span class="post__rank">Nổi bật</span>' : '<span class="post__rank post__rank--new">Mới</span>') +
        '<h3><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a></h3>" +
        (p.subtitle ? "<p>" + esc(p.subtitle) + "</p>" : "<p></p>") +
        '<div class="post__meta">' + (p.date ? "<span>" + fmtDate(p.date) + "</span>" : "") + "<span>Đọc bài ↗</span></div>" +
        "</div></article>";
    }).join("");
    $("posts").hidden = false;
  }

  var sub = (P.substack || "").replace(/\/+$/, "");
  if (sub) $("substackAll").href = sub + "/archive"; else $("substackAll").hidden = true;

  // 1) Bài bạn tự ghim trong data.js
  var pinned = (window.HUB_POSTS_GHIM || []).filter(function (p) { return p && p.link; }).map(function (p) {
    return { title: p.tieuDe || "", url: p.link, subtitle: p.moTa || "", image: p.anh || "", date: p.ngay || "", pinned: true };
  });

  // 2) Bài mới nhất lấy tự động từ RSS của Substack
  function loadLatest() {
    if (!sub) return Promise.resolve([]);
    var api = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(sub + "/feed");
    return fetch(api).then(function (r) { return r.json(); }).then(function (d) {
      if (!d || d.status !== "ok") return [];
      return (d.items || []).map(function (it) {
        return {
          title: cleanText(it.title), url: it.link,
          subtitle: cut(cleanText(it.description), 160),
          image: (it.enclosure && it.enclosure.link) || it.thumbnail || "",
          date: String(it.pubDate || "").replace(" ", "T")
        };
      });
    }).catch(function () { return []; });
  }

  renderPosts(pinned);
  loadLatest().then(function (latest) {
    var byUrl = {};
    latest.forEach(function (p) { byUrl[normUrl(p.url)] = p; });
    var merged = pinned.map(function (p) {
      var f = byUrl[normUrl(p.url)];
      return f ? { title: p.title || f.title, url: p.url, subtitle: p.subtitle || f.subtitle, image: p.image || f.image, date: p.date || f.date, pinned: true } : p;
    });
    var seen = {}; merged.forEach(function (p) { seen[normUrl(p.url)] = 1; });
    latest.forEach(function (p) { if (!seen[normUrl(p.url)]) merged.push(p); });
    renderPosts(merged);
  });

  /* ---------- Tools ---------- */
  $("toolGrid").innerHTML = TOOLS.map(function (t) {
    return '<a class="tool" href="' + esc(t.link) + '" target="_blank" rel="noopener">' +
      '<span class="tool__icon">' + esc(t.ten.charAt(0)) + "</span>" +
      "<span><em>" + esc(t.nhom) + "</em><strong>" + esc(t.ten) + "</strong><small>" + esc(t.moTa) + "</small></span></a>";
  }).join("");
})();
