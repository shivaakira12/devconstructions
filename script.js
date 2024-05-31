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

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
