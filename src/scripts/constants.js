const CLASSES = {
  active: 'active',
  absolute: 'absolute',
  loading: 'loading',
  headerDark: 'header--dark',
  modal: 'modal',
  modalContent: 'modal__content',
  scrollHidden: 'scroll-hidden'
};

const IDs = {
  modalVideo: 'modal-video'
};

const DOM = {
  body: document.querySelector('body'),
  overlay: document.querySelector('#overlay')
};

const QUIZ = {
  notQuizSlidesCount: 2,
  slidesCount: 5
};

export { CLASSES, DOM, IDs, QUIZ };
