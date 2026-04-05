import fs from 'fs';

// --- CONFIGURATION ---
// 1. Dán API Key của bạn vào đây
const API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; 
// 2. ID Thư mục gốc (từ link bạn gửi)
const ROOT_FOLDER_ID = '12sbyE_dFTSZBh5gxxxlshp-pQYAHVD5l';

/**
 * Hàm lấy danh sách file từ một Folder ID của Google Drive
 */
async function getFilesInFolder(folderId) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType)&key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('Lỗi từ Google:', data.error.message);
      return [];
    }
    return data.files || [];
  } catch (error) {
    console.error('Lỗi kết nối:', error);
    return [];
  }
}

/**
 * Hàm chính để lấy toàn bộ ảnh và sinh file data cho React
 */
async function syncDriveData() {
  console.log('🔄 Đang kết nối tới Google Drive...');
  
  if (API_KEY === 'YOUR_GOOGLE_API_KEY_HERE') {
    console.log('❌ BẠN CHƯA NHẬP API KEY! Vui lòng làm theo hướng dẫn để lấy API Key và thay vào file script.js.');
    return;
  }

  // 1. Phân tích thư mục gốc xem có những Folder con nào
  const rootItems = await getFilesInFolder(ROOT_FOLDER_ID);
  const folders = rootItems.filter(item => item.mimeType === 'application/vnd.google-apps.folder');
  
  console.log(`📁 Tìm thấy ${folders.length} thư mục con.`);

  let allImages = {};

  // 2. Quét qua các thư mục con để lấy ID của các file ảnh
  for (const folder of folders) {
    console.log(`\nĐang quét thư mục: ${folder.name}...`);
    const files = await getFilesInFolder(folder.id);
    
    // Lọc ra các file ảnh (png, jpg, jpeg...)
    const images = files.filter(f => f.mimeType.startsWith('image/'));
    console.log(`   -> Tìm thấy ${images.length} ảnh.`);

    if (images.length > 0) {
      // Chuyển đổi ID thành link Tải trực tiếp (Direct Link) cho Website
      allImages[folder.name] = images.map(img => ({
        name: img.name,
        // Dùng công thức UC Export của Google để làm link ảnh tĩnh
        url: `https://drive.google.com/uc?export=view&id=${img.id}`
      }));
    }
  }

  // 3. Ghi dữ liệu ra file JSON để code React có thể dùng (import thẳng)
  const outputPath = './src/driveImages.json';
  fs.writeFileSync(outputPath, JSON.stringify(allImages, null, 2));
  console.log(`\n✅ HOÀN TẤT! Đã lưu toàn bộ cấu trúc ảnh vào file: ${outputPath}`);
  console.log(`Bạn có thể mở code React (App.jsx) và "import data from './driveImages.json'" để dùng.`);
}

syncDriveData();
