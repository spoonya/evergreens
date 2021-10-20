import { QUIZ } from '../constants';

const currentSlideIndex = document.querySelector('#swiper-quiz-current-1');
const totalSlidesCount = document.querySelector('#swiper-quiz-total-1');
const buttonNext = document.querySelector('#swiper-button-next-1');
const buttonPrev = document.querySelector('#swiper-button-prev-1');
const counter = document.querySelector('#quiz-counter-1');
const progress = document.querySelector('#quiz-progress-1');
const quizDesignYes = document.querySelector('#quiz-design-yes-1');
const quizDesignNo = document.querySelector('#quiz-design-no-1');
const quizUploadBlock = document.querySelector('#quiz-upload-block-1');
const quizUploadError = document.querySelector('#quiz-upload-error-1');

function setAnswers() {
  const placeTxt = document
    .querySelector('#quiz-question-place-1 input:checked')
    .closest('label')
    .querySelector('span').textContent;
  const squareTxt = document
    .querySelector('#quiz-question-square-1 input:checked')
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const designTxt = document
    .querySelector('#quiz-question-design-1 input:checked')
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const plantsTxt = document
    .querySelector('#quiz-question-plants-1 input:checked')
    .closest('label')
    .querySelector('span').textContent;
  const extraArr = [
    ...document.querySelectorAll('#quiz-question-extra-1 input:checked')
  ].map((el) => el.closest('label').querySelector('span').textContent);

  const extraTxt = extraArr
    .map((el, idx) => {
      if (idx > 0) {
        return el.split()[0].toLowerCase();
      }

      return el;
    })
    .join(', ');

  const placeAnswer = document.querySelector('#quiz-answer-place-1');
  const squareAnswer = document.querySelector('#quiz-answer-square-1');
  const designAnswer = document.querySelector('#quiz-answer-design-1');
  const plantsAnswer = document.querySelector('#quiz-answer-plants-1');
  const extraAnswer = document.querySelector('#quiz-answer-extra-1');

  placeAnswer.textContent = placeTxt;
  squareAnswer.textContent = squareTxt;
  designAnswer.textContent = designTxt;
  plantsAnswer.textContent = plantsTxt;
  extraAnswer.textContent = extraTxt;
}

const swiperQuiz1 = new Swiper('#swiper-quiz-1', {
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

        setTimeout(() => this.slideNext(), 4000);
      }
    }
  },

  navigation: {
    nextEl: '#swiper-button-next-1',
    prevEl: '#swiper-button-prev-1'
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
  const uploadBtn = document.querySelector('#quiz-upload-1');
  const filesChosenEl = document.querySelector('#quiz-files-chosen-1');

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

if (document.querySelector('#swiper-quiz-1')) {
  controlUpload();
  controlProgress();
  controlRadioButtons();
}

export default swiperQuiz1;
