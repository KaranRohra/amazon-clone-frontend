import apiUrls from "ApiUrls";
import axios from "axios";


export function addToCart(cookies,id,history) {
    axios({
        method: "GET",
        url: `${apiUrls.cart["add-product"]}${id}/`,
        headers: {
            Authorization: cookies.token,
        }
    }).then((response)=>{
        history.replace("/");
    }).catch((err)=>{
    })
}