import apiUrls from "ApiUrls";
import axios from "axios";


export function getUser(cookies,setEmail){
    axios({
        method: "GET",
        url: apiUrls.accounts["get-user"],
        headers: {
          Authorization: `${cookies.token}`,
        },
      }).then((response) => {
        setEmail(response.data.email);
      })
      .catch((err) => {
      })
}