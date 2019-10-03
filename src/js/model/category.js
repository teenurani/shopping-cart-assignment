import { END_POINTS } from "../config";
import { getResults } from "../api";

export const getCategories = async () => {
  try {
    const results = await getResults(END_POINTS.CATEGORIES);
    return results
      .filter((item, index) => item.enabled == true)
      .sort((a, b) => (a.order < b.order ? 0 : 1));
  } catch (err) {
    console.log("Error processing categoriesList list", err);
  }
};
