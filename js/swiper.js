// Swiper For Landing-Section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Swiper For On Sale Section
var swiper = new Swiper(".on-sale-swiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next-one",
    prevEl: ".swiper-button-prev-one",
  },
  breakpoints: {
    1030: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    578: {
      slidesPerView: 3,
    },
    440: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

// Swiper For Computer And Desktop Section
var swiper = new Swiper(".computer-desktop-swiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
  breakpoints: {
    1030: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    578: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

// Swiper For Computer And Desktop Section
var swiper = new Swiper(".phones-tablets-swiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next-three",
    prevEl: ".swiper-button-prev-three",
  },
  breakpoints: {
    1030: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    578: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});
