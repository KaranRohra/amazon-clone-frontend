import axios from "axios";
import apiUrls from "ApiUrls";

export default function getOrders(cookies, setData) {
  axios({
    method: "GET",
    url: apiUrls.orders["get-orders"],
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {});
}
