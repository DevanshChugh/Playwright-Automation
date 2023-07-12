const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Forms' }).click();
    await page.getByText('Practice Form').click();
    await page.click('[id="firstName"]');
    await page.fill('[id="firstName"]','Devansh');
    await page.click('[id="lastName"]');
    await page.fill('[id="lastName"]','Chugh');
    await page.click('[id="userEmail"]');
    await page.fill('[id="userEmail"]','devanshchugh04@gmail.com');
    await page.click('[id="firstName"]');
    
    await page.getByText('Male', { exact: true }).click();
    await page.click('[id="userNumber"]');
    await page.fill('[id="userNumber"]','8222087574');

    await page.click('[id="dateOfBirthInput"]');
   // await page.click('[class="react-datepicker__year-select"]')
    // await page.
    await page.selectOption('[class="react-datepicker__year-select"]','2002');
    await page.selectOption('[class="react-datepicker__month-select"]','June');
    await page.click('[aria-label="Choose Tuesday, June 4th, 2002"]');

    await page.click('[id="subjectsInput"]');
    await page.fill('[id="subjectsInput"]','Physics');
    await page.press('[id="subjectsInput"]','Enter');
    await page.fill('[id="subjectsInput"]','Chemistry');
    await page.press('[id="subjectsInput"]','Enter');
    await page.fill('[id="subjectsInput"]','Maths');
    await page.press('[id="subjectsInput"]','Enter');
    
    


    await page.getByText('Sports').click();
    await page.getByText('Music').click();

    await page.click('[id="uploadPicture"]');
    await page.setInputFiles('[id="uploadPicture"]','kln.png');

    
    await page.click('[id=currentAddress]');
    await page.fill('[id=currentAddress]','9B Virat Nagar Phase 2 , Model Town , Panipat');
    
    // await page.getByText('Select State').click();
    // await page.getByText('Haryana').click();


    await page.waitForTimeout(2000);
    

    // await page.waitForTimeout(2000);
 
});