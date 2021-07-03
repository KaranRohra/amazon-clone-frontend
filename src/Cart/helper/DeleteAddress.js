import axios from "axios";
import apiUrls from "ApiUrls";

export default function deleteAddress(e,cookies,id,setDeleteaddress){
    e.preventDefault();
    console.log(id);
        axios({
        method:"DELETE",
        url:apiUrls.accounts["delete-address"]+id,
        headers:{
            Authorization:cookies.token
        }

    }).then((response)=>{
        console.log(response);
        setDeleteaddress([0]);
    }).catch((err)=>{
        console.log(err);
    })
}
