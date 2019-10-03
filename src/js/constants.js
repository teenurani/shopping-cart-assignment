export const CONSTANS = {
  LOGIN__FORM: "login__form",
  LOGIN_FORM_INPUT_FIELD: "#login__form .form__group input",
  REGISTRATION__FORM: "registration__form",
  REGISTRATION_FORM_INPUT_FIELD: "#registration__form .form__group input",
  FORM_ERROR_CLASS: "P.form__error",
  EMAIL_VALIDATION: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  PASSWORD_VALIDATION: /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i,
  PASSWORD_ERROR_MSG:
    "Password Field should be number and alphabet and minimum lenght 7!",
  EMAIL_ERROR_MSG: "Invalid Email Address",
  EMPTY_ERROR_MSG: "Fields should not be empty!",
  PASSWORD_MISSMATCH: "Mismatch password!"
};
