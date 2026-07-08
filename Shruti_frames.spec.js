import {expect, test} from "@playwright/test";

test("frames", async({page})=>{

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    let iFrame = await page.frameLocator('//frame[@name="packageListFrame"]')

    await iFrame.locator('//a[text()="java.applet"]').click()
    await page.pause()
})
