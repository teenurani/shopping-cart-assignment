const url = process.env.URL;

export const END_POINTS = {
  BANNERS: url + "/api/getBanners",
  CATEGORIES: url + "/api/getCategories",
  PRODUCTS: url + "/api/getProductList",
  ADDTOCART: url + "/api/addToCart",
  CARTS: url + "/api/getCartList",
  REMOVEFROMCART: url + "/api/removeFromCart",
  CARTITEMS: url + "/api/cartItems"
};
