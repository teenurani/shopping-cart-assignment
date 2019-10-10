import { elements } from "../base";
import { controlCart } from "./cart";
import { getCartItems } from "../model/Cart";
import { CONSTANS } from "../constants";

// Get the cartModal
const cartModal = elements.cartModal;

// Get the button that opens the cartModal
const cartBtn = elements.cart;

// When the user clicks the button, open the cartModal
cartBtn.onclick = function() {
  cartModal.style.display = "block";
  controlCart();
};

const cartItems = async () => {
  // Search for the no of items in cart
  try {
    const cart = await getCartItems();
    elements.cartItem.textContent = cart + " items";
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.CARTITEMS, err);
  }
};

cartItems();