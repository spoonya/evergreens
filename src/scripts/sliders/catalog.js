const swiperCatalog = new Swiper('#swiper-catalog', {
  slidesPerColumnFill: 'row',

  loop: true,

  spaceBetween: 30,

  autoplay: {
    delay: 4000
  },

  grabCursor: true,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '#swiper-pagination-catalog',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 1
    },
    576: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 2
    },
    992: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 3
    },
    1400: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 4
    }
  }
});

export default swiperCatalog;
