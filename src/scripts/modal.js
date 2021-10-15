import { CLASSES, DOM, IDs } from './constants';

function openModal(modal) {
  if (!modal) return;

  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
  DOM.overlay.classList.add(CLASSES.active);
}

function openModalVideo(modal, link) {
  openModal(modal);

  const videoTemplate = `<div class="video-section">
    <iframe class="video" src="${link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>`;

  const modalContent = modal.querySelector(`.${CLASSES.modalContent}`);

  modalContent.innerHTML = '';

  modalContent.classList.add(CLASSES.loading);
  modalContent.insertAdjacentHTML('afterbegin', videoTemplate);
}

function closeModal(modal) {
  if (!modal) return;

  if (modal.id === IDs.modalVideo) {
    modal.querySelector(`.${CLASSES.modalContent}`).innerHTML = '';
  }

  modal.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);
  DOM.overlay.classList.remove(CLASSES.active);
}

function controlModal() {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.dataset.modalTarget);
      const { id } = modal;

      if (!modal) return;

      if (id === IDs.modalVideo) {
        openModalVideo(modal, button.dataset.src);
      } else {
        openModal(modal);
      }
    });
  });

  DOM.overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(
      `.${CLASSES.modal}.${CLASSES.active}`
    );

    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest(`.${CLASSES.modal}`);
      closeModal(modal);
    });
  });
}

export default controlModal;
export { closeModal };
