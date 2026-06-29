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

Object.assign(IMAGES, {
  portrait: getAssetPath('/projects/profile-nguyen-van-thanh.webp'),
  projectDaLatHouse: getAssetPath('/projects/sketchup-d5-render-da-lat-house.webp'),
  projectDaLatHouseInterior: getAssetPath('/pdf-pages/sketchup-d5-render-du-an-thiet-ke-da-lat-house/page-04.webp'),
  storeJapandi: getAssetPath('/projects/ai-phong-cach-japandi.webp'),
  storeIndochine: getAssetPath('/projects/ai-phong-cach-indochine.webp'),
  projectAIJapandiModern: getAssetPath('/projects/ai-phong-cach-japandi-hien-dai.webp'),
  compareRender: getAssetPath('/projects/d5-render-phong-cach-hien-dai.webp'),
});

const getPdfSlug = (pdfLink) => {
  if (!pdfLink) return '';

  const cleanPath = pdfLink.split(/[?#]/)[0];
  const fileName = cleanPath.split('/').pop() || '';
  let baseName = fileName.replace(/\.pdf$/i, '');

  try {
    baseName = decodeURIComponent(baseName);
  } catch {
    // Keep the original string if the path is already decoded.
  }

  return baseName
    .replace(/[đĐ]/g, 'd')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
};

const PDF_PAGE_COUNTS = {
  'ai-phong-cach-indochine': 11,
  'ai-phong-cach-japandi': 11,
  'ai-phong-cach-japandi-hien-dai': 11,
  'celadon-interior': 15,
  'd5-render-phong-cach-hien-dai': 14,
  'd5-render-wabi': 4,
  'd5-render-wabi-trung': 5,
  'sketchup-d5-render-du-an-thiet-ke-da-lat-house': 17,
  'thanh-tuan-motel': 6,
  'thuyet-minh-tot-nghiep': 24,
  'vinhomes-hybrid': 30,
};

const PDF_COVER_PAGES = {
  'ai-phong-cach-indochine': 9,
  'ai-phong-cach-japandi': 6,
  'ai-phong-cach-japandi-hien-dai': 9,
  'celadon-interior': 1,
  'd5-render-phong-cach-hien-dai': 1,
  'd5-render-wabi': 1,
  'd5-render-wabi-trung': 1,
  'sketchup-d5-render-du-an-thiet-ke-da-lat-house': 2,
  'thanh-tuan-motel': 2,
  'thuyet-minh-tot-nghiep': 1,
  'vinhomes-hybrid': 1,
};

const PDF_GALLERY_PRIORITY_PAGES = {
  'ai-phong-cach-indochine': [9, 1, 6, 3, 4, 7, 10],
  'ai-phong-cach-japandi': [6, 2, 7, 9, 11, 1],
  'ai-phong-cach-japandi-hien-dai': [9, 2, 5, 6, 7, 8, 10],
  'celadon-interior': [1, 10, 2, 3, 8, 9, 11, 12, 6, 7],
  'd5-render-phong-cach-hien-dai': [1, 2, 7, 9, 10, 11, 6],
  'd5-render-wabi': [1, 2, 3, 4],
  'd5-render-wabi-trung': [1, 3, 4, 2, 5],
  'sketchup-d5-render-du-an-thiet-ke-da-lat-house': [2, 1, 4, 5, 6, 7, 9, 10, 11, 12],
  'thanh-tuan-motel': [2, 1, 3, 4, 5, 6],
  'thuyet-minh-tot-nghiep': [1, 11, 9, 10, 8],
  'vinhomes-hybrid': [1, 2, 3, 8, 9, 10, 11, 12],
};

const orderPdfImages = (pdfImages, priorityPages = []) => {
  if (!pdfImages.length || !priorityPages.length) return pdfImages;

  const seen = new Set();
  const prioritized = priorityPages
    .map((page) => pdfImages[page - 1])
    .filter(Boolean)
    .filter((image) => {
      if (seen.has(image)) return false;
      seen.add(image);
      return true;
    });

  const remaining = pdfImages.filter((image) => !seen.has(image));
  return [...prioritized, ...remaining];
};

export const getPdfPreviewPath = (pdfLink) => {
  const slug = getPdfSlug(pdfLink);
  return slug ? getAssetPath(`/pdf-previews/${slug}.webp`) : '';
};

export const getProjectPdfImages = (project) => {
  const slug = getPdfSlug(project.pdfLink);
  const pageCount = PDF_PAGE_COUNTS[slug] || 0;
  return Array.from({ length: pageCount }, (_, index) => (
    getAssetPath(`/pdf-pages/${slug}/page-${String(index + 1).padStart(2, '0')}.webp`)
  ));
};

export const getProjectCover = (project) => {
  const slug = getPdfSlug(project.pdfLink);
  const pdfImages = getProjectPdfImages(project);
  const coverPage = Math.max(1, PDF_COVER_PAGES[slug] || 1);
  return pdfImages[coverPage - 1] || pdfImages[0] || project.image || getPdfPreviewPath(project.pdfLink);
};

export const getProjectGallery = (project) => {
  const slug = getPdfSlug(project.pdfLink);
  const pdfImages = getProjectPdfImages(project);
  if (pdfImages.length) return orderPdfImages(pdfImages, PDF_GALLERY_PRIORITY_PAGES[slug]);

  const galleryItems = project.gallery?.length ? project.gallery : [project.image].filter(Boolean);
  const pdfPreview = getPdfPreviewPath(project.pdfLink);
  return pdfPreview ? [pdfPreview, ...galleryItems].filter(Boolean) : galleryItems;
};

export const getProjectDetailPath = (project) => `/portfolio/${project.id}`;

const PROJECT_STORIES = {
  0: {
    overview: 'Một đồ án thiền định tại Đà Lạt, khai thác quan hệ giữa địa hình, khí hậu mát, mảng xanh và nhịp di chuyển chậm của người sử dụng.',
    role: 'Phát triển ý tưởng kiến trúc, dựng câu chuyện không gian, diễn họa ngoại thất và biên tập hồ sơ trình bày.',
    direction: 'Hình ảnh ưu tiên sự yên tĩnh: ánh sáng dịu, lớp cảnh quan sâu, vật liệu mộc và góc nhìn có khoảng thở.',
    deliverables: ['Concept kiến trúc', 'Diễn họa ngoại thất', 'Hồ sơ thuyết minh', 'Thư viện ảnh từ PDF'],
  },
  1: {
    overview: 'Bộ hình ảnh cho công trình lưu trú quy mô nhỏ, cần diễn đạt rõ công năng, mặt đứng và cảm giác gần gũi với người dùng.',
    role: 'Tổ chức góc nhìn, xử lý ánh sáng, dựng bộ ảnh trình bày và hậu kỳ để công trình dễ trao đổi với chủ đầu tư.',
    direction: 'Ngôn ngữ hình ảnh rõ ràng, ít phô diễn, tập trung vào nhận diện công trình, vật liệu và bối cảnh sử dụng thực tế.',
    deliverables: ['Diễn họa kiến trúc', 'D5 Render', 'Hậu kỳ hình ảnh', 'Bộ ảnh trình bày'],
  },
  2: {
    overview: 'Dự án nhà ở tại Đà Lạt, đặt trọng tâm vào cảm giác cư trú, chất liệu ấm và mối quan hệ giữa nhà với cảnh quan.',
    role: 'Dựng model SketchUp, hoàn thiện cảnh D5 Render, chọn camera và phát triển nhịp ảnh cho portfolio dự án.',
    direction: 'Tông sáng ấm, vật liệu đọc rõ, góc nhìn vừa đủ đời sống để hình ảnh không chỉ là render kỹ thuật.',
    deliverables: ['Model SketchUp', 'D5 Render', 'Định hướng thị giác', 'Thư viện ngoại thất'],
  },
  3: {
    overview: 'Bộ ảnh căn hộ hiện đại hướng đến cảm giác sống gọn gàng, sáng và có tính thương mại trong hồ sơ nội thất.',
    role: 'Dựng không gian, cân bằng ánh sáng mềm, vật liệu và phối cảnh để tạo bộ ảnh nhất quán cho từng khu vực.',
    direction: 'Tinh thần magazine interior: sạch, rõ vật liệu, đủ chiều sâu và có các góc cận để tăng cảm giác hoàn thiện.',
    deliverables: ['Diễn họa nội thất', 'Model SketchUp', 'D5 Render', 'Bộ ảnh portfolio'],
  },
  4: {
    overview: 'Thử nghiệm hybrid giữa nội thất hiện đại và tinh thần Wabi Sabi cho căn hộ, hướng đến sự cân bằng và tiết chế.',
    role: 'Phát triển mood, chọn hệ vật liệu, render và hậu kỳ để kiểm soát sắc độ, sáng tối và nhịp không gian.',
    direction: 'Bảng màu trầm ấm, bề mặt vật liệu tự nhiên, góc nhìn rộng kết hợp chi tiết để tạo nhịp sống trong ảnh.',
    deliverables: ['Diễn họa nội thất', 'Tinh chỉnh mood', 'D5 Render', 'Hậu kỳ hình ảnh'],
  },
  5: {
    overview: 'Một nghiên cứu ánh sáng nội thất, dùng D5 Render và AI CGI để thử độ sâu, tương phản và cảm xúc hình ảnh.',
    role: 'Kiểm tra mood ánh sáng, nâng cấp hậu kỳ, so sánh các hướng xử lý ảnh và chuẩn hóa đầu ra cho portfolio.',
    direction: 'Ánh sáng là chủ thể chính: vùng sáng ấm, bóng sâu vừa phải, chi tiết vật liệu đủ sắc nhưng không gắt.',
    deliverables: ['Nghiên cứu ánh sáng', 'AI CGI', 'Hậu kỳ hình ảnh', 'Bộ so sánh hình ảnh'],
  },
  6: {
    overview: 'Concept nội thất Wabi Sabi, tập trung vào khoảng trống, chất cảm mộc và trạng thái tĩnh của không gian.',
    role: 'Định hướng mood vật liệu, dựng cảnh, render và biên tập bộ ảnh để diễn đạt tinh thần tối giản mộc mạc.',
    direction: 'Hình ảnh ít chi tiết thừa, ưu tiên bề mặt thô, ánh sáng tản và bố cục có khoảng lặng.',
    deliverables: ['Diễn họa nội thất', 'Mood vật liệu', 'D5 Render', 'Bộ ảnh concept'],
  },
  7: {
    overview: 'Biến thể villa theo tinh thần Á Đông tối giản, nhấn vào cấu trúc không gian, bóng đổ và lớp vật liệu tự nhiên.',
    role: 'Dựng model, phát triển mood, chọn camera và kiểm soát ánh sáng để bộ ảnh có chiều sâu kiến trúc.',
    direction: 'Không gian trầm, nét ngang mạnh, ánh sáng đi qua lớp vật liệu để tạo cảm giác sang nhưng không phô trương.',
    deliverables: ['Model SketchUp', 'D5 Render', 'Định hướng mood', 'Bộ ảnh nội thất'],
  },
  17: {
    overview: 'Thử nghiệm AI CGI cho phong cách Indochine, dùng như một bước khám phá nhanh trước khi phát triển render chính.',
    role: 'Thiết kế prompt, lọc hình, kiểm tra ngôn ngữ vật liệu và chuyển hóa mood thành hướng trình bày có thể sử dụng.',
    direction: 'Tinh thần Đông Dương tiết chế: gỗ tối, mây tre, ánh sáng ấm và bố cục nội thất có chiều sâu.',
    deliverables: ['AI CGI', 'Thiết kế prompt', 'Thử nghiệm phong cách', 'Moodboard hình ảnh'],
  },
  18: {
    overview: 'Bộ concept Japandi tạo nhanh bằng AI, phục vụ giai đoạn tìm mood, so sánh vật liệu và hướng sáng.',
    role: 'Xây dựng prompt, tuyển chọn ảnh, tinh chỉnh ngôn ngữ không gian và biên tập thành bộ mood rõ ràng.',
    direction: 'Tối giản, ấm, ít nhiễu thị giác; tập trung vào gỗ sáng, ánh sáng mềm và tỷ lệ nội thất cân bằng.',
    deliverables: ['AI CGI', 'Thiết kế prompt', 'Moodboard', 'Thư viện concept'],
  },
  19: {
    overview: 'Quy trình hybrid AI-CGI cho nội thất Japandi hiện đại, giúp tăng tốc thử mood và nâng chất lượng hình ảnh.',
    role: 'Kết hợp render, tăng cường hình ảnh bằng AI và hậu kỳ để kiểm tra nhiều hướng vật liệu trước khi chốt visual cuối.',
    direction: 'Hiện đại hơn Japandi truyền thống: đường nét sạch, chất liệu sáng, ánh sáng rõ và cảm giác thương mại.',
    deliverables: ['AI CGI', 'D5 Render', 'Hậu kỳ hình ảnh', 'Quy trình thử hướng hình ảnh'],
  },
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
    services: ['Model SketchUp', 'D5 Render', 'Định hướng thị giác'],
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
    services: ['Diễn họa nội thất', 'Tinh chỉnh mood', 'D5 Render'],
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
    location: 'Nghiên cứu studio',
    type: 'Nghiên cứu ánh sáng nội thất',
    services: ['Nghiên cứu ánh sáng', 'AI CGI', 'Hậu kỳ hình ảnh'],
    tags: ['AI CGI', 'D5 Render', 'Ánh sáng'],
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
    location: 'Nghiên cứu studio',
    type: 'Concept nội thất',
    services: ['Diễn họa nội thất', 'Mood vật liệu', 'D5 Render'],
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
    location: 'Nghiên cứu studio',
    type: 'Nội thất villa',
    services: ['Model SketchUp', 'D5 Render', 'Định hướng mood'],
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
    services: ['AI CGI', 'Thiết kế prompt', 'Thử nghiệm phong cách'],
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
    services: ['AI CGI', 'Thiết kế prompt', 'Moodboard'],
    tags: ['AI CGI', 'Japandi', 'Concept'],
    image: IMAGES.storeJapandi,
    gallery: gallery(IMAGES.storeJapandi, IMAGES.projectWabi, IMAGES.projectVinhomes),
    pdfLink: getAssetPath('/documents/AI - Phong cách Japandi.pdf'),
    desc: 'Ứng dụng AI để dựng nhanh nhiều phương án không gian Japandi trước khi chốt hướng render.',
    category: ['AI Render', 'Diễn họa nội thất'],
  },
  {
    id: 19,
    title: 'Japandi Modern AI CGI',
    year: '2024',
    location: 'AI Lab',
    type: 'Diễn họa hybrid',
    services: ['AI CGI', 'D5 Render', 'Hậu kỳ hình ảnh'],
    tags: ['AI CGI', 'Japandi', 'Hậu kỳ'],
    image: IMAGES.projectAIJapandiModern,
    gallery: gallery(IMAGES.projectAIJapandiModern, IMAGES.compareRender, IMAGES.projectCaledon),
    pdfLink: getAssetPath('/documents/AI - Phong cách Japandi hiện đại.pdf'),
    desc: 'Quy trình hybrid AI-CGI giúp tăng tốc thử mood, nâng chất ảnh và kiểm tra nhiều hướng vật liệu.',
    category: ['AI Render', 'Diễn họa nội thất'],
  },
].map((project) => ({
  ...project,
  story: PROJECT_STORIES[project.id],
}));

export const SERVICE_GROUPS = [
  {
    title: 'Diễn họa',
    desc: 'Hình ảnh kiến trúc và nội thất có chiều sâu, đúng tinh thần thiết kế và đủ chất lượng để trình bày.',
    items: ['Diễn họa kiến trúc', 'Diễn họa nội thất', 'Diễn họa ngoại thất', 'D5 Render', 'Hậu kỳ hình ảnh'],
  },
  {
    title: 'Thiết kế',
    desc: 'Tư duy thiết kế giúp hình ảnh không chỉ đẹp mà còn diễn đạt được vật liệu, ánh sáng và câu chuyện.',
    items: ['Định hướng thị giác', 'Concept không gian', 'Moodboard vật liệu', 'Góc nhìn trình bày', 'Hồ sơ dự án'],
  },
  {
    title: 'Triển khai sản xuất',
    desc: 'Chuyển ảnh tham khảo hoặc concept thành bản vẽ kỹ thuật, cấu tạo, vật liệu và chi tiết gia cố để xưởng nội thất sản xuất rõ ràng hơn.',
    items: ['Shop drawing nội thất', 'Bản vẽ kích thước', 'Cấu tạo đồ gỗ công nghiệp', 'Đá & khung sắt gia cố', 'Phối hợp xưởng thi công'],
  },
  {
    title: 'Nội dung sản phẩm',
    desc: 'AI Product Content cho thương hiệu nội thất: tái dựng sản phẩm, tạo nhiều góc nhìn, Việt hóa ảnh nguồn và chuẩn bị nội dung SEO.',
    items: ['Tái dựng ảnh sản phẩm', 'Ảnh lifestyle minh họa', 'Việt hóa ảnh Taobao/Trung Quốc', 'Ảnh thông tin sản phẩm', 'Bài SEO Rank Math bằng GPT'],
  },
  {
    title: 'Công nghệ',
    desc: 'Ứng dụng AI và tự động hóa để tăng tốc quá trình thử nghiệm, trình bày và bàn giao.',
    items: ['AI CGI', 'GPT cho kiến trúc', 'GPT cho nội thất', 'Quy trình AI', 'Tự động hóa công việc thiết kế', 'Custom applications'],
  },
];

export const AI_LAB_ITEMS = [
  'AI CGI',
  'GPT cho kiến trúc',
  'GPT cho nội thất',
  'Quy trình AI',
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
    title: 'Quy trình thiết kế: từ brief đến bộ ảnh thuyết phục',
    category: 'Quy trình thiết kế',
    date: '2026',
    image: IMAGES.projectDaLatHouseInterior,
    excerpt: 'Quy trình giúp studio kiểm soát thời gian, chất lượng và câu chuyện hình ảnh.',
  },
  {
    title: 'Hồ sơ dự án: diễn họa nội thất cho portfolio studio',
    category: 'Hồ sơ dự án',
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
    tags: ['Tài nguyên D5'],
    desc: 'Bộ mood và asset tham khảo cho không gian Indochine.',
  },
  {
    img: IMAGES.storeJapandi,
    title: 'Bộ vật liệu Japandi',
    price: '$15',
    tags: ['Tài nguyên D5'],
    desc: 'Bộ vật liệu và ánh sáng theo tinh thần Japandi.',
  },
  {
    img: IMAGES.projectWabi,
    title: 'Gói tham khảo Wabi Sabi',
    price: '$20',
    tags: ['Tài nguyên D5', 'Render'],
    desc: 'Gói tham khảo ánh sáng và vật liệu Wabi Sabi.',
  },
  {
    img: IMAGES.compareRender,
    title: 'Gói render hiện đại',
    price: '$22',
    tags: ['Tài nguyên D5', 'Render'],
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
