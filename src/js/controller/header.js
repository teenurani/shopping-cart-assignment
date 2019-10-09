import { elements } from "../base";
import { controlCart } from "./cart";

// Get the cartModal
const cartModal = elements.cartModal;

// Get the button that opens the cartModal
const cartBtn = elements.cart;

// Get the <span> element that closes the cartModal
const closeCartBtn = elements.cartClose[0];

// When the user clicks the button, open the cartModal
cartBtn.onclick = function() {
  cartModal.style.display = "block";
  controlCart();
};

// When the user clicks on <span> (x), close the cartModal
closeCartBtn.onclick = function() {
  cartModal.style.display = "none";
};

// When the user clicks anywhere outside of the cartModal, close it
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
};
