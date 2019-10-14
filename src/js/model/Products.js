import { getResults } from "../api";
import { CONSTANS } from "../constants";
import { END_POINTS } from "../service";

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
      console.log(CONSTANS.errorMsg.productList, error);
    }
  }
}
