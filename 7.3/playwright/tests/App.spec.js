const { test, expect } = require("@playwright/test");
const { login, password } = require("./testsData/user.js");

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru");
});

test("SuccessAutorizationTest", async ({ page }) => {  
  await page.click("//a[contains(text(), 'Войти')]");
  await page.locator("//input[@placeholder='Email']").fill(login);
  await page.locator("//input[@placeholder='Пароль']").fill(password);
  await page.screenshot({ path: "tests/data/screenshots/SuccessAutorizationTest/screenshot.png" });  
  
  await page.locator("//button[@data-testid='login-submit-btn']").click();
  await page.screenshot({ path: "tests/data/screenshots/SuccessAutorizationTest/screenshot1.png" });
  
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.waitForSelector("//h2[contains(text(),'Мои курсы и профессии')]");
  await page.screenshot({ path: "tests/data/screenshots/SuccessAutorizationTest/screenshot2.png" });
});

test("Unsuccess autorization", async ({ page }) => {
  await page.click("//a[contains(text(), 'Войти')]");
  await page.locator("//input[@placeholder='Email']").fill("login@mail.ru");   
  await page.locator("//input[@placeholder='Пароль']").fill("password");
  await page.screenshot({ path: "tests/data/screenshots/Unsuccess autorization/screenshot.png" });  
  
  await page.locator("//button[@data-testid='login-submit-btn']").click();
  await page.screenshot({ path: "tests/data/screenshots/Unsuccess autorization/screenshot1.png" });

  await expect(page.locator("[data-testid=login-error-hint]"))
  .toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "tests/data/screenshots/Unsuccess autorization/screenshot2.png" });
})
