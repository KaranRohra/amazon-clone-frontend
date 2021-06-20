import apiUrls from "../../ApiUrls";
import axios from "axios";


export default function register(e,  data, removeCookies, history){
  
  const registerApi = apiUrls["accounts"]["register"];
   e.preventDefault();
  axios
   .post(registerApi, data)
   .then((response) => {
      removeCookies("token");
      alert("Account created successfully \n Please login to your account")
      history.replace("/login");
       
    })
   .catch(function (err) {
     if (err.response && err.response.data.email) {
       alert(err.response.data.email);
     } else {
       alert("Account already exist");
     }
   });
}
