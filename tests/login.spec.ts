import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test_data/users';
import { Header } from '../pages/components/Header';
import { Footer } from '../pages/components/Footer';
import { log } from 'node:console';


let loginPage: LoginPage;

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
})

test.describe ('Login Functionality @login @regression', () => {
    test('Standard user can login @smoke @sanity', async ({ page }) => {
        console.log('Is test object defined?', !!test);
    console.log('Test name:', test.info().title); // This will fail if the context is missing
    
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
    await loginPage.verifyBlockedUserCannotLogin();
    });

    test('Login with invalid password', async ({ page }) => {
    await loginPage.login(users.wrongPass);
    await loginPage.verifyInvalidUserPass();
    });

    test('Login with inexistent user', async ({ page }) => {
    await loginPage.login(users.inexistentUser);
    await loginPage.verifyInvalidUserPass();
    });

    test('Login with empty user', async ({ page }) => {
    await loginPage.login(users.emptyUser);
    await loginPage.verifyRequiredUsername();
    });

    test('Login with empty pass', async ({ page }) => {
    await loginPage.login(users.emptyPass);
    await loginPage.verifyRequiredPass();
    });

})
