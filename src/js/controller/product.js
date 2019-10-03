import Prducts from "../model/Products";
import * as productsView from "../view/productsView";
import { elements } from "../base";

const state = {};

const controlProduct = async categoryId => {
  // get query from view
  const query = categoryId;
  //new product object and add to state
  state.products = new Prducts(query);

  // Search for the products
  try {
    await state.products.getResults();
  } catch (err) {
    console.log("Error processing product list");
  }
  // render result on UI
  productsView.renderResults(state.products.results);
};

elements.productInfo.forEach(function(el) {
  el.addEventListener("click", function() {
    elements.productInfo.forEach(function(el) {
      el.classList.remove("hightlight");
    });
    el.classList.add("hightlight");
    controlProduct(this.id);
  });
});

controlProduct();
