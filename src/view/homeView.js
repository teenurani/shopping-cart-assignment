import { HOME_SELECTOR, CAROUSEL_SELECTOR } from "../js/base";

//render c
const bannersView = banner => {
  const markup = `
  <div class="carousel__banner">
    <img src=${banner.bannerImageUrl} alt=${banner.bannerImageAlt} style="width:100%"/>
  </div>`;
  CAROUSEL_SELECTOR.bannersList.insertAdjacentHTML("beforebegin", markup);
};

const categoriesViewEven = category => {
  const markup = `
  <li class="category__item">    
    <div class="category__item--info">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a href="/product" class="link">Explore ${category.key}</a>
    </div>
    <div class="category__item--img">
      <img src=${category.imageUrl} alt=${category.name} />
    </div>
    <div class="border-block">
      <img src="/static/images/border.jpg" alt="border" />
    </div>
  </li>`;
  HOME_SELECTOR.homeCategoryList.insertAdjacentHTML("beforeend", markup);
};

const categoriesViewOdd = category => {
  const markup = `
  <li class="category__item">
    <div class="category__item--img">
      <img src=${category.imageUrl} alt=${category.name} />
    </div>
    <div class="category__item--info">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a href="/product" class="link">Explore ${category.key}</a>
    </div>
    <div class="border-block">
      <img src="/static/images/border.jpg" alt="border" />
    </div>
  </li>`;
  HOME_SELECTOR.homeCategoryList.insertAdjacentHTML("beforeend", markup);
};

const dotViews = dot => {
  const markup = `
  <span class="carousel__dots--dot" onclick="window.carousel.currentSlide(${dot})" onkeyup="window.carousel.currentSlide(${dot})" 
    tabindex="0"></span>`;
  CAROUSEL_SELECTOR.bannersDotsList.insertAdjacentHTML("beforeend", markup);
};

export const renderCategories = categories => {
  categories.forEach(function(category, index) {
    index % 2 === 0
      ? categoriesViewOdd(category)
      : categoriesViewEven(category);
  });
};

export const renderBanners = banners => {
  banners.forEach(bannersView);
};

export const renderDots = dots => {
  dots.forEach(dotViews);
};
