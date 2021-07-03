import React from 'react'
import "Styles/Subtotal.css"
import Address from './Address';
import {useHistory} from "react-router-dom"

function Subtotal({data}) {
  const history = useHistory();
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
       {total()!=0 && <button onClick={(e)=>history.push("/add")}>Proceed to Checkout</button>}
      </div>
    );
}

export default Subtotal
