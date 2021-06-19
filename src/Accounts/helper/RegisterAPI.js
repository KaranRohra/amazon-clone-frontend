import apiUrls from "../../ApiUrls";
import axios from "axios";
import login from "./LoginAPI";
import createCart from "Cart/helper/CreateCartApi";

export default function register(e, loginData, data, setCookies, removeCookies, history){
  const registerApi = apiUrls["accounts"]["register"];
  const auth = apiUrls["accounts"]["login"];
  console.log(registerApi);
 e.preventDefault();
  axios
   .post(registerApi, data)
   .then((response) => {
      removeCookies("token");
      login(e,setCookies,removeCookies,history,loginData)
      setCookies("token", response.data.token);
      createCart(response);
      history.replace("/");
       
    })
   .catch(function (err) {
     if (err.response && err.response.data.email) {
       alert(err.response.data.email);
     } else {
       alert("Account already exist");
     }
   });
}
