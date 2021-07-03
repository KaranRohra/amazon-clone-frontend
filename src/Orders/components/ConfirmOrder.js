import React from 'react'
import "Styles/ConfirmOrder.css"
import { useHistory } from 'react-router';
export default function ConfirmOrder() {
  const history = useHistory();
    return (
      <div className="order__body">
        <div className="order__div">
          <img
            className="order__img"
            src="../../images/Deco.png"
            alt=""
            width="150"
            height="150"
          />

          <h1 className="order__h">Your Order is complete!</h1>
          <p className="order__p">
            You will be receiving a confirmation email with order details.
          </p>
          <button className="order__button" onClick={()=>{history.push("/")}}>Go To Home Page</button>
        </div>
      </div>
    );
}
