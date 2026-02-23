import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test_data/users';
import { Header } from '../pages/components/Header';
import { Footer } from '../pages/components/Footer';


let loginPage: LoginPage;

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
})

test.describe ('Login Functionality', () => {
    test('Standard user can login', async ({ page }) => {
    const header = new Header(page);
    const footer = new Footer(page);

   await test.step('Login to page', async () => {
        await loginPage.login(users.standard);
        await expect(page).toHaveURL(/inventory.html/);
    });

    await test.step('Verify Header', async () => {
        await header.verifyHeaderVisible();
    });

    await test.step('Verify Footer', async () => {
        await footer.verifyFooter();
    });
    })
    test('Blocked user cannot login', async ({ page }) => {
    await loginPage.login(users.locked);
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });
})
