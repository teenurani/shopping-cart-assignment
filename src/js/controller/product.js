import Prducts from "../model/Products";
import * as productsView from "../view/productsView";
import { elements } from "../base";
import { getCategories } from "../model/category";

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
    console.log("Error processing product list");
  }
  // render result on UI
  productsView.renderProducts(state.products.results);
};

const controlCategories = async () => {
  // Search for the Categories
  try {
    state.categoryList = await getCategories();
  } catch (err) {
    console.log("Error processing product list");
  }
  // render result on UI
  productsView.renderCategories(state.categoryList);
};

controlCategories();
controlProduct();

document.addEventListener("click", function(el) {
  if (el.target && el.target.className == "product__sidebar__list--item") {
    el.target.parentElement
      .querySelectorAll(".product__sidebar__list--item")
      .forEach(function(el) {
        el.classList.remove("hightlight");
      });
    el.target.classList.add("hightlight");
    controlProduct(el.target.id);
  }
});
