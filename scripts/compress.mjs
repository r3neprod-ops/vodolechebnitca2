import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const dir = new URL('../public/image', import.meta.url).pathname;

const files = (await readdir(dir)).filter(f => extname(f) === '.png');

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, basename(file, '.png') + '.webp');
  const { size: before } = (await import('fs')).statSync(input);
  await sharp(input).webp({ quality: 80 }).toFile(output);
  const { size: after } = (await import('fs')).statSync(output);
  console.log(`${file} → ${basename(output)}  ${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB  (−${Math.round((1-after/before)*100)}%)`);
  await unlink(input);
}
console.log('\nDone.');
