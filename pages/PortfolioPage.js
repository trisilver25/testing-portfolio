const { By, until } = require('selenium-webdriver');

class PortfolioPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://tristin-smith.com";

        this.NavButtonByName = (buttonName) => By.linkText(buttonName);
    }

    async navigate() {
        await this.driver.get(this.url);
    }

    async clickNavButton(buttonName) {
        const locator = this.NavButtonByName(buttonName);
        await this.driver.findElement(locator).click();
    }
}