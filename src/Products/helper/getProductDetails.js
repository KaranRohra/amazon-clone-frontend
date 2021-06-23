import apiurls from "ApiUrls";
import axios from "axios";


export function getProductDetailsById(product_id,setData){
    console.log(product_id);
    axios.get(apiurls.products.products+product_id+"/").then((response)=>{
            setData(response.data);
            console.log(response);
    }).catch((err)=>{
        console.log(err);
    })
}