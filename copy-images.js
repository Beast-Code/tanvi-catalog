const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Lavish\\.gemini\\antigravity\\brain\\31fd7bf8-7021-4858-ab1f-caa8f6271d82';
const destDir = path.join(__dirname, 'public', 'products');

const imageMap = {
  'kurti_floral_cotton_1777272366271.png': 'tk-101.png',
  'suit_festive_designer_1777272382441.png': 'tk-102.png',
  'kurti_daily_printed_1777272397213.png': 'tk-103.png',
  'kurti_chanderi_silk_1777272413152.png': 'tk-104.png',
  'kurti_rayon_embroidered_1777272438368.png': 'tk-105.png',
  'suit_anarkali_georgette_1777272456169.png': 'tk-106.png',
  'kurti_block_print_1777272471543.png': 'tk-107.png',
  'suit_palazzo_chiffon_1777272488515.png': 'tk-108.png',
  'kurti_straight_viscose_1777272511846.png': 'tk-109.png',
  'suit_sharara_net_1777272526574.png': 'tk-110.png',
  'kurti_aline_cotton_1777272541407.png': 'tk-111.png',
  'suit_pant_style_1777272559480.png': 'tk-112.png',
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (const [src, dest] of Object.entries(imageMap)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.log(`MISSING: ${src}`);
  }
}

console.log('Done!');
