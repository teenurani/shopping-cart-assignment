import { elements } from "../base";

const renderProducts = product => {
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

export const renderResults = products => {
  elements.productList.innerHTML = "";
  products.forEach(renderProducts);
};
