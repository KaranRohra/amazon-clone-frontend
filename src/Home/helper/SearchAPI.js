import axios from 'axios';
import apiUrls from 'ApiUrls';


export function getSearchedProducts(text,setData,history){
    console.log(text);
    axios.get(apiUrls.products.search+text).then((response)=>{
        setData(response.data);
        console.log(response);
    }).catch((err)=>{
        history.push("/")
    })
}