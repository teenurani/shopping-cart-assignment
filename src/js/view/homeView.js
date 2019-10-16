import { HOME_SELECTOR, CAROUSEL_SELECTOR } from "../base";

const bannersView = banner => {
  const markup = `
  <div class="carousel__item">
    <img src=${banner.bannerImageUrl} alt=${banner.bannerImageAlt} style="width:100%"/>
  </div>`;
  HOME_SELECTOR.bannersList.insertAdjacentHTML("beforebegin", markup);
};

const categoriesView = category => {
  const markup = `
  <li class="category__item">
    <div class="category__item--img">
      <img src=${category.imageUrl} alt=${category.name} />
    </div>
    <div class="category__item--info">
      <h3 tabindex="0">${category.name}</h3>
      <p tabindex="0">${category.description}</p>
      <a href="/product" class="btn" tabindex="0">Explore ${category.key}</a>
    </div>
    <div class="border-block">
      <img src="/static/images/border.jpg" alt="border" />
    </div>
  </li>`;
  HOME_SELECTOR.homeCategoryList.insertAdjacentHTML("beforeend", markup);
};

const dotViews = dot => {
  const markup = `<span class="dot" onclick="window.carousel.currentSlide(${dot})"></span>`;
  CAROUSEL_SELECTOR.bannersDotsList.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = categories => {
  categories.forEach(categoriesView);
};

export const renderBanners = banners => {
  banners.forEach(bannersView);
};

export const renderDots = dots => {
  dots.forEach(dotViews);
};
