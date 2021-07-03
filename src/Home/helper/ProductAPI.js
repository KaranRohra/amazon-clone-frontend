import apiUrls from "ApiUrls";
import axios from "axios";

export function getAllProducts(setData) {
  axios.get(apiUrls.products["search"] + "1/").then((response) => {
    setData(response.data);
  });
}
