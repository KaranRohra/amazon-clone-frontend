// const baseURL = "https://amazon-clone-bakend-api.herokuapp.com/";
const baseURL = "http://localhost:5000/";
const apiUrls = {
  accounts: {
    login: baseURL + "accounts/auth/", // accounts/auth/
    register: baseURL + "accounts/register/",
    logout: baseURL + "accounts/logout",
    "get-user": baseURL + "accounts/get-user/",
    "save-address": baseURL + "accounts/user/address/",
    "get-all-address": baseURL + "accounts/user/address/",
    "delete-address": baseURL + "accounts/user/address/",
    "get-address-by-id": baseURL + "accounts/user/address/",
  },
  cart: {
    "get-products": baseURL + "cart/get-products/",
    "add-product": baseURL + "cart/add-product/", // cart/add-product/2/
    "remove-product": baseURL + "cart/remove-product/", // cart/remove-product/2/
  },
  products: {
    "get-products-by-page": baseURL + "products/get-product-by-page-number/", // products/get-product-by-page-number/1/
    image: baseURL + "products/image/", // products/image/5/
    "get-all-produts": baseURL + "products/",
    products: baseURL + "products/", // products/1/
    search: baseURL + "products/page-number/", //search=""
    product_count: baseURL+"products/count/?search=" // /?search="mo"
  },
  orders: {
    "place-order": baseURL + "orders/",
    "get-orders": baseURL + "orders/",
    "get-order-by-id": baseURL + "orders/", // orders/id/
  },
};
export default apiUrls;
