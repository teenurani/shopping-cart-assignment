import { getResults, postData } from "../api";
import { CONSTANS } from "../constants";

export const getCarts = async () => {
  try {
    const results = await getResults(CONSTANS.END_POINTS.CARTS);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.CARTS, err);
  }
};

export const addToCarts = async productId => {
  let data = {
    url: CONSTANS.END_POINTS.ADDTOCART,
    body: {
      productId: productId
    }
  };
  try {
    const results = await postData(data);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.addToCarts, err);
  }
};