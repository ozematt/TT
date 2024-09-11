import { test, expect } from "@playwright/test";

const URL = "http://localhost:81/";

test.describe("Add new task flow", () => {
  test("new task flow test", async ({ page }) => {
    await page.goto(URL);

    await page.getByRole("button", { name: "ADD TASK" }).click();
    await page
      .getByRole("textbox", { name: "Code" })
      .fill("next-task-test-e2e");
    await page.getByRole("textbox", { name: "Title" }).fill("task-title-e2e");
    await page
      .getByRole("textbox", { name: "Description" })
      .fill("task-description-e2e");
    await page.getByRole("button", { name: "ADD" }).click();

    const task = page.getByText(
      "next-task-test-e2e ::  task-title-e2e ( 0h 0min )"
    );
    await expect(task).toBeVisible();
    await page.getByTitle("Start").nth(1).click();
    await page.getByTitle("Close task").nth(1).click();
    await page.getByTitle("Delete task").nth(2).click();
  });
});
