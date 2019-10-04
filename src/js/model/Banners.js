import { getResults } from "../api";
import { CONSTANS } from "../constants";

export const getBanners = async () => {
  try {
    const results = await getResults(CONSTANS.END_POINTS.BANNERS);
    return results;
  } catch (err) {
    console.log(CONSTANS.errorMsg.bannersList, err);
  }
};
