import { CONSTANTS } from "../../constants";
import { AUTH_SELECTOR } from "../../base";

const state = {};

//Create private variable
const form = document.getElementById(CONSTANTS.REGISTRATION__FORM);
const formInput = document.querySelectorAll(
  CONSTANTS.REGISTRATION_FORM_INPUT_FIELD
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
      errorMsg = CONSTANTS.EMPTY_ERROR_MSG;
      count = 0;
    } else {
      if (
        item.type === CONSTANTS.PASSWORD &&
        (item.value.length < 6 ||
          !item.value.match(CONSTANTS.PASSWORD_VALIDATION))
      ) {
        errorMsg = CONSTANTS.PASSWORD_ERROR_MSG;
        count = 0;
      }
      if (
        item.id === AUTH_SELECTOR.confirmPassword &&
        item.value.localeCompare(AUTH_SELECTOR.getPassword.value)
      ) {
        errorMsg = CONSTANTS.PASSWORD_MISMATCH;
        count = 0;
      }
      if (
        item.type === CONSTANTS.EMAIL &&
        !item.value.match(CONSTANTS.EMAIL_VALIDATION)
      ) {
        errorMsg = CONSTANTS.EMAIL_ERROR_MSG;
        count = 0;
      }
    }
    let msgElement = item.parentElement.querySelectorAll(
      CONSTANTS.FORM_ERROR_CLASS
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
  state.validate(CONSTANTS.SUBMIT);
};

if (CONSTANTS.currentURL == CONSTANTS.PAGE_URL.REGISTER) {
  //initialize function
  state.init();
}
