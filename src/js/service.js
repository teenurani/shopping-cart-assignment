const url = process.env.BASE_DOMAIN;

export const END_POINTS = {
  BANNERS: url + "/api/getBanners",
  CATEGORIES: url + "/api/getCategories",
  PRODUCTS: url + "/api/getProductList",
  ADD_TO_CART: url + "/api/addToCart",
  CARTS: url + "/api/getCartList",
  REMOVE_FROM_CART: url + "/api/removeFromCart",
  CART_ITEMS: url + "/api/cartItems"
};
