import axios from "axios";
import apiUrls from "ApiUrls";

export function getSearchedProducts(text, setData, history, pg_no) {
  axios
    .get(apiUrls.products.search + pg_no + "/?search=" + text)
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      history.push("/");
    });
}
