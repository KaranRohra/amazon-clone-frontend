import backendAPI from "axios";


export default function register(e, loginData, data, setCookies, removeCookies, history){
 e.preventDefault();

 backendAPI
   .post("/accounts/register/", data)
   .then((response) => {
     removeCookies("token");
     if (response.status === 201) {
       backendAPI.post("/accounts/auth/", loginData).then((response) => {
         if (response.status === 200) {
           setCookies("token", response.data.token);
           backendAPI({
             method: "GET",
             url: "/cart/create/",
             headers: {
               Authorization: `Token ${response.data.token}`,
             },
           });
           history.replace("/");
         }
       });
     }
   })
   .catch(function (err) {
     if (err.response && err.response.data.email) {
       alert(err.response.data.email);
     } else {
       alert("Account already exist");
     }
   });
}
