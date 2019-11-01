export const PRODUCT_SELECTOR = {
  productList: document.querySelector(".product__info__list"),
  productInfo: document.querySelectorAll(".product__sidebar__list--item"),
  categoryList: document.querySelector(".product__sidebar__list"),
  productCategoryItem: "product__sidebar__list--item",
  productCategoryItemClass: ".product__sidebar__list--item",
  productCategorySelector: ".product__sidebar__list--item button",
  highlightClass: "highlight",
  categoryDropdown: document.querySelector(".product__sidebar__sm select")
};
export const HOME_SELECTOR = {  
  homeCategoryList: document.querySelector(".category__items")
};
export const CAROUSEL_SELECTOR = {
  bannersList: document.querySelector(".carousel__prev"),
  bannersDotsList: document.querySelector(".carousel__dots"),
  carouselItem: document.getElementsByClassName("carousel__banner"),
  bannersDot: document.getElementsByClassName("carousel__dots--dot")
};
export const AUTH_SELECTOR = {
  getPassword: document.getElementById("password"),
  confirmPassword: "confirmPassword",
  loginForm: "login__form",
  loginFormInputField: "#login__form .form__group input",
  RegistrationForm: "registration__form",
  RegistrationFormInputField: "#registration__form .form__group input",
  formErrorClass: "P.form__error",
  emailValidation: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  passwordValidation: /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i,
  email: "email",
  password: "password",
  submit: "submit"
};
export const CART_SELECTOR = {
  cartList: document.getElementsByClassName("cart__product__list"),
  cartModal: document.getElementById("cart__modal"),
  cart: document.getElementById("cart"),
  cartClose: "close",
  buyNow: "buy-now",
  cartPlus: "btn cart-plus",
  cartMinus: "btn cart-minus",
  cartItem: document.querySelector("#cart span")
};
export const GLOBAL = {
  bodySelector: document.querySelector("body")
};
