// Get the cartModal
var cartModal = document.querySelector("#cart__modal");

// Get the button that opens the cartModal
var cartBtn = document.getElementById("cart");

// Get the <span> element that closes the cartModal
var closeCartBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the cartModal 
cartBtn.onclick = function() {
  cartModal.style.display = "block";
}

// When the user clicks on <span> (x), close the cartModal
closeCartBtn.onclick = function() {
  cartModal.style.display = "none";
}

// When the user clicks anywhere outside of the cartModal, close it
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
}