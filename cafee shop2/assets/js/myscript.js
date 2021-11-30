var swiper = new Swiper(".mySwiperResponsive", {
    slidesPerView: 1,
    spaceBetween: 10,
    lazy: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView:10,
        spaceBetween: 50,
      },
    },
  });