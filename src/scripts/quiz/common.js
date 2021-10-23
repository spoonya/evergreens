import { QUIZ } from '../constants';

function startLoading(bar, percent) {
  const timer = setInterval(() => {
    bar.value += 1;
    percent.textContent = `${(bar.value / bar.max) * 100}%`;
  }, 1000);

  return timer;
}

function onInit({ currentSlideIndex, totalSlidesCount }) {
  currentSlideIndex.textContent = this.realIndex + 1;
  totalSlidesCount.textContent = this.slides.length - QUIZ.notQuizSlidesCount;
}

function setAnswers(idNumber) {
  const placeTxt = document
    .querySelector(`#quiz-question-place-${idNumber} input:checked`)
    .closest('label')
    .querySelector('span').textContent;
  const squareTxt = document
    .querySelector(`#quiz-question-square-${idNumber} input:checked`)
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const designTxt = document
    .querySelector(`#quiz-question-design-${idNumber} input:checked`)
    .closest('label')
    .querySelector('.form__checkbox-txt').textContent;
  const plantsArr = [
    ...document.querySelectorAll(
      `#quiz-question-plants-${idNumber} input:checked`
    )
  ].map((el) => el.closest('label').querySelector('span').textContent);
  const extraArr = [
    ...document.querySelectorAll(
      `#quiz-question-extra-${idNumber} input:checked`
    )
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

  const placeAnswer = document.querySelector(`#quiz-answer-place-${idNumber}`);
  const squareAnswer = document.querySelector(
    `#quiz-answer-square-${idNumber}`
  );
  const designAnswer = document.querySelector(
    `#quiz-answer-design-${idNumber}`
  );
  const plantsAnswer = document.querySelector(
    `#quiz-answer-plants-${idNumber}`
  );
  const extraAnswer = document.querySelector(`#quiz-answer-extra-${idNumber}`);

  placeAnswer.textContent = placeTxt;
  squareAnswer.textContent = squareTxt;
  designAnswer.textContent = designTxt;
  plantsAnswer.textContent = plantsTxt;
  extraAnswer.textContent = extraTxt;
}

function onSlideChange({
  idNumber,

  currentSlideIndex,
  counter,
  progress,
  buttonPrev,
  buttonNext,
  progressLoading,
  progressLoadingPerc
}) {
  if (this.realIndex + 1 <= QUIZ.questionsCount) {
    currentSlideIndex.textContent = this.realIndex + 1;
  } else {
    counter.style.display = 'none';
    progress.style.display = 'none';
    buttonPrev.style.display = 'none';
    buttonNext.style.display = 'none';
  }

  if (this.realIndex + 1 > QUIZ.questionsCount) {
    setAnswers(idNumber);

    const loading = startLoading(progressLoading, progressLoadingPerc);

    setTimeout(() => {
      clearInterval(loading);
      this.slideNext();
    }, 6000);
  }
}

function validateUpload(file) {
  const allowedExtensions =
    /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

  if (!allowedExtensions.exec(file)) {
    return false;
  }

  return true;
}

function controlUpload({ idNumber, quizUploadError }) {
  const uploadBtn = document.querySelector(`#quiz-upload-${idNumber}`);
  const filesChosenEl = document.querySelector(
    `#quiz-files-chosen-${idNumber}`
  );

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

function controlProgress({ buttonPrev, buttonNext, progress }) {
  buttonPrev.addEventListener('click', () => {
    if (progress.value > 1) {
      progress.value -= 1;
    }
  });

  buttonNext.addEventListener('click', () => {
    if (progress.value < QUIZ.questionsCount) {
      progress.value += 1;
    }
  });
}

function controlRadioButtons({ quizDesignNo, quizDesignYes, quizUploadBlock }) {
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

export {
  onInit,
  onSlideChange,
  controlUpload,
  controlRadioButtons,
  controlProgress
};
