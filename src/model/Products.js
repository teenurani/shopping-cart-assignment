import { getResults } from "../js/api";
import { CONSTANTS } from "../js/constants";
import { END_POINTS } from "../js/service";

//get product list as per categories or complete list
export default class Products {
  constructor(query) {
    this.query = query;
  }

  async getProducts() {
    try {
      const results = await getResults(END_POINTS.PRODUCTS);
      this.results = this.query
        ? results.filter((val, index) => val.category == this.query)
        : results;
    } catch (error) {
      console.log(CONSTANTS.errorMsg.productList, error);
    }
  }
}
