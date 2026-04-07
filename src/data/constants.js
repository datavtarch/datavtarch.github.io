// ========================================================
//  SHARED DATA & CONSTANTS
// ========================================================

export const IMAGES = {
  portrait: "/projects/PROFILE_NGUYỄN_VĂN_THANH.webp",
  projectDaLatHouse: "/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.webp",
  projectWabi: "/projects/D5_RENDER_-_WABI.webp",
  projectWabiTrung: "/projects/D5_RENDER_-_WABI_TRUNG.webp",
  projectChungCu: "/projects/SKETCHUP__D5_RENDER_-__CHUNG_CƯ_DỰNG.webp",
  projectVinhomes: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_VINHOMES_ẢNH_RENDER_TỔNG_HỢP.webp",
  projectCaledon: "/projects/SKETCHUP__D5_RENDER_-_CĂN_HỘ_CALEDON_ẢNH_RENDER_TỔNG_HỢP.webp",
  storeJapandi: "/projects/AI_-_Phong_cách_Japandi.webp",
  storeIndochine: "/projects/AI_-_Phong_cách_Indochine.webp",
  compareRender: "/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.webp",
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Căn Hộ Vinhomes Japandi",
    tags: ["Nội thất", "120M2"],
    image: IMAGES.projectVinhomes,
    pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ VINHOMES ẢNH RENDER TỔNG HỢP.pdf",
    desc: "Thiết kế nội thất căn hộ Japandi. Áp dụng D5 Render mô phỏng ánh sáng thực.",
    category: "Nội thất",
  },
  {
    id: 2,
    title: "Đà Lạt House",
    tags: ["Kiến trúc", "Nghỉ dưỡng"],
    image: IMAGES.projectDaLatHouse,
    pdfLink: "/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf",
    desc: "Kiến trúc khu nghỉ dưỡng Đà Lạt.",
    category: "Kiến trúc",
  },
  {
    id: 3,
    title: "Căn Hộ Caledon",
    tags: ["Nội thất"],
    image: IMAGES.projectCaledon,
    pdfLink: "/documents/SKETCHUP + D5 RENDER - CĂN HỘ CALEDON ẢNH RENDER TỔNG HỢP.pdf",
    desc: "Nội thất chung cư cao cấp Caledon.",
    category: "Nội thất",
  },
  {
    id: 4,
    title: "Wabi Sabi Villa",
    tags: ["Kiến trúc", "Nội thất"],
    image: IMAGES.projectWabi,
    pdfLink: "/documents/D5 RENDER - WABI.pdf",
    desc: "Biệt thự phong cách Wabi Sabi.",
    category: "Kiến trúc",
  },
  {
    id: 5,
    title: "Chung Cư Cao Cấp",
    tags: ["Kiến trúc", "Cảnh quan"],
    image: IMAGES.projectChungCu,
    pdfLink: "/documents/SKETCHUP + D5 RENDER -  CHUNG CƯ DỰNG.pdf",
    desc: "Dự án quy hoạch chung cư hiện đại.",
    category: "Cảnh quan",
  },
  {
    id: 6,
    title: "Wabi Trung — Biệt Thự",
    tags: ["Kiến trúc", "Cảnh quan"],
    image: IMAGES.projectWabiTrung,
    pdfLink: "/documents/D5 RENDER - WABI.pdf",
    desc: "Thiết kế cảnh quan biệt thự Wabi Trung, hài hòa thiên nhiên và kiến trúc.",
    category: "Cảnh quan",
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

export const FILTER_CATEGORIES = ["Tất cả", "Nội thất", "Kiến trúc", "Cảnh quan"];
