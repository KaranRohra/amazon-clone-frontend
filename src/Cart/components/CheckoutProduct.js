import React from 'react'
import "Styles/CheckoutProduct.css"
import StarIcon from "@material-ui/icons/Star";
import { deleteFromCart } from 'Cart/helper/DeleteFromCart';
import {useCookies} from "react-cookie";
import baseURL from "backendApi";
import {useHistory} from "react-router-dom"

function CheckoutProduct({price,name,image,id,setRemove, present}) {
  const[cookies] = useCookies("");
  const  history = useHistory();
   const productDetails =(product_id)=>{
        history.push("/detail/"+product_id);
        
   }
    return (
      <div className="checkoutProduct">
        <img onClick ={(e)=>{productDetails(id)}} className="checkoutProduct__image" src={baseURL+ image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{name}</p>
          <p className="checkoutProduct__price">
            <small>&#8377;</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            <p>
              <StarIcon />
            </p>
          </div>
          {present && <button onClick={(e)=>{deleteFromCart(e,cookies,id,setRemove)}}>Remove from Basket</button>}
        </div>
      </div>
    );
}

export default CheckoutProduct
