import apiUrls from "ApiUrls";
import axios from "axios"


export default function login(e, setCookies, removeCookies, history, loginData) {
 e.preventDefault();
  backendAPI
  .post("/accounts/auth/", loginData)
    .then((response) => {
        console.log(response);
      removeCookies("token");
      setCookies("token", `Token ${response.data.token}`);
        history.replace("/");
    })
    .catch((err) => {
      alert("Invaild creditianls");
    });
}




