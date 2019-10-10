import { getCarts, addToCarts, removeFromCarts } from "../model/Cart";
import * as cartView from "../view/cartView";
import { CONSTANS } from "../constants";
import { elements } from "../base";

const state = {};

export const controlCart = async () => {
  // Search for the Banners
  try {
    state.cartList = await getCarts();
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.BANNERS, err);
  }
  // render result on UI
  cartView.renderCart(state.cartList);
};

const addToCart = async productId => {
  // add item to cart
  try {
    const cart = await addToCarts(productId);
    // render result on UI
    elements.cartItem.textContent = cart.cart + " items";
    // cartView.renderCart(cart.data);
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.ADDTOCART, err);
  }
};

const removeFromCart = async productId => {
  // remove item from cart
  try {
    const cart = await removeFromCarts(productId);
    // render result on UI
    elements.cartItem.textContent = cart.cart + " items";
    // cartView.renderCart(cart.data);
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.REMOVEFROMCART, err);
  }
};

document.addEventListener("click", function(el) {
  const cartModal = elements.cartModal;
  if (el.target && el.target.className == elements.cartPlus) {
    //update quantity
    el.target.previousElementSibling.textContent =
      +el.target.previousElementSibling.textContent + 1;

    //update price
    el.target.parentElement.children[5].textContent =
      "Rs " +
      +el.target.previousElementSibling.textContent *
        el.target.parentElement.children[4].textContent.split(" ")[3];

    addToCart(el.target.id);
  } else if (el.target && el.target.className == elements.cartMinus) {
    // remove li if quantity is 0 
    if (el.target.nextElementSibling.textContent == 1)
      el.target.parentElement.parentElement.parentElement.style.display = "none";
    //update quantity
    el.target.nextElementSibling.textContent =
      el.target.nextElementSibling.textContent - 1;

    //update price
    el.target.parentElement.children[5].textContent =
      "Rs " +
      +el.target.nextElementSibling.textContent *
        el.target.parentElement.children[4].textContent.split(" ")[3];

    removeFromCart(el.target.id);
  } else if (
    el.target &&
    (el.target.className == elements.cartClose || event.target == cartModal)
  ) {
    cartModal.style.display = "none";
  }
});
