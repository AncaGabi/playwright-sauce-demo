import {Page, Locator, expect} from "@playwright/test";

export class Footer {
    readonly page: Page;
    readonly twitterLink : Locator;
    readonly facebookLink: Locator;
    readonly linkedinLink : Locator;
    readonly footerText : Locator;


    constructor (page: Page){
        this.page = page;
        this.twitterLink = page.locator('.social_twitter');
        this.facebookLink = page.locator('.social_facebook');
        this.linkedinLink = page.locator('.social_lnikedin');
        this.footerText = page.locator('.footer_copy');
    }

    async verifyFooter(){
        await expect(this.facebookLink).toBeVisible;
        await expect(this.twitterLink).toBeVisible;
        await expect(this.linkedinLink).toBeVisible;
        await expect(this.footerText).toContainText('Sauce Labs. All Rights Reserved.');
    }

}