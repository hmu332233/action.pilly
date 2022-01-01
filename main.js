const puppeteer = require('puppeteer');

const P_URL = process.env.P_URL;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(P_URL);
  
  console.log('페이지 접속 완료');

  try {
    await page.click('td.today');
    console.log('먹었어요 페이지 이동');
  } catch (err) {
    console.log('첫 페이지가 캘린더 페이지');
  }
  
  await page.click('#today button.btn[data-value=Y]');
  console.log('먹었어요 클릭');
  await browser.close();
})();