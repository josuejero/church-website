import { expect, test } from "@playwright/test";

test.describe("Home layout regression", () => {
  test("desktop home keeps full-width card sections and a compact upper-left hero card", async ({
    page,
  }) => {
    test.skip(
      test.info().project.name !== "chromium",
      "desktop viewport assertion runs on chromium only",
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const metrics = await page.evaluate(() => {
      const container = document.querySelector("main .container");
      const containerRect = container?.getBoundingClientRect();
      const containerStyle = container ? getComputedStyle(container) : null;
      const padLeft = containerStyle
        ? Number.parseFloat(containerStyle.paddingLeft)
        : 0;
      const padRight = containerStyle
        ? Number.parseFloat(containerStyle.paddingRight)
        : 0;
      const containerWidth = containerRect
        ? Math.round(containerRect.width)
        : 0;
      const containerContentWidth = containerRect
        ? Math.round(containerRect.width - padLeft - padRight)
        : 0;

      const cardSections = [
        ...document.querySelectorAll(".home-grid__cards"),
      ].map((section) => {
        const sectionRect = section.getBoundingClientRect();
        const grid = section.querySelector(".grid");
        const gridRect = grid?.getBoundingClientRect();
        const cardTops = grid
          ? [...grid.children].map((child) =>
              Math.round((child as HTMLElement).getBoundingClientRect().top),
            )
          : [];
        const firstRowTop = cardTops[0] ?? null;
        const firstRowCount =
          firstRowTop === null
            ? 0
            : cardTops.filter((top) => top === firstRowTop).length;

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
      const heroContentStyle = heroContent
        ? getComputedStyle(heroContent)
        : null;

      const heroWidth = heroRect ? Math.round(heroRect.width) : 0;
      const heroContentWidth = heroContentRect
        ? Math.round(heroContentRect.width)
        : 0;
      const heroWidthRatio =
        heroContentWidth > 0 ? heroWidth / heroContentWidth : 0;
      const heroPadLeft = heroContentStyle
        ? Math.round(Number.parseFloat(heroContentStyle.paddingLeft))
        : 0;
      const heroPadTop = heroContentStyle
        ? Math.round(Number.parseFloat(heroContentStyle.paddingTop))
        : 0;
      const heroLeftGap =
        heroRect && heroContentRect
          ? Math.round(heroRect.left - heroContentRect.left)
          : Number.NaN;
      const heroTopGap =
        heroRect && heroContentRect
          ? Math.round(heroRect.top - heroContentRect.top)
          : Number.NaN;
      const heroRightGap =
        heroRect && heroContentRect
          ? Math.round(heroContentRect.right - heroRect.right)
          : Number.NaN;

      return {
        containerWidth,
        containerContentWidth,
        cardSections,
        heroWidth,
        heroContentWidth,
        heroWidthRatio,
        heroPadLeft,
        heroPadTop,
        heroLeftGap,
        heroTopGap,
        heroRightGap,
      };
    });

    expect(metrics.containerWidth).toBeGreaterThan(0);
    expect(metrics.containerContentWidth).toBeGreaterThan(0);
    expect(metrics.cardSections).toHaveLength(2);

    for (const section of metrics.cardSections) {
      expect(section.sectionWidth).toBeGreaterThanOrEqual(
        metrics.containerContentWidth - 4,
      );
      expect(section.gridWidth).toBeGreaterThanOrEqual(
        metrics.containerContentWidth - 12,
      );
      if (section.cardCount > 1) {
        expect(section.firstRowCount).toBeGreaterThan(1);
      }
    }

    expect(metrics.heroContentWidth).toBeGreaterThan(0);
    expect(metrics.heroWidth).toBeGreaterThan(0);
    expect(metrics.heroWidthRatio).toBeLessThan(0.6);
    expect(metrics.heroRightGap).toBeGreaterThan(200);
    expect(
      Math.abs(metrics.heroLeftGap - metrics.heroPadLeft),
    ).toBeLessThanOrEqual(4);
    expect(
      Math.abs(metrics.heroTopGap - metrics.heroPadTop),
    ).toBeLessThanOrEqual(4);
  });
});
