import apiurls from "ApiUrls";
import axios from "axios";

export function getProductDetailsById(product_id, setData) {
  axios
    .get(apiurls.products.products + product_id + "/")
    .then((response) => {
      if (setData != null) setData(response.data);
    })
    .catch((err) => {});
}
