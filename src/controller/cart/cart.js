import { getCarts, addToCarts, removeFromCarts } from "../../model/Cart";
import * as cartView from "../../view/cartView";
import { CONSTANTS } from "../../js/constants";
import { CART_SELECTOR, GLOBAL } from "../../js/base";

const state = {};

export const controlCart = async () => {
  // Search for the Banners
  try {
    state.cartList = await getCarts();
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.BANNERS, err);
  }
  // render result on UI
  cartView.renderCart(state.cartList);
};

const addToCart = async productId => {
  // add item to cart
  try {
    const cartInfo = await addToCarts(productId);
    // render result on UI
    CART_SELECTOR.cartItem.textContent = cartInfo.itemCount + " items";
    //render cart UI
    cartView.renderCart(cartInfo.data);
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.ADD_TO_CART, err);
  }
};

const removeFromCart = async productId => {
  // remove item from cart
  try {
    const cartInfo = await removeFromCarts(productId);
    // render result on UI
    CART_SELECTOR.cartItem.textContent = cartInfo.itemCount + " items";
    //render cart UI
    cartView.renderCart(cartInfo.data);
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.REMOVE_FROM_CART, err);
  }
};

document.addEventListener("click", function(el) {
  const cartModal = CART_SELECTOR.cartModal;
  if (el.target && el.target.className == CART_SELECTOR.cartPlus) {
    // add item to cart
    addToCart(el.target.getAttribute("product"));
  } else if (el.target && el.target.className == CART_SELECTOR.cartMinus) {
    // remove item from cart
    removeFromCart(el.target.getAttribute("product"));
  } else if (
    el.target &&
    (el.target.className == CART_SELECTOR.cartClose ||
      event.target == cartModal)
  ) {
    // Scenario of cart modal close
    GLOBAL.bodySelector.classList.remove("no-scroll");
    cartModal.style.display = "none";
  }
});

// control focus of cart modal
document.addEventListener("focusout", function(el) {
  if (el.target && el.target.classList.contains("cart-focus-control")) {
    document.querySelector(CART_SELECTOR.cartCloseBtn).focus();
  }
});
