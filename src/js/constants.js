export const CONSTANS = {
  currentURL: window.location.pathname,
  ERROR_MSG: {
    BANNERS: "Error in processing banners list ",
    CATEGORIES: "Error in processing category list ",
    PRODUCTS: "Error in processing product list ",
    ADDTOCART: "Error in processing add to cart or buy now ",
    REMOVEFROMCART: "Error in processing remove from cart ",
    CARTS: "Error in processing cart list ",
    CARTITEMS: "Error in processing cart Items "
  },
  PAGE_URL: {
    LOGIN: "/login",
    REGISTER: "/registration",
    HOME: "/",
    PRODUCT: "/product"
  },
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
  PASSWORD_MISSMATCH: "Mismatch password!",
  EMAIL: "email",
  PASSWORD: "password",
  SUBMIT: "submit",
  BUY: "Buy Now",
  MRP: "MRP",
  RS: "Rs ",
  CART: {
    MAIN_HEADING: "My Cart",
    EMPTY_HEADING: "No items in your cart",
    EMPTY_CONTENT: "Your favourite items are just a click away",
    EMPTY_FOOTER_BTN: "Start Shopping",
    TAGLINE_TEXT: "You won't find it cheaper anywhere",
    FOOTER_BTN: "Proceed to Checkout",
    FOOTER_PROMO: "Promo code can be applied on payment page"
  }
};
