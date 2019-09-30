import { END_POINTS } from "../config";

export default class Products {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const URL = END_POINTS.PRODUCTS;
    try {
      const res = await fetch(URL);
      const results = await res.json();
      this.results = this.query
        ? results.filter((val, index) => val.category == this.query)
        : results;
    //   console.log("productList ", this.results);
    } catch (error) {
      console.log(error);
    }
  }
}
