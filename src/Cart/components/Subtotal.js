import React from 'react'
import "Styles/Subtotal.css"


function Subtotal({data}) {
  
  function total() {
    let sum = 0;
    data.map((item)=>{
      sum+=item.price;
    })
    return sum;
  }
    return (
      <div className="subtotal">
        <p>Subtotal({data.length} items):Rs {total()}</p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          The order contains gift
        </small>
        <button>Proceed to Checkout</button>
      </div>
    );
}

export default Subtotal
