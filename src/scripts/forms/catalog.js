import FormValidation from './form-validation';

function validateFormCatalog() {
  const formValidation = new FormValidation('#form-catalog');

  formValidation.validateOnSubmit();
}

export default validateFormCatalog;
