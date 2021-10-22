import { QUIZ } from '../constants';

const currentSlideIndex = document.querySelector('#swiper-quiz-current-2');
const totalSlidesCount = document.querySelector('#swiper-quiz-total-2');
const buttonNext = document.querySelector('#swiper-button-next-2');
const buttonPrev = document.querySelector('#swiper-button-prev-2');
const counter = document.querySelector('#quiz-counter-2');
const progress = document.querySelector('#quiz-progress-2');
const progressLoading = document.querySelector('#quiz-progress-loading-2');
const progressLoadingPerc = document.querySelector(
  '#quiz-progress-loading-percent-2'
);
const quizDesignYes = document.querySelector('#quiz-design-yes-2');
const quizDesignNo = document.querySelector('#quiz-design-no-2');
const quizUploadBlock = document.querySelector('#quiz-upload-block-2');
const quizUploadError = document.querySelector('#quiz-upload-error-2');

function setAnswers() {
  const placeTxt = document
    .querySelector('#quiz-question-place-2 input:checked')
    .closest('label')
    .querySelector('span').textContent;
  const squareTxt = document
    .querySelector('#quiz-question-square-2 input:checked')
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const designTxt = document
    .querySelector('#quiz-question-design-2 input:checked')
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const plantsArr = [
    ...document.querySelectorAll('#quiz-question-plants-2 input:checked')
  ].map((el) => el.closest('label').querySelector('span').textContent);
  const extraArr = [
    ...document.querySelectorAll('#quiz-question-extra-2 input:checked')
  ].map((el) => el.closest('label').querySelector('span').textContent);

  const extraTxt = extraArr
    .map((el, idx) => {
      if (idx > 0) {
        return el.split()[0].toLowerCase();
      }

      return el;
    })
    .join(', ');

  const plantsTxt = plantsArr
    .map((el, idx) => {
      if (idx > 0) {
        return el.split()[0].toLowerCase();
      }

      return el;
    })
    .join(', ');

  const placeAnswer = document.querySelector('#quiz-answer-place-2');
  const squareAnswer = document.querySelector('#quiz-answer-square-2');
  const designAnswer = document.querySelector('#quiz-answer-design-2');
  const plantsAnswer = document.querySelector('#quiz-answer-plants-2');
  const extraAnswer = document.querySelector('#quiz-answer-extra-2');

  placeAnswer.textContent = placeTxt;
  squareAnswer.textContent = squareTxt;
  designAnswer.textContent = designTxt;
  plantsAnswer.textContent = plantsTxt;
  extraAnswer.textContent = extraTxt;
}

function startLoading() {
  const timer = setInterval(() => {
    progressLoading.value += 1;
    progressLoadingPerc.textContent = `${
      (progressLoading.value / progressLoading.max) * 100
    }%`;
  }, 1000);

  return timer;
}

const swiperQuiz1 = new Swiper('#swiper-quiz-2', {
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

      if (this.realIndex + 1 > QUIZ.slidesCount) {
        setAnswers();

        const loading = startLoading();

        setTimeout(() => {
          clearInterval(loading);
          this.slideNext();
        }, 6000);
      }
    }
  },

  navigation: {
    nextEl: '#swiper-button-next-2',
    prevEl: '#swiper-button-prev-2'
  }
});

function validateUpload(file) {
  const allowedExtensions =
    /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

  if (!allowedExtensions.exec(file)) {
    return false;
  }

  return true;
}

function controlUpload() {
  const uploadBtn = document.querySelector('#quiz-upload-2');
  const filesChosenEl = document.querySelector('#quiz-files-chosen-2');

  if (!uploadBtn) return;

  const appendChosenFiles = (name) => {
    const fileTemplate = `<p>${name}
                          </p>`;

    filesChosenEl.insertAdjacentHTML('beforeend', fileTemplate);
  };

  uploadBtn.addEventListener('change', function () {
    filesChosenEl.innerHTML = '';

    const maxCount = 5;

    if (this.files.length > maxCount) {
      quizUploadError.textContent = `Не более ${maxCount} файлов`;
      quizUploadError.style.visibility = 'visible';

      return;
    }

    this.files.forEach((file) => {
      if (validateUpload(file.name)) {
        appendChosenFiles(file.name);
        quizUploadError.style.visibility = 'hidden';
        quizUploadError.textContent = '';
      } else {
        quizUploadError.textContent = 'Неверный тип файлов';
        quizUploadError.style.visibility = 'visible';
        this.value = '';
        filesChosenEl.innerHTML = '';
      }
    });
  });
}

function controlRadioButtons() {
  quizDesignNo.addEventListener('change', () => {
    if (quizDesignNo.checked) {
      quizUploadBlock.style.display = 'none';
    }
  });

  quizDesignYes.addEventListener('change', () => {
    if (quizDesignYes.checked) {
      quizUploadBlock.style.display = 'block';
    }
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

if (document.querySelector('#swiper-quiz-2')) {
  controlUpload();
  controlProgress();
  controlRadioButtons();
}

export default swiperQuiz1;
