import test from '@playwright/test'

test(`Login`,async({page})=>{
 await page.goto("http://leaftaps.com/opentaps/control/main")
 console.log(await page.title())
 console.log("Git actions)"
})
