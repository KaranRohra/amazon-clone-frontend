import apiUrls from "ApiUrls";
import axios from "axios";


export function getAllProductsOnCheckoutPage(cookies,setData){
    axios({
      method: "GET",
      url: apiUrls.cart["get-products"],
      headers: {
        Authorization: cookies.token,
      },
    }).then((response) => {
      setData(response.data);
      }).catch(err=>{
        console.log(err);
    })
    
}
