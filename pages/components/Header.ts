import { Page, Locator, expect } from "@playwright/test";

export class Header {
    readonly page: Page;
    readonly appLogo: Locator;
    readonly cart: Locator;
    readonly burgerMenu : Locator;

    constructor (page: Page) {
        this.page = page;
        this.appLogo = page.locator('.app_logo');
        this.cart = page.locator('.shopping_cart_container');
        this.burgerMenu = page.locator('#react-burger-menu-btn');
    }

    async verifyHeaderVisible (){
        await expect(this.appLogo).toBeVisible;
        await expect(this.cart).toBeVisible;
        await expect(this.burgerMenu).toBeVisible;

    }
}