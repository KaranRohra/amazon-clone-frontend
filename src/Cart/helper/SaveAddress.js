import axios from "axios";
import apiUrls from "ApiUrls";


export default  function saveAddress(e,cookies,data, history){
  e.preventDefault();
  console.log(data);
    axios({
      method: "POST",
      url: apiUrls.accounts["save-address"],
      headers: {
        Authorization: cookies.token,
      },
     data:data
    })
      .then((response) => {
         history.push("/pay/"+response.data.id);
        // console.log("hi");
         console.log(response);
      })
      .catch((err) => {
        console.log(err.response.body);
      });
}
