import { END_POINTS } from "./config";

async function getRequest(req) {
  return fetch(req).then(response => response.json());
}

const getBanner = () => {
  return getRequest(END_POINTS.BANNER);
};

const getCategories = () => {
  return getRequest(END_POINTS.CATEGORIES);
};

const getProductList = () => {
  return getRequest(END_POINTS.PRODUCTS);
};

export { getBanner, getCategories, getProductList };
