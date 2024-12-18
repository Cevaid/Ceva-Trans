var swiper = new Swiper(".armadaSwiper2", {
    spaceBetween: 10,
    cssMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".armadaSwiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });