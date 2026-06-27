from pathlib import Path
import re
import unicodedata

import pypdfium2 as pdfium


SOURCE_DIR = Path("public/documents")
OUTPUT_DIR = Path("public/pdf-previews")


def slugify(name: str) -> str:
    text = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "document"


def render_first_page(pdf_path: Path) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / f"{slugify(pdf_path.stem)}.webp"

    document = pdfium.PdfDocument(str(pdf_path))
    try:
        page = document[0]
        bitmap = page.render(scale=2.0, rotation=0)
        image = bitmap.to_pil().convert("RGB")
        image.thumbnail((1800, 1800))
        image.save(output_path, "WEBP", quality=84, method=6)
    finally:
        document.close()

    return output_path


def main() -> None:
    for index, pdf_path in enumerate(sorted(SOURCE_DIR.glob("*.pdf")), start=1):
        output_path = render_first_page(pdf_path)
        print(f"{index:02d} -> {output_path.as_posix()}")


if __name__ == "__main__":
    main()
