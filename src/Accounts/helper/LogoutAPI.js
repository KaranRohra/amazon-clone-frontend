import backendAPI from "../../axios";


export function handleLogout(cookies, history, setEmail, removeCookies) {
    backendAPI({
        method: "GET",
        url: "/accounts/logout/",
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