import axios from 'axios';
import apiUrls from 'ApiUrls';

export default function getProductCount(search, setTotal){
    console.log(search);
    axios.get(apiUrls.products.product_count+search).then((response) => {
        setTotal(response.data["number_of_products"]);
    }).catch((err) => {
    })
}