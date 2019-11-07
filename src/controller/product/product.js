import Products from "../../model/Products";
import * as productsView from "../../view/productsView";
import { PRODUCT_SELECTOR, CART_SELECTOR } from "../../js/base";
import { getCategories } from "../../model/Category";
import { addToCarts } from "../../model/Cart";
import { CONSTANTS } from "../../js/constants";

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
    const cartInfo = await addToCarts(productId);
    // render result on UI
    CART_SELECTOR.cartItem.textContent = cartInfo.itemCount + " items";
  } catch (err) {
    console.log(CONSTANTS.ERROR_MSG.ADD_TO_CART, err);
  }
};

if (CONSTANTS.currentURL == CONSTANTS.PAGE_URL.PRODUCT) {
  controlCategories();
  controlProduct();

  document.addEventListener("click", function(el) {
    const _self = el.target;
    if (_self) {
      if (
        _self.parentElement.parentElement.classList.contains(
          PRODUCT_SELECTOR.categoryListClass
        )
      ) {
        if (_self.classList.contains(PRODUCT_SELECTOR.highlightClass)) {
          //handel event on unselect of category and render UI
          _self.classList.remove(PRODUCT_SELECTOR.highlightClass);
          controlProduct();
        } else {
          //handel event on selection of category and render UI
          _self.parentElement.parentElement
            .querySelectorAll(PRODUCT_SELECTOR.categoryLinkSelector)
            .forEach(function(el) {
              el.classList.remove(PRODUCT_SELECTOR.highlightClass);
            });
          _self.classList.add(PRODUCT_SELECTOR.highlightClass);         
          controlProduct(_self.getAttribute("category"));
        }
      } else if (_self.classList.contains(CART_SELECTOR.buyNow)) {
        // handel event on buy-now button
        addToCart(_self.name);
      }
    }
  });

  //Mobile view category handler
  PRODUCT_SELECTOR.categoryDropdown.addEventListener("change", function(e) {
    controlProduct(e.target.value);
  });
}
