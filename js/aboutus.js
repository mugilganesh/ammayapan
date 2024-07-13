window.onload = function () {
    document.body.classList.add("remove-scrolling");

    var swiper = new Swiper(".slide_members_content", {
        slidesPerView: 3,
        spaceBetween: 50,
        // slidesPerGroup: 3,
        loop: true,
        // centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
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

setTimeout(()=>{
    $('.splash').fadeOut('fast');
    document.body.classList.remove("remove-scrolling"); 
}, 1500);