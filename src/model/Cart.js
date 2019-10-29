import { getResults, postData } from "../js/api";
import { CONSTANTS } from "../js/constants";
import { END_POINTS } from "../js/service";

export const getCartItems = async () => {
  try {
    const results = await getResults(END_POINTS.CART_ITEMS);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.CART_ITEMS, err);
  }
};

export const getCarts = async () => {
  try {
    const results = await getResults(END_POINTS.CARTS);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.CARTS, err);
  }
};

export const addToCarts = async productId => {
  let data = {
    url: END_POINTS.ADD_TO_CART,
    body: {
      productId: productId
    }
  };
  try {
    const results = await postData(data);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.ADD_TO_CART, err);
  }
};

export const removeFromCarts = async productId => {
  let data = {
    url: END_POINTS.REMOVE_FROM_CART,
    body: {
      productId: productId
    }
  };
  try {
    const results = await postData(data);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.REMOVE_FROM_CART, err);
  }
};
