import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    //this.usernameInput = page.getByTestId('user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }
async goto() {
    await this.page.goto('');
  }
async login(user: {username: string, password: string}) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }
}
