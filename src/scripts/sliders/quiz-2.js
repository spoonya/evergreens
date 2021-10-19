import { QUIZ } from '../constants';

const currentSlideIndex = document.querySelector('#swiper-quiz-current-2');
const totalSlidesCount = document.querySelector('#swiper-quiz-total-2');
const buttonNext = document.querySelector('#swiper-button-next-1');
const buttonPrev = document.querySelector('#swiper-button-prev-1');
const counter = document.querySelector('#quiz-counter-2');
const progress = document.querySelector('#quiz-progress-2');

const swiperQuiz2 = new Swiper('#swiper-quiz-2', {
  slidesPerColumnFill: 'row',

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
      currentSlideIndex.textContent = this.realIndex + 1;
      totalSlidesCount.textContent =
        this.slides.length - QUIZ.notQuizSlidesCount;
    },

    slideChange() {
      if (this.realIndex + 1 <= QUIZ.slidesCount) {
        currentSlideIndex.textContent = this.realIndex + 1;
      } else {
        counter.style.display = 'none';
        progress.style.display = 'none';
        buttonPrev.style.display = 'none';
        buttonNext.style.display = 'none';
      }
    }
  },

  navigation: {
    nextEl: '#swiper-button-next-2',
    prevEl: '#swiper-button-prev-2'
  }
});

function controlUpload() {
  const uploadBtn = document.querySelector('#quiz-upload-2');
  const filesChosenEl = document.querySelector('#quiz-files-chosen-2');

  if (!uploadBtn) return;

  const appendChosenFiles = (name) => {
    const fileTemplate = `<p>${name}
                            <svg>
                              <use xlink:href="images/sprite.svg#close-square"></use>
                            </svg>
                          </p>`;

    filesChosenEl.insertAdjacentHTML('beforeend', fileTemplate);
  };

  uploadBtn.addEventListener('change', function () {
    this.files.forEach((file) => {
      appendChosenFiles(file.name);
    });
  });
}

function controlProgress() {
  buttonPrev.addEventListener('click', () => {
    if (progress.value > 1) {
      progress.value -= 1;
    }
  });

  buttonNext.addEventListener('click', () => {
    if (progress.value < 5) {
      progress.value += 1;
    }
  });
}

controlUpload();
controlProgress();

export default swiperQuiz2;
