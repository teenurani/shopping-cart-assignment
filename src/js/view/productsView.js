import { elements } from "../base";

const productsView = product => {
  const markup = `<li class="product__info__list--item">
        <h3>
            ${product.name}
        </h3>
        <img src=${product.imageURL} alt="name" />
        <p>
            ${product.description}
        </p>
        <div class="price__info">
            <span>MRP Rs ${product.price}</span>
            <a href="">Buy Now</a>
        </div>
     </li>`;

  elements.productList.insertAdjacentHTML("beforeend", markup);
};

const categoriesView = category => {
  const markup = `<li class="product__sidebar__list--item" id="${category.id}"> ${category.name} </li>`;
  elements.categoryList.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = products => {
  elements.categoryList.innerHTML = "";
  products.forEach(categoriesView);
};

export const renderProducts = products => {
  elements.productList.innerHTML = "";
  products.forEach(productsView);
};
