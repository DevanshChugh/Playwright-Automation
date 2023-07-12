const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {

    await page.goto('https://demoqa.com/');
     await page.getByRole('heading', { name: 'Book Store Application' }).click();
    // await page.waitForTimeout(2000);
    await page.getByRole('listitem').filter({ hasText: 'Login' }).click();
    //await page.waitForTimeout(2000);
    await page.getByPlaceholder('UserName').click();
    await page.getByPlaceholder('UserName').fill('dev200');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('De@040602');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Go To Book Store' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Speaking JavaScript' }).click();

    page.on("dialog", async (alert) => {
        const text = alert.message();
        
        console.log(text);
        
        await alert.accept();
    })
    await page.waitForTimeout(3000);
    
    await page.getByRole('button', { name: 'Add To Your Collection' }).click();
     await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Back To Book Store' }).click();
    await page.getByText('Profile').click();
    await page.getByRole('button', { name: 'Delete All Books' }).click();

    
    page.on("dialog", async (alert) => {
        const text = alert.message();
        
        console.log(text);
        
      
    })
    
    
    await page.getByRole('button', { name: 'OK' }).click();
  
    await page.getByRole('button', { name: 'Log out' }).click();
  
  }) 
