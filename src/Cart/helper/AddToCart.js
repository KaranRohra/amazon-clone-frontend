import backendAPI from "../../axios";

export function addToCart(cookies,id,history) {
    backendAPI({
        method: "GET",
        url: "/cart/add-product/"+id,
        headers: {
            Authorization: `${cookies.token}`,
        }
    }).then((response)=>{
        console.log(response);
        history.replace("/");
        // window.location.reload(false);
    }).catch((err)=>{
        console.log(err);
    })
}