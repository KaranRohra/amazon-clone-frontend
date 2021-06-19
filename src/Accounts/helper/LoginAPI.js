import apiUrls from "../../ApiUrls";
import axios from "axios"
export default function login(e, setCookies, removeCookies, history, loginData) {
  const auth = apiUrls["accounts"]["login"];
  console.log(auth);
 e.preventDefault();
  axios
  
  .post(auth, loginData)
  
    .then((response) => {
      removeCookies("token");
      setCookies("token", `Token ${response.data.token}`);
        history.replace("/");
    })
    .catch((err) => {
        console.log(loginData);
      alert("Account does not exist or Invaild creditianls");
    });
}
