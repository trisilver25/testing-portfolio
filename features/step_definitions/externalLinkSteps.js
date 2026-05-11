const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Browser, Builder, Locator, By, until } = require('selenium-webdriver');
const PortfolioPage = require('../../pages/PortfolioPage');

Given("I'm on the portfolio home page", async function() {
    // Instantiate the portfolio page object.
    this.portfolioPage = new PortfolioPage(this.driver);

    // Wait for navigation
    await this.portfolioPage.navigate();
});

When("the user clicks {string}", async function() {
    
});

Then("the user is redirected with the {string} set as the URL", async function() {

});