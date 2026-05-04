const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Browser, Builder, Locator, By, until } = require('selenium-webdriver');
const PortfolioPage = require('../../pages/PortfolioPage');


Given("I'm on the portfolio home page", async function () {
    // Instantiate the portfolio page object.
    this.portfolioPage = new PortfolioPage(this.driver);

    // Wait for navigation
    await this.portfolioPage.navigate();

});

When("the user clicks {string}", async function(button) {
   await this.portfolioPage.clickNavButton(button);
   await new Promise(resolve => setTimeout(resolve, 3000));
});

Then("the {string} heading is displayed at the top of the viewport", async function(section) {
    const sectionHeading = await this.portfolioPage.getSectionHeading(section);

    const headingText = await sectionHeading.getText();
    assert.strictEqual(headingText, section, `Expected heading "${section}", but got "${headingText}"`);

    const isInViewport = await this.portfolioPage.isElementInViewport(sectionHeading);
    assert(isInViewport, "Section heading is not visible in viewport");
});

