const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
    await page.getByText('Browser Windows').click();
    const newTab = page.waitForEvent('popup');
    await page.click('[id="tabButton"]');
    await newTab;
    (await newTab).close();
    const newWindow = page.waitForEvent('popup');
    await page.click('[id="windowButton"]')
    await newWindow;
    
    const newWindow2 = page.waitForEvent('popup');
    await page.click('[id="messageWindowButton"]');
    await newWindow2;
    (await newWindow).close();
    (await newWindow2).close();
   
  
    

    await page.getByText('Alerts',{exact:true}).click();
    page.on("dialog", async (alert) => {
        const text = alert.message();
        
        console.log(text);
        await page.waitForTimeout(600);
        await alert.accept();
    })
   
    await page.click('[id="alertButton"]')

    page.on("dialog", async (alert) => {
        const text = alert.message();
        
        console.log(text);
        //await page.waitForTimeout(600);
       // await alert.accept();
    })
       
    await page.click('[id="timerAlertButton"]')
    await page.waitForTimeout(6000);
    
    await page.click('[id="alertButton"]')

    page.on("dialog", async (alert) => {
        const text = alert.message();
        
        console.log(text);
        //await page.waitForTimeout(600);
       // await alert.accept();
    })
    
    await page.locator('#confirmButton').click()
   await page.click('[id="confirmButton"]')
   await page.getByText('Frames',{exact:true}).click();

   await page.getByText('Nested Frames',{exact:true}).click();

   await page.getByText('Modal Dialogs').click();
   await page.getByRole('button', { name: 'Small modal' }).click();
   await page.click('[id="closeSmallModal"]');
   await page.getByRole('button', { name: 'Large modal' }).click();
   await page.click('[id="closeLargeModal"]');
 

    
    
    



});