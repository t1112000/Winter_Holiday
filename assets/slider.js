const slider = document.querySelector(".container__banner");
const slides = document.querySelectorAll(".container__banner-item");
const slideIcons = document.querySelectorAll(".reviews-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const numberOfSlider = slides.length;
var slideNumber = 0;
const Slider = () => {
  nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((dot) => {
      dot.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlider - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    // slideIcons[slideNumber].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((dot) => {
      dot.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlider - 1;
    }

    slides[slideNumber].classList.add("active");
    // slideIcons[slideNumber].classList.add("active");
  });
  var playSlider;
  const autoSlider = () => {
    playSlider = setInterval(() => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((dot) => {
        dot.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlider - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      //   slideIcons[slideNumber].classList.add("active");
    }, 8000);
  };

  autoSlider();

  //  stop the image slider autoplay on mouseover
  slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });

  slider.addEventListener("mouseout", () => {
    autoSlider();
  });

  slideIcons.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((dot) => {
        dot.classList.remove("active");
      });

      slides[index].style.display = "block";
      //   slideIcons[index].classList.add("active");
    });
  });
};

export default Slider;
