import { CLASSES, DOM } from './constants';

function openModal(modal) {
  if (!modal) return;

  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
  DOM.overlay.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;

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
      openModal(modal);
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
