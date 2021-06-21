import React from 'react'
import "Styles/CheckoutProduct.css"
import StarIcon from "@material-ui/icons/Star";
import { deleteFromCart } from 'Cart/helper/DeleteFromCart';
import {useCookies} from "react-cookie";
import baseURL from "backendApi";

function CheckoutProduct({price,name,image,id,setRemove}) {
  const[cookies] = useCookies("")
   //const url = "http://localhost:5000"
   console.log(baseURL);
    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={baseURL+ image} alt="" />
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
          <button onClick={(e)=>{deleteFromCart(e,cookies,id,setRemove)}}>Remove from Basket</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
