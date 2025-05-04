import { expect, test } from "@playwright/test";

test("notification test", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Show notification" }).click();
  await expect(page.getByText("Default notification")).toBeVisible();

  await page.screenshot({
    path: "src/__tests__/screenshots/notification.png",
  });
});
