const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Widgets' }).click();
    await page.getByText('Accordian').click();
    await page.click('[id="section2Heading"]');
    await page.click('[id="section3Heading"]');
    // await page.waitForTimeout(500);
    await page.getByText('Auto Complete').click();
    await page.click('[id="autoCompleteMultipleInput"]');
    await page.fill('[id="autoCompleteMultipleInput"]','p');
    await page.press('[id="autoCompleteMultipleInput"]','Enter');
    await page.fill('[id="autoCompleteMultipleInput"]','r');
    await page.press('[id="autoCompleteMultipleInput"]','Enter');
    await page.fill('[id="autoCompleteMultipleInput"]','g');
    await page.press('[id="autoCompleteMultipleInput"]','Enter');
    await page.click('[id="autoCompleteSingleInput"]');
    await page.fill('[id="autoCompleteSingleInput"]','y');
    await page.press('[id="autoCompleteSingleInput"]','Enter');
    // await page.waitForTimeout(500);

    await page.getByText('Date Picker').click();
    
    await page.click('[id="datePickerMonthYearInput"]');    
    await page.selectOption('[class="react-datepicker__year-select"]','2002');
    await page.selectOption('[class="react-datepicker__month-select"]','May');
    await page.click('[aria-label="Choose Wednesday, May 15th, 2002"]');

    await page.click('[id="dateAndTimePickerInput"]');
    await page.getByText('11:00').click();

    // await page.waitForTimeout(500);

    await page.getByText('Progress Bar').click();
    await page.getByRole('button',{name:'Start'}).click();
    // await page.waitForTimeout(5000);
    await page.getByRole('button',{name:'Stop'}).click();

    await page.getByText('Tabs').click();
    await page.click('[id="demo-tab-origin"]');
    await page.click('[id="demo-tab-use"]');

    await page.getByText('Tool Tips').click();
    await page.hover('[id="toolTipButton"]'); 
    await page.waitForTimeout(500);
    await page.hover('[id="toolTipTextField"]'); 
    await page.waitForTimeout(500);
    await page.getByText('Contrary').hover();
    await page.waitForTimeout(500);
    await page.getByText('1.10.32').hover();
    await page.waitForTimeout(500);

    await page.getByText('Menu',{exact:true}).click();
    await page.getByText('Main Item 1').click();
    await page.waitForTimeout(500);
    await page.getByText('Main Item 2').click();
    await page.getByText('SUB SUB LIST').hover();
    await page.getByText('Main Item 3').click();
    
    await page.waitForTimeout(500);

    await page.getByText('Select Menu',{exact:true}).click();
    await page.click('[/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div[2]/div/input]')
    await page.getByText('Group 1, option 2', { exact: true }).click();
})