import { getResults, postData } from "../api";
import { CONSTANS } from "../constants";
import { END_POINTS } from "../service";

export const getCartItems = async () => {
  try {
    const results = await getResults(END_POINTS.CARTITEMS);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.CARTITEMS, err);
  }
};

export const getCarts = async () => {
  try {
    const results = await getResults(END_POINTS.CARTS);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.CARTS, err);
  }
};

export const addToCarts = async productId => {
  let data = {
    url: END_POINTS.ADDTOCART,
    body: {
      productId: productId
    }
  };
  try {
    const results = await postData(data);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.ADDTOCART, err);
  }
};

export const removeFromCarts = async productId => {
  let data = {
    url: END_POINTS.REMOVEFROMCART,
    body: {
      productId: productId
    }
  };
  try {
    const results = await postData(data);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.REMOVEFROMCART, err);
  }
};
