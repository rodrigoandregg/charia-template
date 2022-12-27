// menu
const btn = document.querySelector(".header__btn");
const navBar = document.querySelector(".nav");

btn.addEventListener("click", () => {
  navBar.classList.toggle("active");

  // impedir scroll mientras menu está abierto
  if (navBar.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
});

// slider

const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider__wrapper");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

const nextImage = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider__wrapper")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 1s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 1000);
};

const prevImage = () => {
  let sliderSection = document.querySelectorAll(".slider__wrapper");
  let sliderSectionLast = sliderSection[sliderSection - length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 1s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 1000);
};

setInterval(() => {
  nextImage();
}, 6000);
