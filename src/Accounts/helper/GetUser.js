import apiUrls from "ApiUrls";
import axios from "axios";


export function getUser(cookies,setEmail,setUid){
    axios({
        method: "GET",
        url: apiUrls.accounts["get-user"],
        headers: {
          Authorization: `${cookies.token}`,
        },
      }).then((response) => {
        console.log(response.data);
        if(setEmail!=null){
          setEmail(response.data.email);
        }
        else if(setUid !=null){
          setUid(response.data.id);
        }
        
      })
      .catch((err) => {
        console.log(err);
      })
}