const puppeteer = require('puppeteer');

const P_URL = process.env.P_URL;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(P_URL);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();