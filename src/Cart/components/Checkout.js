import React from 'react'
import "Styles/Checkout.css"
import Subtotal from "Cart/components/Subtotal"
import CheckoutProduct from "Cart/components/CheckoutProduct"


function Checkout() {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h3>Hello user</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <CheckoutProduct />
          </div>
        </div>

        <div className="checkout__right">
          <h2>The subtotal will go here</h2>
          <Subtotal />
        </div>
      </div>
    );
}

export default Checkout;
