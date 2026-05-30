/**
 * Google Apps Script backend cho trang upload ảnh CTV.
 *
 * Cách dùng:
 * 1. Tạo Google Sheet mới.
 * 2. Extensions > Apps Script.
 * 3. Dán toàn bộ code này vào Code.gs.
 * 4. Sửa ROOT_FOLDER_ID thành ID thư mục Drive của bạn.
 * 5. Deploy > New deployment > Web app.
 * 6. Execute as: Me.
 * 7. Who has access: Anyone.
 * 8. Copy Web app URL rồi dán vào SCRIPT_URL trong index.html trên GitHub.
 */

const ROOT_FOLDER_ID = "PASTE_YOUR_DRIVE_FOLDER_ID_HERE";
const SHEET_NAME = "LichSuGuiAnh";

function doGet() {
  return jsonOutput({ ok: true, message: "CTV upload API is running." });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Không có dữ liệu gửi lên.");
    }

    const data = JSON.parse(e.postData.contents);
    const ctvName = cleanText(data.ctvName);
    const phone = cleanText(data.phone);
    const category = cleanText(data.category);
    const setCode = cleanCode(data.setCode);
    const productName = cleanText(data.productName);
    const note = cleanText(data.note || "");
    const files = data.files || [];

    if (!ctvName || !phone || !category || !setCode || !productName) {
      throw new Error("Thiếu thông tin bắt buộc.");
    }

    if (!files.length) {
      throw new Error("Chưa có ảnh.");
    }

    if (files.length > 25) {
      throw new Error("Mỗi lần gửi tối đa 25 ảnh.");
    }

    const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
    const categoryName = categoryLabel(category);
    const categoryFolder = getOrCreateFolder(root, categoryName);
    const productFolderName = setCode + "-" + slugify(productName);
    const productFolder = getOrCreateFolder(categoryFolder, productFolderName);

    let count = 0;

    files.forEach((file, index) => {
      if (!file.data) return;
      const mimeType = file.type || "image/jpeg";

      if (!isAllowedImage(mimeType)) {
        throw new Error("Chỉ nhận JPG, PNG, WEBP.");
      }

      const ext = extensionFromMime(mimeType);
      const order = String(index + 1).padStart(2, "0");
      const newName = setCode + "-" + order + "." + ext;
      const bytes = Utilities.base64Decode(file.data);
      const blob = Utilities.newBlob(bytes, mimeType, newName);
      productFolder.createFile(blob);
      count++;
    });

    logSubmission({
      time: new Date(),
      ctvName,
      phone,
      category: categoryName,
      setCode,
      productName,
      count,
      folderUrl: productFolder.getUrl(),
      note
    });

    return jsonOutput({
      ok: true,
      message: "Gửi ảnh thành công.",
      count,
      folderUrl: productFolder.getUrl()
    });

  } catch (err) {
    return jsonOutput({ ok: false, message: err.message || String(err) });
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateFolder(parent, name) {
  const folders = parent.getFoldersByName(name);
  if (folders.hasNext()) return folders.next();
  return parent.createFolder(name);
}

function categoryLabel(value) {
  const map = {
    ban: "Bàn",
    ghe: "Ghế",
    tu: "Tủ",
    sofa: "Sofa",
    giuong: "Giường",
    bep: "Bếp",
    khac: "Khác"
  };
  return map[String(value || "").toLowerCase()] || cleanText(value || "Khác");
}

function isAllowedImage(mime) {
  return ["image/jpeg", "image/png", "image/webp"].includes(mime);
}

function extensionFromMime(mime) {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return "jpg";
}

function cleanText(str) {
  return String(str || "")
    .trim()
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ");
}

function cleanCode(str) {
  return String(str || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9-_]/g, "-")
    .replace(/-+/g, "-");
}

function slugify(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function logSubmission(row) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Thời gian",
      "Tên CTV",
      "SĐT/Zalo",
      "Hạng mục",
      "Mã bộ",
      "Tên kiểu sản phẩm",
      "Số ảnh",
      "Link thư mục Drive",
      "Ghi chú"
    ]);
  }

  sheet.appendRow([
    row.time,
    row.ctvName,
    row.phone,
    row.category,
    row.setCode,
    row.productName,
    row.count,
    row.folderUrl,
    row.note
  ]);
}
