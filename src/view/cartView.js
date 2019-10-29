import { CONSTANTS } from "../js/constants";
import { CART_SELECTOR } from "../js/base";

const mainMarkup = `
  <div class="cart__content">
    <div class="cart__content--header">
        <h3>${CONSTANTS.CART.MAIN_HEADING}</h3>
        <span class="close">&times;</span>     
    </div>
    <div id="cart__modal__content">
    </div>
  </div>`;

const cartMarkup = `  
    <main class="cart__content--body"> 
      <div class="cart__product">
        <ul class="cart__product__list">              
        </ul>
        <div class="tagline">
          <img src="../../../static/images/lowest-price.png" />
          <span>${CONSTANTS.CART.TAGLINE_TEXT}</span>
        </div>
      </div>    
    </main>    
    <div class="cart__content--footer">
      <p>${CONSTANTS.CART.FOOTER_PROMO}</p>      
    </div>   
    `;

const cartListView = value => {
  const markup = `
    <li class="cart__product__list--item cart-${value.id}">          
      <img src="../../..${value.imageURL}" />
      <div class="cart__detail">
        <h3>${value.name}</h3>
        <div class="desc">
          <button class="btn cart-minus" id=${value.id}>&#8722;</button>
          <span class="items">${value.quantity}</span>
          <button class="btn cart-plus" id=${value.id}>&#43;</button>
          <span class="multiplication">&#215;</span>
          <span class="price"> ${CONSTANTS.RS} ${value.price}</span>
          <span class="total"> ${CONSTANTS.RS} ${value.quantity *
    value.price}</span>
        </div>              
      </div>           
    <li>`;
  CART_SELECTOR.cartList[0].insertAdjacentHTML("beforeend", markup);
};

const emptyCartMarkup = `  
    <main class="cart__content--body">
      <div class="cart__content--body__empty">
        <h3>${CONSTANTS.CART.EMPTY_HEADING}</h3>
        <p>${CONSTANTS.CART.EMPTY_CONTENT}</p>
      </div>
    </main>    
    <div class="cart__content--footer__empty">
      <a href="/" class="btn btn-lg">${CONSTANTS.CART.EMPTY_FOOTER_BTN}</a>
    </div>
  `;

const renderPrice = price => {
  const markup = ` 
  <a href="/" class="btn btn-lg">
    ${CONSTANTS.CART.FOOTER_BTN}   
    <span>${CONSTANTS.RS}${price}&nbsp;&nbsp;&nbsp;></span>     
  </a>`;
  const footer = document.getElementsByClassName("cart__content--footer")[0];
  footer.insertAdjacentHTML("beforeend", markup);
};

// render cart list(when cart is not empty)
const renderCartList = values => {
  values.forEach(cartListView);
};

//calculate total price
const calculateTotalPrice = (total, num) => {
  return total + num.price * num.quantity;
};

export const renderCart = cartList => {
  let isCartEmpty = cartList.data.length == 0 ? true : false;
  let markup = isCartEmpty ? emptyCartMarkup : cartMarkup;
  //render UI
  const cartContent = document.getElementById("cart__modal__content");
  cartContent.innerHTML = "";
  cartContent.insertAdjacentHTML("beforeend", markup);

  if (!isCartEmpty) {
    const totalPrice = cartList.data.reduce(calculateTotalPrice, 0);
    renderPrice(totalPrice);
    renderCartList(cartList.data);
  }
};

// render static data
export const renderStaticContent = () => {
  CART_SELECTOR.cartModal.innerHTML = "";
  CART_SELECTOR.cartModal.insertAdjacentHTML("beforeend", mainMarkup);
};
