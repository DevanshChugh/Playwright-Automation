const {test,expect} = require ('@playwright/test');

test('Login Test Demo',async({page})=>{

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span");
    await page.click("text=Login");

    await page.fill("#input-email","devanshchugh0@gmail.com");//first me locator second m value
    await page.fill("#input-password","De@040602");
    await page.click("#content > div > div:nth-child(2) > div > div > form > input");

    await page.waitForTimeout(5000)
})
