import apiUrls from "ApiUrls";
import axios from "axios";


export function getAllProducts(setData) {
  axios.get(apiUrls.products["get-products-by-page"]+"0/").then((response) => {
    setData(response.data);
  });
}
