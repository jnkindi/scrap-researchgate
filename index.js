const {Builder, By, Key, until} = require('selenium-webdriver');
const dotenv = require('dotenv');

dotenv.config();



(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.researchgate.net/login');
    await driver.findElement(By.name('login')).sendKeys(process.env.EMAIL);
    await driver.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.RETURN);
    await driver.wait(until.titleIs('Home Feed | ResearchGate'), 1000);

    await driver.findElement(By.className('content-creation-button')).click();
    // await driver.wait(1000);
    // await driver.findElement(By.className('global-sidebar__level-1-item')).click();
    
  } finally {
    await driver.quit();
  }
})();
