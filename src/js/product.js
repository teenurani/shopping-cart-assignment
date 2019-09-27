import { getProductList } from "./api";

function renderProductList(categoryId) {
  getProductList().then(res => {
    let products = res.filter((val, index) => val.category == categoryId);
    console.log(`product data ${products}`);
    createHTML(products);
  });
}

function createHTML(products) {
  let conentBlock = "";
  products.forEach(e => {
    conentBlock += `<li class="product__info__list--item">
    <h3>
        ${e.name}
    </h3>
    <img src=${e.imageURL} alt="name" />
    <p>
        ${e.description}
    </p>
    <div class="price__info">
        <span>MRP Rs ${e.price}</span>
        <a href="">Buy Now</a>
    </div>
</li>`
  });

  var template = document.getElementsByClassName("product__info__list")[0];
  template.innerHTML = conentBlock;
}

renderProductList("5b6899953d1a866534f516e2");
