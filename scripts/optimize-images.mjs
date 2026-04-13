import sharp from 'sharp';
import { readdir, unlink, writeFile, mkdir, copyFile } from 'fs/promises';
import { statSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const SRC_DIR  = 'public/projects';
const OUT_DIR  = 'public/projects_opt';
const MAX_WIDTH = 1400;
const QUALITY   = 82;

if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

const files = await readdir(SRC_DIR);
let saved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) continue;

  const srcPath = join(SRC_DIR, file);
  const outName = basename(file, ext) + '.webp';
  const outPath = join(OUT_DIR, outName);
  const beforeSize = statSync(srcPath).size;

  try {
    const buf = await sharp(srcPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer();

    await writeFile(outPath, buf);
    const afterSize = buf.length;
    const diff = ((beforeSize - afterSize) / 1024 / 1024).toFixed(2);
    saved += (beforeSize - afterSize);
    const pct = Math.round((1 - afterSize / beforeSize) * 100);
    console.log(`✅ ${outName.padEnd(55)} ${(beforeSize/1024/1024).toFixed(2)}MB → ${(afterSize/1024/1024).toFixed(2)}MB (-${pct}%)`);
  } catch (e) {
    console.error(`❌ ${file}: ${e.message}`);
  }
}

console.log(`\n✨ Done! Total saved: ${(saved/1024/1024).toFixed(2)} MB`);
console.log(`\nNext step: close VS Code / File Explorer, then run:\n  xcopy /Y public\\projects_opt\\* public\\projects\\\n  rmdir /S /Q public\\projects_opt`);
