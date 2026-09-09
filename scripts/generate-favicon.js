import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// 32x32 pixel representation of the meme cat favicon uploaded by the user
// ' ' or '.' = Black background (#000000)
// '#' = Solid White fur (#FFFFFF)
// '%' = Light Gray highlight / anti-alias (#E0E0E0)
// '=' = Medium Gray shading (#909090)
// '-' = Dark Gray shading (#404040)
// 'B' = Pure Black features (eyes, nose, open mouth, cheek spot) (#000000)

const grid = [
  /* 00 */ "................................",
  /* 01 */ "..##........................##..",
  /* 02 */ ".####......................####.",
  /* 03 */ ".#####....................#####.",
  /* 04 */ ".##==##..................##==##.",
  /* 05 */ "###===##................##===###",
  /* 06 */ "####==###....########...###==####",
  /* 07 */ ".########..############..#######.",
  /* 08 */ ".##############################.",
  /* 09 */ "################################",
  /* 10 */ "################################",
  /* 11 */ "################################",
  /* 12 */ "########..############..########",
  /* 13 */ "#######BBBB##########BBBB#######",
  /* 14 */ "######BB#BBB########BB#BBB######",
  /* 15 */ "######BBBBBB########BBBBBB######",
  /* 16 */ "#######BBBB##########BBBB#######",
  /* 17 */ "################################",
  /* 18 */ "######B#########BB##############",
  /* 19 */ "#####BBB#######BBBB#############",
  /* 20 */ "###############BBBB#############",
  /* 21 */ "############BBBBBBBB############",
  /* 22 */ "##########BBBBBBBBBBBB##########",
  /* 23 */ "#########BBBBBBBBBBBBBB#########",
  /* 24 */ "#########BBBBBBBBBBBBBB#########",
  /* 25 */ "##########BBBBBBBBBBBB##########",
  /* 26 */ "###########BBBBBBBBBB###########",
  /* 27 */ "############BBBBBBBB############",
  /* 28 */ "#############BBBBBB#############",
  /* 29 */ "####.#########BBBB#########.####",
  /* 30 */ "###...#########BB#########...###",
  /* 31 */ "##.....#################.....##."
];

// Color mapping to RGBA [R, G, B, A]
const colorMap = {
  '.': [0, 0, 0, 255],        // Black background
  ' ': [0, 0, 0, 255],
  '#': [255, 255, 255, 255],  // White fur
  '%': [225, 225, 225, 255],  // Soft light gray
  '=': [160, 160, 160, 255],  // Inner ear shadow
  '-': [65, 65, 65, 255],     // Dark gray shading
  'B': [0, 0, 0, 255]         // Black eyes, nose, mouth
};

const width = 32;
const height = 32;

// Build RGBA pixel buffer
const rawData = Buffer.alloc(height * (1 + width * 4));
let offset = 0;

for (let y = 0; y < height; y++) {
  rawData[offset++] = 0; // Filter type: None
  const row = grid[y] || ".".repeat(32);
  for (let x = 0; x < width; x++) {
    const char = row[x] || '.';
    const rgba = colorMap[char] || [0, 0, 0, 255];
    rawData[offset++] = rgba[0];
    rawData[offset++] = rgba[1];
    rawData[offset++] = rgba[2];
    rawData[offset++] = rgba[3];
  }
}

// CRC32 implementation for standard PNG chunks
function createCrcTable() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}

const crcTable = createCrcTable();
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)) >>> 0;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(8 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

// 1. Signature
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

// 2. IHDR Chunk
const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(width, 0);
ihdrData.writeUInt32BE(height, 4);
ihdrData[8] = 8; // Bit depth
ihdrData[9] = 6; // Color type: RGBA
ihdrData[10] = 0; // Compression
ihdrData[11] = 0; // Filter
ihdrData[12] = 0; // Interlace
const ihdrChunk = makeChunk('IHDR', ihdrData);

// 3. IDAT Chunk
const compressed = zlib.deflateSync(rawData);
const idatChunk = makeChunk('IDAT', compressed);

// 4. IEND Chunk
const iendChunk = makeChunk('IEND', Buffer.alloc(0));

const pngBuffer = Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);

// Generate SVG representation for crystal clear rendering on all DPIs
let svgRects = '';
for (let y = 0; y < height; y++) {
  const row = grid[y] || ".".repeat(32);
  for (let x = 0; x < width; x++) {
    const char = row[x] || '.';
    const rgba = colorMap[char] || [0, 0, 0, 255];
    const fill = `rgb(${rgba[0]},${rgba[1]},${rgba[2]})`;
    svgRects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}"/>`;
  }
}
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">${svgRects}</svg>`;

// Write to public directory
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), pngBuffer);
fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffer);
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

// Simple ICO file header containing the 32x32 PNG as an icon directory entry
// ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG data
const icoHeader = Buffer.alloc(6 + 16);
icoHeader.writeUInt16LE(0, 0); // Reserved
icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
icoHeader.writeUInt16LE(1, 4); // 1 Image

icoHeader.writeUInt8(32, 6);   // Width: 32
icoHeader.writeUInt8(32, 7);   // Height: 32
icoHeader.writeUInt8(0, 8);    // Colors: 0 = >=256
icoHeader.writeUInt8(0, 9);    // Reserved
icoHeader.writeUInt16LE(1, 10); // Color planes
icoHeader.writeUInt16LE(32, 12); // Bits per pixel
icoHeader.writeUInt32LE(pngBuffer.length, 14); // Image size in bytes
icoHeader.writeUInt32LE(22, 18); // Offset to image data (6 + 16 = 22)

const icoBuffer = Buffer.concat([icoHeader, pngBuffer]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

console.log('Successfully generated:');
console.log('- public/favicon-32x32.png (' + pngBuffer.length + ' bytes)');
console.log('- public/favicon.png');
console.log('- public/favicon.ico (' + icoBuffer.length + ' bytes)');
console.log('- public/favicon.svg');
