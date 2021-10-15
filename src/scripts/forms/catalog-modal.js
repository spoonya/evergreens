import FormValidation from './form-validation';

function validateFormCatalogModal() {
  const formValidation = new FormValidation('#form-catalog-modal', true);

  formValidation.validateOnSubmit();
}

export default validateFormCatalogModal;
