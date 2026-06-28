from pathlib import Path
import re
import shutil
import unicodedata

import pypdfium2 as pdfium


SOURCE_DIR = Path("public/documents")
OUTPUT_DIR = Path("public/pdf-pages")

PROJECT_PDFS = {
    "AI - Phong cách Indochine.pdf",
    "AI - Phong cách Japandi hiện đại.pdf",
    "AI - Phong cách Japandi.pdf",
    "CELADON_INTERIOR.pdf",
    "D5 RENDER - PHONG CÁCH HIỆN ĐẠI.pdf",
    "D5 RENDER - WABI TRUNG.pdf",
    "D5 RENDER - WABI.pdf",
    "SKETCHUP + D5 RENDER DỰ ÁN THIẾT KẾ ĐÀ LẠT HOUSE.pdf",
    "THANH_TUAN_MOTEL.pdf",
    "THUYET MINH TOT NGHIEP.pdf",
    "VINHOMES_HYBRID.pdf",
}

MAX_LONG_EDGE = 1800
RENDER_SCALE = 2.4
WEBP_QUALITY = 84


def slugify(name: str) -> str:
    text = name.replace("đ", "d").replace("Đ", "D")
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "document"


def render_pdf(pdf_path: Path) -> int:
    slug = slugify(pdf_path.stem)
    output_dir = OUTPUT_DIR / slug
    if output_dir.exists():
        shutil.rmtree(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    document = pdfium.PdfDocument(str(pdf_path))
    try:
        page_count = len(document)
        for page_index in range(page_count):
            page = document[page_index]
            bitmap = page.render(scale=RENDER_SCALE, rotation=0)
            image = bitmap.to_pil().convert("RGB")
            image.thumbnail((MAX_LONG_EDGE, MAX_LONG_EDGE), resample=1)
            output_path = output_dir / f"page-{page_index + 1:02d}.webp"
            image.save(output_path, "WEBP", quality=WEBP_QUALITY, method=6)
            page.close()
        return page_count
    finally:
        document.close()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for pdf_path in sorted(SOURCE_DIR.glob("*.pdf")):
        if pdf_path.name not in PROJECT_PDFS:
            continue
        page_count = render_pdf(pdf_path)
        print(f"{slugify(pdf_path.stem)}: {page_count} pages")


if __name__ == "__main__":
    main()
