import apiUrls from "ApiUrls";
import axios from "axios";


export function handleLogout(cookies, history, setEmail, removeCookies) {
    axios({
        method: "GET",
        url: apiUrls.accounts.logout,
        headers: {
          Authorization: `${cookies.token}`,
        },
      }).then((response) => {
        removeCookies("token");
        setEmail(null);
        history.replace("/");
      })
      .catch((err) => {
      })
}