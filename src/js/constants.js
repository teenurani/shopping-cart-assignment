const url = "http://localhost:3000";

export const CONSTANS = {
  END_POINTS: {
    BANNERS: url + "/api/getBanners",
    CATEGORIES: url + "/api/getCategories",
    PRODUCTS: url + "/api/getProductList",
    ADDTOCART: url + "/api/addToCart",
    CARTS: url + "/api/getCartList",
    REMOVETOCART: url + "api/removeToCart"
  },
  ERROR_MSG: {
    BANNERS: "Error in processing banners list ",
    CATEGORIES: "Error in processing category list ",
    PRODUCTS: "Error in processing product list ",
    ADDTOCART: "Error in processing add to cart or buy now ",
    CARTS: "Error in processing cart list "
  },
  CURRENT_URL: {
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
  cart: {
    main_heading: "My Cart",
    empty_heading: "No items in your cart",
    empty_content: "Your favourite items are just a click away",
    empty_footer_btn: "Start Shopping",
    tagline_text: "You won't find it cheaper anywhere",
    footer_btn: "Proceed to Checkout",
    footer_promo: "Promo code can be applied on payment page"
  }
};
