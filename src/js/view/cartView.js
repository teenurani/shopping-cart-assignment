import { CONSTANS } from "../constants";

const markup = `
  <div class="cart__content">
    <div class="cart__content--header">
        <h3>${CONSTANS.cart.main_heading}</h3>
        <span class="close">&times;</span>     
    </div>
    <main class="cart__content--body"> 
      <div class="cart__product">
        <ul class="cart__product__list">
          <li class="cart__product__list--item">

          <li>
        </ul>
        <div class="tagline">
          <img src="../../../static/images/lowest-price.png" />
          <span>${CONSTANS.cart.tagline_text}</span>
        </div>
      </div>    
      <div class="cart__content--body__empty">
        <h3>${CONSTANS.cart.empty_heading}</h3>
        <p>${CONSTANS.cart.empty_content}</p>
      </div>
    </main>
    <div class="cart__content--footer">
      <a href="/product" class="btn btn-lg">${CONSTANS.cart.empty_btn}</a>
    </footer>
  </div>
`;

document.getElementById("cart__modal").insertAdjacentHTML("beforeend", markup);
