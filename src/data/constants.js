// ========================================================
//  PATH HELPER
// ========================================================
const getAssetPath = (assetPath) => {
  const base = window.location.pathname.includes('/PROFILE-VTARCH-') ? '/PROFILE-VTARCH-' : '';
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${base}${normalizedPath}`.replace(/\/+/g, '/');
};

// ========================================================
//  SHARED DATA & CONSTANTS
// ========================================================

export const IMAGES = {
  portrait: getAssetPath('/projects/PROFILE_NGUYỄN_VĂN_THANH.webp'),
  projectDaLatHouse: getAssetPath('/projects/SKETCHUP__D5_RENDER_DỰ_ÁN_THIẾT_KẾ_ĐÀ_LẠT_HOUSE.webp'),
  projectWabi: getAssetPath('/projects/D5_RENDER_-_WABI.webp'),
  projectWabiTrung: getAssetPath('/projects/D5_RENDER_-_WABI_TRUNG.webp'),
  projectThanhTuanMotel: getAssetPath('/projects/THANH_TUAN_MOTEL.webp'),
  projectVinhomes: getAssetPath('/projects/VINHOMES_HYBRID.webp'),
  projectCaledon: getAssetPath('/projects/CELADON_INTERIOR.webp'),
  storeJapandi: getAssetPath('/projects/AI_-_Phong_cách_Japandi.webp'),
  storeIndochine: getAssetPath('/projects/AI_-_Phong_cách_Indochine.webp'),
  projectAIJapandiModern: getAssetPath('/projects/AI_-_Phong_cách_Japandi_hiện_đại.webp'),
  projectDoAn: getAssetPath('/projects/do-an-tot-nghiep.webp'),
  compareRender: getAssetPath('/projects/D5_RENDER_-_PHONG_CÁCH_HIỆN_ĐẠI.webp'),
};

const gallery = (...images) => images;

export const PROJECTS_DATA = [
  {
    id: 0,
    title: 'Trung tâm Thiền Làng Mai Đà Lạt',
    year: '2024',
    location: 'Đà Lạt, Lâm Đồng',
    type: 'Đồ án kiến trúc',
    services: ['Concept kiến trúc', 'Diễn họa ngoại thất', 'Hồ sơ thuyết minh'],
    tags: ['Kiến trúc', 'Concept', 'Landscape'],
    image: IMAGES.projectDoAn,
    gallery: gallery(IMAGES.projectDoAn, IMAGES.projectDaLatHouse, IMAGES.projectThanhTuanMotel),
    pdfLink: getAssetPath('/documents/THUYET MINH TOT NGHIEP.pdf'),
    detailsPath: '/graduation-project',
    desc: 'Nghiên cứu không gian thiền định trong bối cảnh khí hậu, địa hình và cảnh quan Đà Lạt.',
    category: ['Kiến trúc', 'Diễn họa ngoại thất'],
  },
  {
    id: 1,
    title: 'Thanh Tuấn Motel',
    year: '2023',
    location: 'Việt Nam',
    type: 'Công trình lưu trú',
    services: ['Diễn họa kiến trúc', 'D5 Render', 'Hậu kỳ hình ảnh'],
    tags: ['Thực tế', 'Kiến trúc', 'Hospitality'],
    image: IMAGES.projectThanhTuanMotel,
    gallery: gallery(IMAGES.projectThanhTuanMotel, IMAGES.projectDaLatHouse, IMAGES.projectDoAn),
    pdfLink: getAssetPath('/documents/THANH_TUAN_MOTEL.pdf'),
    desc: 'Diễn họa công trình lưu trú nhỏ với ngôn ngữ gần gũi, rõ công năng và dễ trình bày với chủ đầu tư.',
    category: ['Công trình thực tế', 'Diễn họa ngoại thất'],
  },
  {
    id: 2,
    title: 'Da Lat House',
    year: '2023',
    location: 'Đà Lạt, Lâm Đồng',
    type: 'Nhà ở riêng lẻ',
    services: ['Model SketchUp', 'D5 Render', 'Visual direction'],
    tags: ['Nhà ở', 'Kiến trúc', 'Model'],
    image: IMAGES.projectDaLatHouse,
    gallery: gallery(IMAGES.projectDaLatHouse, IMAGES.projectDoAn, IMAGES.projectWabi),
    pdfLink: getAssetPath('/documents/SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf'),
    desc: 'Bộ hình ảnh nhà ở tại Đà Lạt, nhấn vào vật liệu ấm, ánh sáng tự nhiên và cảm giác cư trú.',
    category: ['Công trình thực tế', 'Model', 'Diễn họa ngoại thất'],
  },
  {
    id: 3,
    title: 'Celadon Modern Interior',
    year: '2024',
    location: 'TP.HCM',
    type: 'Căn hộ',
    services: ['Diễn họa nội thất', 'Model SketchUp', 'D5 Render'],
    tags: ['Nội thất', 'D5 Render', 'Model'],
    image: IMAGES.projectCaledon,
    gallery: gallery(IMAGES.projectCaledon, IMAGES.projectVinhomes, IMAGES.projectWabi),
    pdfLink: getAssetPath('/documents/CELADON_INTERIOR.pdf'),
    desc: 'Không gian căn hộ hiện đại với ánh sáng mềm, chất liệu rõ và bố cục hình ảnh phù hợp portfolio thiết kế.',
    category: ['Render D5', 'Model', 'Diễn họa nội thất'],
  },
  {
    id: 4,
    title: 'Vinhomes Hybrid Interior',
    year: '2024',
    location: 'TP.HCM',
    type: 'Căn hộ',
    services: ['Diễn họa nội thất', 'Mood refinement', 'D5 Render'],
    tags: ['Nội thất', 'Wabi', 'D5 Render'],
    image: IMAGES.projectVinhomes,
    gallery: gallery(IMAGES.projectVinhomes, IMAGES.projectWabi, IMAGES.projectCaledon),
    pdfLink: getAssetPath('/documents/VINHOMES_HYBRID.pdf'),
    desc: 'Thử nghiệm hybrid giữa tinh thần hiện đại và Wabi Sabi, tập trung cân bằng vật liệu, sáng tối và nhịp sống.',
    category: ['Render D5', 'Model', 'Diễn họa nội thất'],
  },
  {
    id: 5,
    title: 'Modern Lighting Study',
    year: '2024',
    location: 'Studio study',
    type: 'Nghiên cứu ánh sáng nội thất',
    services: ['Lighting study', 'AI CGI', 'Hậu kỳ hình ảnh'],
    tags: ['AI CGI', 'D5 Render', 'Lighting'],
    image: IMAGES.compareRender,
    gallery: gallery(IMAGES.compareRender, IMAGES.projectCaledon, IMAGES.projectAIJapandiModern),
    pdfLink: getAssetPath('/documents/D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf'),
    desc: 'Nghiên cứu ánh sáng và hậu kỳ AI để nâng độ sâu thị giác cho ảnh render nội thất.',
    category: ['Render D5', 'AI Render', 'Diễn họa nội thất'],
  },
  {
    id: 6,
    title: 'Wabi Sabi Zen Space',
    year: '2024',
    location: 'Studio study',
    type: 'Concept nội thất',
    services: ['Diễn họa nội thất', 'Material mood', 'D5 Render'],
    tags: ['Wabi Sabi', 'Nội thất', 'D5 Render'],
    image: IMAGES.projectWabi,
    gallery: gallery(IMAGES.projectWabi, IMAGES.projectWabiTrung, IMAGES.projectVinhomes),
    pdfLink: getAssetPath('/documents/D5 RENDER - WABI.pdf'),
    desc: 'Không gian tối giản mộc mạc, khai thác chất cảm vật liệu, khoảng trống và ánh sáng yên tĩnh.',
    category: ['Render D5', 'Model', 'Diễn họa nội thất'],
  },
  {
    id: 7,
    title: 'Eastern Minimalist Villa',
    year: '2024',
    location: 'Studio study',
    type: 'Nội thất villa',
    services: ['Model SketchUp', 'D5 Render', 'Visual mood'],
    tags: ['Villa', 'Wabi', 'Model'],
    image: IMAGES.projectWabiTrung,
    gallery: gallery(IMAGES.projectWabiTrung, IMAGES.projectWabi, IMAGES.projectDaLatHouse),
    pdfLink: getAssetPath('/documents/D5 RENDER - WABI TRUNG.pdf'),
    desc: 'Biến thể villa theo tinh thần Á Đông tối giản, nhấn vào bóng đổ, chất liệu và chiều sâu không gian.',
    category: ['Render D5', 'Model', 'Diễn họa nội thất'],
  },
  {
    id: 17,
    title: 'Indochine AI Concept',
    year: '2024',
    location: 'AI Lab',
    type: 'Concept nội thất',
    services: ['AI CGI', 'Prompt design', 'Style exploration'],
    tags: ['AI CGI', 'Indochine', 'Concept'],
    image: IMAGES.storeIndochine,
    gallery: gallery(IMAGES.storeIndochine, IMAGES.projectAIJapandiModern, IMAGES.compareRender),
    pdfLink: getAssetPath('/documents/AI - Phong cách Indochine.pdf'),
    desc: 'Thử nghiệm AI CGI cho mood Indochine, dùng để kiểm tra nhanh ngôn ngữ vật liệu và ánh sáng.',
    category: ['AI Render', 'Diễn họa nội thất'],
  },
  {
    id: 18,
    title: 'Japandi AI Concept',
    year: '2024',
    location: 'AI Lab',
    type: 'Concept nội thất',
    services: ['AI CGI', 'Prompt design', 'Moodboard'],
    tags: ['AI CGI', 'Japandi', 'Concept'],
    image: IMAGES.storeJapandi,
    gallery: gallery(IMAGES.storeJapandi, IMAGES.projectWabi, IMAGES.projectVinhomes),
    pdfLink: getAssetPath('/documents/AI - Phong cách Japandi.pdf'),
    desc: 'Ứng dụng AI để dựng nhanh nhiều phương án không gian Japandi trước khi chốt hướng render.',
    category: ['AI Render', 'Diễn họa nội thất'],
  },
  {
    id: 19,
    title: 'Japandi Modern AI Enhanced',
    year: '2024',
    location: 'AI Lab',
    type: 'Hybrid CGI',
    services: ['AI CGI', 'D5 Render', 'Hậu kỳ hình ảnh'],
    tags: ['AI CGI', 'Japandi', 'Post'],
    image: IMAGES.projectAIJapandiModern,
    gallery: gallery(IMAGES.projectAIJapandiModern, IMAGES.compareRender, IMAGES.projectCaledon),
    pdfLink: getAssetPath('/documents/AI - Phong cách Japandi hiện đại.pdf'),
    desc: 'Quy trình hybrid AI-CGI giúp tăng tốc thử mood, nâng chất ảnh và kiểm tra nhiều hướng vật liệu.',
    category: ['AI Render', 'Diễn họa nội thất'],
  },
];

export const SERVICE_GROUPS = [
  {
    title: 'Diễn họa',
    desc: 'Hình ảnh kiến trúc và nội thất có chiều sâu, đúng tinh thần thiết kế và đủ chất lượng để trình bày.',
    items: ['Diễn họa kiến trúc', 'Diễn họa nội thất', 'Diễn họa ngoại thất', 'D5 Render', 'Hậu kỳ hình ảnh'],
  },
  {
    title: 'Thiết kế',
    desc: 'Tư duy thiết kế giúp hình ảnh không chỉ đẹp mà còn diễn đạt được vật liệu, ánh sáng và câu chuyện.',
    items: ['Visual direction', 'Concept không gian', 'Moodboard vật liệu', 'Góc nhìn trình bày', 'Case study dự án'],
  },
  {
    title: 'Công nghệ',
    desc: 'Ứng dụng AI và tự động hóa để tăng tốc quá trình thử nghiệm, trình bày và bàn giao.',
    items: ['AI CGI', 'GPT cho kiến trúc', 'GPT cho nội thất', 'Workflow AI', 'Tự động hóa công việc thiết kế'],
  },
];

export const AI_LAB_ITEMS = [
  'AI CGI',
  'GPT cho kiến trúc',
  'GPT cho nội thất',
  'Workflow AI',
  'Tự động hóa công việc thiết kế',
];

export const INSIGHTS = [
  {
    title: 'AI trong kiến trúc nên bắt đầu từ đâu?',
    category: 'AI trong kiến trúc',
    date: '2026',
    image: IMAGES.projectAIJapandiModern,
    excerpt: 'Cách dùng AI như công cụ mở rộng tư duy thiết kế, không thay thế nền tảng kiến trúc.',
  },
  {
    title: 'D5 Render và vai trò của ánh sáng tự nhiên',
    category: 'D5 Render',
    date: '2026',
    image: IMAGES.compareRender,
    excerpt: 'Một ảnh render tốt bắt đầu từ camera, nhịp sáng tối và cách đọc vật liệu.',
  },
  {
    title: 'Workflow thiết kế: từ brief đến bộ ảnh thuyết phục',
    category: 'Workflow thiết kế',
    date: '2026',
    image: IMAGES.projectDaLatHouse,
    excerpt: 'Quy trình giúp studio kiểm soát thời gian, chất lượng và câu chuyện hình ảnh.',
  },
  {
    title: 'Case Study: diễn họa nội thất cho portfolio studio',
    category: 'Case Study dự án',
    date: '2026',
    image: IMAGES.projectCaledon,
    excerpt: 'Bố cục, ánh sáng và lựa chọn góc nhìn làm thay đổi cảm nhận về giá trị thiết kế.',
  },
];

export const STORE_ITEMS = [
  {
    img: IMAGES.storeIndochine,
    title: 'Indochine Mood Pack',
    price: '$18',
    tags: ['D5 Asset'],
    desc: 'Bộ mood và asset tham khảo cho không gian Indochine.',
  },
  {
    img: IMAGES.storeJapandi,
    title: 'Japandi Material Pack',
    price: '$15',
    tags: ['D5 Asset'],
    desc: 'Bộ vật liệu và ánh sáng theo tinh thần Japandi.',
  },
  {
    img: IMAGES.projectWabi,
    title: 'Wabi Sabi Package',
    price: '$20',
    tags: ['D5 Asset', 'Render'],
    desc: 'Gói tham khảo ánh sáng và vật liệu Wabi Sabi.',
  },
  {
    img: IMAGES.compareRender,
    title: 'Modern Render Pack',
    price: '$22',
    tags: ['D5 Asset', 'Render'],
    desc: 'Thiết lập ánh sáng và hậu kỳ cho nội thất hiện đại.',
  },
];

const VALID_IG_IMAGE_IDS = Array.from({ length: 47 }, (_, i) => i + 1)
  .filter((id) => id !== 16 && id !== 17);

export const IG_POSTS = VALID_IG_IMAGE_IDS.map((num) => {
  const id = num.toString().padStart(2, '0');
  return {
    image: `${id}.webp`,
    likes: `${(Math.random() * 5 + 0.5).toFixed(1)}k`,
    comments: Math.floor(Math.random() * 100),
    link: 'https://www.instagram.com/vtarch99/',
  };
});

export const FILTER_CATEGORIES = [
  'Tất cả',
  'Kiến trúc',
  'Diễn họa nội thất',
  'Diễn họa ngoại thất',
  'Render D5',
  'AI Render',
  'Model',
];
