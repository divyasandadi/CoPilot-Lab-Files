

const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Browser opening test', function() {
    this.timeout(30000);
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('should open the browser', async function() {
        await driver.get('http://www.google.com');
        const title = await driver.getTitle();
        expect(title).to.equal('Google');
    });

    after(async function() {
        await driver.quit();
    });
});