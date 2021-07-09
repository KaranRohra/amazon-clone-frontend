import React from "react";
import "../../Styles/Pay.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import getAddressById from "Cart/helper/getAddressById";
import { getAllProducts } from "Home/helper/ProductAPI";
import { getAllProductsOnCheckoutPage } from "Cart/helper/GetProductAPI";
import CheckoutProduct from "Cart/components/CheckoutProduct";
import { useHistory } from "react-router-dom";
import { placeOrder } from "Orders/helper/PlaceOrderAPI";

let Id = "";
function Payment() {
  const [addressById, setaddressById] = useState("");
  const [cookies, setCookies] = useCookies("");
  const [data, setData] = useState("");
  const [remove, setRemove] = useState("");
  const history = useHistory();

  function getId(url) {
    for (let i = url.length - 1; i >= 0; i--) {
      if (url.charAt(i) == "/") {
        for (let j = i + 1; j <= url.length - 1; j++) {
          Id += url.charAt(j);
        }
        break;
      }
    }
    return Id;
  }
  useEffect(() => {
    let url = window.location.href;
    let id = getId(url);

    getAddressById(cookies, id, setaddressById);
    Id = "";
    getAllProductsOnCheckoutPage(cookies, setData);
  }, []);

  return (
    <div className="pro">
      <h1>Review your Order</h1>
      <div className="pay">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Shipping address</strong> <a href="/add">Change</a>
              </td>
            </tr>
            <tr>
              <td>
              <strong>{addressById && addressById.name + ", "}</strong>
              </td>
            </tr>
            <tr>
              <td>
                {addressById && addressById.address_line + ", "}
                <br />
                {addressById && addressById.city}
                {addressById && " - " + addressById.pincode}
              </td>
            </tr>
            <tr>
              <td>{addressById && addressById.land_mark + ", "}</td>
            </tr>
            <td>
              {addressById && addressById.state}
              <br />
              {addressById && addressById.country}
            </td>

            <tr>
              <td>PhoneNo:{addressById && addressById.phone_number_1}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="checkout__title ">Your Orders</h2>
        <div>
          {data &&
            data.map((item) => (
              <CheckoutProduct
                id={item.id}
                name={item.name}
                image={item.images[0]["image_url"]}
                price={item.price}
                id={item.id}
                setRemove={setRemove}
                present={false}
                bsURL={true}
              />
            ))}
        </div>
      </div>
      <div>
        <button
          className="confirm_order_btn"
          onClick={(e) => {
            addressById && placeOrder(e, cookies, addressById.id, history);
          }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Payment;
