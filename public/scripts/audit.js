import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');
const VIEWS_DIR = path.resolve(PROJECT_ROOT, 'resources/views');

const layoutFiles = [
  'layouts/app.blade.php',
  'layouts/dashboard.blade.php'
];

const componentFiles = [
  'components/head.blade.php',
  'components/header.blade.php',
  'components/footer.blade.php',
  'components/megamenu.blade.php',
  'components/dashboard-sidebar.blade.php',
  'components/dashboard-header.blade.php',
  'components/scripts.blade.php'
];

const pageFiles = [
  'index.blade.php',
  'pages/products.blade.php',
  'pages/developers.blade.php',
  'pages/resources.blade.php',
  'admin/dashboard.blade.php',
];

const allViewFiles = [...layoutFiles, ...componentFiles, ...pageFiles];

const validAppRoutes = [
  '/',
  '/products',
  '/developers',
  '/resources',
  '/dashboard',
  '/admin/dashboard',
  '/index.html',
  '/products.html',
  '/developers.html',
  '/resources.html',
  '/dashboard.html',
  '/admin/dashboard.html',
];

let totalErrors = 0;

console.log('=== Running Saastify Laravel Blade & Asset Audit ===\n');

// 1. Audit View Files Existence
console.log('1. Checking Blade Layouts, Components & Views:');
allViewFiles.forEach(vf => {
  const fullPath = path.join(VIEWS_DIR, vf);
  if (fs.existsSync(fullPath)) {
    const sizeKb = (fs.statSync(fullPath).size / 1024).toFixed(1);
    console.log(`  ✓ Found: resources/views/${vf} (${sizeKb} KB)`);
  } else {
    console.error(`  [ERROR] Missing view: resources/views/${vf}`);
    totalErrors++;
  }
});

// 2. Audit All Local Assets Referenced in Views
console.log('\n2. Auditing Asset & Route References Across Views:');
allViewFiles.forEach(vf => {
  const fullPath = path.join(VIEWS_DIR, vf);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const dir = path.dirname(fullPath);

  // Match all src and href
  const srcs = [...content.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
  const hrefs = [...content.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
  const posters = [...content.matchAll(/poster=["']([^"']+)["']/gi)].map(m => m[1]);
  const urls = [...content.matchAll(/url\(["']?([^"')]+)["']?\)/gi)].map(m => m[1]);

  const allRefs = [...new Set([...srcs, ...hrefs, ...posters, ...urls])];
  const localRefs = allRefs.filter(r => 
    !r.startsWith('http') && 
    !r.startsWith('//') && 
    !r.startsWith('data:') && 
    !r.startsWith('#') && 
    !r.startsWith('mailto:') && 
    !r.startsWith('tel:') && 
    !r.startsWith('javascript:') &&
    !r.includes('{{') &&
    !r.includes('}}')
  );

  let fileErrors = 0;
  localRefs.forEach(ref => {
    const cleanRef = ref.split('?')[0].split('#')[0];
    
    // Check if it matches a valid Laravel route
    if (validAppRoutes.includes(cleanRef) || cleanRef === '') {
      return;
    }

    const resolvedFromCur = path.resolve(dir, cleanRef);
    const resolvedFromPub = path.resolve(PUBLIC_DIR, cleanRef.replace(/^\//, '').replace(/^\.\//, ''));
    const resolvedFromViews = path.resolve(VIEWS_DIR, cleanRef.replace(/^\//, '').replace(/^\.\//, ''));
    const resolvedFromRoot = path.resolve(PROJECT_ROOT, cleanRef.replace(/^\//, '').replace(/^\.\//, ''));

    const exists = fs.existsSync(resolvedFromCur) || fs.existsSync(resolvedFromPub) || fs.existsSync(resolvedFromViews) || fs.existsSync(resolvedFromRoot);

    if (!exists) {
      console.error(`  [ERROR in ${vf}] Missing reference: "${ref}"`);
      fileErrors++;
      totalErrors++;
    }
  });

  if (fileErrors === 0) {
    console.log(`  ✓ resources/views/${vf}: All ${localRefs.length} local references verified OK.`);
  }
});

// 3. Audit Video Files
console.log('\n3. Checking Video Files in public/assets/videos/:');
const videoDir = path.join(PUBLIC_DIR, 'assets/videos');
if (fs.existsSync(videoDir)) {
  const videos = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));
  console.log(`  Found ${videos.length} MP4 videos:`);
  videos.forEach(v => {
    const vPath = path.join(videoDir, v);
    const sizeMb = (fs.statSync(vPath).size / (1024 * 1024)).toFixed(2);
    console.log(`  ✓ Video OK: ${v} (${sizeMb} MB)`);
  });
} else {
  console.error('  [ERROR] Missing public/assets/videos directory!');
  totalErrors++;
}

// 4. Audit Assets Directories
console.log('\n4. Checking Public Asset Directories:');
const expectedDirs = ['css', 'fonts', 'images', 'js', 'videos', 'data'];
expectedDirs.forEach(d => {
  const dPath = path.join(PUBLIC_DIR, 'assets', d);
  if (fs.existsSync(dPath)) {
    const count = fs.readdirSync(dPath).length;
    console.log(`  ✓ assets/${d}: OK (${count} files)`);
  } else {
    console.error(`  [ERROR] Missing assets/${d}`);
    totalErrors++;
  }
});

console.log('\n------------------------------------------------------');
if (totalErrors === 0) {
  console.log('🎉 AUDIT PASSED: 0 errors found. Full Laravel Blade project is verified!');
  process.exit(0);
} else {
  console.error(`❌ AUDIT FAILED: Found ${totalErrors} issue(s).`);
  process.exit(1);
}
