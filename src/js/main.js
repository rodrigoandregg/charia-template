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

// testimonials
const testimonialsList = document.querySelector(".testimonials__list");
let testimonialsItem = document.querySelectorAll(".testimonials__item");
let testimonialsItemLast = testimonialsItem[testimonialsItem.length - 1];
testimonialsList.insertAdjacentElement("afterbegin", testimonialsItemLast);
const nextTestimonial = () => {
  let testimonialsItemFirst = document.querySelectorAll(
    ".testimonials__item"
  )[0];
  testimonialsList.style.marginLeft = "-200%";
  testimonialsList.style.transition = "all 1s";

  setTimeout(() => {
    testimonialsList.style.transition = "none";
    testimonialsList.insertAdjacentElement("beforeend", testimonialsItemFirst);
    testimonialsList.style.marginLeft = "-100%";
  }, 1000);
};

setInterval(() => {
  nextTestimonial();
}, 6000);

//sponsor
const sponsorList = document.querySelector(".sponsor__list");
let sponsorItem = document.querySelectorAll(".sponsor__item");
let sponsorItemLast = sponsorItem[sponsorItem.length - 1];
sponsorList.insertAdjacentElement("afterbegin", sponsorItemLast);
const nextSponsor = () => {
  let sponsorItemFirst = document.querySelectorAll(".sponsor__item")[0];

  sponsorList.style.transition = "all 1s";
  sponsorList.style.marginLeft = "-25%";

  setTimeout(() => {
    sponsorList.style.transition = "none";
    sponsorList.insertAdjacentElement("beforeend", sponsorItemFirst);
    sponsorList.style.marginLeft = "0";
  }, 1000);
};

setInterval(() => {
  nextSponsor();
}, 3000);
