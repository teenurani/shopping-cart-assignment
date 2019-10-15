import { PRODUCT_SELECTOR } from "../base";
import { CONSTANS } from "../constants";

const productsView = product => {
  const markup = `
  <li class="product__info__list--item">
    <h3> ${product.name}</h3>
    <img src=${product.imageURL} alt="name" />
    <p> ${product.description} </p>
    <div class="price__info">
      <span>${CONSTANS.MRP} ${CONSTANS.RS} ${product.price}</span>
      <button class="btn buy-now" name="${product.id}" tabindex="0">${CONSTANS.BUY}</button>
    </div>
    <div class="price__info--ipad">    
      <button class="btn btn-lg buy-now" name="${product.id}" tabindex="0">${CONSTANS.BUY} @ ${CONSTANS.RS} ${product.price}</button>
    </div>
  </li>`;

  PRODUCT_SELECTOR.productList.insertAdjacentHTML("beforeend", markup);
};

const categoriesView = category => {
  const markup = `<li class="product__sidebar__list--item" id="${category.id}" tabindex="0">${category.name}</li>`;
  PRODUCT_SELECTOR.categoryList.insertAdjacentHTML("beforeend", markup);
};

const categoriesDroprownView = category => {
  const markup = `<option value="${category.id}"> ${category.name} </option>`;
  PRODUCT_SELECTOR.categoryDropdown.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = products => {
  PRODUCT_SELECTOR.categoryList.innerHTML = "";
  products.forEach(categoriesView);
  products.forEach(categoriesDroprownView);
};

export const renderProducts = products => {
  PRODUCT_SELECTOR.productList.innerHTML = "";
  products.forEach(productsView);
};
