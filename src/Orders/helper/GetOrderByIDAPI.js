import axios from "axios";
import apiUrls from "ApiUrls";

export default function getOrderByID(id, cookies, setData) {
  axios({
    method: "GET",
    url: apiUrls.orders["get-order-by-id"] + id + "/",
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {});
}
