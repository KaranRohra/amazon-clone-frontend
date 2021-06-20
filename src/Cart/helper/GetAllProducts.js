import backendAPI from "../../axios";

let p;
export function getAllProducts(setAllProducts,cookies) {
    backendAPI({
        method: "GET",
        url: "cart/get-products/",
        headers: {
            Authorization: `${cookies.token}`
        }
    }).then((response) => {
        setAllProducts([response.data.length]);
        p = response.data.length;
    })
    return p;
}