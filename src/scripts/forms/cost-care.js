import FormValidation from './form-validation';

function validateFormCostCare() {
  const formValidation = new FormValidation('#form-cost-care');

  formValidation.validateOnSubmit();
}

export default validateFormCostCare;
