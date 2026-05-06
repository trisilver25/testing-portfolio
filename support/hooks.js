const { Before, After } = require ('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

Before(async function () {
    this.driver = await new Builder().forBrowser('chrome').build();
    await new Promise(resolve => setTimeout(resolve, 1000));
});

After(async function () {
    // Take a screenshot after the test is complete
    const screenshot = await this.driver.takeScreenshot();

    // Convert to base64
    const imageBuffer = Buffer.from(screenshot, 'base64');

    // attach image to JSON Report
    this.attach(imageBuffer, 'image/png');

    if (this.driver) {
        await this.driver.quit();
    }
})