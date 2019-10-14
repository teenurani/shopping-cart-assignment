export const PRODUCT_SELECTOR = {
  productList: document.querySelector(".product__info__list"),
  productInfo: document.querySelectorAll(".product__sidebar__list--item"),
  categoryList: document.querySelector(".product__sidebar__list"),
  productCategoryItem: "product__sidebar__list--item",
  productCategoryItemClass: ".product__sidebar__list--item",
  hightlightClass: "hightlight",
  categoryDropdown: document.querySelector(".product__sidebar__sm select")
};
export const HOME_SELECTOR = {
  bannersList: document.querySelector(".prev"),
  homeCategoryList: document.querySelector(".category__items")
};
export const CAROUSEL_SELECTOR = {
  bannersDotsList: document.querySelector(".dot-container"),
  carouselItem: document.getElementsByClassName("carousel__item"),
  bannersDot: document.getElementsByClassName("dot")
};
export const AUTH_SELECTOR = {
  getPassword: document.getElementById("password"),
  confirmPassword: "confirmPassword"
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
