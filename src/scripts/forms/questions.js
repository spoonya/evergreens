import FormValidation from './form-validation';

function validateFormQuestions() {
  const formValidation = new FormValidation('#form-questions');

  formValidation.validateOnSubmit();
}

export default validateFormQuestions;
