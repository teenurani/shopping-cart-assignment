import { getResults } from "../api";
import { CONSTANS } from "../constants";

export const getCategories = async () => {
  try {
    const results = await getResults(CONSTANS.END_POINTS.CATEGORIES);
    return results
      .filter((item, index) => item.enabled == true)
      .sort((a, b) => (a.order < b.order ? 0 : 1));
  } catch (err) {
    console.log(CONSTANS.errorMsg.categoryList, err);
  }
};
