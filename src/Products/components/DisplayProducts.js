import React from "react";
import "Styles/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";

function DisplayProducts({ id, name, image, price }) {
  console.log(id + name);
  return (
    // <div className="checkoutProduct">
    //   <img className="checkoutProduct__image" src={image} alt="" />
    //   <div className="checkoutProduct__info">
    //     <p className="checkoutProduct__title">{name}</p>
    //     <p className="checkoutProduct__price">
    //       <small>&#8377;</small>
    //       <strong>{price}</strong>
    //     </p>
    //     <div className="checkoutProduct__rating">
    //       <p>
    //         <StarIcon />
    //       </p>
    //     </div>
    //   </div>
    <div className="jcbhj">
        <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
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
          {/* <button onClick={(e)=>{deleteFromCart(e,cookies,id,setRemove)}}>Remove from Basket</button> */}
        </div>
      </div>
    </div>
    
  );
}

export default DisplayProducts;
