import test, { chromium,firefox } from "@playwright/test"

test ('Launch Edge Browser', async()=>{

    const browser1 = await chromium.launch({channel: 'msedge', headless:false})
    const newBrowser = await browser1.newContext()
    const page =  await newBrowser.newPage()

    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(5000)
    const getPageTitle = await page.title()
    console.log("The Edge page title is: "+getPageTitle)
    const getPageURL = await page.url()
    console.log("The page URL is: "+getPageURL)
})

test ('Launch Firefox Browser', async()=>{

    const browser2 = await firefox.launch({channel: 'firefox', headless:false})
    const newBrowser = await browser2.newContext()
    const page =  await newBrowser.newPage()

    await page.goto("https://www.flipkart.com")
    await page.waitForTimeout(5000)
    const getPageTitle = await page.title()
    console.log("The Firefox page title is: "+getPageTitle)
    const getPageURL = await page.url()
    console.log("The page URL is: "+getPageURL)
})