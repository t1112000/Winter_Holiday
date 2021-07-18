const slides = document.querySelectorAll(".container__banner-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const numberOfSlider = slides.length;
var slideNumber = 0;
const Slider = () => {
  nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlider - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlider - 1;
    }

    slides[slideNumber].classList.add("active");
  });

  const autoSlider = () => {
    setInterval(() => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlider - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
    }, 8000);
  };
  autoSlider();
};

export default Slider;
