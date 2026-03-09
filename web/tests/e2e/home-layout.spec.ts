import { expect, test } from "@playwright/test";

test.describe("Home layout regression", () => {
  test("desktop home uses full-width card sections and hero", async ({ page }) => {
    test.skip(test.info().project.name !== "chromium", "desktop viewport assertion runs on chromium only");

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const metrics = await page.evaluate(() => {
      const container = document.querySelector("main .container");
      const containerRect = container?.getBoundingClientRect();
      const containerStyle = container ? getComputedStyle(container) : null;
      const padLeft = containerStyle ? Number.parseFloat(containerStyle.paddingLeft) : 0;
      const padRight = containerStyle ? Number.parseFloat(containerStyle.paddingRight) : 0;
      const containerWidth = containerRect ? Math.round(containerRect.width) : 0;
      const containerContentWidth = containerRect ? Math.round(containerRect.width - padLeft - padRight) : 0;

      const cardSections = [...document.querySelectorAll(".home-grid__cards")].map((section) => {
        const sectionRect = section.getBoundingClientRect();
        const grid = section.querySelector(".grid");
        const gridRect = grid?.getBoundingClientRect();
        const cardTops = grid
          ? [...grid.children].map((child) => Math.round((child as HTMLElement).getBoundingClientRect().top))
          : [];
        const firstRowTop = cardTops[0] ?? null;
        const firstRowCount =
          firstRowTop === null ? 0 : cardTops.filter((top) => top === firstRowTop).length;

        return {
          sectionWidth: Math.round(sectionRect.width),
          gridWidth: gridRect ? Math.round(gridRect.width) : 0,
          cardCount: cardTops.length,
          firstRowCount,
        };
      });

      const heroCard = document.querySelector(".heroBanner .hero.card");
      const heroContent = document.querySelector(".heroBanner__content");
      const heroRect = heroCard?.getBoundingClientRect();
      const heroContentRect = heroContent?.getBoundingClientRect();

      const heroWidth = heroRect ? Math.round(heroRect.width) : 0;
      const heroContentWidth = heroContentRect ? Math.round(heroContentRect.width) : 0;
      const heroWidthRatio = heroContentWidth > 0 ? heroWidth / heroContentWidth : 0;
      const heroRightGap =
        heroRect && heroContentRect ? Math.round(heroContentRect.right - heroRect.right) : Number.NaN;

      return {
        containerWidth,
        containerContentWidth,
        cardSections,
        heroWidth,
        heroContentWidth,
        heroWidthRatio,
        heroRightGap,
      };
    });

    expect(metrics.containerWidth).toBeGreaterThan(0);
    expect(metrics.containerContentWidth).toBeGreaterThan(0);
    expect(metrics.cardSections).toHaveLength(2);

    for (const section of metrics.cardSections) {
      expect(section.sectionWidth).toBeGreaterThanOrEqual(metrics.containerContentWidth - 4);
      expect(section.gridWidth).toBeGreaterThanOrEqual(metrics.containerContentWidth - 12);
      if (section.cardCount > 1) {
        expect(section.firstRowCount).toBeGreaterThan(1);
      }
    }

    expect(metrics.heroContentWidth).toBeGreaterThan(0);
    expect(metrics.heroWidth).toBeGreaterThan(0);
    expect(metrics.heroWidthRatio).toBeGreaterThan(0.9);
    expect(metrics.heroRightGap).toBeLessThanOrEqual(40);
  });
});
