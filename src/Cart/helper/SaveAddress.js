import axios from "axios";
import apiUrls from "ApiUrls";

export default function saveAddress(e, cookies, data, history) {
  e.preventDefault();
  axios({
    method: "POST",
    url: apiUrls.accounts["save-address"],
    headers: {
      Authorization: cookies.token,
    },
    data: data,
  })
    .then((response) => {
      history.push("/pay/" + response.data.id);
    })
    .catch((err) => {});
}
