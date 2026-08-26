import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist');
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');

console.log('=== Building Saastify Production Package in dist/ ===\n');

// Clean dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(item => {
      copyRecursive(path.join(src, item), path.join(dest, item));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

async function fetchRouteHtml(route) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:8000${route}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', () => resolve(null));
  });
}

const routesToPackage = [
  { route: '/', destPath: 'index.html' },
  { route: '/products', destPath: 'pages/products.html', alias: 'products.html' },
  { route: '/developers', destPath: 'pages/developers.html', alias: 'developers.html' },
  { route: '/resources', destPath: 'pages/resources.html', alias: 'resources.html' },
  { route: '/dashboard', destPath: 'admin/dashboard.html', alias: 'dashboard.html' },
];

async function packageViews() {
  for (const item of routesToPackage) {
    let rendered = await fetchRouteHtml(item.route);
    const fullDest = path.join(DIST_DIR, item.destPath);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });

    if (rendered) {
      fs.writeFileSync(fullDest, rendered, 'utf8');
      console.log(`✓ Rendered & Packaged: ${item.route} -> dist/${item.destPath} (${(rendered.length / 1024).toFixed(1)} KB)`);
    }

    if (item.alias && rendered) {
      const aliasPath = path.join(DIST_DIR, item.alias);
      fs.writeFileSync(aliasPath, rendered, 'utf8');
      console.log(`✓ Created root alias: dist/${item.alias}`);
    }
  }

  // 2. Copy Public Files & Assets
  ['favicon.ico', 'robots.txt'].forEach(f => {
    const p = path.join(PUBLIC_DIR, f);
    if (fs.existsSync(p)) {
      fs.copyFileSync(p, path.join(DIST_DIR, f));
      console.log(`✓ Copied ${f}`);
    }
  });

  const assetsSrc = path.join(PUBLIC_DIR, 'assets');
  const assetsDest = path.join(DIST_DIR, 'assets');
  if (fs.existsSync(assetsSrc)) {
    copyRecursive(assetsSrc, assetsDest);
    console.log('✓ Copied assets/ directory recursively');
  }

  // Calculate stats
  function getDirStats(dir) {
    let fileCount = 0;
    let totalBytes = 0;
    function walk(d) {
      fs.readdirSync(d).forEach(item => {
        const fullPath = path.join(d, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walk(fullPath);
        } else {
          fileCount++;
          totalBytes += stat.size;
        }
      });
    }
    walk(dir);
    return { fileCount, totalBytes };
  }

  const stats = getDirStats(DIST_DIR);
  const sizeMb = (stats.totalBytes / (1024 * 1024)).toFixed(2);

  console.log('\n------------------------------------------------------');
  console.log('BUILD SUCCESSFUL!');
  console.log(`Total files: ${stats.fileCount}`);
  console.log(`Total build size: ${sizeMb} MB`);
  console.log(`Output directory: ${DIST_DIR}`);
  console.log('------------------------------------------------------\n');
}

packageViews();
