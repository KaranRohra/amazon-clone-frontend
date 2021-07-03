import axios from "axios";
import apiUrls from "ApiUrls";

export default function getAllAddress(cookies, setAllAddress) {
  axios({
    method: "GET",
    url: apiUrls.accounts["get-all-address"],
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      setAllAddress(response.data);
    })
    .catch((err) => {});
}
