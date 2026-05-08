const { By, until } = require('selenium-webdriver');

class PortfolioPage {
    // Construct the PortfolioPage Object
    constructor(driver) {
        this.driver = driver;
        this.url = "https://tristin-smith.com";

        // Attributes
        this.NavButtonByName = (buttonName) => By.linkText(buttonName);
        this.SectionHeadingByName = (section) => By.xpath(`//*[self::h1 or self::h2][contains(normalize-space(), "${section}")]`);
    }

    // Methods
    async navigate() {
        await this.driver.get(this.url);
    }

    async clickNavButton(buttonName) {
        const locator = this.NavButtonByName(buttonName);
        await this.driver.findElement(locator).click();
    }

    async getSectionHeading(section) {
        const locator = this.SectionHeadingByName(section);
        return await this.driver.wait(until.elementLocated(locator), 5000);
    }

    async isElementInViewport(element) {
        return await this.driver.executeScript(`
        const element = arguments[0];
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth;
    `, element);
    }
}

module.exports = PortfolioPage;