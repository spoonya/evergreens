import FormValidation from './form-validation';

function validateFormCatalog() {
  const formValidation = new FormValidation('#form-catalog', true);

  formValidation.validateOnSubmit();
}

export default validateFormCatalog;
