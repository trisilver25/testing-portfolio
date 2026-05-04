const { Before, After } = require ('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

Before(async function () {
    this.driver = await new Builder().forBrowser('chrome').build();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

After(async function () {
    if (this.driver) {
        await this.driver.quit();
    }
})