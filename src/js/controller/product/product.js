import Products from "../../model/Products";
import * as productsView from "../../view/productsView";
import { PRODUCT_SELECTOR, CART_SELECTOR } from "../../base";
import { getCategories } from "../../model/Category";
import { addToCarts } from "../../model/Cart";
import { CONSTANTS } from "../../constants";

const state = {};

const controlProduct = async categoryId => {
  // get query from view
  const query = categoryId;
  //new product object and add to state
  state.products = new Products(query);

  // Search for the products
  try {
    await state.products.getProducts();
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.PRODUCTS, err);
  }
  // render result on UI
  productsView.renderProducts(state.products.results);
};

const controlCategories = async () => {
  // Search for the Categories
  try {
    state.categoryList = await getCategories();
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.CATEGORIES, err);
  }
  // render result on UI
  productsView.renderCategories(state.categoryList);
};

const addToCart = async productId => {
  // Update cart value on click of buy-now button
  try {
    const cart = await addToCarts(productId);
    // render result on UI
    CART_SELECTOR.cartItem.textContent = cart.cart + " items";
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.ADDTOCART, err);
  }
};

if (CONSTANTS.currentURL == CONSTANTS.PAGE_URL.PRODUCT) {
  controlCategories();
  controlProduct();

  document.addEventListener("click", function(el) {
    if (
      el.target &&
      el.target.className == PRODUCT_SELECTOR.productCategoryItem
    ) {
      //handel event on selection of category and render UI
      el.target.parentElement
        .querySelectorAll(PRODUCT_SELECTOR.productCategoryItemClass)
        .forEach(function(el) {
          el.classList.remove(PRODUCT_SELECTOR.highlightClass);
        });
      el.target.classList.add(PRODUCT_SELECTOR.highlightClass);
      controlProduct(el.target.id);
    } else if (el.target.classList.contains(CART_SELECTOR.buyNow)) {
      // handel event on buy-now button
      addToCart(el.target.name);
    } else if (
      el.target &&
      el.target.className ==
        PRODUCT_SELECTOR.productCategoryItem +
          " " +
          PRODUCT_SELECTOR.highlightClass
    ) {
      //handel event on unselect of category and render UI
      el.target.classList.remove(PRODUCT_SELECTOR.highlightClass);
      controlProduct();
    }
  });

  //Mobile view category handler
  PRODUCT_SELECTOR.categoryDropdown.addEventListener("change", function(e) {
    controlProduct(e.target.value);
  });
}
