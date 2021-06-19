import React from 'react';
import 'Styles/Product.css';
import StarIcon from '@material-ui/icons/Star';


function Product({ id, title, image, price, rating}) {
    
    console.log("my image "+image);
    return (
        <div className="product">
            <div className="product__info">
                <p><strong>{title}</strong></p>
                <p className = "product__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
            </div>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
            <img className = "product__img" src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
