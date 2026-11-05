const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file:///home/user/8th-grade-texas/build/front-matter-preview.html', { waitUntil: 'networkidle' });
  await page.pdf({
    path: 'STAAR-Grade8-first10pages.pdf',
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true
  });
  await browser.close();
  console.log('PDF written');
})();
