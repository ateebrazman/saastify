import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');
const VIEWS_DIR = path.resolve(PROJECT_ROOT, 'resources/views');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.php': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // 1. Check clean routes to Blade views
  const viewRouteMap = {
    '/': 'index.blade.php',
    '/index': 'index.blade.php',
    '/index.html': 'index.blade.php',
    '/products': 'pages/products.blade.php',
    '/products.html': 'pages/products.blade.php',
    '/pages/products': 'pages/products.blade.php',
    '/pages/products.html': 'pages/products.blade.php',
    '/developers': 'pages/developers.blade.php',
    '/developers.html': 'pages/developers.blade.php',
    '/pages/developers': 'pages/developers.blade.php',
    '/pages/developers.html': 'pages/developers.blade.php',
    '/resources': 'pages/resources.blade.php',
    '/resources.html': 'pages/resources.blade.php',
    '/pages/resources': 'pages/resources.blade.php',
    '/pages/resources.html': 'pages/resources.blade.php',
    '/dashboard': 'admin/dashboard.blade.php',
    '/dashboard.html': 'admin/dashboard.blade.php',
    '/admin/dashboard': 'admin/dashboard.blade.php',
    '/admin/dashboard.html': 'admin/dashboard.blade.php'
  };

  if (viewRouteMap[urlPath]) {
    const viewPath = path.join(VIEWS_DIR, viewRouteMap[urlPath]);
    if (fs.existsSync(viewPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(viewPath).pipe(res);
      return;
    }
  }

  // 2. Check Static Assets in public/
  let filePath = path.join(PUBLIC_DIR, urlPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(VIEWS_DIR, urlPath);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support video HTTP 206 partial streaming
    if (ext === '.mp4') {
      const stat = fs.statSync(filePath);
      const fileSize = stat.size;
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
        return;
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`404 Not Found: ${urlPath}`);
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 Saastify Preview Server running at: http://localhost:${PORT}`);
  console.log(`- Homepage:   http://localhost:${PORT}/`);
  console.log(`- Products:   http://localhost:${PORT}/products`);
  console.log(`- Developers: http://localhost:${PORT}/developers`);
  console.log(`- Resources:  http://localhost:${PORT}/resources`);
  console.log(`- Dashboard:  http://localhost:${PORT}/dashboard\n`);
});
