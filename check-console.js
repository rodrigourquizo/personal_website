import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`PAGE ERROR: "${msg.text()}"`);
    } else {
      console.log(`PAGE LOG: "${msg.text()}"`);
    }
  });
  
  page.on('pageerror', error => {
    console.log(`PAGE UNCAUGHT ERROR: "${error.message}"`);
  });

  await page.goto('http://localhost:8080/personal_website/');
  await page.waitForTimeout(2000); // Wait for react to attempt render
  await browser.close();
})();
