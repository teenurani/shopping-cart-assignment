import { getProductList } from "./api";

var myTemplate = require('../../views/temp.hbs');

function renderProductList(categoryId) {
  getProductList().then(res => {
    let products = res.filter((val, index) => val.category == categoryId);
    console.log(`product data ${products}`)
    createHTML(products);
  });
}

function createHTML(products) {
  console.log(`product data createHTML ${products}`)
  let productContainer = document.getElementById("productlistcontainer");
  productContainer.innerHTML = myTemplate(11)
}

renderProductList("5b6899953d1a866534f516e2");

