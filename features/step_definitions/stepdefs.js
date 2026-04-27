const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Browser, Builder, Locator, By, until } = require('selenium-webdriver');


// Start Session
let driver;

Before(async function() {
    driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({implicit: 10000});
});

Given("I'm on the portfolio home page", async function () {
    await driver.get("https://www.tristin-smith.com");
});

When("the user clicks {string}", async function(button) {
   const navButton = await driver.findElement(By.linkText(button));
   await navButton.click();
   await driver.sleep(1000);
});

Then("the {string} heading is displayed at the top of the viewport", async function(section) {
    const sectionHeading = await driver.wait(
        until.elementLocated(By.xpath(`//*[self::h1 or self::h2][contains(normalize-space(), "${section}")]`)),
        5000
    );

    // Scroll into View
    await driver.executeScript("arguments[0].scrollIntoView(true);", sectionHeading);

    // wait for scroll to compplete
    await driver.sleep(500);

    const headingText = await sectionHeading.getText();

    // Verify each header has the expected text.
    assert.strictEqual(headingText, section, `Expected heading "${section}", but got "${headingText}"`);

    // Confirm the Heading is within the ViewPort of the page
    const isInViewport = await driver.executeScript(`
        const element = arguments[0];
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth;
    `, sectionHeading);
    assert(isInViewport, "Section heading is not visible in viewport");
});

After(async function() {
    await driver.quit();
})

