import { getResults } from "../api";
import { CONSTANTS } from "../constants";
import { END_POINTS } from "../service";

export const getBanners = async () => {
  try {
    const results = await getResults(END_POINTS.BANNERS);
    return results;
  } catch (err) {
    console.log(CONSTANTS.errorMsg.bannersList, err);
  }
};
