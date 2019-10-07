import { elements } from "../base";

const bannersView = banner => {
  const markup = `
  <div class="carousel__item">
    <img src=${banner.bannerImageUrl} alt=${banner.bannerImageAlt} style="width:100%" />
  </div>`;
  elements.bannersList.insertAdjacentHTML("beforebegin", markup);
};

const categoriesView = category => {
  const markup = `
  <li class="category__item">
    <div class="category__item--img">
      <img src=${category.imageUrl} alt=${category.name} />
    </div>
    <div class="category__item--info">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a href="/product" class="btn">Explore ${category.key}</a>
    </div>
    <div class="border-block">
    <img src="/static/images/border.jpg" alt="border" />
      </div>
  </li>`;
  elements.homeCategoryList.insertAdjacentHTML("beforeend", markup);
};

const dotViews = dot => {
  const markup = `<span class="dot" onclick="window.carousel.currentSlide(${dot})"></span>`;
  elements.bannersDotsList.insertAdjacentHTML("beforeend", markup);
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
