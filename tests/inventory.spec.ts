import { test, expect } from '@playwright/test';
import { Inventory } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test_data/users';
import { SortOption } from '../pages/components/enums';

let loginPage: LoginPage;
let inventory : Inventory;

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page);
    inventory = new Inventory(page);
    await loginPage.goto();
    await loginPage.login(users.standard);
})

test.describe ('Sort functionality', ()=> {
    test('Sort products by Price - low-high', async ({ page }) => { 
    await inventory.sortProducts(SortOption.PriceLowHigh);
    //TODO: to add assertion and other ways of sorting
    });

}) 
