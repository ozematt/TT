import { test, expect } from "@playwright/test";

test.describe("Add new task flow", () => {
  test("Add new task test", async ({ page }) => {
    await page.goto("http://localhost:81/");

    await page.getByRole("button", { name: "ADD TASK" }).click();

    await page
      .getByRole("textbox", { name: "Code" })
      .fill("next-task-test-e2e");
    await page.getByRole("textbox", { name: "Title" }).fill("task-title-e2e");
    await page
      .getByRole("textbox", { name: "Description" })
      .fill("task-description-e2e");

    await page.getByRole("button", { name: "ADD" }).click();

    await expect(
      page.getByText("next-task-test-e2e ::  task-title-e2e ( 0h 0min )")
    ).toBeVisible();
  });
});
