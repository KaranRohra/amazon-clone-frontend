import React from "react";
import "Styles/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";

function DisplayProducts({ id, name, image, price }) {
  const history = useHistory();

  const productDetails = (product_id) => {
    history.push("/detail/" + product_id);
  };
  return (
    <div className="jcbhj">
      <div className="checkoutProduct">
        <img
          className="checkoutProduct__image"
          onClick={() => {
            productDetails(id);
          }}
          src={image}
          alt=""
        />
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
