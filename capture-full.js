const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function captureSite({ theme = 'light', outputPath }) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  const url = 'https://education-bridge-client.vercel.app/';
  console.log(`[${theme.toUpperCase()}] Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  console.log(`[${theme.toUpperCase()}] Waiting 8 seconds for initial data and motion...`);
  await new Promise(r => setTimeout(r, 8000));

  // Set theme
  if (theme === 'light') {
    console.log(`[${theme.toUpperCase()}] Setting light theme...`);
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    });
  } else {
    console.log(`[${theme.toUpperCase()}] Setting dark theme...`);
    await page.evaluate(() => {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    });
  }

  await new Promise(r => setTimeout(r, 2000));

  // Switch all images to eager loading so they don't unload
  console.log(`[${theme.toUpperCase()}] Setting eager loading on all images...`);
  await page.evaluate(() => {
    document.querySelectorAll('img').forEach(img => {
      img.removeAttribute('loading');
      img.setAttribute('loading', 'eager');
    });
  });

  // Fix broken or missing image assets
  console.log(`[${theme.toUpperCase()}] Fixing broken/empty images...`);
  await page.evaluate(() => {
    // 1. Fix the 404 unsplash blog image
    const blogImgs = document.querySelectorAll('img');
    blogImgs.forEach(img => {
      if (img.alt === 'How to Choose the Perfect Tutor' || img.src.includes('photo-1524178232363-1fb28f74b671')) {
        img.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800';
      }
    });

    // 2. Fix empty review avatars
    const reviewAvatars = [
      { alt: 'Saiful Islam', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' },
      { alt: 'Nadia Islam', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' },
      { alt: 'Jubayer Ahmed', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
      { alt: 'Dr. Sharmin Sultana', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' }
    ];

    reviewAvatars.forEach(({ alt, url }) => {
      const img = document.querySelector(`img[alt="${alt}"]`);
      if (img && (!img.getAttribute('src') || img.src === window.location.href)) {
        img.src = url;
      }
    });
  });

  console.log(`[${theme.toUpperCase()}] Auto-scrolling through each section...`);
  await page.evaluate(async () => {
    const sections = document.querySelectorAll('section, footer');
    for (const sec of sections) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      await new Promise(r => setTimeout(r, 600));
    }
  });

  console.log(`[${theme.toUpperCase()}] Waiting 4 seconds at bottom for all network/images...`);
  await new Promise(r => setTimeout(r, 4000));

  // Force all motion elements to be fully visible
  console.log(`[${theme.toUpperCase()}] Ensuring visibility of animated elements...`);
  await page.evaluate(() => {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      if (el.style.opacity === '0') {
        el.style.opacity = '1';
      }
      if (el.style.transform && el.style.transform.includes('translateY')) {
        el.style.transform = 'none';
      }
      if (el.style.visibility === 'hidden') {
        el.style.visibility = 'visible';
      }
    });
  });

  await page.addStyleTag({
    content: `
      body *:not(.loader):not(.loading):not([class*="loader"]):not([id*="loader"]) {
        opacity: 1 !important;
        visibility: visible !important;
      }
    `
  });

  // Decode all images safely with timeout
  console.log(`[${theme.toUpperCase()}] Decoding images...`);
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(images.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return Promise.race([
        img.decode().catch(() => {}),
        new Promise(r => setTimeout(r, 2000))
      ]);
    }));
  });

  // Scroll back to top
  console.log(`[${theme.toUpperCase()}] Scrolling back to top...`);
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 3000));

  // Re-check visibility
  await page.evaluate(() => {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      if (el.style.opacity === '0') {
        el.style.opacity = '1';
      }
      if (el.style.visibility === 'hidden') {
        el.style.visibility = 'visible';
      }
    });
  });

  await new Promise(r => setTimeout(r, 2000));

  console.log(`[${theme.toUpperCase()}] Capturing full page screenshot to ${outputPath}...`);
  await page.screenshot({
    path: outputPath,
    fullPage: true
  });

  console.log(`[${theme.toUpperCase()}] Screenshot saved successfully!`);
  await browser.close();
}

async function main() {
  const projectsDir = path.join(__dirname, 'public', 'projects');

  // 1. Capture Light Mode screenshot
  const lightPath = path.join(projectsDir, 'education-bridge-light.png');
  await captureSite({ theme: 'light', outputPath: lightPath });

  // 2. Capture Dark Mode screenshot
  const darkPath = path.join(projectsDir, 'education-bridge-dark.png');
  await captureSite({ theme: 'dark', outputPath: darkPath });

  // 3. Set education-bridge.png to light mode as requested
  const defaultPath = path.join(projectsDir, 'education-bridge.png');
  fs.copyFileSync(lightPath, defaultPath);
  console.log(`Copied light screenshot to ${defaultPath}`);

  console.log('All screenshots captured successfully!');
}

main().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
