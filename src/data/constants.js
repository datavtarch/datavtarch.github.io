// ========================================================
//  PATH HELPER
// ========================================================
const getAssetPath = (path) => {
  const base = window.location.pathname.includes('/PROFILE-VTARCH-') ? '/PROFILE-VTARCH-' : '';
  // Ensure path starts with / if it doesn't
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`.replace(/\/+/g, '/');
};

// ========================================================
//  SHARED DATA & CONSTANTS
// ========================================================

export const IMAGES = {
  portrait: getAssetPath("/projects/PROFILE_NGUYỄN_VĂN_THANH.webp"),
  projectDaLatHouse: getAssetPath("/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.webp"),
  projectWabi: getAssetPath("/projects/D5_RENDER_-_WABI.webp"),
  projectWabiTrung: getAssetPath("/projects/D5_RENDER_-_WABI_TRUNG.webp"),
  projectChungCu: getAssetPath("/projects/SKETCHUP__D5_RENDER_-__CHUNG_CƯ_DỰNG.webp"),
  projectVinhomes: getAssetPath("/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.webp"),
  projectCaledon: getAssetPath("/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.webp"),
  storeJapandi: getAssetPath("/projects/AI_-_Phong_cách_Japandi.webp"),
  storeIndochine: getAssetPath("/projects/AI_-_Phong_cách_Indochine.webp"),
  projectAIJapandiModern: getAssetPath("/projects/AI_-_Phong_cách_Japandi_hiện_đại.webp"),
  projectDoAn: getAssetPath("/projects/do-an-tot-nghiep.png"),
  compareRender: getAssetPath("/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.webp"),
};

export const PROJECTS_DATA = [
  // ── ĐỒ ÁN TỐT NGHIỆP ──
  {
    id: 0,
    title: "Trung tâm Thiền Làng Mai Đà Lạt",
    tags: ["Đồ án tốt nghiệp", "Kiến trúc"],
    image: IMAGES.projectDoAn,
    pdfLink: "#",
    desc: "Đồ án tốt nghiệp kiến trúc sư - Một không gian thiền định hài hòa với thiên nhiên Đà Lạt.",
    category: "Kiến trúc",
  },
  // ── CÔNG TRÌNH THỰC TẾ ──
  {
    id: 1,
    title: "Thanh Tuan Motel",
    tags: ["Thực tế", "Kiến trúc"],
    image: IMAGES.projectChungCu,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER -  CHUNG CƯ DỰNG.pdf"),
    desc: "Công trình thực tế motel tại khu vực địa phương.",
    category: "Công trình thực tế",
  },
  {
    id: 2,
    title: "Da Lat House",
    tags: ["Thực tế", "Kiến trúc"],
    image: IMAGES.projectDaLatHouse,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf"),
    desc: "Dự án kiến trúc thực tế tại Đà Lạt.",
    category: "Công trình thực tế",
  },

  // ── RENDER D5 ──
  {
    id: 3,
    title: "Căn hộ Celadon",
    tags: ["Render D5", "Nội thất"],
    image: IMAGES.projectCaledon,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Diễn họa 3D căn hộ Celadon bằng D5 Render.",
    category: "Render D5",
  },
  {
    id: 4,
    title: "Căn hộ Vinhomes",
    tags: ["Render D5", "Nội thất"],
    image: IMAGES.projectVinhomes,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Render nội thất căn hộ Vinhomes chuyên nghiệp.",
    category: "Render D5",
  },
  {
    id: 5,
    title: "Căn hộ hiện đại",
    tags: ["Render D5", "Nội thất"],
    image: IMAGES.compareRender,
    pdfLink: getAssetPath("/documents/D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf"),
    desc: "Diễn họa phong cách hiện đại với ánh sáng tự nhiên.",
    category: "Render D5",
  },
  {
    id: 6,
    title: "Căn hộ Wabi",
    tags: ["Render D5", "Wabi Sabi"],
    image: IMAGES.projectWabi,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI.pdf"),
    desc: "Phong cách Wabi Sabi mộc mạc và tinh tế.",
    category: "Render D5",
  },
  {
    id: 7,
    title: "Căn hộ Wabi - Trung",
    tags: ["Render D5", "Wabi Sabi"],
    image: IMAGES.projectWabiTrung,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI TRUNG.pdf"),
    desc: "Biến thể phong cách Wabi Sabi Trung Hoa.",
    category: "Render D5",
  },
  {
    id: 8,
    title: "Căn hộ Vinhomes Wabi",
    tags: ["Render D5", "Mix Style"],
    image: IMAGES.projectVinhomes,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Sự kết hợp giữa Vinhomes và phong cách Wabi Sabi.",
    category: "Render D5",
  },

  // ── MODEL ──
  {
    id: 9,
    title: "Căn hộ Celadon (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.projectCaledon,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Quy trình dựng hình Sketchup và render D5.",
    category: "Model",
  },
  {
    id: 10,
    title: "Căn hộ Vinhomes (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.projectVinhomes,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Model Sketchup chi tiết căn hộ Vinhomes.",
    category: "Model",
  },
  {
    id: 11,
    title: "Căn hộ hiện đại (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.compareRender,
    pdfLink: getAssetPath("/documents/D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf"),
    desc: "Dựng hình không gian hiện đại.",
    category: "Model",
  },
  {
    id: 12,
    title: "Căn hộ Wabi (D5 render)",
    tags: ["Model", "D5 Render"],
    image: IMAGES.projectWabi,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI.pdf"),
    desc: "Thiết lập môi trường và vật liệu trong D5.",
    category: "Model",
  },
  {
    id: 13,
    title: "Căn hộ Wabi - Trung (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.projectWabiTrung,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI TRUNG.pdf"),
    desc: "Dựng hình biệt thự Wabi - Trung.",
    category: "Model",
  },
  {
    id: 14,
    title: "Căn hộ Vinhomes Wabi (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.projectVinhomes,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf"),
    desc: "Mô hình hóa không gian Vinhomes Wabi.",
    category: "Model",
  },
  {
    id: 15,
    title: "Da Lat House (Su - D5 render)",
    tags: ["Model", "Sketchup"],
    image: IMAGES.projectDaLatHouse,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf"),
    desc: "Dựng hình kiến trúc Đà Lạt House.",
    category: "Model",
  },

  // ── AI RENDER ──
  {
    id: 16,
    title: "Căn hộ hiện đại (AI)",
    tags: ["AI Render", "Midjourney"],
    image: IMAGES.compareRender,
    pdfLink: getAssetPath("/documents/D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf"),
    desc: "Ứng dụng AI vào thiết kế không gian hiện đại.",
    category: "AI Render",
  },
  {
    id: 17,
    title: "Căn hộ phong cách Indochine",
    tags: ["AI Render", "Indochine"],
    image: IMAGES.storeIndochine,
    pdfLink: getAssetPath("/documents/AI - Phong cách Indochine.pdf"),
    desc: "Diễn họa AI phong cách Indochine hoài cổ.",
    category: "AI Render",
  },
  {
    id: 18,
    title: "Căn hộ phong cách Japandi",
    tags: ["AI Render", "Japandi"],
    image: IMAGES.storeJapandi,
    pdfLink: getAssetPath("/documents/AI - Phong cách Japandi.pdf"),
    desc: "Diễn họa AI phong cách Japandi tối giản.",
    category: "AI Render",
  },
  {
    id: 19,
    title: "Căn hộ phong cách Japandi hiện đại",
    tags: ["AI Render", "Japandi"],
    image: IMAGES.projectAIJapandiModern,
    pdfLink: getAssetPath("/documents/AI - Phong cách Japandi hiện đại.pdf"),
    desc: "Sự giao thoa giữa Japandi và xu hướng hiện đại.",
    category: "AI Render",
  },
];

export const STORE_ITEMS = [
  {
    img: IMAGES.storeIndochine,
    title: "Indochine Hoài Cổ",
    price: "$18",
    tags: ["D5 ASSET"],
    desc: "Bộ vật liệu & asset phong cách Indochine hoàng kim, tái hiện vẻ đẹp Đông Dương cổ điển.",
  },
  {
    img: IMAGES.storeJapandi,
    title: "Japandi Hiện Đại",
    price: "$15",
    tags: ["D5 ASSET"],
    desc: "Asset phong cách Japandi — giao thoa giữa tinh tế Nhật Bản và tối giản Scandinavia.",
  },
  {
    img: IMAGES.compareRender,
    title: "Hiện Đại Render Pack",
    price: "$22",
    tags: ["D5 ASSET", "Render"],
    desc: "Bộ cài đặt render hiện đại cao cấp cho D5 Render, tối ưu ánh sáng & vật liệu.",
  },
];

export const IG_POSTS = Array.from({ length: 53 }, (_, i) => {
  const id = (i + 1).toString().padStart(2, "0");
  if (id === "16" || id === "17") return null;
  return {
    image: `${id}.webp`,
    likes: `${(Math.random() * 5 + 0.5).toFixed(1)}k`,
    comments: Math.floor(Math.random() * 100),
    link: "https://www.instagram.com/vtarch99/",
  };
}).filter(Boolean);

export const FILTER_CATEGORIES = ["Tất cả", "Công trình thực tế", "Render D5", "Model", "AI Render"];
