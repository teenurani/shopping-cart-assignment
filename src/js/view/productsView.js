import { PRODUCT_SELECTOR } from "../base";
import { CONSTANTS } from "../constants";

const productsView = product => {
  const markup = `
  <li class="product__info__list--item">
    <h3 tabindex="0"> ${product.name}</h3>
    <img src=${product.imageURL} alt="name" tabindex="0" />
    <p tabindex="0"> ${product.description} </p>
    <div class="price__info">
      <span tabindex="0">${CONSTANTS.MRP} ${CONSTANTS.RS} ${product.price}</span>
      <button class="btn buy-now" name="${product.id}" tabindex="0">${CONSTANTS.BUY}</button>
    </div>
    <div class="price__info--IPad">    
      <button class="btn btn-lg buy-now" name="${product.id}" tabindex="0">${CONSTANTS.BUY} @ ${CONSTANTS.RS} ${product.price}</button>
    </div>
  </li>`;

  PRODUCT_SELECTOR.productList.insertAdjacentHTML("beforeend", markup);
};

const categoriesView = category => {
  const markup = `
  <li class="product__sidebar__list--item">
    <button id="${category.id}" tabindex="0">${category.name}</button>
  </li>`;
  PRODUCT_SELECTOR.categoryList.insertAdjacentHTML("beforeend", markup);
};

const categoriesDropdownView = category => {
  const markup = `<option value="${category.id}" tabindex="0"> ${category.name} </option>`;
  PRODUCT_SELECTOR.categoryDropdown.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = products => {
  PRODUCT_SELECTOR.categoryList.innerHTML = "";
  products.forEach(categoriesView);
  products.forEach(categoriesDropdownView);
};

export const renderProducts = products => {
  PRODUCT_SELECTOR.productList.innerHTML = "";
  products.forEach(productsView);
};
