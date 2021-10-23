import {
  controlProgress,
  controlRadioButtons,
  controlUpload,
  onInit,
  onSlideChange
} from './common';

const idNumber = 2;
const currentSlideIndex = document.querySelector(
  `#swiper-quiz-current-${idNumber}`
);
const totalSlidesCount = document.querySelector(
  `#swiper-quiz-total-${idNumber}`
);
const controls = document.querySelector(`#quiz-controls-${idNumber}`);
const buttonNext = document.querySelector(`#swiper-button-next-${idNumber}`);
const buttonPrev = document.querySelector(`#swiper-button-prev-${idNumber}`);
const quizBlock = document.querySelector(`#quiz-block-${idNumber}`);
const counter = document.querySelector(`#quiz-counter-${idNumber}`);
const progress = document.querySelector(`#quiz-progress-${idNumber}`);
const progressLoading = document.querySelector(
  `#quiz-progress-loading-${idNumber}`
);
const progressLoadingPerc = document.querySelector(
  `#quiz-progress-loading-percent-${idNumber}`
);
const quizDesignYes = document.querySelector(`#quiz-design-yes-${idNumber}`);
const quizDesignNo = document.querySelector(`#quiz-design-no-${idNumber}`);
const quizUploadBlock = document.querySelector(
  `#quiz-upload-block-${idNumber}`
);
const quizUploadError = document.querySelector(
  `#quiz-upload-error-${idNumber}`
);

const swiperQuiz1 = new Swiper(`#swiper-quiz-${idNumber}`, {
  slidesPerColumnFill: 'row',
  autoHeight: true,

  spaceBetween: 20,

  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  watchSlidesVisibility: true,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  allowTouchMove: false,

  on: {
    init() {
      onInit.call(this, { currentSlideIndex, totalSlidesCount });
    },

    slideChange() {
      onSlideChange.call(this, {
        idNumber,
        currentSlideIndex,
        counter,
        progress,
        controls,
        progressLoading,
        progressLoadingPerc,
        quizBlock
      });
    }
  },

  navigation: {
    nextEl: `#swiper-button-next-${idNumber}`,
    prevEl: `#swiper-button-prev-${idNumber}`
  }
});

if (document.querySelector(`#swiper-quiz-${idNumber}`)) {
  controlUpload({ idNumber, quizUploadError });
  controlProgress({ buttonPrev, buttonNext, progress });
  controlRadioButtons({ quizDesignNo, quizDesignYes, quizUploadBlock });
}

export default swiperQuiz1;
