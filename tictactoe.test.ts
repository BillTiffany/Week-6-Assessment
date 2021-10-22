import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can select a square', async ()=>{
    let squarethree = await (await driver).findElement(By.id('cell-3'));
    await squarethree.click()
});

test('I can select 3 squares', async ()=>{
    let squareone = await (await driver).findElement(By.id('cell-0'));
    let squaretwo = await (await driver).findElement(By.id('cell-3'));
    let squarethree = await (await driver).findElement(By.id('cell-6'));
    await squareone.click();
    await squaretwo.click();
    await squarethree.click();
})

test('check for win/lost', async ()=>{
    let squareone = await (await driver).findElement(By.id('cell-0'));
    let squaretwo = await (await driver).findElement(By.id('cell-3'));
    let squarethree = await (await driver).findElement(By.id('cell-6'));
    let winlose = await (await driver).findElement(By.css('h1')).getText();
    await squareone.click();
    await squaretwo.click();
    await squarethree.click();
    expect(winlose).toEqual('X lost')

})

test('check for O when X is clicked', async () => {
    let osquare = await (await driver).findElement(By.id('cell-1')).getText();
    expect(osquare).toEqual('O')
})

