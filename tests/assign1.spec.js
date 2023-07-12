const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
  await page.goto('https://www.google.com');
 
 await page.click('[aria-label="Search"]');
  await page.fill('[aria-label="Search"]',"Playwright Automation");
  await page.click('[aria-label="Google Search"]');

 
  await page.waitForLoadState('networkidle');


  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });


  await page.waitForLoadState('networkidle');
const a =3;

  await page.click(`[aria-label="Page ${a}"]`);
 


  await page.waitForLoadState('networkidle');


  await page.click('//*[@id="rso"]/div[1]/div/div/div[1]/div/a/h3');

  //await page.waitForLoadState('networkidle');
  

  
});
