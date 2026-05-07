const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  { name: 'car-shop', url: 'https://car-shop-garage.vercel.app/' },
  { name: 'taste-nest', url: 'https://taste-nest-restaurent.vercel.app/' },
  { name: 'education-management', url: 'https://education-management-client.vercel.app/' },
  { name: 'jahir-tailor', url: 'https://jahir-tailor.vercel.app/' },
  { name: 'awesome-restaurant', url: 'https://awesome-retaurent.web.app/' }
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 200;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function captureScreenshots() {
  const p = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: p
  });
  
  for (const project of projects) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    
    try {
      console.log(`Navigating to ${project.url}...`);
      await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 50000 });
      
      console.log('Waiting 10 seconds for loading screen to disappear...');
      await new Promise(r => setTimeout(r, 10000));
      
      // Inject CSS to force all animated elements to be fully visible and opaque
      // This completely prevents scroll-animation elements from disappearing or staying blank!
      console.log('Injecting CSS to force visibility of animated elements...');
      await page.addStyleTag({
        content: `
          body *:not(.loader):not(.loading):not([class*="loader"]):not([id*="loader"]) {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        `
      });
      
      console.log(`Scrolling ${project.name} to trigger lazy-loaded images...`);
      await autoScroll(page);
      
      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      console.log('Waiting 4 seconds at the top...');
      await new Promise(r => setTimeout(r, 4000));
      
      // Hide fixed/floating elements (navbars, chat bubbles, scroll-to-top buttons)
      console.log('Hiding fixed elements to prevent duplication...');
      await page.evaluate(() => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.position === 'fixed') {
            el.style.display = 'none';
          }
        });
      });
      
      await new Promise(r => setTimeout(r, 1000));
      
      // Capture the actual body element
      const body = await page.$('body');
      const savePath = path.join(__dirname, 'public', 'projects', `${project.name}.png`);
      console.log(`Saving screenshot for ${project.name} to ${savePath}...`);
      await body.screenshot({ path: savePath });
      console.log(`Successfully captured ${project.name}`);
    } catch (err) {
      console.error(`Failed to capture ${project.name}:`, err);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  console.log('Done!');
}

captureScreenshots();
