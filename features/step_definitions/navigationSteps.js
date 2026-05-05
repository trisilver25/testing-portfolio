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
   // call the clickNavButton function using the string of the button.
   await this.portfolioPage.clickNavButton(button);
   // wait 3 seconds to scroll.
   await new Promise(resolve => setTimeout(resolve, 3000));
});

Then("the {string} heading is displayed at the top of the viewport", async function(section) {
    // Initialize a variable to hold the section heading provided from the feature file.
    const sectionHeading = await this.portfolioPage.getSectionHeading(section);

    // Get the text of the heading on the page.
    const headingText = await sectionHeading.getText();

    // Confirm the heading text and section text match.
    assert.strictEqual(headingText, section, `Expected heading "${section}", but got "${headingText}"`);

    // Confirm the headingText is within the viewport of the page.
    const isInViewport = await this.portfolioPage.isElementInViewport(sectionHeading);
    assert(isInViewport, "Section heading is not visible in viewport");
});

