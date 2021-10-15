const currentSlideIndex = document.querySelector('#swiper-quiz-current');
const totalSlidesCount = document.querySelector('#swiper-quiz-total');
const noQuizSlidesCount = 2;

const swiperQuiz = new Swiper('#swiper-quiz', {
  slidesPerColumnFill: 'row',

  spaceBetween: 20,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  allowTouchMove: false,

  on: {
    init() {
      currentSlideIndex.textContent = this.realIndex + 1;
      totalSlidesCount.textContent = this.slides.length - noQuizSlidesCount;
    },

    slideChange() {
      currentSlideIndex.textContent = this.realIndex + 1;
    }
  },

  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev'
  }
});

function controlUpload() {
  const uploadBtn = document.querySelector('#quiz-upload');
  const filesChosenEl = document.querySelector('#quiz-files-chosen');

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

export default swiperQuiz;
export { controlUpload };
