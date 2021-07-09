import axios from "axios";
import apiUrls from "ApiUrls";

export default function saveAddress(e, cookies, data, history) {
  var bodyFormData = new FormData();
  for(let item in data){
      console.log(item+" "+data[item]);
      bodyFormData.append(item, data[item]);
  }
  e.preventDefault();
  axios({
    method: "POST",
    url: apiUrls.accounts["save-address"],
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: cookies.token,
    },
  })
    .then((response) => {
      history.push("/pay/" + response.data.id);
    })
    .catch((err) => {});
}
