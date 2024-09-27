import { CART_SELECTOR, GLOBAL } from "../../js/base";
import { controlCart } from "../cart/cart";
import { getCartItems } from "../../model/Cart";
import { CONSTANTS } from "../../js/constants";
import * as cartView from "../../view/cartView";

// Get the button that opens the cartModal
const cartBtn = CART_SELECTOR.cart;

// When the user clicks the button, open the cartModal
cartBtn.onclick = function() {
  GLOBAL.bodySelector.classList.add("no-scroll");
  CART_SELECTOR.cartModal.style.display = "block";
  cartView.renderStaticContent();
  controlCart();
};

const cartItems = async () => {
  // Search for the no of items in cart
  try {
    const cart = await getCartItems();
    // update dom
    CART_SELECTOR.cartItem.textContent = cart + " items";
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.CART_ITEMS, err);
  }
};

cartItems();
