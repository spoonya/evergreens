import FormValidation from './form-validation';

function validateFormBiologist() {
  const formValidation = new FormValidation('#form-biologist');

  formValidation.validateOnSubmit();
}

export default validateFormBiologist;
