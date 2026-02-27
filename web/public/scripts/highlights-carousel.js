(() => {
  if (typeof document === "undefined") return;
  if (window.__highlightsCarouselInitialized) return;
  window.__highlightsCarouselInitialized = true;

  const initHighlightsCarousel = () => {
    const carousels = document.querySelectorAll(".highlights-carousel");
    if (carousels.length === 0) return;

    for (const carousel of carousels) {
      const track = carousel.querySelector(".highlights-carousel__track");
      const slides = carousel.querySelectorAll(".highlights-carousel__slide");
      if (!track || slides.length === 0) continue;

      let currentIndex = 0;
      const slideCount = slides.length;
      const intervalMs = 6500;
      let timerId;

      const prevButton = carousel.querySelector('button[data-dir="prev"]');
      const nextButton = carousel.querySelector('button[data-dir="next"]');
      const dots = carousel.querySelectorAll("button[data-dot-index]");

      const updateDots = () => {
        for (const dot of dots) {
          const dotIndex = Number.parseInt(dot.dataset.dotIndex ?? "-1", 10);
          const isActive = dotIndex === currentIndex;
          dot.setAttribute("aria-selected", isActive ? "true" : "false");
        }
      };

      const updateTrack = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
      };

      const goToSlide = (index) => {
        currentIndex = (index + slideCount) % slideCount;
        updateTrack();
      };

      const advanceSlide = (direction = 1) => {
        goToSlide(currentIndex + direction);
      };

      const scheduleAutoAdvance = (delay = intervalMs) => {
        if (timerId) clearTimeout(timerId);
        if (slideCount < 2) return;
        timerId = window.setTimeout(() => {
          advanceSlide(1);
          scheduleAutoAdvance(intervalMs);
        }, delay);
      };

      const pauseAutoAdvance = () => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = undefined;
        }
      };

      prevButton?.addEventListener("click", () => {
        advanceSlide(-1);
        scheduleAutoAdvance(intervalMs);
      });

      nextButton?.addEventListener("click", () => {
        advanceSlide(1);
        scheduleAutoAdvance(intervalMs);
      });

      for (const dot of dots) {
        dot.addEventListener("click", () => {
          const targetIndex = Number.parseInt(dot.dataset.dotIndex ?? "0", 10);
          if (Number.isNaN(targetIndex)) return;
          goToSlide(targetIndex);
          scheduleAutoAdvance(intervalMs);
        });
      }

      carousel.addEventListener("mouseenter", pauseAutoAdvance);
      carousel.addEventListener("mouseleave", () =>
        scheduleAutoAdvance(intervalMs),
      );
      carousel.addEventListener("focusin", pauseAutoAdvance);
      carousel.addEventListener("focusout", () =>
        scheduleAutoAdvance(intervalMs),
      );

      updateTrack();
      scheduleAutoAdvance(1200);
    }
  };

  initHighlightsCarousel();
})();
