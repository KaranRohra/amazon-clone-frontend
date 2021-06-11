import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from "@material-ui/icons/Star";
function CheckoutProduct() {
 function removefromBasket(){

 };
    return (
      <div className="checkoutProduct">
        <img
          className="checkoutProduct__image"
          src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          alt=""
        />
        <div className="chekoutProduct__info">
          <p className="checkoutProduct__title">
            The Lean Startup: How Constant Innovation Creates Radically
            Successful Businesses Paperback
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>11.96</strong>
          </p>
          <div className="checkoutProduct__rating">
            <p>
              <StarIcon />
            </p>
          </div>
          <button onClick="{removeFromBasket}">Remove from Basket</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
