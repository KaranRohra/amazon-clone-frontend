import apiUrls from "ApiUrls";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
export function addToCart(cookies, id, history) {
  axios({
    method: "GET",
    url: `${apiUrls.cart["add-product"]}${id}/`,
    headers: {
      Authorization: cookies.token,
    },
  })
    .then((response) => {
        toast('Added to cart!');
    })
    .catch((err) => {});
}
