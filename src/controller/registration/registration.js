import { CONSTANTS } from "../../js/constants";
import { AUTH_SELECTOR } from "../../js/base";

const state = {};

//Create private variable
const form = document.getElementById(AUTH_SELECTOR.RegistrationForm);
const formInput = document.querySelectorAll(
  AUTH_SELECTOR.RegistrationFormInputField
);

/**
 * private method to register listener to submit the form
 * @param  {string} eventType Event name
 */
state.validate = eventType => {
  form.addEventListener(eventType, e => state.validateForm(e));
};

/**
 * method to validate the input filed
 * @param  {object} e reference of context
 */
state.validateForm = e => {
  e.preventDefault();
  let errorMsg = "";
  let count = 1;
  formInput.forEach(function(item) {
    if (item.value === "" || !item.value) {
      errorMsg = CONSTANTS.ERROR_MSG.EMPTY_ERROR_MSG;
      count = 0;
    } else {
      if (
        item.type === AUTH_SELECTOR.password &&
        (item.value.length < 6 ||
          !item.value.match(AUTH_SELECTOR.passwordValidation))
      ) {
        errorMsg = CONSTANTS.ERROR_MSG.PASSWORD_ERROR_MSG;
        count = 0;
      }
      if (
        item.id === AUTH_SELECTOR.confirmPassword &&
        item.value.localeCompare(AUTH_SELECTOR.getPassword.value)
      ) {
        errorMsg = CONSTANTS.ERROR_MSG.PASSWORD_MISMATCH;
        count = 0;
      }
      if (
        item.type === AUTH_SELECTOR.email &&
        !item.value.match(AUTH_SELECTOR.emailValidation)
      ) {
        errorMsg = CONSTANTS.ERROR_MSG.EMAIL_ERROR_MSG;
        count = 0;
      }
    }
    let msgElement = item.parentElement.querySelectorAll(
      AUTH_SELECTOR.formErrorClass
    )[0];
    msgElement.innerText = errorMsg;
    errorMsg = "";
  });
  if (count) {
    e.target.submit();
  }
};

// register listener to input fields
state.init = () => {
  state.validate(AUTH_SELECTOR.submit);
};

if (CONSTANTS.currentURL == CONSTANTS.PAGE_URL.REGISTER) {
  //initialize function
  state.init();
}
