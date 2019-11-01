import { getResults } from "../js/api";
import { CONSTANTS } from "../js/constants";
import { END_POINTS } from "../js/service";

//banners data
export const getBanners = async () => {
  try {
    const results = await getResults(END_POINTS.BANNERS);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.bannersList, err);
  }
};
