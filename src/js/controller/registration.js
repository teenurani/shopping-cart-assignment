import { CONSTANS } from "../constants";
import { elements } from "../base";

const state = {};

//Create private variable
const form = document.getElementById(CONSTANS.REGISTRATION__FORM);
const formInput = document.querySelectorAll(
  CONSTANS.REGISTRATION_FORM_INPUT_FIELD
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
      errorMsg = CONSTANS.EMPTY_ERROR_MSG;
      count = 0;
    } else {
      if (
        item.type === CONSTANS.PASSWORD &&
        (item.value.length < 6 ||
          !item.value.match(CONSTANS.PASSWORD_VALIDATION))
      ) {
        errorMsg = CONSTANS.PASSWORD_ERROR_MSG;
        count = 0;
      }
      if (
        item.id === elements.confirmPassword &&
        item.value.localeCompare(elements.getPassword.value)
      ) {
        errorMsg = CONSTANS.PASSWORD_MISSMATCH;
        count = 0;
      }
      if (
        item.type === CONSTANS.EMAIL &&
        !item.value.match(CONSTANS.EMAIL_VALIDATION)
      ) {
        errorMsg = CONSTANS.EMAIL_ERROR_MSG;
        count = 0;
      }
    }
    let msgElement = item.parentElement.querySelectorAll(
      CONSTANS.FORM_ERROR_CLASS
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
  state.validate(CONSTANS.SUBMIT);
};

if (elements.currentURL == CONSTANS.CURRENT_URL.REGISTER) {
  //initialize function
  state.init();
}
