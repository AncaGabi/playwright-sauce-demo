import { Page, expect, Locator } from "@playwright/test";   
import { SortOption } from "./components/enums";

export class Inventory {
    readonly page: Page;
    //readonly title: Locator;
    readonly productSort: Locator;

    constructor (page : Page){
        this.page = page;
        //this.title = this.page.locator('.title');
        this.productSort = this.page.locator('.product_sort_container');
    }

    async sortProducts(sortOption: SortOption){
        await this.productSort.selectOption(sortOption);
    }

    async verifySort(sortOption: string){

    }
}