import { CONSTANS } from "../constants";
import { elements } from "../base";

const cartMarkup = `
  <div class="cart__content">
    <div class="cart__content--header">
        <h3>${CONSTANS.cart.main_heading}</h3>
        <span class="close">&times;</span>     
    </div>
    <main class="cart__content--body"> 
      <div class="cart__product">
        <ul class="cart__product__list">              
        </ul>
        <div class="tagline">
          <img src="../../../static/images/lowest-price.png" />
          <span>${CONSTANS.cart.tagline_text}</span>
        </div>
      </div>    
    </main>    
    <div class="cart__content--footer">
      <p>${CONSTANS.cart.footer_promo}</p>      
    </div>    
  </div>
`;

const cartListView = value => {
  const markup = `
    <li class="cart__product__list--item">          
      <img src="../../..${value.imageURL}" />
      <div class="cart__detail">
        <h3>${value.name}</h3>
        <div class="desc">
          <button class="btn cart-minus" id=${value.id}>&#8722;</button>
          <span class="items">${value.quantity}</span>
          <button class="btn cart-plus" id=${value.id}>&#43;</button>
          <span class="multiplication">&#215;</span>
          <span class="price"> ${CONSTANS.RS} ${value.price}</span>
          <span class="total"> ${CONSTANS.RS} ${value.quantity *
    value.price}</span>
        </div>              
      </div>           
    <li>`;
  elements.cartList[0].insertAdjacentHTML("beforeend", markup);
};

const emptyCartMarkup = `
  <div class="cart__content">
    <div class="cart__content--header">
        <h3>${CONSTANS.cart.main_heading}</h3>
        <span class="close">&times;</span>     
    </div>
    <main class="cart__content--body">
      <div class="cart__content--body__empty">
        <h3>${CONSTANS.cart.empty_heading}</h3>
        <p>${CONSTANS.cart.empty_content}</p>
      </div>
    </main>    
    <div class="cart__content--footer__empty">
      <a href="/product" class="btn btn-lg">${CONSTANS.cart.empty_footer_btn}</a>
    </div>
  </div>`;

const renderPrice = price => {
  const markup = ` 
  <a href="/product" class="btn btn-lg">
    ${CONSTANS.cart.footer_btn}   
    <span> ${CONSTANS.RS} ${price}&nbsp;&nbsp;&nbsp; ></span>     
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
  elements.cartModal.innerHTML = "";
  elements.cartModal.insertAdjacentHTML("beforeend", markup);
  if (!isCartEmpty) {
    const totalPrice = cartList.data.reduce(calculateTotalPrice, 0);
    renderPrice(totalPrice);
    renderCartList(cartList.data);
  }
};
