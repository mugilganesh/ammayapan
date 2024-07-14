window.onload = function () {
  document.body.classList.add("remove-scrolling");
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 35,
    // slidesPerGroup: 3,
    loop: true,
    // centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 70,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
    },
  });
}