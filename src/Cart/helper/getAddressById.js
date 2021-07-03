import axios from "axios";
import apiUrls from "ApiUrls";

export default function getAddressById(cookies, id, setaddressbyId) {
  axios({
    method: "GET",
    url: apiUrls.accounts["get-address-by-id"] + id,
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      setaddressbyId(response.data);
    })
    .catch((err) => {});
}
