import { getResults } from "../js/api";
import { CONSTANTS } from "../js/constants";
import { END_POINTS } from "../js/service";

export const getCategories = async () => {
  try {
    const results = await getResults(END_POINTS.CATEGORIES);
    return results
      .filter((item, index) => item.enabled == true)
      .sort((a, b) => (a.order < b.order ? 0 : 1));
  } catch (err) {
    console.log(CONSTANTS.errorMsg.categoryList, err);
  }
};
