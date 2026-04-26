import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = path.join(process.cwd(), 'public', 'img', 'consoles');
const outputDir = path.join(sourceDir, 'thumbs');
const widths = [320, 640];
const aspectRatio = 16 / 9;

await mkdir(outputDir, { recursive: true });

const heroFiles = (await readdir(sourceDir))
  .filter((file) => file.endsWith('-hero.jpg'))
  .sort();

for (const file of heroFiles) {
  const sourcePath = path.join(sourceDir, file);
  const sourceStat = await stat(sourcePath);
  const baseName = file.replace(/\.jpg$/, '');

  for (const width of widths) {
    const height = Math.round(width / aspectRatio);
    const outputPath = path.join(outputDir, `${baseName}-${width}.webp`);

    let shouldWrite = true;
    try {
      const outputStat = await stat(outputPath);
      shouldWrite = outputStat.mtimeMs < sourceStat.mtimeMs;
    } catch {
      shouldWrite = true;
    }

    if (!shouldWrite) {
      continue;
    }

    await sharp(sourcePath)
      .resize({
        width,
        height,
        fit: 'cover',
        position: 'center',
      })
      .webp({ quality: width >= 640 ? 74 : 70 })
      .toFile(outputPath);
  }
}

console.log(`Generated ${heroFiles.length} console hero thumbnail sets in public/img/consoles/thumbs.`);
