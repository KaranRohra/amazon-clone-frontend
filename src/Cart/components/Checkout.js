import React,{useState,useEffect} from 'react'
import "Styles/Checkout.css"
import Subtotal from "Cart/components/Subtotal"
import CheckoutProduct from "Cart/components/CheckoutProduct"
import apiUrls from 'ApiUrls';
import { getAllProductsOnCheckoutPage } from "Cart/helper/GetProductAPI";
import {useCookies} from "react-cookie";


function Checkout() {
  const url = apiUrls.cart['remove-products'];
  const [cookies,setCookies,removeCookies] =useCookies("");
  const [data,setData] = useState(null);
  const [remove, setRemove] = useState("");
   useEffect(()=>{
     getAllProductsOnCheckoutPage(cookies,setData);
  },["http://localhost:3000/checkout",remove])
    
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {data &&
              data.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  name={item.name}
                  image={item.images[0]["image_url"]}
                  price={item.price}
                  id = {item.id}
                  setRemove = {setRemove}
                />
              ))}
          </div>
        </div>
        <div className="checkout__right">
          <h2>The subtotal will go here</h2>
          {data && <Subtotal 
           data={data} />
           }
        </div>
      </div>
    );
}

export default Checkout;
