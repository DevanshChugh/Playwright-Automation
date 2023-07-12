const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://www.google.com');
    

    await page.goto('https://forms.gle/6w3jPvRLHpEi6EKz5');
    
    await page.waitForLoadState('networkidle');
 
    await page.click('[type="text"]');
    await page.fill('[type="text"]','Devansh Chugh');

    await page.waitForTimeout(3000);

    await page.click('[aria-label="Your answer"]');
    await page.fill('[aria-label="Your answer"]','I am Btech 3rd year student currently');

    await page.waitForTimeout(3000);
  
    await page.getByRole('checkbox', { name: 'Mumbai' }).click();
    await page.getByRole('checkbox', { name: 'Bengaluru' }).click();

    await page.waitForTimeout(3000);

    await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
   
  await page.waitForTimeout(3000);
  await page.getByRole('radio',{name: 'Indian'}).click();
 

  await page.waitForTimeout(3000);

    await page.getByText('Choose').click();
    await page.waitForTimeout(2000);
    await page.getByText('Male').first().click();
  //await page.getByText('Choose').selectOption('Male');

  //await page.selectOption('Male');


  //await page.getByRole('option', { name: 'Male', exact: true });  
  //await page.click('[aria-selected="true"] ');

   //

  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000);

});
