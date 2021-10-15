import FormValidation from './form-validation';

function validateFormCostCommercial() {
  const formValidation = new FormValidation('#form-cost-commercial');

  formValidation.validateOnSubmit();
}

export default validateFormCostCommercial;
