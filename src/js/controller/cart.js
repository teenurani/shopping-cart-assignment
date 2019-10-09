import { getCarts, addToCarts } from "../model/Cart";
import * as cartView from "../view/cartView";
import { CONSTANS } from "../constants";
import { elements } from "../base";

const state = {};

export const controlCart = async () => {
  // Search for the Banners
  try {
    state.cartList = await getCarts();
    console.log("state.cartList ", state.cartList);
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.BANNERS, err);
  }
  // render result on UI
  cartView.renderCart(state.cartList);
};

document.addEventListener("click", function(el) {
  if (el.target && el.target.className == elements.cartPlus) {
    addToCarts(el.target.id);
  } else if (el.target && el.target.className == elements.cartMinus) {
    //todo remove item from cart
  }
});
