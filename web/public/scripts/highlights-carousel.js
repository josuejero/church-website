(() => {
  if (typeof document === "undefined") return;
  if (window.__highlightsCarouselInitialized) return;
  window.__highlightsCarouselInitialized = true;

  const initHighlightsCarousel = () => {
    const carousel = document.querySelector(".highlights-carousel");
    if (!carousel) return;
    const track = carousel.querySelector(".highlights-carousel__track");
    const slides = carousel.querySelectorAll(".highlights-carousel__slide");
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const slideCount = slides.length;
    const intervalMs = 6000;
    let timerId;

    const updateTrack = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const advanceSlide = () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateTrack();
    };

    const scheduleAutoAdvance = (delay = intervalMs) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = window.setTimeout(() => {
        advanceSlide();
        scheduleAutoAdvance(intervalMs);
      }, delay);
    };

    scheduleAutoAdvance(1000);
  };

  initHighlightsCarousel();
})();
