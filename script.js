let navbar = document.querySelector(".header .navbar");
let contactinfo = document.querySelector(".contact-info");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactinfo.classList.toggle("active");
};
document.querySelector("#close-contact-info").onclick = () => {
  contactinfo.classList.remove("active");
};

// var swiper = new Swiper(".home-slider", {
//   // loop: true,
//   // grabCursor: true,
//   navigation: {
//     nextE1: ".swiper-button-next",
//     prevE1: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".swiper-container", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
