const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://demoqa.com/');
   // await page.waitForTimeout(3000);
    await page.goto('https://demoqa.com/elements');
    //await page.waitForTimeout(3000);
    await page.getByText('Text Box').click();
    await page.click('[id=userName]');
    await page.fill('[id=userName]','Devansh Chugh');
   // await page.waitForTimeout(3000);
    await page.click('[id=userEmail]');
    await page.fill('[id=userEmail]','devanshchugh0@gmail.com');
   // await page.waitForTimeout(3000);
    await page.click('[id=currentAddress]');
    await page.fill('[id=currentAddress]','9B Virat Nagar Model Town Panipat');
   // await page.waitForTimeout(3000);
    await page.click('[id=permanentAddress]');
    await page.fill('[id=permanentAddress]','9B Virat Nagar Model Town Panipat');
    //await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Submit' }).click();
    // await page.waitForTimeout(4000);

    await page.getByText('Check Box').click();
    await page.getByRole('button', { name: 'Expand all' }).click();
    
    await page.getByText('Commands').click();
    await page.getByText('Angular').click();
    await page.getByText('Private').click();
    await page.getByText('Excel File.doc').click();
   // await page.waitForTimeout(4000);

    await page.getByText('Radio Button').click();
    await page.click('[for="yesRadio"]')
    //await page.waitForTimeout(4000);

    await page.getByText('Web Tables').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.click('[id=firstName]');
    await page.fill('[id=firstName]','Devansh');
    await page.click('[id=lastName]');
    await page.fill('[id=lastName]','Chugh');
    await page.click('[id=userEmail]');
    await page.fill('[id=userEmail]','devanshchugh0@gmail.com');
    await page.click('[id=age]');
    await page.fill('[id=age]','21');
    await page.click('[id=salary]');
    await page.fill('[id=salary]','1000000');
    await page.click('[id=department]');
    await page.fill('[id=department]','HR');
    //await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Submit' }).click();
    //await page.waitForTimeout(4000);

    await page.getByText('Buttons').click();
    await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
    await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right'});
    //await page.getByRole('button', { name: 'Click Me'}).click();



    await page.goto('https://demoqa.com/elements');

    await page.getByText('Broken Links - Images').click();
    await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
    await page.waitForTimeout(2000);
    await page.click('//*[@id="app"]/div/div/div[2]/div/div[1]/div/div[1]');
    await page.getByText('Broken Links - Images').click();
    await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();
    //await page.waitForTimeout(2000);

    await page.goto('https://demoqa.com/elements');
    await page.getByText('Upload and Download').click();
    await page.click('[id="uploadFile"]');
    
    await page.setInputFiles('[id="uploadFile"]', 'devansh chugh.pdf');
       
    
    
    const download = page.waitForEvent('download');
    await page.click('[id=downloadButton]');
    const down = await download;


    await page.getByText('Dynamic Properties').click();
    await page.waitForTimeout(6000);
  
    
});