import apiurls from "ApiUrls";
import axios from "axios";


export function getProductDetailsById(product_id,setData){
    console.log(product_id);
    axios.get(apiurls.products.products+product_id+"/").then((response)=>{
        console.log(response);
            if(setData!=null)
                setData(response.data);
    }).catch((err)=>{
        console.log(err);
    })
}