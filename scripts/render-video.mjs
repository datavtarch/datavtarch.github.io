import { spawn } from 'node:child_process';
import { mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const args = parseArgs(process.argv.slice(2));

const width = Number(args.width ?? 1080);
const height = Number(args.height ?? 1920);
const fps = Number(args.fps ?? 30);
const duration = Number(args.duration ?? 10);
const totalFrames = Math.max(1, Math.round(fps * duration));
const port = Number(args.port ?? 5173);
const url = args.url ?? `http://127.0.0.1:${port}/`;
const output = path.resolve(root, args.out ?? 'exports/vtarch-home.mp4');
const workDir = path.join(os.tmpdir(), 'vtarch-video', String(Date.now()));
const framesDir = path.join(workDir, 'frames');
const ffmpeg = findBinary(args.ffmpeg, [
  'C:\\tmp\\ffmpeg\\bin\\ffmpeg.exe',
  'ffmpeg',
]);

let viteServer;
let browser;

try {
  await mkdir(path.dirname(output), { recursive: true });
  await mkdir(framesDir, { recursive: true });

  if (!args.url) {
    viteServer = await createServer({
      root,
      server: {
        host: '127.0.0.1',
        port,
        strictPort: false,
      },
      logLevel: 'error',
    });
    await viteServer.listen();
  }

  browser = await chromium.launch({
    headless: true,
    channel: args.channel ?? 'chrome',
  });
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
    isMobile: width < 700,
  });

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(Number(args.settle ?? 1800));

  for (let frame = 0; frame < totalFrames; frame += 1) {
    const progress = totalFrames === 1 ? 0 : frame / (totalFrames - 1);
    const eased = easeInOutCubic(progress);
    await page.evaluate((values) => {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo(0, max * values.eased);
      document.documentElement.style.setProperty('--video-progress', String(values.progress));
    }, { progress, eased });
    await page.waitForTimeout(1000 / fps);
    const name = `frame_${String(frame + 1).padStart(5, '0')}.png`;
    await page.screenshot({ path: path.join(framesDir, name), fullPage: false });
    process.stdout.write(`\rCaptured ${frame + 1}/${totalFrames}`);
  }
  process.stdout.write('\n');

  await run(ffmpeg, [
    '-y',
    '-framerate', String(fps),
    '-i', path.join(framesDir, 'frame_%05d.png'),
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    output,
  ]);

  console.log(`Video written to ${output}`);
} finally {
  if (browser) await browser.close();
  if (viteServer) await viteServer.close();
  if (!args.keepFrames) await rm(workDir, { recursive: true, force: true });
}

function parseArgs(raw) {
  const parsed = {};
  for (let index = 0; index < raw.length; index += 1) {
    const part = raw[index];
    if (!part.startsWith('--')) continue;
    const [key, inlineValue] = part.slice(2).split('=');
    parsed[key] = inlineValue ?? raw[index + 1] ?? true;
    if (inlineValue === undefined && raw[index + 1] && !raw[index + 1].startsWith('--')) {
      index += 1;
    }
  }
  return parsed;
}

function findBinary(preferred, candidates) {
  const match = [preferred, ...candidates].filter(Boolean).find((candidate) => {
    if (candidate.includes('\\') || candidate.includes('/')) return existsSync(candidate);
    return true;
  });
  if (!match) throw new Error(`Missing binary. Checked: ${candidates.filter(Boolean).join(', ')}`);
  return match;
}

function run(command, commandArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, commandArgs, { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

function easeInOutCubic(value) {
  return value < 0.5 ? 4 * value ** 3 : 1 - ((-2 * value + 2) ** 3) / 2;
}
