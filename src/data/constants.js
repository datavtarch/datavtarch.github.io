// ========================================================
//  PATH HELPER
// ========================================================
const getAssetPath = (path) => {
  const base = window.location.pathname.includes('/PROFILE-VTARCH-') ? '/PROFILE-VTARCH-' : '';
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
  projectThanhTuanMotel: getAssetPath("/projects/THANH_TUAN_MOTEL.webp"),
  projectVinhomes: getAssetPath("/projects/VINHOMES_HYBRID.webp"),
  projectCaledon: getAssetPath("/projects/CELADON_INTERIOR.webp"),
  storeJapandi: getAssetPath("/projects/ai-phong-cach-japandi.webp"),
  storeIndochine: getAssetPath("/projects/AI_-_Phong_cách_Indochine.webp"),
  projectAIJapandiModern: getAssetPath("/projects/ai-phong-cach-japandi-hien-dai.webp"),
  projectDoAn: getAssetPath("/projects/do-an-tot-nghiep.webp"),
  compareRender: getAssetPath("/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.webp"),
};

export const PROJECTS_DATA = [
  // ── ĐỒ ÁN TỐT NGHIỆP ──
  {
    id: 0,
    title: "Trung tâm Thiền Làng Mai Đà Lạt",
    tags: ["Đồ án tốt nghiệp", "Kiến trúc"],
    image: IMAGES.projectDoAn,
    pdfLink: getAssetPath("/documents/THUYET MINH TOT NGHIEP.pdf"),
    detailsPath: "/graduation-project",
    desc: "Đồ án tốt nghiệp kiến trúc sư - Một không gian thiền định hài hòa với thiên nhiên Đà Lạt.",
    category: ["Kiến trúc"],
  },
  // ── CÔNG TRÌNH THỰC TẾ ──
  {
    id: 1,
    title: "Thanh Tuấn Motel (Công Trình Thực Tế)",
    tags: ["Thực tế", "Kiến trúc"],
    image: IMAGES.projectThanhTuanMotel,
    pdfLink: null,
    desc: "Công trình kiến trúc thực tế Thanh Tuấn Motel — giải pháp không gian lưu trú thân thiện và hiệu quả.",
    category: ["Công trình thực tế"],
  },
  {
    id: 2,
    title: "Da Lat House (Kiến trúc thực tế)",
    tags: ["Thực tế", "Kiến trúc", "Model"],
    image: IMAGES.projectDaLatHouse,
    pdfLink: getAssetPath("/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf"),
    desc: "Dự án kiến trúc nhà ở thực tế tại Đà Lạt.",
    category: ["Công trình thực tế", "Model"],
  },

  // ── RENDER D5 & MODEL ──
  {
    id: 3,
    title: "Căn hộ Celadon - Modern Interior",
    tags: ["Render D5", "Nội thất", "Model"],
    image: IMAGES.projectCaledon,
    pdfLink: getAssetPath("/documents/CELADON_INTERIOR.pdf"),
    desc: "Diễn họa 3D và dựng hình Sketchup căn hộ Celadon bằng D5 Render.",
    category: ["Render D5", "Model"],
  },
  {
    id: 4,
    title: "Căn hộ Vinhomes Central Park - Hybrid (Modern & Wabi)",
    tags: ["Render D5", "Nội thất", "Model"],
    image: IMAGES.projectVinhomes,
    pdfLink: getAssetPath("/documents/VINHOMES_HYBRID.pdf"),
    desc: "Sự kết hợp tinh tế giữa căn hộ Vinhomes Central Park và phong cách Wabi Sabi.",
    category: ["Render D5", "Model"],
  },
  {
    id: 5,
    title: "Căn hộ Hiện đại - Lighting Study (AI Enhanced)",
    tags: ["Render D5", "Nội thất", "Model", "AI Render"],
    image: IMAGES.compareRender,
    pdfLink: getAssetPath("/documents/D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf"),
    desc: "Nghiên cứu ánh sáng tự nhiên kết hợp công nghệ AI tối ưu ảnh render.",
    category: ["Render D5", "Model", "AI Render"],
  },
  {
    id: 6,
    title: "Căn hộ Wabi Sabi - Zen Space",
    tags: ["Render D5", "Wabi Sabi", "Model"],
    image: IMAGES.projectWabi,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI.pdf"),
    desc: "Phong cách Wabi Sabi mộc mạc, tinh tế và thiết lập môi trường D5.",
    category: ["Render D5", "Model"],
  },
  {
    id: 7,
    title: "Biệt thự Wabi - Eastern Minimalist",
    tags: ["Render D5", "Wabi Sabi", "Model"],
    image: IMAGES.projectWabiTrung,
    pdfLink: getAssetPath("/documents/D5 RENDER - WABI TRUNG.pdf"),
    desc: "Biến thể phong cách Wabi Sabi Trung Hoa và dựng hình Sketchup.",
    category: ["Render D5", "Model"],
  },

  // ── AI GENERATION ──
  {
    id: 17,
    title: "Indochine Classic (AI Concept)",
    tags: ["AI Render", "Indochine"],
    image: IMAGES.storeIndochine,
    pdfLink: getAssetPath("/documents/AI - Phong cách Indochine.pdf"),
    desc: "Phát triển ý tưởng không gian Indochine hoàn toàn bằng trí tuệ nhân tạo.",
    category: ["AI Render"],
  },
  {
    id: 18,
    title: "Japandi Living (AI Concept)",
    tags: ["AI Render", "Japandi"],
    image: IMAGES.storeJapandi,
    pdfLink: getAssetPath("/documents/AI - Phong cách Japandi.pdf"),
    desc: "Ứng dụng AI tạo hình không gian Japandi tối giản.",
    category: ["AI Render"],
  },
  {
    id: 19,
    title: "Japandi Modern (AI Enhanced Rendering)",
    tags: ["AI Render", "Japandi"],
    image: IMAGES.projectAIJapandiModern,
    pdfLink: getAssetPath("/documents/AI - Phong cách Japandi hiện đại.pdf"),
    desc: "Quy trình Hybrid AI-CGI: Nâng cấp chất lượng diễn họa nội thất Japandi.",
    category: ["AI Render"],
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
    img: IMAGES.projectWabi,
    title: "Wabi Sabi Package",
    price: "$20",
    tags: ["D5 ASSET", "Render"],
    desc: "Trọn bộ asset và setting render phong cách Wabi Sabi mộc mạc.",
  },
  {
    img: IMAGES.compareRender,
    title: "Hiện Đại Render Pack",
    price: "$22",
    tags: ["D5 ASSET", "Render"],
    desc: "Bộ cài đặt render hiện đại cao cấp cho D5 Render, tối ưu ánh sáng & vật liệu.",
  },
];

const VALID_IG_IMAGE_IDS = Array.from({ length: 47 }, (_, i) => i + 1)
  .filter((id) => id !== 16 && id !== 17);

export const IG_POSTS = VALID_IG_IMAGE_IDS.map((num) => {
  const id = num.toString().padStart(2, "0");
  return {
    image: `${id}.webp`,
    likes: `${(Math.random() * 5 + 0.5).toFixed(1)}k`,
    comments: Math.floor(Math.random() * 100),
    link: "https://www.instagram.com/vtarch99/",
  };
});

export const FILTER_CATEGORIES = ["Tất cả", "Kiến trúc", "Công trình thực tế", "Render D5", "Model", "AI Render"];
