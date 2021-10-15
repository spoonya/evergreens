import FormValidation from './form-validation';

function validateFormCostProduct() {
  const formValidation = new FormValidation('#form-cost-product');

  formValidation.validateOnSubmit();
}

export default validateFormCostProduct;
