const { test, expect } =require('@playwright/test');

test('assignment', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Interactions' }).click();
    await page.getByText('Sortable').click();
    // await page.locator('div[class="vertical-list-container mt-4"] div:nth-child(1)').dragTo(page.locator("//div[@id='simpleDropContainer']//div[@id='droppable']"));

    await page.getByText('Selectable').click();
    await page.getByText('Dapibus ac facilisis in').click();
    await page.getByText('Morbi leo risus').click();
    await page.click('[id="demo-tab-grid"]');
    await page.getByText('Four').click();
    await page.getByText('Five').click();
    await page.getByText('Droppable').click();
    await page.locator("[id='draggable']").dragTo(page.locator("//div[@id='simpleDropContainer']//div[@id='droppable']"));
   
    await page.click('[id="droppableExample-tab-accept"]');
    await page.locator('id=notAcceptable').dragTo(page.locator("//div[@id='acceptDropContainer']//div[@id='droppable']"));
    
    await page.getByText('Prevent Propogation').click();
    await page.locator('id=dragBox').dragTo(page.locator('[id="notGreedyInnerDropBox"]'));
    await page.locator('id=dragBox').dragTo(page.locator('[id="greedyDropBox"]'));

    await page.getByText('Revert Draggable').click();
    await page.locator('id=revertable').dragTo(page.locator("//div[@id='revertableDropContainer']//div[@id='droppable']"));
    await page.locator('id=notRevertable').dragTo(page.locator("//div[@id='revertableDropContainer']//div[@id='droppable']"));
    //await page.getByText('Draggable').click();
    await page.getByRole('listitem').filter({ hasText: 'Dragabble' }).click();

    await page.locator('[id=dragBox]').hover();
    await page.mouse.down();
    await page.mouse.move(500,500);
    await page.waitForTimeout(2000);
    await page.mouse.up();

    //await page.waitForTimeout(2000);
    await page.getByText('Axis Restricted').click();
    await page.locator('id=restrictedX').dragTo(page.locator("[id='restrictedY']"));

    await page.getByText('Cursor Style').click();
    await page.locator('[id="cursorCenter"]').hover();
    await page.mouse.down();
    await page.mouse.move(500,500);
    
    await page.mouse.up();

    await page.locator('[id="cursorTopLeft"]').hover();
    await page.mouse.down();
    await page.mouse.move(500,1000);
   
    await page.mouse.up();

    
    await page.locator('[id="cursorBottom"]').hover();
    await page.mouse.down();
    await page.mouse.move(500,1500);
   
    await page.mouse.up();


    

    
   
})