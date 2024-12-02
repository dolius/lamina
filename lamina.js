document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prev-slide');
  const nextButton = document.getElementById('next-slide');

  let currentSlideIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  };

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    }
  };

  // Event listeners for navigation buttons
  nextButton.addEventListener('click', goToNextSlide);
  prevButton.addEventListener('click', goToPrevSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      goToNextSlide();
    } else if (event.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  });

  // Initialize slides
  slides.forEach((slide, i) => {
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.left = 0;
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${i * 100}%)`;

    // Apply background image if data-background is set
    const bgImage = slide.getAttribute('data-background');
    if (bgImage) {
      slide.style.backgroundImage = `url(${bgImage})`;
    }
  });

  // Show the first slide
  showSlide(currentSlideIndex);
});
