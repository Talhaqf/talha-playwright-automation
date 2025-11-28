class LoginPage {
  constructor(page) {
    this.page = page;
    this.userField = page.locator('#username');
    this.passField = page.locator('#password');
    this.loginBtn = page.locator('button[type=submit]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(user, pass) {
    await this.userField.fill(user);
    await this.passField.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
