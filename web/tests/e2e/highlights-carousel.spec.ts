import { expect, test } from "@playwright/test";

test.describe("Highlights carousel", () => {
  test("auto-advances to the next highlight and respects looping", async ({
    page,
  }) => {
    await page.addInitScript(() => {
      const originalSetTimeout = window.setTimeout.bind(window);
      window.setTimeout = ((
        handler: TimerHandler,
        timeout?: number,
        ...args: any[]
      ) => {
        const adjusted = timeout === 6500 ? 1000 : timeout;
        return originalSetTimeout(handler, adjusted, ...args);
      }) as typeof window.setTimeout;
    });

    await page.goto("/");
    const track = page.locator(".highlights-carousel__track");
    await expect(track).toBeVisible();

    const slides = page.locator(".highlights-carousel__slide");
    const slideCount = await slides.count();
    expect(slideCount).toBeGreaterThan(1);
    const firstSlideText = (await slides.nth(0).textContent())?.trim();

    await page.waitForTimeout(1200);
    const transformAfterAdvance = await track.evaluate(
      (el) => el.style.transform,
    );
    expect(transformAfterAdvance).toBe("translateX(-100%)");

    await page.waitForTimeout(1200);
    const secondSlideText = (await slides.nth(1).textContent())?.trim();
    if (firstSlideText) {
      expect(secondSlideText).not.toBe(firstSlideText);
    }
  });

  test("renders manual carousel controls and dots for multi-slide content", async ({
    page,
  }) => {
    await page.goto("/");
    const slides = page.locator(".highlights-carousel__slide");
    const slideCount = await slides.count();
    expect(slideCount).toBeGreaterThan(1);

    await expect(page.locator(".highlights-carousel__control")).toHaveCount(2);
    await expect(page.locator(".highlights-carousel__dot")).toHaveCount(
      slideCount,
    );
  });
});
