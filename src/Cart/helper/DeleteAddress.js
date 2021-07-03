import axios from "axios";
import apiUrls from "ApiUrls";

export default function deleteAddress(e, cookies, id, setDeleteaddress) {
  e.preventDefault();
  axios({
    method: "DELETE",
    url: apiUrls.accounts["delete-address"] + id,
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      setDeleteaddress([0]);
    })
    .catch((err) => {});
}
