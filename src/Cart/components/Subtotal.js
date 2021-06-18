import React from 'react'
import "Styles/Subtotal.css"


function Subtotal() {
    return (
      <div className="subtotal">
        <p>Subtotal(1 items):Rs 11.96</p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          The order contains gift
        </small>
        <button>Proceed to Checkout</button>
      </div>
    );
}

export default Subtotal
