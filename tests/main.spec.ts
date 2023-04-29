import { test, expect, request } from "@playwright/test";

const HOST = "http://localhost:3000";
// const DEPLOYMENT_HOST = "https://ui.crystallography.io";

test.describe("Main Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOST);
  });

  test("should have 'crystal structure search' title", async ({ page }) => {
    await expect(page.locator("[data-e2e='title']")).toHaveText(
      "Crystal Structure Search"
    );
  });
  test("should navigate to authors", async ({ page }) => {
    await page
      .locator(".app-navigation-header-menu-top [data-e2e='authors']")
      .click();
    await expect(page.locator("[data-e2e='title']")).toHaveText("Authors");
  });

  test("should navigate to catalog", async ({ page }) => {
    await page
      .locator(".app-navigation-header-menu-top [data-e2e='catalog']")
      .click();
    await expect(page.locator("[data-e2e='title']")).toHaveText("Catalog");
  });

  test("should navigate to about us page", async ({ page }) => {
    await page
      .locator(".app-navigation-header-menu-top [data-e2e='about']")
      .click();
    await expect(page.locator("[data-e2e='title']")).toHaveText("About Us");
  });

  test("should navigate to news page", async ({ page }) => {
    await page
      .locator(".app-navigation-header-menu-top [data-e2e='news']")
      .click();
    await expect(page.locator("[data-e2e='title']")).toHaveText("Updates");
  });

  test("should be isomorphic page", async ({ request }) => {
    const response = await request.fetch(`${HOST}`);
    const content = await response.text();
    expect(content).toContain(
      '<h2 class="text-primary" data-e2e="title">Crystal Structure Search</h2>'
    );
  });
});

test.describe("Authors Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${HOST}/authors`);
  });
  test("should have 'Authors' title", async ({ page }) => {
    await expect(page.locator("[data-e2e='title']")).toHaveText("Authors");
  });
  test("should be isomorphic page", async ({ request }) => {
    const response = await request.fetch(`${HOST}/authors`);
    const content = await response.text();
    expect(content).toContain(
      '<h2 class="text-primary" data-e2e="title">Authors</h2>'
    );
  });
});

test.describe("Catalog Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${HOST}/catalog`);
  });
  test("should have 'Catalog' title", async ({ page }) => {
    await expect(page.locator("[data-e2e='title']")).toHaveText("Catalog");
  });
  test("should be isomorphic page", async ({ request }) => {
    const response = await request.fetch(`${HOST}/catalog`);
    const content = await response.text();
    expect(content).toContain(
      '<h2 class="text-primary" data-e2e="title">Catalog</h2>'
    );
  });
});

test.describe("About Us", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${HOST}/about`);
  });
  test("should have 'About Us' title", async ({ page }) => {
    await expect(page.locator("[data-e2e='title']")).toHaveText("About Us");
  });
  test("should contain text", async ({ page }) => {
    await expect(page.locator("[data-e2e='content']")).toContainText(
      "The aim of this project is to make access to crystal structure data as easy as possible."
    );
  });
  test("should be isomorphic page", async ({ request }) => {
    const response = await request.fetch(`${HOST}/about`);
    const content = await response.text();
    expect(content).toContain(
      '<h2 class="text-primary" data-e2e="title">About Us</h2>'
    );
  });
});

test.describe("Contact Us", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${HOST}/contact`);
  });
  test("should have 'About Us' title", async ({ page }) => {
    await expect(page.locator("[data-e2e='title']")).toHaveText("Contact Us");
  });
  test("should contain text", async ({ page }) => {
    await expect(page.locator("[data-e2e='content']")).toContainText(
      "have any questions, suggestions"
    );
  });

  test("should contain contact name", async ({ page }) => {
    await expect(page.locator("[data-e2e='content']")).toContainText("Vreshch");
  });

  test("should be isomorphic page", async ({ request }) => {
    const response = await request.fetch(`${HOST}/contact`);
    const content = await response.text();
    expect(content).toContain(
      '<h2 class="text-primary" data-e2e="title">Contact Us</h2>'
    );
  });
});
