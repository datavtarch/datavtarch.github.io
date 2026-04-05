import os
import glob
import fitz  # PyMuPDF
import gdown

FOLDER_ID = '12sbyE_dFTSZBh5gxxxlshp-pQYAHVD5l'
DOWNLOAD_DIR = r'f:\PROFILE VTARCH\drive_downloads'
OUTPUT_DIR = r'f:\PROFILE VTARCH\public\projects'

os.makedirs(DOWNLOAD_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Đang quét và tải dữ liệu từ Google Drive (có thể mất vài phút)...")
url = f'https://drive.google.com/drive/folders/{FOLDER_ID}'
gdown.download_folder(url, output=DOWNLOAD_DIR, quiet=False, use_cookies=False)

print("\nBắt đầu chuyển đổi PDF sang JPG...")
pdf_files = glob.glob(os.path.join(DOWNLOAD_DIR, '**', '*.pdf'), recursive=True)

print(f"Tìm thấy {len(pdf_files)} file PDF để xử lý.")

generated_images = []

for pdf_path in pdf_files:
    try:
        filename = os.path.basename(pdf_path)
        name_only = os.path.splitext(filename)[0]
        
        # Mở file PDF
        doc = fitz.open(pdf_path)
        
        if len(doc) > 0:
            page = doc.load_page(0)  # Lấy trang đầu tiên
            pix = page.get_pixmap(matrix=fitz.Matrix(2.0, 2.0)) # Phóng lớn 2x để ảnh nét hơn
            
            # Làm sạch tên file một chút
            safe_name = "".join(c for c in name_only if c.isalnum() or c in (' ', '-', '_')).strip().replace(' ', '_')
            out_img_path = os.path.join(OUTPUT_DIR, f"{safe_name}.jpg")
            
            pix.save(out_img_path)
            # Lấy list đường dẫn tương đối để nhúng vào web
            generated_images.append(f"/projects/{safe_name}.jpg")
            
            print(f"[OK] Đã chuyển: {filename} -> {safe_name}.jpg")
        doc.close()
    except Exception as e:
        print(f"[LỖI] Không thể xử lý file {pdf_path}: {e}")

print("\n====== HOÀN TẤT ======")
print("Bạn có thể copy các đường dẫn sau vào code App.jsx:")
for img_path in generated_images:
    print(img_path)
