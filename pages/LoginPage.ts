import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorBlockedUser: Locator;
  readonly errorInvalidUserPass :Locator;
  readonly errorPassRequired: Locator;
  readonly errorUsernameRequired: Locator;

constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorBlockedUser= page.getByText('Epic sadface: Sorry, this user has been locked out.');
    this.errorInvalidUserPass= page.getByText('Epic sadface: Username and password do not match any user in this service');
    this.errorPassRequired = page.getByText('Epic sadface: Password is required');
    this.errorUsernameRequired = page.getByText('Epic sadface: Username is required');
  }
  
async goto() {
    await this.page.goto('');
  }


async login(user: {username: string, password: string}) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

async verifyBlockedUserCannotLogin(){
  await expect(this.errorBlockedUser).toBeVisible();  
}

async verifyInvalidUserPass(){
  await expect(this.errorInvalidUserPass).toBeVisible();  
}

async verifyRequiredPass(){
  await expect(this.errorPassRequired).toBeVisible();  
}

async verifyRequiredUsername(){
  await expect(this.errorUsernameRequired).toBeVisible();  
}
}
