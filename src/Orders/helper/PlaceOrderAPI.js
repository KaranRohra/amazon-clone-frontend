import axios from "axios";
import apiUrls from "ApiUrls";

export function placeOrder(e, cookies, id, history) {
  var bodyFormData = new FormData();
  bodyFormData.append("address", id);

  e.preventDefault();

  axios({
    method: "POST",
    url: apiUrls.orders["place-order"],
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      history.push("/confirm");
    })
    .catch((err) => {});
}
