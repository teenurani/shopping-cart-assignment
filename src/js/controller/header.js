import { elements } from "../base";
import { controlCart } from "./cart";

// Get the cartModal
const cartModal = elements.cartModal;

// Get the button that opens the cartModal
const cartBtn = elements.cart;

// When the user clicks the button, open the cartModal
cartBtn.onclick = function() {
  cartModal.style.display = "block";
  controlCart();
};
