// navbar

const mobileMenu = document.querySelector(".nav__mobile__menu");
const menuBody = document.querySelector(".nav__wrapper");
if (mobileMenu) {
  mobileMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    mobileMenu.classList.toggle("active-menu");
    menuBody.classList.toggle("active-menu");
  });
}

// Скрол к секции
const menulinks = document.querySelectorAll(".header__menu__items[data-goto]");
if (menulinks.length > 0) {
  menulinks.forEach((menulink) => {
    menulink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menulink = e.target;
    if (
      menulink.dataset.goto &&
      document.querySelector(menulink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menulink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (mobileMenu.classList.contains("active-menu")) {
        document.body.classList.remove("_lock");
        mobileMenu.classList.remove("active-menu");
        menuBody.classList.remove("active-menu");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
        duration: 500, // по умолчанию «400»
        easing: "linear", // по умолчанию «swing»
      });
      e.preventDefault();
    }
  }
}
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});
$(".popup-gallery").slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// MODAL

let modal = document.querySelector(".modal");
let moreDetailsButton = document.querySelectorAll(".header-btn");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButton.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// modal cat
let modalCat = document.querySelector(".modal-cat");
let moreCatButton = document.querySelectorAll(".global-btn, .button__arrow");
let closeBtnCat = document.querySelector(".btn-closeCat");

moreCatButton.forEach((item) => {
  item.addEventListener("click", function () {
    modalCat.classList.add("showw");
    modalCat.classList.remove("hidee");
  });
});

function closeModalCat() {
  modalCat.classList.remove("showw");
  modalCat.classList.add("hidee");
}
closeBtnCat.addEventListener("click", closeModalCat);

modalCat.addEventListener("click", function (e) {
  if (e.target === modalCat) {
    closeModalCat();
  }
});
