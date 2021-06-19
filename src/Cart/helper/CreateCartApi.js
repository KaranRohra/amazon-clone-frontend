import apiUrls from "../../ApiUrls";
import axios from "axios";
export default function  createCart (response){
     axios({
   method: "GET",
   url: apiUrls["cart"]["create-cart"],
   headers: {
     Authorization: `Token ${response.data.token}`,
   },
 });
}
