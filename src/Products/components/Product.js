import React from 'react';
import 'Styles/Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useCookies } from "react-cookie";
import {addToCart} from 'Cart/helper/AddToCart';
import { useHistory,Link } from "react-router-dom";


function Product({ id, title, image, price, rating}) {

    const [cookies, setCookies, removeCookies] = useCookies("");
    const history = useHistory();
    const productDetails =(product_id)=>{
        history.push("/detail/"+product_id);
      }
    return (
      <div className="product">
        <div className="product__info">
          <p>
            <strong>{title}</strong>
          </p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        
          <img className="product__img" src={image} onClick={(e)=>{productDetails(id)}} alt="" />
        
        <button onClick={() => addToCart(cookies, id, history)}>
          Add to Basket
        </button>
      </div>
    );
}

export default Product
