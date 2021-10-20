import FormValidation from './form-validation';

function validateFormQuiz2() {
  const formValidation = new FormValidation('#form-quiz-2');

  formValidation.validateOnSubmit();
}

export default validateFormQuiz2;
