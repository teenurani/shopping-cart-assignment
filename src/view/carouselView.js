import { CAROUSEL_SELECTOR } from "../js/base";

//render c
const bannersView = banner => {
  const markup = `
  <div class="carousel__banner">
    <img src=${banner.bannerImageUrl} alt=${banner.bannerImageAlt} style="width:100%"/>
  </div>`;
  CAROUSEL_SELECTOR.bannersList.insertAdjacentHTML("beforebegin", markup);
};

const dotViews = dot => {
  const markup = `
  <span class="carousel__dots--dot" onclick="window.carousel.currentSlide(${dot})" onkeyup="window.carousel.currentSlide(${dot})" 
    tabindex="0"></span>`;
  CAROUSEL_SELECTOR.bannersDotsList.insertAdjacentHTML("beforeend", markup);
};

export const renderBanners = banners => {
  banners.forEach(bannersView);
};

export const renderDots = dots => {
  dots.forEach(dotViews);
};
