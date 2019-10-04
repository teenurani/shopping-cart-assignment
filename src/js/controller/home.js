import { getCategories } from "../model/Category";
import { getBanners } from "../model/Banners";
import * as homeView from "../view/homeView";
import { CONSTANS } from "../constants";

const state = {};

const controlBanners = async () => {
  // Search for the Banners
  try {
    state.bannersList = await getBanners();
  } catch (err) {
    console.log(CONSTANS.errorMsg.bannersList, err);
  }
  // render result on UI
  homeView.renderBanners(state.bannersList);
};

const controlCategories = async () => {
  // Search for the Categories
  try {
    state.categoryList = await getCategories();
  } catch (err) {
    console.log(CONSTANS.errorMsg.categoryList, err);
  }
  // render result on UI
  homeView.renderCategories(state.categoryList);
};

const controlDots = () => {
  const bannersLen = state.bannersList.length;
  state.dotArray = [...Array(bannersLen).keys()];
  // render result on UI
  homeView.renderDots(state.dotArray);
};

controlBanners();
controlCategories();

setTimeout(function() {
  controlDots();
}, 100);
