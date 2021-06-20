import apiUrls from "ApiUrls";
import axios from "axios";


let allProducts;
export function getAllProducts(setAllProducts,cookies) {
    axios({
        method: "GET",
        url: apiUrls.cart["get-products"],
        headers: {
            Authorization: cookies.token
        }
    }).then((response) => {
        setAllProducts([response.data.length]);
        allProducts = response.data.length;
    })
    return allProducts;
}