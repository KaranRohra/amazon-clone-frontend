import apiUrls from "ApiUrls"
import axios from "axios";


export function deleteFromCart(e,cookies,id,setRemove){
    e.preventDefault();
    axios({
    method:"GET",
    url:apiUrls.cart["remove-product"]+id+"/",
    headers:{
        Authorization: cookies.token
    },
}).then((response)=>{
   setRemove([0]);
}).catch((err)=>{
    console.log(err);
})
}

