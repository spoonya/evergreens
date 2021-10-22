const swiperPrevent = new Swiper('#swiper-prevent', {
  slidesPerColumnFill: 'row',

  loop: true,

  spaceBetween: 30,

  allowTouchMove: false,

  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  watchSlidesVisibility: true,

  pagination: {
    el: '#swiper-pagination-prevent',
    clickable: true
  },

  resizeObserver: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 1,

      allowTouchMove: true
    },
    575: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 2,

      allowTouchMove: true
    },
    992: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 3
    }
  }
});

export default swiperPrevent;
