import FormValidation from './form-validation';

function validateFormCallbackModal() {
  const formValidation = new FormValidation('#form-modal-callback', {
    isModal: true
  });

  formValidation.validateOnSubmit();
}

export default validateFormCallbackModal;
