import FormValidation from './form-validation';

function validateFormQuiz1() {
  const formValidation = new FormValidation('#form-quiz-1');

  formValidation.validateOnSubmit();
}

export default validateFormQuiz1;
