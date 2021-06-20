import backendAPI from '../../axios';

export function getUser(cookies,setEmail){
    backendAPI({
        method: "GET",
        url: "/accounts/get-user/",
        headers: {
          Authorization: `${cookies.token}`,
        },
      }).then((response) => {
        setEmail(response.data.email);
      })
      .catch((err) => {
      })
}