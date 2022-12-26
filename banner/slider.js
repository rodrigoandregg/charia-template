const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

const nextImage = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 1s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 1000);
};

const prevImage = () => {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection - length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 1s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 1000);
};

btnRight.addEventListener("click", () => {
  nextImage();
});

btnLeft.addEventListener("click", () => {
  prevImage();
});

setInterval(() => {
  nextImage();
}, 6000);
