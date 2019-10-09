import Prducts from "../model/Products";
import * as productsView from "../view/productsView";
import { elements } from "../base";
import { getCategories } from "../model/Category";
import { addToCarts } from "../model/Cart";
import { CONSTANS } from "../constants";

const state = {};

const controlProduct = async categoryId => {
  // get query from view
  const query = categoryId;
  //new product object and add to state
  state.products = new Prducts(query);

  // Search for the products
  try {
    await state.products.getProducts();
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.PRODUCTS, err);
  }
  // render result on UI
  productsView.renderProducts(state.products.results);
};

const controlCategories = async () => {
  // Search for the Categories
  try {
    state.categoryList = await getCategories();
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.CATEGORIES, err);
  }
  // render result on UI
  productsView.renderCategories(state.categoryList);
};

const addToCart = async productId => {
  // Search for the Categories
  try {
    const cart = await addToCarts(productId);
    elements.cartItem.textContent = cart.cart + " items";
  } catch (err) {
    console.log(CONSTANS.ERROR_MSG.ADDTOCART, err);
  }
};

if (elements.currentURL == CONSTANS.CURRENT_URL.PRODUCT) {
  controlCategories();
  controlProduct();

  document.addEventListener("click", function(el) {
    if (el.target && el.target.className == elements.productCategoryItem) {
      el.target.parentElement
        .querySelectorAll(elements.productCategoryItemClass)
        .forEach(function(el) {
          el.classList.remove(elements.hightlightClass);
        });
      el.target.classList.add(elements.hightlightClass);
      controlProduct(el.target.id);
    }
    if (el.target && el.target.className == elements.buyNow) {
      addToCart(el.target.id);
    }
  });
}
