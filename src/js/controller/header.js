import { CART_SELECTOR } from "../base";
import { controlCart } from "./cart";
import { getCartItems } from "../model/Cart";
import { CONSTANTS } from "../constants";
import * as cartView from "../view/cartView";

// Get the cartModal
const cartModal = CART_SELECTOR.cartModal;

// Get the button that opens the cartModal
const cartBtn = CART_SELECTOR.cart;

// When the user clicks the button, open the cartModal
cartBtn.onclick = function() {
  cartModal.style.display = "block";
  cartView.renderStaticContent();
  controlCart();
};

const cartItems = async () => {
  // Search for the no of items in cart
  try {
    const cart = await getCartItems();
    CART_SELECTOR.cartItem.textContent = cart + " items";
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.CART_ITEMS, err);
  }
};

cartItems();
