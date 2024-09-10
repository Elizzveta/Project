  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const progressBar = document.querySelector('.progress-bar');

  let activeSlide = 0;
  function nextSlide() {
    activeSlide = (activeSlide + 1) % slides.length;
    updateSlider();
  }
  function prevSlide() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
  function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
    progressBar.style.width = `${(activeSlide + 1) / slides.length * 100}%`;
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  updateSlider();